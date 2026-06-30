// pages/api/generate-image.js
import { recipes } from '@/lib/recipes';
import fs from 'fs';
import path from 'path';

// Dette bruker Hugging Face sitt gratis API for bildegenerering
// Alternativt: Replicate, Stable Diffusion, eller andre tjenester

export default async function handler(req, res) {
  const { recipeId } = req.query;

  if (!recipeId) {
    return res.status(400).json({ error: 'recipeId mangler' });
  }

  const recipe = recipes.find(r => r.id === parseInt(recipeId));
  if (!recipe) {
    return res.status(404).json({ error: 'Oppskrift ikke funnet' });
  }

  try {
    // Alternativ 1: Hugging Face API (trenger HF_TOKEN)
    // Alternativ 2: Replicate API (trenger REPLICATE_API_TOKEN)
    // Alternativ 3: Lokalt genererte SVG-er (enkleste)

    // For MVP bruker vi SVG-fallback eller cached images
    // Real implementation ville bruke Replicate slik:

    const prompt = recipe.bildePrompt;
    
    // Placeholder: Return SVG eller cached URL
    return res.status(200).json({
      success: true,
      message: 'Bilde-URL eller SVG returneres her',
      recipe: recipe.tittel,
      prompt: prompt,
      imageUrl: `/images/recipes/${recipeId}.jpg` // Dette ville være cached bilde
    });

  } catch (error) {
    return res.status(500).json({ 
      error: 'Bildegenerering feilet', 
      details: error.message 
    });
  }
}

// Bruk denne scripten for batch-generering av alle bilder:
// node scripts/generate-all-images.js
