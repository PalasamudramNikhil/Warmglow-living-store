const products = [
  {
    id: 1,
    name: "Wall Clock",
    description: "Elegant decorative clock",
    price: 599,
    image: "assets/clock.jpg",
    category: "Wall Decor"
  },
  {
    id: 2,
    name: "Wooden Chair",
    description: "Comfortable and stylish",
    price: 1299,
    image: "assets/chair.jpg",
    category: "Furniture"
  },
  {
    id: 3,
    name: "Table Lamp",
    description: "Warm lighting for cozy corners",
    price: 899,
    image: "assets/lamp.jpg",
    category: "Lighting"
  },
  {
    id: 4,
    name: "Plant Pot Set",
    description: "Natural vibes at home",
    price: 499,
    image: "assets/pots.jpg",
    category: "Plants"
  },
  {
    id: 5,
    name: "Cozy Throw Blanket",
    description: "Soft and warm blanket for chilly evenings.",
    price: 999,
    image: "assets/p1.jpg",
    category: "Textiles"
  },
  {
    id: 6,
    name: "Ceramic Vase",
    description: "Elegant vase to hold your favorite flowers.",
    price: 1299,
    image: "assets/p2.jpg",
    category: "Decor"
  },
  {
    id: 7,
    name: "Aromatic Candles",
    description: "Set of 3 lavender-scented candles.",
    price: 499,
    image: "assets/p3.jpg",
    category: "Decor"
  },
  {
    id: 8,
    name: "Lounge Chair",
    description: "Luxury Blue Velvet Lounge Chair.",
    price: 1099,
    image: "assets/p4.jpg",
    category: "Furniture"
  },
  {
    id: 9,
    name: "Modern Linen Sofa (3-Seater)",
    description: "Minimalist 3-seater sofa with premium linen fabric and wooden legs.",
    price: 2059,
    image: "assets/p5.jpg",
    category: "Furniture"
  },
  {
    id: 10,
    name: "Decorative Cushions",
    description: "Pack of 5 stylish cushions.",
    price: 999,
    image: "assets/p6.jpg",
    category: "Textiles"
  },
  {
    id: 11,
    name: "Storage Basket",
    description: "Handwoven multipurpose basket.",
    price: 799,
    image: "assets/p7.jpg",
    category: "Storage"
  },
  {
    id: 12,
    name: "Indoor Plant Pot",
    description: "Ceramic pot with artificial plant.",
    price: 599,
    image: "assets/p8.jpg",
    category: "Plants"
  },
  {
    id: 13,
    name: "Framed Art Print",
    description: "Boho-themed wall art with frame.",
    price: 1499,
    image: "assets/p9.jpg",
    category: "Wall Decor"
  },
  {
    id: 14,
    name: "Wooden Organizer",
    description: "Stylish wooden desktop organizer.",
    price: 1299,
    image: "assets/p10.jpg",
    category: "Storage"
  },
  {
    id: 15,
    name: "Floor Rug",
    description: "Soft area rug for bedroom/living room.",
    price: 2199,
    image: "assets/p11.jpg",
    category: "Textiles"
  },
  {
    id: 16,
    name: "Kitchen Towels Set",
    description: "6 cotton towels for kitchen use.",
    price: 699,
    image: "assets/p12.jpg",
    category: "Kitchen"
  },
  {
    id: 17,
    name: "Serving Tray",
    description: "Wooden tray with metal handles.",
    price: 899,
    image: "assets/p13.jpg",
    category: "Kitchen"
  },
  {
    id: 18,
    name: "Scent Diffuser",
    description: "Essential oil diffuser with LED light.",
    price: 1399,
    image: "assets/p14.jpg",
    category: "Decor"
  },
  {
    id: 19,
    name: "Curtain Tiebacks",
    description: "Magnetic curtain holders (set of 2).",
    price: 499,
    image: "assets/p15.jpg",
    category: "Textiles"
  },
  {
    id: 20,
    name: "Wall Shelf",
    description: "Floating shelf for books and décor.",
    price: 1599,
    image: "assets/p16.jpg",
    category: "Wall Decor"
  },
  {
    id: 21,
    name: "Tea Light Holders",
    description: "Decorative holders for candles.",
    price: 299,
    image: "assets/p17.jpg",
    category: "Decor"
  },
  {
    id: 22,
    name: "Bathroom Set",
    description: "4-piece ceramic bathroom set.",
    price: 1299,
    image: "assets/p18.jpg",
    category: "Bathroom"
  },
  {
    id: 23,
    name: "Table Runner",
    description: "Cotton table runner for dining décor.",
    price: 799,
    image: "assets/p19.jpg",
    category: "Textiles"
  },
  {
    id: 24,
    name: "Wall Mirror",
    description: "Round mirror with wooden frame.",
    price: 1799,
    image: "assets/p20.jpg",
    category: "Wall Decor"
  },
  {
    id: 25,
    name: "Laundry Bag",
    description: "Foldable fabric laundry bin.",
    price: 699,
    image: "assets/p21.jpg",
    category: "Storage"
  },
  {
    id: 26,
    name: "Decorative Tray",
    description: "Marble finish tray for serving or décor.",
    price: 999,
    image: "assets/p22.jpg",
    category: "Decor"
  },
  {
    id: 27,
    name: "Hanging Planter",
    description: "Macrame rope planter hanger.",
    price: 599,
    image: "assets/p23.jpg",
    category: "Plants"
  },
  {
    id: 28,
    name: "Wall Hooks",
    description: "Wooden wall hooks (set of 5).",
    price: 499,
    image: "assets/p24.jpg",
    category: "Wall Decor"
  },
  {
    id: 29,
    name: "Desk Clock",
    description: "Modern mini clock for tables.",
    price: 899,
    image: "assets/p25.jpg",
    category: "Decor"
  },
  {
    id: 30,
    name: "Napkin Holder",
    description: "Rustic holder for dining napkins.",
    price: 299,
    image: "assets/p26.jpg",
    category: "Kitchen"
  },
  {
    id: 31,
    name: "Candle Stand",
    description: "Metal stand for tall candles.",
    price: 799,
    image: "assets/p27.jpg",
    category: "Decor"
  },
  {
    id: 32,
    name: "Doormat",
    description: "Anti-slip welcome mat for entrance.",
    price: 699,
    image: "assets/p28.jpg",
    category: "Textiles"
  },
  {
    id: 33,
    name: "Wall Frame Set",
    description: "Set of 3 stylish photo frames.",
    price: 1199,
    image: "assets/p29.jpg",
    category: "Wall Decor"
  },
  {
    id: 34,
    name: "Storage Jars",
    description: "Glass jars with bamboo lids (set of 3).",
    price: 899,
    image: "assets/p30.jpg",
    category: "Kitchen"
  },
  {
  id: 35,
  name: "Ceramic Dinner Plate Set",
  description: "Elegant 4-piece ceramic plate set for dinner.",
  price: 899,
  image: "assets/plate.jpg",
  category: "Kitchen"
},
{
  id: 36,
  name: "Glass Water Tumblers (Set of 6)",
  description: "Durable and stylish water glasses.",
  price: 599,
  image: "assets/glass.jpg",
  category: "Kitchen"
},
{
  id: 37,
  name: "Stainless Steel Cutlery Set",
  description: "Includes spoons, forks, and knives.",
  price: 749,
  image: "assets/cutlery.jpg",
  category: "Kitchen"
},
{
  id: 38,
  name: "Microwave Safe Bowls (Set of 3)",
  description: "Colorful and convenient bowls for reheating and serving.",
  price: 699,
  image: "assets/bowls.jpg",
  category: "Kitchen"
}

];
