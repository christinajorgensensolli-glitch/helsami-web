// lib/recipes.js - Alle oppskrifter med makroer og detaljer

export const recipes = [
  {
    id: 1,
    tittel: "Grillet laks med grønnsaker",
    beskrivelse: "Saftig laks grillet til perfeksjon med sesong grønnsaker og citronsmør",
    forberedelse: 10,
    tilberedning: 20,
    porsjoner: 2,
    kalori: 520,
    protein: 45,
    karbs: 28,
    fett: 18,
    bildePrompt: "grilled salmon fillet with lemon herbs and asparagus, restaurant quality, warm lighting, professional food photography",
    ingredienser: [
      "2 laksefileter à 180g",
      "2 ss smør",
      "2 sitron",
      "400g aspargeskudd",
      "200g kirsebærtomat",
      "Salt og pepper"
    ],
    instruksjoner: [
      "Varm grill til høy temperatur",
      "Smør laks med sitronjuice og salt",
      "Grill laks 4-5 min per side",
      "Grill grønnsaker samtidig",
      "Server varm med citronsmør"
    ],
    kategori: "Fisk",
    premiun: false
  },
  {
    id: 2,
    tittel: "Kyllinggryte med fløte",
    beskrivelse: "Myk og smakfull gryte med kylling, sopp og fløte - klassisk komfortkjeks",
    forberedelse: 15,
    tilberedning: 30,
    porsjoner: 4,
    kalori: 380,
    protein: 38,
    karbs: 22,
    fett: 14,
    bildePrompt: "creamy chicken mushroom stew in white bowl, rustic kitchen, warm cozy lighting, comfort food",
    ingredienser: [
      "600g kyllingfilet",
      "300g champinjong",
      "1 løk",
      "200ml fløte",
      "200ml kyllingbuljong",
      "2 ss olje",
      "Salt, pepper, timian"
    ],
    instruksjoner: [
      "Skjær kylling i biter, dybse i olje",
      "Tilsett løk og sopp",
      "Helles i buljong og fløte",
      "Simre 20 min på lavere varme",
      "Krydre og server med ris eller poteter"
    ],
    kategori: "Kylling",
    premiun: false
  },
  {
    id: 3,
    tittel: "Proteinpannekaker",
    beskrivelse: "Fluffete pannekaker med proteinpulver - perfekt frokost for muskelopbygging",
    forberedelse: 5,
    tilberedning: 15,
    porsjoner: 2,
    kalori: 340,
    protein: 32,
    karbs: 38,
    fett: 8,
    bildePrompt: "fluffy protein pancakes stack with berries honey drizzle, bright morning light, delicious looking breakfast",
    ingredienser: [
      "2 egg",
      "150ml melk",
      "100g proteinpulver (vanilj)",
      "100g hvetemel",
      "1 ts bakepulver",
      "Honning og bær"
    ],
    instruksjoner: [
      "Bland egg og melk",
      "Tilsett mel, protein og bakepulver",
      "La deigen hvile 5 min",
      "Stek pannekaker på medium varme",
      "Top med bær og honning"
    ],
    kategori: "Frokost",
    premiun: false
  },
  {
    id: 4,
    tittel: "Buddha Bowl - Supermat",
    beskrivelse: "Fargerik og næringsrik bolle med quinoa, rosting grønnsaker og tahini-dressing",
    forberedelse: 20,
    tilberedning: 25,
    porsjoner: 2,
    kalori: 450,
    protein: 16,
    karbs: 52,
    fett: 16,
    bildePrompt: "colorful buddha bowl with quinoa roasted vegetables chickpeas tahini sauce, instagram aesthetic, vibrant colors",
    ingredienser: [
      "200g quinoa",
      "200g kikerter",
      "1 søtpotet",
      "150g grønnkål",
      "1 avokado",
      "Tahini, sitron, haloumi"
    ],
    instruksjoner: [
      "Kok quinoa etter pakkeinstruks",
      "Rist grønnsaker på 200°C i 20 min",
      "Saml ingredienser i bolle",
      "Lag dressing: tahini, sitron, vann",
      "Trekk over og server lunken"
    ],
    kategori: "Vegetar",
    premiun: false
  },
  {
    id: 5,
    tittel: "Stekt torsk med hollandaise",
    beskrivelse: "Mørt torskekjøtt med klassisk hollandaise-saus og ferske grønnsaker",
    forberedelse: 10,
    tilberedning: 15,
    porsjoner: 2,
    kalori: 480,
    protein: 48,
    karbs: 12,
    fett: 22,
    bildePrompt: "pan-seared cod fillet with hollandaise sauce asparagus lemon, fine dining presentation, elegant plating",
    ingredienser: [
      "2 torskeklipp à 200g",
      "2 egg",
      "150g smør",
      "1 sitron",
      "300g aspargeskudd",
      "Salt og hvit pepper"
    ],
    instruksjoner: [
      "Lag hollandaise: visp egg over dampbad med smør",
      "Saltog pepper torsk",
      "Stek i panne 4-5 min per side",
      "Kook aspargeskudd på 3-4 min",
      "Plate og dryss med hollandaise"
    ],
    kategori: "Fisk",
    premiun: false
  },
  {
    id: 6,
    tittel: "Pulled Chicken Tacos",
    beskrivelse: "Mørt kylling jackafrø med coleslaw og spicy mayo - festival i munnen",
    forberedelse: 10,
    tilberedning: 45,
    porsjoner: 4,
    kalori: 420,
    protein: 35,
    karbs: 35,
    fett: 12,
    bildePrompt: "pulled chicken tacos with coleslaw lime cilantro, street food style, casual vibrant food photography",
    ingredienser: [
      "800g kyllingbryst",
      "200g coleslaw",
      "8 taco skjell",
      "100g rømme",
      "2 chili",
      "1 sitron, koriander"
    ],
    instruksjoner: [
      "Kok kylling mjuk i saltet vann (30 min)",
      "Riv kjøttet fint med to gafler",
      "Lag spicy mayo: rømme + chili + sitron",
      "Varme taco-skjell",
      "Fyll med kylling, coleslaw og mayo"
    ],
    kategori: "Kylling",
    premiun: true
  },
  {
    id: 7,
    tittel: "Vegansk omlett med grønnsaker",
    beskrivelse: "Silkemyk omlett laget med kikertermel - perfekt for plantebased liv",
    forberedelse: 10,
    tilberedning: 15,
    porsjoner: 1,
    kalori: 280,
    protein: 12,
    karbs: 28,
    fett: 12,
    bildePrompt: "fluffy chickpea flour omelet with vegetables fresh herbs, plant-based breakfast, bright healthy food",
    ingredienser: [
      "100g kikertermel",
      "200ml vann",
      "1/2 paprika",
      "1 tomat",
      "100g spinat",
      "2 ss olje, salt"
    ],
    instruksjoner: [
      "Bland kikertermel med vann til løs deig",
      "Tilsett finhakket paprika og tomat",
      "Helles i varm oljekokt panne",
      "Kook til fast (ca 8 min)",
      "Fold med spinat og server"
    ],
    kategori: "Vegetar",
    premiun: false
  },
  {
    id: 8,
    tittel: "Linsesuppe med grønnsaker",
    beskrivelse: "Varmende og proteinrik suppe fullt av røde linser og diverse grønnsaker",
    forberedelse: 15,
    tilberedning: 35,
    porsjoner: 4,
    kalori: 220,
    protein: 15,
    karbs: 32,
    fett: 4,
    bildePrompt: "hearty red lentil soup with vegetables in white bowl, rustic comfort food, steaming hot, cozy kitchen",
    ingredienser: [
      "200g røde linser",
      "1 løk",
      "2 gulrøtter",
      "200g tomat",
      "1 liter grønnsakbuljong",
      "Salt, pepper, kumin"
    ],
    instruksjoner: [
      "Hett olje og dybse løk og gulrot",
      "Tilsett linser og buljong",
      "Simre 25 min til linser er myk",
      "Tilsett tomat og krydder",
      "Simre ytterligere 10 min"
    ],
    kategori: "Vegetar",
    premiun: false
  },
  {
    id: 9,
    tittel: "Bærsmootie Bowl",
    beskrivelse: "Friskhet i en bolle - yoghurt, bær, granola og kokosflak",
    forberedelse: 5,
    tilberedning: 0,
    porsjoner: 1,
    kalori: 320,
    protein: 14,
    karbs: 42,
    fett: 9,
    bildePrompt: "smoothie bowl with mixed berries granola coconut flakes yogurt, tropical breakfast, flat lay photography",
    ingredienser: [
      "200g gresk yoghurt",
      "150g blandede bær",
      "50g granola",
      "2 ss kokosflak",
      "1 ss honning",
      "1/2 banan"
    ],
    instruksjoner: [
      "Puré bærer og yoghurt",
      "Hell i bolle",
      "Top med granola og kokosflak",
      "Skjær banan over",
      "Dryss honning og server kald"
    ],
    kategori: "Frokost",
    premiun: false
  },
  {
    id: 10,
    tittel: "Hjemmelagde kjøttkaker",
    beskrivelse: "Saftige kjøttkaker med ligningsaus - perfekt til middag eller matboks",
    forberedelse: 15,
    tilberedning: 25,
    porsjoner: 4,
    kalori: 380,
    protein: 32,
    karbs: 24,
    fett: 16,
    bildePrompt: "homemade meatballs with lingonberry sauce and mashed potato, scandinavian comfort food, warm cozy plating",
    ingredienser: [
      "500g kjøttdeig",
      "1 egg",
      "100g brødkrumlr",
      "100ml melk",
      "1 løk, finhakket",
      "200g ligningsaus",
      "Poteter"
    ],
    instruksjoner: [
      "Bland kjøttdeig, egg, brødkrumlr, melk og løk",
      "Form til baller",
      "Dybse i panne til gullbrun",
      "Server med ligningsaus",
      "Tilbehør: purere poteter og salat"
    ],
    kategori: "Kjøtt",
    premiun: false
  }
];

export const getRecipeById = (id) => recipes.find(r => r.id === id);
export const getRecipesByCategory = (kategori) => recipes.filter(r => r.kategori === kategori);
export const getPremiumRecipes = () => recipes.filter(r => r.premiun === true);
