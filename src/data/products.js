let products = [
  {
    id: 1,
    title: "Acme Home Blanket",
    description:
      "A cozy and warm blanket for cold nights. This blanket is made of high-quality material and provides excellent comfort.",
    price: 100,
    photo: "https://picsum.photos/id/1/60",
    photoFull:
      "https://prium.github.io/phoenix/v1.13.0/assets/img/products/1.png",
    rating: 4,
    eKnowledge: "Cozy and warm",
    oldPrice: 90,
    color: 2,
    ratedPeople: 50,
  },
  {
    id: 2,
    title: "Casa Deco Chair",
    description:
      "A comfortable chair for your living room. It features a modern design and ergonomic support for long sitting sessions.",
    photo: "https://picsum.photos/id/3/60",
    photoFull:
      "https://prium.github.io/phoenix/v1.13.0/assets/img/products/2.png",
    rating: 3,
    eKnowledge: "Comfortable chair",
    oldPrice: 35,
    color: 6,
    price: 50,
    ratedPeople: 30,
  },
  {
    id: 3,
    title: "EcoWood Table",
    description:
      "A sturdy table for various uses. This table is perfect for dining, working, or as a decorative piece in your home.",
    photo: "https://picsum.photos/id/2/60",
    photoFull:
      "https://prium.github.io/phoenix/v1.13.0/assets/img/products/3.png",
    rating: 5,
    eKnowledge: "Sturdy and versatile",
    oldPrice: 180,
    color: 1,
    price: 200,
    ratedPeople: 75,
  },
  {
    id: 4,
    title: "LuxeLamp Lamp",
    description:
      "A stylish lamp to brighten up any room. The lamp's warm glow creates a cozy atmosphere.",
    photo: "https://picsum.photos/id/5/60",
    photoFull:
      "https://prium.github.io/phoenix/v1.13.0/assets/img/products/4.png",
    rating: 4,
    eKnowledge: "Stylish and cozy",
    oldPrice: 25,
    color: 4,
    price: 30,
    ratedPeople: 45,
  },
  {
    id: 5,
    title: "ComfortZone Cushion",
    description:
      "Soft and fluffy cushion for your couch or bed. It comes in various colors to match your interior.",
    photo: "https://picsum.photos/id/6/60",
    photoFull:
      "https://prium.github.io/phoenix/v1.13.0/assets/img/products/5.png",
    rating: 5,
    eKnowledge: "Soft and fluffy",
    oldPrice: 10,
    color: 7,
    price: 20,
    ratedPeople: 60,
  },
  {
    id: 6,
    title: "Chic Reflections Mirror",
    description:
      "A decorative mirror to add a touch of elegance to your living space. Its sleek design complements any decor.",
    photo: "https://picsum.photos/id/7/60",
    photoFull:
      "https://prium.github.io/phoenix/v1.13.0/assets/img/products/6.png",
    rating: 3,
    eKnowledge: "Elegant decorative mirror",
    oldPrice: 70,
    color: 3,
    price: 80,
    ratedPeople: 20,
  },
  {
    id: 7,
    title: "BookWorm Bookshelf",
    description:
      "A spacious bookshelf to organize your books and display your favorite items. It's both functional and visually appealing.",
    photo: "https://picsum.photos/id/8/60",
    photoFull:
      "https://prium.github.io/phoenix/v1.13.0/assets/img/products/7.png",
    rating: 4,
    eKnowledge: "Functional bookshelf",
    oldPrice: 130,
    color: 2,
    price: 150,
    ratedPeople: 70,
  },
  {
    id: 8,
    title: "SoftStep Rug",
    description:
      "A soft and durable rug that enhances the comfort of your room while protecting your floors.",
    photo: "https://picsum.photos/id/9/60",
    photoFull:
      "https://prium.github.io/phoenix/v1.13.0/assets/img/products/8.png",
    rating: 4,
    eKnowledge: "Soft and durable rug",
    oldPrice: 60,
    color: 5,
    price: 70,
    ratedPeople: 40,
  },
  {
    id: 9,
    title: "Timeless Classics Clock",
    description:
      "A stylish wall clock that adds a contemporary touch to your home decor.",
    photo: "https://picsum.photos/id/10/60",
    photoFull:
      "https://prium.github.io/phoenix/v1.13.0/assets/img/products/9.png",
    rating: 5,
    eKnowledge: "Stylish wall clock",
    oldPrice: 15,
    color: 1,
    price: 25,
    ratedPeople: 90,
  },
  {
    id: 10,
    title: "Bloom & Bliss Vase",
    description:
      "An elegant vase to display your fresh flowers or artificial arrangements.",
    photo: "https://picsum.photos/id/11/60",
    photoFull:
      "https://prium.github.io/phoenix/v1.13.0/assets/img/products/10.png",
    rating: 3,
    eKnowledge: "Elegant flower vase",
    oldPrice: 5,
    color: 7,
    price: 15,
    ratedPeople: 80,
  },
  {
    id: 11,
    title: "Craftsman's Desk",
    description:
      "A spacious and sturdy desk for your office or study room. It provides ample space for your work essentials.",
    photo: "https://picsum.photos/id/12/60",
    photoFull:
      "https://prium.github.io/phoenix/v1.13.0/assets/img/products/11.png",
    rating: 5,
    eKnowledge: "Spacious and sturdy desk",
    oldPrice: 160,
    color: 4,
    price: 180,
    ratedPeople: 25,
  },
  {
    id: 12,
    title: "Elegance Drapes",
    description:
      "High-quality curtains that block out light and provide privacy. They come in various sizes and colors.",
    photo: "https://picsum.photos/id/13/60",
    photoFull:
      "https://prium.github.io/phoenix/v1.13.0/assets/img/products/12.png",
    rating: 4,
    eKnowledge: "High-quality curtains",
    oldPrice: 30,
    color: 2,
    price: 40,
    ratedPeople: 15,
  },
  {
    id: 13,
    title: "SofaSense Sofa",
    description:
      "A comfortable and stylish sofa for your living room. It's designed to accommodate multiple people.",
    photo: "https://picsum.photos/id/14/60",
    photoFull:
      "https://prium.github.io/phoenix/v1.13.0/assets/img/products/13.png",
    rating: 4,
    eKnowledge: "Comfortable and stylish sofa",
    oldPrice: 320,
    color: 5,
    price: 350,
    ratedPeople: 65,
  },
  {
    id: 14,
    title: "Urban Side Side Table",
    description:
      "A compact side table that complements your seating area. It provides a convenient surface for drinks and snacks.",
    photo: "https://picsum.photos/id/15/60",
    photoFull:
      "https://prium.github.io/phoenix/v1.13.0/assets/img/products/14.png",
    rating: 3,
    eKnowledge: "Compact side table",
    oldPrice: 50,
    color: 1,
    price: 60,
    ratedPeople: 40,
  },
  {
    id: 15,
    title: "Home Harmony Shelf",
    description:
      "A versatile shelf that can be used in the living room, bedroom, or hallway to display your favorite items.",
    photo: "https://picsum.photos/id/16/60",
    photoFull:
      "https://prium.github.io/phoenix/v1.13.0/assets/img/products/15.png",
    rating: 4,
    eKnowledge: "Versatile display shelf",
    oldPrice: 110,
    color: 3,
    price: 120,
    ratedPeople: 85,
  },
  {
    id: 16,
    title: "EcoBloom Indoor Plant",
    description:
      "A beautiful indoor plant that adds a touch of greenery to your home. Low-maintenance and air-purifying.",
    photo: "https://picsum.photos/id/17/60",
    photoFull:
      "https://prium.github.io/phoenix/v1.13.0/assets/img/products/16.png",
    rating: 5,
    eKnowledge: "Beautiful indoor plant",
    oldPrice: 15,
    color: 4,
    price: 25,
    ratedPeople: 20,
  },
  {
    id: 17,
    title: "CuisineCraft Chef's Knife",
    description:
      "A high-quality chef's knife for all your culinary needs. Razor-sharp and ergonomic design.",
    photo: "https://picsum.photos/id/18/60",
    photoFull:
      "https://prium.github.io/phoenix/v1.13.0/assets/img/products/17.png",
    rating: 4,
    eKnowledge: "High-quality chef's knife",
    oldPrice: 70,
    color: 6,
    price: 80,
    ratedPeople: 95,
  },
  {
    id: 18,
    title: "DreamCloud Queen Mattress",
    description:
      "Experience a restful sleep with this luxurious queen-sized mattress. Medium-firm and temperature-regulating.",
    photo: "https://picsum.photos/id/19/60",
    photoFull:
      "https://prium.github.io/phoenix/v1.13.0/assets/img/products/18.png",
    rating: 5,
    eKnowledge: "Luxurious queen mattress",
    oldPrice: 810,
    color: 3,
    price: 900,
    ratedPeople: 50,
  },
  {
    id: 19,
    title: "PetPamper Cat Bed",
    description:
      "Spoil your feline friend with this cozy cat bed. Plush and machine-washable.",
    photo: "https://picsum.photos/id/20/60",
    photoFull:
      "https://prium.github.io/phoenix/v1.13.0/assets/img/products/19.png",
    rating: 3,
    eKnowledge: "Cozy cat bed",
    oldPrice: 25,
    color: 5,
    price: 35,
    ratedPeople: 60,
  },
  {
    id: 20,
    title: "Gamer's Haven Gaming Chair",
    description:
      "Improve your gaming experience with this ergonomic gaming chair. Adjustable and supportive.",
    photo: "https://picsum.photos/id/21/60",
    photoFull:
      "https://prium.github.io/phoenix/v1.13.0/assets/img/products/20.png",
    rating: 4,
    eKnowledge: "Ergonomic gaming chair",
    oldPrice: 220,
    color: 7,
    price: 250,
    ratedPeople: 35,
  },
  {
    id: 21,
    title: "Artistic Abode Wall Art",
    description:
      "Enhance your walls with this captivating wall art. Modern and vibrant.",
    photo: "https://picsum.photos/id/22/60",
    photoFull:
      "https://prium.github.io/phoenix/v1.13.0/assets/img/products/21.png",
    rating: 5,
    eKnowledge: "Captivating wall art",
    oldPrice: 50,
    color: 3,
    price: 55,
    ratedPeople: 80,
  },
  {
    id: 22,
    title: "AquaFresh Water Filter",
    description:
      "Ensure clean and purified water with this efficient water filter. Easy to install and maintain.",
    photo: "https://picsum.photos/id/23/60",
    photoFull:
      "https://prium.github.io/phoenix/v1.13.0/assets/img/products/22.png",
    rating: 4,
    eKnowledge: "Efficient water filter",
    oldPrice: 100,
    color: 2,
    price: 120,
    ratedPeople: 70,
  },
  {
    id: 23,
    title: "Gourmet Griller BBQ Grill",
    description:
      "Host perfect BBQ parties with this high-performance grill. Durable and spacious.",
    photo: "https://picsum.photos/id/24/60",
    photoFull:
      "https://prium.github.io/phoenix/v1.13.0/assets/img/products/23.png",
    rating: 5,
    eKnowledge: "High-performance grill",
    oldPrice: 320,
    color: 1,
    price: 350,
    ratedPeople: 55,
  },
  {
    id: 24,
    title: "FitTrack Fitness Tracker",
    description:
      "Monitor your health and fitness goals with this advanced fitness tracker. Sleek and feature-packed.",
    photo: "https://picsum.photos/id/25/60",
    photoFull:
      "https://prium.github.io/phoenix/v1.13.0/assets/img/products/24.png",
    rating: 3,
    eKnowledge: "Advanced fitness tracker",
    oldPrice: 60,
    color: 4,
    price: 70,
    ratedPeople: 40,
  },
  {
    id: 25,
    title: "AromaZen Essential Oils Set",
    description:
      "Create a calming atmosphere with this set of essential oils. Pure and aromatic.",
    photo: "https://picsum.photos/id/26/60",
    photoFull:
      "https://prium.github.io/phoenix/v1.13.0/assets/img/products/25.png",
    rating: 5,
    eKnowledge: "Calming essential oils",
    oldPrice: 30,
    color: 6,
    price: 40,
    ratedPeople: 75,
  },
  {
    id: 26,
    title: "StudySmart Desk Lamp",
    description:
      "Illuminate your workspace with this energy-efficient desk lamp. Adjustable brightness levels.",
    photo: "https://picsum.photos/id/27/60",
    photoFull:
      "https://prium.github.io/phoenix/v1.13.0/assets/img/products/26.png",
    rating: 4,
    eKnowledge: "Energy-efficient desk lamp",
    oldPrice: 20,
    color: 2,
    price: 30,
    ratedPeople: 25,
  },
  {
    id: 27,
    title: "CuddleZone Throw Blanket",
    description:
      "Stay warm and cozy with this soft throw blanket. Perfect for chilly evenings.",
    photo: "https://picsum.photos/id/28/60",
    photoFull:
      "https://prium.github.io/phoenix/v1.13.0/assets/img/products/27.png",
    rating: 4,
    eKnowledge: "Soft and cozy throw blanket",
    oldPrice: 15,
    color: 5,
    price: 20,
    ratedPeople: 50,
  },
  {
    id: 28,
    title: "AquaGlow LED Showerhead",
    description:
      "Transform your shower experience with this color-changing LED showerhead. Easy to install.",
    photo: "https://picsum.photos/id/29/60",
    photoFull:
      "https://prium.github.io/phoenix/v1.13.0/assets/img/products/28.png",
    rating: 3,
    eKnowledge: "Color-changing LED showerhead",
    oldPrice: 35,
    color: 1,
    price: 45,
    ratedPeople: 35,
  },
  {
    id: 29,
    title: "PamperPaws Dog Grooming Kit",
    description:
      "Keep your furry friend looking their best with this grooming kit. Includes various grooming tools.",
    photo: "https://picsum.photos/id/30/60",
    photoFull:
      "https://prium.github.io/phoenix/v1.13.0/assets/img/products/29.png",
    rating: 5,
    eKnowledge: "Complete dog grooming kit",
    oldPrice: 50,
    color: 7,
    price: 55,
    ratedPeople: 20,
  },
  {
    id: 30,
    title: "HomeHarmony Aromatherapy Diffuser",
    description:
      "Enjoy the therapeutic benefits of aromatherapy with this stylish diffuser. Auto-shutoff feature.",
    photo: "https://picsum.photos/id/31/60",
    photoFull:
      "https://prium.github.io/phoenix/v1.13.0/assets/img/products/30.png",
    rating: 4,
    eKnowledge: "Stylish aromatherapy diffuser",
    oldPrice: 20,
    color: 3,
    price: 28,
    ratedPeople: 60,
  },
  {
    id: 31,
    title: "Nature's Song Wind Chimes",
    description:
      "Add a melodic touch to your outdoor space with these harmonious wind chimes.",
    photo: "https://picsum.photos/id/32/60",
    photoFull:
      "https://prium.github.io/phoenix/v1.13.0/assets/img/products/31.png",
    rating: 5,
    eKnowledge: "Harmonious wind chimes",
    oldPrice: 10,
    color: 5,
    price: 18,
    ratedPeople: 45,
  },
  {
    id: 32,
    title: "EcoClean Eco-friendly Cleaning Set",
    description:
      "Make your home spotless with this eco-friendly cleaning set. Includes natural cleaning agents.",
    photo: "https://picsum.photos/id/33/60",
    photoFull:
      "https://prium.github.io/phoenix/v1.13.0/assets/img/products/32.png",
    rating: 4,
    eKnowledge: "Eco-friendly cleaning set",
    oldPrice: 22,
    color: 2,
    price: 32,
    ratedPeople: 75,
  },
  {
    id: 33,
    title: "Sunrise Yoga Mat",
    description:
      "Start your day with a refreshing yoga session using this anti-slip yoga mat.",
    photo: "https://picsum.photos/id/34/60",
    photoFull:
      "https://prium.github.io/phoenix/v1.13.0/assets/img/products/33.png",
    rating: 5,
    eKnowledge: "Anti-slip yoga mat",
    oldPrice: 30,
    color: 1,
    price: 40,
    ratedPeople: 60,
  },
  {
    id: 34,
    title: "FreshBreeze Air Purifier",
    description:
      "Improve your indoor air quality with this high-performance air purifier. Quiet and efficient.",
    photo: "https://picsum.photos/id/35/60",
    photoFull:
      "https://prium.github.io/phoenix/v1.13.0/assets/img/products/34.png",
    rating: 4,
    eKnowledge: "High-performance air purifier",
    oldPrice: 120,
    color: 3,
    price: 140,
    ratedPeople: 85,
  },
  {
    id: 35,
    title: "TranquilSounds White Noise Machine",
    description:
      "Create a soothing ambiance for sleep or relaxation with this white noise machine.",
    photo: "https://picsum.photos/id/36/60",
    photoFull:
      "https://prium.github.io/phoenix/v1.13.0/assets/img/products/35.png",
    rating: 3,
    eKnowledge: "Soothing white noise machine",
    oldPrice: 25,
    color: 4,
    price: 35,
    ratedPeople: 30,
  },
];

const getProductById = (id) => {
  return products.filter((product) => product.id === id)[0];
};

export default products;
export { getProductById };
