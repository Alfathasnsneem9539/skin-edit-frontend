import cleanser from "../assets/products/cleanser.png";
import toner from "../assets/products/toner.png";
import serum from "../assets/products/serum.png";
import moisturizer from "../assets/products/moisturizer.png";
import sunscreen from "../assets/products/sunscreen.png";
import lipBalm from "../assets/products/lip-balm.png";

const products = [
  {
    id: 1,
    name: "Gentle Cloud Cleanser",
    category: "Cleanser",
    price: 499,
    image: cleanser,

    description:
      "A gentle everyday cleanser designed to remove dirt, excess oil, and daily impurities while leaving the skin feeling fresh and comfortable.",

    howToUse:
      "Apply to damp skin, gently massage in circular motions, and rinse thoroughly with water.",

    recommendedAmount: "1–2 pumps",

    ingredients:
      "Aqua, Glycerin, Cocamidopropyl Betaine, Sodium Hyaluronate, Panthenol",

    suitableFor:
      "Suitable for normal, combination, and oily skin.",

    routineStep: "Step 01 — Cleanse",
  },

  {
    id: 2,
    name: "Hydra Calm Toner",
    category: "Toner",
    price: 449,
    image: toner,

    description:
      "A lightweight hydrating toner created to refresh the skin and prepare it for the next steps of your skincare routine.",

    howToUse:
      "After cleansing, apply the toner to your face using clean hands or a cotton pad. Gently pat until absorbed.",

    recommendedAmount: "5–8 drops",

    ingredients:
      "Aqua, Glycerin, Panthenol, Sodium Hyaluronate, Allantoin",

    suitableFor:
      "Suitable for normal, dry, combination, and oily skin.",

    routineStep: "Step 02 — Tone",
  },

  {
    id: 3,
    name: "Vitamin C Glow Serum",
    category: "Serum",
    price: 699,
    image: serum,

    description:
      "A lightweight vitamin C serum designed to add a fresh-looking glow and support a more even-looking complexion.",

    howToUse:
      "Apply a few drops to clean, dry skin after toner. Gently spread across the face and allow it to absorb before moisturizing.",

    recommendedAmount: "2–3 drops",

    ingredients:
      "Aqua, Ascorbyl Glucoside, Glycerin, Propanediol, Vitamin E",

    suitableFor:
      "Suitable for normal, combination, and oily skin.",

    routineStep: "Step 03 — Treat",
  },

  {
    id: 4,
    name: "Daily Barrier Moisturizer",
    category: "Moisturizer",
    price: 599,
    image: moisturizer,

    description:
      "A comfortable daily moisturizer formulated to provide lasting hydration and help support the skin barrier.",

    howToUse:
      "Apply evenly to the face and neck after serum. Gently massage until fully absorbed.",

    recommendedAmount: "A pea-sized amount",

    ingredients:
      "Aqua, Glycerin, Squalane, Ceramide NP, Panthenol, Shea Butter",

    suitableFor:
      "Suitable for normal, dry, combination, and oily skin.",

    routineStep: "Step 04 — Moisturize",
  },

  {
    id: 5,
    name: "Daily Shield SPF 50",
    category: "Sunscreen",
    price: 649,
    image: sunscreen,

    description:
      "A lightweight daily sunscreen designed to provide broad-spectrum SPF 50 protection while feeling comfortable on the skin.",

    howToUse:
      "Apply generously as the final step of your morning skincare routine. Reapply regularly during prolonged outdoor exposure.",

    recommendedAmount: "About 2 finger lengths",

    ingredients:
      "Aqua, Zinc Oxide, Glycerin, Vitamin E, Panthenol",

    suitableFor:
      "Suitable for all skin types.",

    routineStep: "Step 05 — Protect",
  },

  {
    id: 6,
    name: "Berry Tint Lip Balm",
    category: "Lip Care",
    price: 299,
    image: lipBalm,

    description:
      "A nourishing lip balm with a soft berry tint designed to keep lips comfortable while adding a subtle touch of color.",

    howToUse:
      "Apply directly to clean lips whenever needed. Reapply throughout the day for continued comfort.",

    recommendedAmount: "1–2 swipes",

    ingredients:
      "Castor Oil, Shea Butter, Cocoa Butter, Vitamin E, Berry Tint",

    suitableFor:
      "Suitable for everyday lip care.",

    routineStep: "Daily — Lip Care",
  },
];

export default products;