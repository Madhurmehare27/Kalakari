export type Product = {
  id: number;
  name: string;
  price: number;
  tag: string;
  rating: number;
  reviews: number;
  delivery: string;
  customizable: string;
  description: string;
  sizes: string[];
  image: string;
  category: string;
};
export const products: Product[] = [
  {
    id: 1,
    name: "Personalized Keychain",
    price: 799,
    tag: "Best Seller",
    rating: 4.9,
    reviews: 128,
    delivery: "3–5 days",
    customizable: "Name & color",
    description:
      "A beautiful handmade personalized keychain crafted with care. Add your name or initials and choose your preferred color.",
    sizes: ["Standard"],
    image: "/key/IMG_2471.JPG.jpeg",
    category: "Keychains",
  },

  {
    id: 2,
    name: "Handmade Flower Creation",
    price: 999,
    tag: "Popular",
    rating: 4.8,
    reviews: 95,
    delivery: "3–5 days",
    customizable: "Flower & color",
    description:
      "A beautiful handmade floral creation crafted with care. Perfect for gifting, decorating, and special occasions.",
    sizes: ["Small", "Medium", "Large"],
    image: "/flowers/IMG_2472.JPG.jpeg",
    category: "Flowers",
  },

  {
    id: 3,
    name: "Handmade Hair Band",
    price: 599,
    tag: "Trending",
    rating: 4.7,
    reviews: 74,
    delivery: "2–4 days",
    customizable: "Color & design",
    description:
      "A stylish handmade hair band designed with beautiful details and comfortable materials. Perfect for everyday wear.",
    sizes: ["Standard"],
    image: "/hairband/IMG_2468.JPG.jpeg",
    category: "Hair Bands",
  },

  {
    id: 4,
    name: "Designer Hair Band",
    price: 499,
    tag: "New",
    rating: 4.6,
    reviews: 42,
    delivery: "2–4 days",
    customizable: "Color & design",
    description:
      "A beautifully designed handmade hair band that adds an elegant touch to any look.",
    sizes: ["Standard"],
    image: "/hairband/IMG_2468.JPG.jpeg",
    category: "Hair Bands",
  },

  {
    id: 5,
    name: "Handmade Bouquet",
    price: 1499,
    tag: "Premium",
    rating: 4.9,
    reviews: 61,
    delivery: "5–7 days",
    customizable: "Flower selection",
    description:
      "A premium handmade bouquet carefully crafted with beautiful flowers. A perfect choice for gifting and special occasions.",
    sizes: ["Small", "Medium", "Large"],
    image: "/Boquets/IMG_2461.JPG.jpeg",
    category: "Bouquet",
  },

  {
    id: 6,
    name: "Customized Keychain",
    price: 299,
    tag: "Hot",
    rating: 4.8,
    reviews: 210,
    delivery: "2–3 days",
    customizable: "Name & color",
    description:
      "A cute personalized keychain made especially for you. Add a name or initials and choose your favorite color.",
    sizes: ["Standard"],
    image: "/key/IMG_2473.JPG.jpeg",
    category: "Keychains",
  },

  {
    id: 7,
    name: "Premium Handmade Bouquet",
    price: 1299,
    tag: "Premium",
    rating: 4.9,
    reviews: 53,
    delivery: "5–7 days",
    customizable: "Colors & flowers",
    description:
      "An elegant premium handmade bouquet featuring carefully arranged flowers and beautiful decorative details.",
    sizes: ["Small", "Medium", "Large"],
    image: "/Boquets/IMG_2484.JPG.jpeg",
    category: "Bouquet",
  },

  {
    id: 8,
    name: "Decorative Handmade Bouquet",
    price: 849,
    tag: "Trending",
    rating: 4.7,
    reviews: 88,
    delivery: "4–6 days",
    customizable: "Flower selection",
    description:
      "A charming decorative handmade bouquet created to brighten your home or make a thoughtful gift.",
    sizes: ["Small", "Medium", "Large"],
    image: "/Boquets/IMG_2496.JPG.jpeg",
    category: "Bouquet",
  },

  {
    id: 9,
    name: "Pressed Flower Creation",
    price: 349,
    tag: "New",
    rating: 4.6,
    reviews: 39,
    delivery: "2–4 days",
    customizable: "Flower choice",
    description:
      "A delicate handmade creation featuring beautiful pressed flowers. A thoughtful and elegant gift for flower lovers.",
    sizes: ["Small", "Medium"],
    image: "/flowers/IMG_2472.JPG.jpeg",
    category: "Flowers",
  },

  {
    id: 10,
    name: "Designer Hair Band",
    price: 1199,
    tag: "Popular",
    rating: 4.8,
    reviews: 77,
    delivery: "4–6 days",
    customizable: "Size & color",
    description:
      "A premium handmade designer hair band featuring elegant details and a comfortable fit.",
    sizes: ["Standard"],
    image: "https://res.cloudinary.com/taljr7bj/image/upload/v1789148120/IMG_2437.png",
    category: "Hair Bands",
  },

  {
    id: 11,
    name: "Handmade Flower Gift",
    price: 399,
    tag: "Best Seller",
    rating: 4.9,
    reviews: 156,
    delivery: "2–4 days",
    customizable: "Flower & color",
    description:
      "A beautiful handmade flower gift crafted with care. Perfect for birthdays, celebrations, and thoughtful surprises.",
    sizes: ["Small", "Medium"],
    image: "https://res.cloudinary.com/taljr7bj/image/upload/f_auto,q_auto/IMG_2437",
    category: "Flowers",
  },

  {
    id: 12,
    name: "Resin Keychain",
    price: 699,
    tag: "Hot",
    rating: 4.8,
    reviews: 112,
    delivery: "3–5 days",
    customizable: "Colors & design",
    description:
      "A stylish handmade resin keychain with a unique design. Customize the colors and create a special accessory for yourself or someone you love.",
    sizes: ["Standard"],
    image: "https://res.cloudinary.com/taljr7bj/image/upload/f_auto,q_auto/IMG_2440",
    category: "Keychains",
  },
];


export function getProductById(id: number): Product | null {
  return products.find((p) => p.id === id) ?? null;
}
const categories = [
    {
      name: "Flower Crafts",
      slug: "flower-crafts",
      image:
        "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&q=80",
    },
    {
      name: "Resin Art",
      slug: "resin-art",
      image:
        "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80",
    },
    {
      name: "Gift Boxes",
      slug: "gift-boxes",
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80",
    },
    {
      name: "Home Decor",
      slug: "home-decor",
      image:
        "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800&q=80",
    },
  ];