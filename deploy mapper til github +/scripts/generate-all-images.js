#!/usr/bin/env node
// scripts/generate-all-images.js
// Kjør med: node scripts/generate-all-images.js

const fs = require('fs');
const path = require('path');
const axios = require('axios');
const recipes = require('../lib/recipes').recipes;

// Du må sette REPLICATE_API_TOKEN som environment variable
// eller bruke Hugging Face API

const REPLICATE_API_TOKEN = process.env.REPLICATE_API_TOKEN;
const HF_API_TOKEN = process.env.HF_API_TOKEN;

async function generateImageWithReplicate(prompt, recipeId) {
  try {
    // Stable Diffusion XL via Replicate (gratis for testing)
    const response = await axios.post(
      'https://api.replicate.com/v1/predictions',
      {
        version: 'c9e9ead0597c4d7f2b3d1d9c9d9c9d9c', // SDXL
        input: {
          prompt: prompt,
          negative_prompt: 'blurry, low quality, distorted',
          num_outputs: 1,
          num_inference_steps: 50,
          guidance_scale: 7.5,
          scheduler: 'DPMSolverMultistep'
        }
      },
      {
        headers: {
          'Authorization': `Token ${REPLICATE_API_TOKEN}`
        }
      }
    );

    // Poll for results
    let prediction = response.data;
    while (prediction.status === 'processing') {
      await new Promise(resolve => setTimeout(resolve, 1000));
      const checkResponse = await axios.get(
        `https://api.replicate.com/v1/predictions/${prediction.id}`,
        {
          headers: {
            'Authorization': `Token ${REPLICATE_API_TOKEN}`
          }
        }
      );
      prediction = checkResponse.data;
    }

    if (prediction.status === 'succeeded' && prediction.output) {
      return prediction.output[0]; // URL til generert bilde
    }
  } catch (error) {
    console.error(`Feil ved Replicate: ${error.message}`);
  }
  return null;
}

async function generateImageWithHuggingFace(prompt, recipeId) {
  try {
    // Stable Diffusion via Hugging Face
    const response = await axios.post(
      'https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-3-medium',
      { inputs: prompt },
      {
        headers: {
          'Authorization': `Bearer ${HF_API_TOKEN}`
        },
        responseType: 'arraybuffer'
      }
    );

    // Lagre bildet lokalt
    const imagesDir = path.join(__dirname, '../public/images/recipes');
    if (!fs.existsSync(imagesDir)) {
      fs.mkdirSync(imagesDir, { recursive: true });
    }

    const imagePath = path.join(imagesDir, `${recipeId}.jpg`);
    fs.writeFileSync(imagePath, response.data);
    
    return `/images/recipes/${recipeId}.jpg`;
  } catch (error) {
    console.error(`Feil ved Hugging Face: ${error.message}`);
  }
  return null;
}

async function generateAllImages() {
  console.log('🍳 Starter bildegenerering for alle oppskrifter...\n');

  if (!REPLICATE_API_TOKEN && !HF_API_TOKEN) {
    console.error('❌ FEIL: Sett REPLICATE_API_TOKEN eller HF_API_TOKEN environment variable');
    console.log('\nAlternativer:');
    console.log('1. Replicate: export REPLICATE_API_TOKEN=<token>');
    console.log('   https://replicate.com/account');
    console.log('\n2. Hugging Face: export HF_API_TOKEN=<token>');
    console.log('   https://huggingface.co/settings/tokens');
    process.exit(1);
  }

  for (const recipe of recipes) {
    console.log(`📸 Genererer: ${recipe.tittel}...`);
    
    let imageUrl;
    if (REPLICATE_API_TOKEN) {
      imageUrl = await generateImageWithReplicate(recipe.bildePrompt, recipe.id);
    } else {
      imageUrl = await generateImageWithHuggingFace(recipe.bildePrompt, recipe.id);
    }

    if (imageUrl) {
      console.log(`   ✅ Lagret: ${imageUrl}`);
    } else {
      console.log(`   ⚠️  Bildegenerering feilet`);
    }
  }

  console.log('\n✅ Bildegenerering fullført!');
}

// Kjør
generateAllImages().catch(console.error);
