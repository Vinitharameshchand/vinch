export const content = {
  brand: {
    name: "VINCH",
    tagline: "Modern luxury for the ambitious woman.",
    philosophy: "VINCH was created for women building a life they want to grow into. Every piece is designed to feel timeless, effortless, and emotionally personal.",
  },
  hero: {
    tagline: "New Collection",
    headline: "Designed for the woman you’re becoming.",
    subtext: "Modern handbags crafted with quiet luxury, soft structure, and timeless intention.",
    image: "/images/hero.png",
    cta: [
      { text: "Explore Collection", link: "#collection" },
      { text: "Discover VINCH", link: "#philosophy" }
    ]
  },
  philosophy: {
    tagline: "Our Story",
    headline: "More than a brand. A way of being.",
    subtext: "VINCH was created for women building a life they want to grow into. Every piece is designed to feel timeless, effortless, and emotionally personal.",
    image: "/images/philosophy.png",
    linkText: "DISCOVER OUR WORLD"
  },
  collection: {
    tagline: "Our Signature Collection",
    headline: "Crafted to carry your presence.",
    products: [
      {
        id: 1,
        name: "Sculpt Tote",
        price: 1200,
        image: "/images/bag-sculpt.png",
        description: "A masterclass in soft structure and clean lines. The Sculpt Tote is designed for the woman who carries her ambition everywhere.",
        features: ["Premium Vegan Leather", "Spacious Interior", "Hidden Magnetic Closure"]
      },
      {
        id: 2,
        name: "Mini Shoulder Bag",
        price: 2400,
        image: "/images/bag-mini.png",
        description: "Elegant, minimalist, and perfectly proportioned. The Mini Shoulder Bag is your companion for evenings and light travel.",
        features: ["Half-Moon Silhouette", "Adjustable Strap", "Gold-Tone Hardware"]
      },
      {
        id: 3,
        name: "Convertible Crossbody",
        price: 1700,
        image: "/images/bag-crossbody.png",
        description: "Versatility meets luxury. This convertible piece transitions seamlessly from day to night, boardroom to bar.",
        features: ["Detachable Strap", "Interior Card Slots", "Reinforced Base"]
      }
    ]
  },
  experience: {
    tagline: "Product Experience",
    headline: "Thoughtful by design. Loved in every detail.",
    features: [
      {
        title: "Premium Vegan Leather",
        description: "Sourced for quality and crafted to last, with a soft-touch finish."
      },
      {
        title: "Lightweight Structure",
        description: "Comfort you can carry every day, without compromising on form."
      },
      {
        title: "Soft Interior",
        description: "Designed with soft lining and smart compartments for modern utility."
      },
      {
        title: "Timeless Silhouette",
        description: "Modern shapes that stay beautiful for years, beyond passing trends."
      }
    ],
    mainImage: "/images/bag-mini.png",
    secondaryImage: "/images/bag-sculpt.png"
  },
  social: {
    tagline: "Carried Differently",
    headline: "A community that inspires.",
    images: [
      { url: "/images/hero.png", type: "large" },
      { url: "/images/bag-sculpt.png", type: "small" },
      { url: "/images/philosophy.png", type: "medium" },
      { url: "/images/bag-mini.png", type: "small" },
      { url: "/images/bag-crossbody.png", type: "small" },
      { url: "/images/hero.png", type: "medium" }
    ]
  }
};
