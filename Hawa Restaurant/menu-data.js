const MENU_DATA = [
  // Appetizers
  {
    id: "app-1",
    name: "French Fry",
    name_bn: "ফ্রেঞ্চ ফ্রাই",
    category: "appetizers",
    price: 250,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500&auto=format&fit=crop&q=60",
    desc: "Crispy golden fried potatoes served with ketchup.",
    desc_bn: "খাস্তা সোনালী ভাজা আলু, কেচাপের সাথে পরিবেশন করা হয়।"
  },
  {
    id: "app-2",
    name: "Chicken Satay (2 sticks)",
    name_bn: "চিকেন সাতে (২ কাঠি)",
    category: "appetizers",
    price: 250,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=500&auto=format&fit=crop&q=60",
    desc: "Skewered grilled chicken served with peanut sauce.",
    desc_bn: "গ্রিল করা মুরগির শিক, চিনাবাদাম সস দিয়ে পরিবেশিত।"
  },
  {
    id: "app-3",
    name: "Wonton (6 Pcs)",
    name_bn: "ওয়ানটন (৬টি)",
    category: "appetizers",
    price: 280,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?w=500&auto=format&fit=crop&q=60",
    desc: "Deep-fried crispy Chinese dumplings filled with seasoned chicken.",
    desc_bn: "খাস্তা কুড়কুড়ে ভাজা চাইনিজ ডাম্পলিং, সুস্বাদু চিকেন পুরে ঠাসা।"
  },
  {
    id: "app-4",
    name: "Chicken Wings Lollipop (6 Pcs)",
    name_bn: "চিকেন উইংস ললিপপ (৬টি)",
    category: "appetizers",
    price: 350,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=500&auto=format&fit=crop&q=60",
    desc: "Chicken wings shaped into lollipops, fried, and glazed in spicy sauce.",
    desc_bn: "ললিপপের আকারে ভাজা চিকেন উইংস, স্পাইসি সস দিয়ে গ্লেজ করা।"
  },
  {
    id: "app-5",
    name: "Crispy Wings Fry (4 Pcs)",
    name_bn: "ক্রিস্পি উইংস ফ্রাই (৪টি)",
    category: "appetizers",
    price: 350,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=500&auto=format&fit=crop&q=60",
    desc: "Crispy deep-fried chicken wings seasoned with house spices.",
    desc_bn: "আমাদের স্পেশাল মসলায় মুচমুচে গভীর ভাজা চিকেন উইংস।"
  },
  {
    id: "app-6",
    name: "Fish Finger (4 Pcs)",
    name_bn: "ফিশ ফিঙ্গার (৪টি)",
    category: "appetizers",
    price: 380,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=500&auto=format&fit=crop&q=60",
    desc: "Golden fried breaded fish strips served with tartar sauce.",
    desc_bn: "সোনালী ভাজা ব্রেডক্রাম্ব আবৃত ফিশ স্ট্রিপ, টারটার সসের সাথে পরিবেশন করা হয়।"
  },
  {
    id: "app-7",
    name: "Fried Chicken (4 Pcs)",
    name_bn: "ফ্রাইড চিকেন (৪টি)",
    category: "appetizers",
    price: 380,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=500&auto=format&fit=crop&q=60",
    desc: "Crispy and juicy southern-style deep-fried chicken.",
    desc_bn: "মুচমুচে এবং রসালো সাউদার্ন স্টাইল গভীর ভাজা চিকেন।"
  },
  {
    id: "app-8",
    name: "Buffalo Wings (6 Pcs)",
    name_bn: "বাফেলো উইংস (৬টি)",
    category: "appetizers",
    price: 400,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=500&auto=format&fit=crop&q=60",
    desc: "Tender chicken wings tossed in fiery Buffalo hot sauce.",
    desc_bn: "ঝাল বাফেলো হট সসে টস করা নরম চিকেন উইংস।"
  },
  {
    id: "app-9",
    name: "Calamari Rings",
    name_bn: "ক্যালামারি রিংস",
    category: "appetizers",
    price: 450,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=500&auto=format&fit=crop&q=60",
    desc: "Crispy breaded and deep-fried squid rings served with dipping sauce.",
    desc_bn: "মুচমুচে ভাজা স্কুইড রিংস, সাথে সুস্বাদু সস।"
  },
  {
    id: "app-10",
    name: "Prawn Tempura (4 Pcs)",
    name_bn: "প্রন টেম্পুরা (৪টি)",
    category: "appetizers",
    price: 500,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1559737558-2f5a34f9a0c0?w=500&auto=format&fit=crop&q=60",
    desc: "Crispy batter-fried prawns served with sweet chili sauce.",
    desc_bn: "মুচমুচে ভাজা চিংড়ি, সাথে সুইট চিলি সস।"
  },
  {
    id: "app-11",
    name: "Grilled Calamari",
    name_bn: "গ্রিলড ক্যালামারি",
    category: "appetizers",
    price: 600,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1534080391025-097b4c8a739d?w=500&auto=format&fit=crop&q=60",
    desc: "Perfectly seasoned grilled calamari with herbs and lemon juice.",
    desc_bn: "লেবুর রস এবং ভেষজ দিয়ে নিখুঁতভাবে গ্রিল করা ক্যালামারি।"
  },

  // Nachos & Soups
  {
    id: "soup-1",
    name: "Chicken Nachos with Cheese",
    name_bn: "চিকেন নাচোস উইথ চিজ",
    category: "soups-nachos",
    price: 250,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=500&auto=format&fit=crop&q=60",
    desc: "Crispy tortilla chips topped with spiced chicken, salsa, and melted cheese.",
    desc_bn: "টর্টিলা চিপসের ওপর মসলাদার চিকেন, সালসা এবং গলানো চিজ।"
  },
  {
    id: "soup-2",
    name: "Beef Nachos with Cheese",
    name_bn: "বিফ নাচোস উইথ চিজ",
    category: "soups-nachos",
    price: 290,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=500&auto=format&fit=crop&q=60",
    desc: "Crispy tortilla chips topped with seasoned beef, salsa, and melted cheese.",
    desc_bn: "টর্টিলা চিপসের ওপর সুস্বাদু বিফ, সালসা এবং গলানো চিজ।"
  },
  {
    id: "soup-3",
    name: "Vegetable Clear Soup (1:1)",
    name_bn: "ভেজিটেবল ক্লিয়ার স্যুপ (১:১)",
    category: "soups-nachos",
    price: 200,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=500&auto=format&fit=crop&q=60",
    desc: "Light and healthy clear broth filled with fresh seasonal vegetables.",
    desc_bn: "তাজা সবজি দিয়ে তৈরি হালকা এবং স্বাস্থ্যকর ক্লিয়ার স্যুপ।"
  },
  {
    id: "soup-4",
    name: "Thai Thick Soup (1:1)",
    name_bn: "থাই থিক স্যুপ (১:১)",
    category: "soups-nachos",
    price: 280,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=500&auto=format&fit=crop&q=60",
    desc: "Rich and flavorful thick soup with chicken, prawn, and aromatic herbs.",
    desc_bn: "চিকেন, চিংড়ি এবং ভেষজ সম্বলিত ঘন থাই স্যুপ।"
  },
  {
    id: "soup-5",
    name: "Cream of Mushroom Soup (1:1)",
    name_bn: "ক্রিম অব মাশরুম স্যুপ (১:১)",
    category: "soups-nachos",
    price: 370,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=500&auto=format&fit=crop&q=60",
    desc: "Smooth and creamy soup loaded with fresh sautéed mushrooms.",
    desc_bn: "তাজা মাশরুম দিয়ে তৈরি ঘন এবং ক্রিমি স্যুপ।"
  },
  {
    id: "soup-6",
    name: "Seafood Clear Soup (1:1)",
    name_bn: "সীফুড ক্লিয়ার স্যুপ (১:১)",
    category: "soups-nachos",
    price: 480,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=500&auto=format&fit=crop&q=60",
    desc: "Delicate clear soup cooked with fresh fish, prawns, and squid.",
    desc_bn: "তাজা মাছ, চিংড়ি এবং স্কুইড দিয়ে তৈরি সুস্বাদু ক্লিয়ার স্যুপ।"
  },
  {
    id: "soup-7",
    name: "Tom Yum Soup (1:1)",
    name_bn: "টম ইয়াম স্যুপ (১:১)",
    category: "soups-nachos",
    price: 650,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=500&auto=format&fit=crop&q=60",
    desc: "Spicy and sour Thai soup with prawns, lemongrass, and kaffir lime.",
    desc_bn: "চingড়ি, লেমনগ্রাস এবং ক্যাফির লাইম দিয়ে তৈরি টক-ঝাল থাই স্যুপ।"
  },

  // Fast Food
  {
    id: "fast-1",
    name: "Chicken Shawarma",
    name_bn: "চিকেন শর্মা",
    category: "fast-food",
    price: 250,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1561651823-34fed022540e?w=500&auto=format&fit=crop&q=60",
    desc: "Spiced grilled chicken wrapped in a soft pita bread with garlic sauce.",
    desc_bn: "পিটা ব্রেডে মোড়ানো গ্রিল করা চিকেন ও রসুন সসের মেলবন্ধন।"
  },
  {
    id: "fast-2",
    name: "Beef Shawarma",
    name_bn: "বিফ শর্মা",
    category: "fast-food",
    price: 350,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1561651823-34fed022540e?w=500&auto=format&fit=crop&q=60",
    desc: "Savory sliced beef wrapped in pita bread with tahini and pickles.",
    desc_bn: "পিটা ব্রেডে মোড়ানো সুস্বাদু বিফ স্লাইস, তাহিনী ও আচার।"
  },
  {
    id: "fast-3",
    name: "Classic Chicken Sandwich",
    name_bn: "ক্লাসিক চিকেন স্যান্ডউইচ",
    category: "fast-food",
    price: 280,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=500&auto=format&fit=crop&q=60",
    desc: "Toasted bread filled with shredded chicken, mayo, lettuce, and cucumber.",
    desc_bn: "চিকেন, মেয়োনেজ, লেটুস ও শসার পুরে ঠাসা টোস্টেড ব্রেড।"
  },
  {
    id: "fast-4",
    name: "Club Sandwich",
    name_bn: "ক্লাব স্যান্ডউইচ",
    category: "fast-food",
    price: 400,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1567234669003-dce7a7a88821?w=500&auto=format&fit=crop&q=60",
    desc: "Double-decker sandwich with chicken, egg, cheese, lettuce, and tomato.",
    desc_bn: "চিকেন, ডিম, পনির, লেটুস ও টমেটো দিয়ে ডাবল-ডেকার স্যান্ডউইচ।"
  },
  {
    id: "fast-5",
    name: "Chicken Naga Dumpling",
    name_bn: "চিকেন নাগা ডাম্পলিং",
    category: "fast-food",
    price: 350,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1496116211217-437a7de440a5?w=500&auto=format&fit=crop&q=60",
    desc: "Steamed chicken dumplings tossed in extremely spicy Naga chili oil.",
    desc_bn: "অতিরিক্ত ঝাল নাগা মরিচের তেলে টস করা ভাপানো চিকেন ডাম্পলিং।"
  },
  {
    id: "fast-6",
    name: "Crispy Chicken Burger",
    name_bn: "ক্রিস্পি চিকেন বার্গার",
    category: "fast-food",
    price: 350,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60",
    desc: "Crispy fried chicken patty topped with mayonnaise, lettuce, and onions.",
    desc_bn: "মুচমুচে ফ্রাইড চিকেন প্যাটি, মেয়োনেজ, লেটুস এবং পেঁয়াজ।"
  },
  {
    id: "fast-7",
    name: "Beef Cheese Burger",
    name_bn: "বিফ চিজ বার্গার",
    category: "fast-food",
    price: 450,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60",
    desc: "Juicy beef patty with a slice of melted cheddar cheese, pickles, and house sauce.",
    desc_bn: "গলানো চেডার চিজ, আচার এবং আমাদের স্পেশাল সস দিয়ে তৈরি রসালো বিফ প্যাটি বার্গার।"
  },
  {
    id: "fast-8",
    name: "BOOM Burger",
    name_bn: "বুম বার্গার",
    category: "fast-food",
    price: 750,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60",
    desc: "Gigantic burger with double patties (beef & chicken), double cheese, and fried egg.",
    desc_bn: "ডাবল প্যাটি (বিফ ও চিকেন), ডাবল পনির এবং ভাজা ডিমের এক বিশাল বার্গার।"
  },
  {
    id: "fast-9",
    name: "Oven Baked Pasta with Chicken",
    name_bn: "ওভেন বেকড পাস্তা উইথ চিকেন",
    category: "fast-food",
    price: 390,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500&auto=format&fit=crop&q=60",
    desc: "Penne pasta in red sauce loaded with chicken and baked under a thick layer of mozzarella.",
    desc_bn: "লাল সসে চিকেন পাস্তা, ওভেনে গলানো মোজারেলা চিজের পুরু স্তর দিয়ে বেক করা।"
  },
  {
    id: "fast-10",
    name: "Beef Lasagna Bolognese",
    name_bn: "বিফ লাসানিয়া বোলোনিজ",
    category: "fast-food",
    price: 650,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500&auto=format&fit=crop&q=60",
    desc: "Layered pasta sheets with beef bolognese sauce, rich béchamel, and melted cheese.",
    desc_bn: "বিফ বোলোনিজ সস, বেচামেল এবং গলানো চিজের পাস্তা শিট।"
  },
  {
    id: "fast-11",
    name: "BBQ Chicken Pizza 9\"",
    name_bn: "বিবিকিউ চিকেন পিজ্জা ৯\"",
    category: "fast-food",
    price: 900,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=60",
    desc: "9-inch pizza topped with BBQ glazed chicken, onions, peppers, and mozzarella.",
    desc_bn: "বিবিকিউ চিকেন, পেঁয়াজ, ক্যাপসিকাম এবং মোজারেলা চিজের ৯ ইঞ্চি পিজ্জা।"
  },
  {
    id: "fast-12",
    name: "BBQ Beef Pizza 12\"",
    name_bn: "বিবিকিউ বিফ পিজ্জা ১২\"",
    category: "fast-food",
    price: 1250,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=60",
    desc: "12-inch large pizza topped with savory sliced beef, onions, and extra cheese.",
    desc_bn: "সুস্বাদু বিফ স্লাইস, পেঁয়াজ এবং অতিরিক্ত চিজের ১২ ইঞ্চি পিজ্জা।"
  },

  // Chinese & Indian Fusion
  {
    id: "fuse-1",
    name: "Chicken Chowmein (1:1)",
    name_bn: "চিকেন চওমিন (১:১)",
    category: "chinese-fusion",
    price: 300,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=500&auto=format&fit=crop&q=60",
    desc: "Stir-fried noodles with chicken, cabbage, carrots, and savory soy sauce.",
    desc_bn: "চিকেন, বাঁধাকপি, গাজর এবং সয়া সস দিয়ে নাড়াচাড়া করে ভাজা নুডলস।"
  },
  {
    id: "fuse-2",
    name: "Beef Chowmein (1:3)",
    name_bn: "বিফ চওমিন (১:৩)",
    category: "chinese-fusion",
    price: 890,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=500&auto=format&fit=crop&q=60",
    desc: "Family-size portion of stir-fried noodles with beef strips and mixed vegetables.",
    desc_bn: "বিফ স্ট্রিপ এবং মিক্সড সবজি দিয়ে ভাজা নুডলসের ফ্যামিলি সাইজ প্লেটার।"
  },
  {
    id: "fuse-3",
    name: "Chicken Fried Rice (1:1)",
    name_bn: "চিকেন ফ্রাইড রাইস (১:১)",
    category: "chinese-fusion",
    price: 300,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=500&auto=format&fit=crop&q=60",
    desc: "Classic wok-fried rice with egg, chicken, peas, and green onions.",
    desc_bn: "ডিম, চিকেন, মটরশুঁটি এবং পেঁয়াজ পাতা দিয়ে তৈরি ফ্রাইড রাইস।"
  },
  {
    id: "fuse-4",
    name: "Seafood Fried Rice (1:3)",
    name_bn: "সীফুড ফ্রাইড রাইস (১:৩)",
    category: "chinese-fusion",
    price: 1300,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=500&auto=format&fit=crop&q=60",
    desc: "Large sharing platter of fried rice loaded with prawns, fish, and squid.",
    desc_bn: "চিংড়ি, মাছ এবং স্কুইড দিয়ে তৈরি ফ্রাইড রাইসের বড় শেয়ারিং প্লেটার।"
  },
  {
    id: "fuse-5",
    name: "Chicken Chilli Onion (1:3)",
    name_bn: "চিকেন চিলি অনিয়ন (১:৩)",
    category: "chinese-fusion",
    price: 550,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=500&auto=format&fit=crop&q=60",
    desc: "Stir-fried chicken cubes with green chilis, onions, and hot garlic sauce.",
    desc_bn: "কাঁচামরিচ, পেঁয়াজ ও রসুন সস দিয়ে ভাজা চিকেন কিউব।"
  },
  {
    id: "fuse-6",
    name: "Beef Chilli Onion (1:3)",
    name_bn: "বিফ চিলি অনিয়ন (১:৩)",
    category: "chinese-fusion",
    price: 750,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=500&auto=format&fit=crop&q=60",
    desc: "Tender beef slices stir-fried with green chilis and onions in dark soy sauce.",
    desc_bn: "কাঁচামরিচ, পেঁয়াজ এবং সয়া সস দিয়ে ভাজা গরুর মাংসের টুকরো।"
  },
  {
    id: "fuse-7",
    name: "Chinese Chicken Sizzling (1:3)",
    name_bn: "চাইনিজ চিকেন সিজলিং (১:৩)",
    category: "chinese-fusion",
    price: 650,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=500&auto=format&fit=crop&q=60",
    desc: "Sizzling hot plate of chicken, bell peppers, and onions in sweet & sour sauce.",
    desc_bn: "গরম প্লেটে পরিবেশিত ক্যাপসিকাম ও পেঁয়াজ সহ চিকেন।"
  },
  {
    id: "fuse-8",
    name: "Chinese Beef Sizzling (1:3)",
    name_bn: "চাইনিজ বিফ সিজলিং (১:৩)",
    category: "chinese-fusion",
    price: 750,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=500&auto=format&fit=crop&q=60",
    desc: "Sizzling beef slices served on a hot plate with signature gravy.",
    desc_bn: "আমাদের সিগনেচার গ্রেভি সহ গরম প্লেটে পরিবেশিত বিফ সিজলিং।"
  },
  {
    id: "fuse-9",
    name: "Chinese Vegetable (1:1)",
    name_bn: "চাইনিজ ভেজিটেবল (১:১)",
    category: "chinese-fusion",
    price: 150,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&auto=format&fit=crop&q=60",
    desc: "Stir-fried Chinese vegetables cooked with a light savory sauce.",
    desc_bn: "হালকা সস দিয়ে নাড়াচাড়া করে ভাজা সুস্বাদু চাইনিজ সবজি।"
  },

  // Bengali Cuisine
  {
    id: "beng-1",
    name: "Plain Rice",
    name_bn: "সাদা ভাত",
    category: "bengali-cuisine",
    price: 80,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500&auto=format&fit=crop&q=60",
    desc: "Steamed premium fine grain white rice.",
    desc_bn: "ভাপে রান্না করা প্রিমিয়াম সাদা ভাত।"
  },
  {
    id: "beng-2",
    name: "Polao",
    name_bn: "পোলাও",
    category: "bengali-cuisine",
    price: 150,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500&auto=format&fit=crop&q=60",
    desc: "Fragrant Chinigura rice cooked with ghee and spices.",
    desc_bn: "ঘি ও মসলা দিয়ে রান্না করা সুগন্ধি চিনিগুঁড়া চালের পোলাও।"
  },
  {
    id: "beng-3",
    name: "Chicken Roast",
    name_bn: "চিকেন রোস্ট",
    category: "bengali-cuisine",
    price: 200,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=500&auto=format&fit=crop&q=60",
    desc: "Richly spiced, cooked in yogurt-onion gravy.",
    desc_bn: "টকদই ও পেঁয়াজের গ্রেভিতে রান্না করা সুস্বাদু চিকেন রোস্ট।"
  },
  {
    id: "beng-4",
    name: "Beef Bhuna (5 Pcs)",
    name_bn: "গরু ভুনা (৫টি)",
    category: "bengali-cuisine",
    price: 350,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=500&auto=format&fit=crop&q=60",
    desc: "Traditional slow-cooked beef chunks in rich gravy.",
    desc_bn: "ঘন গ্রেভিতে ঐতিহ্যবাহী ধিমে আঁচে রান্না করা গরুর মাংস।"
  },
  {
    id: "beng-5",
    name: "Mutton Rezala (2 Pcs)",
    name_bn: "খাসির রেজালা (২টি)",
    category: "bengali-cuisine",
    price: 400,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=500&auto=format&fit=crop&q=60",
    desc: "Mutton pieces cooked in a creamy yogurt, nut paste, and spice gravy.",
    desc_bn: "টকদই এবং বাদাম বাটার গ্রেভিতে রান্না করা খাসির মাংস।"
  },
  {
    id: "beng-6",
    name: "Alu Vorta",
    name_bn: "আলু ভর্তা",
    category: "bengali-cuisine",
    price: 80,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500&auto=format&fit=crop&q=60",
    desc: "Mashed potatoes with mustard oil, red chilis, and chopped onions.",
    desc_bn: "সরিষার তেল, শুকনা মরিচ এবং পেঁয়াজ দিয়ে চটকানো আলু ভর্তা।"
  },
  {
    id: "beng-7",
    name: "Loitta Shutki Vorta",
    name_bn: "লইট্টা শুঁটকি ভর্তা",
    category: "bengali-cuisine",
    price: 150,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500&auto=format&fit=crop&q=60",
    desc: "Mashed dried Loitta fish cooked with garlic, onions, and hot chili paste.",
    desc_bn: "রসুন, পেঁয়াজ এবং মরিচ দিয়ে ভাজা লইট্টা শুঁটকি ভর্তা।"
  },
  {
    id: "beng-8",
    name: "Koral Fish Curry",
    name_bn: "কোরাল কারী",
    category: "bengali-cuisine",
    price: 350,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1534080391025-097b4c8a739d?w=500&auto=format&fit=crop&q=60",
    desc: "Fresh Koral fish cooked in a traditional Bengali tomato-onion base.",
    desc_bn: "ঐতিহ্যবাহী টমেটো-পেঁয়াজের ঝোলে রান্না করা তাজা কোরাল মাছ।"
  },
  {
    id: "beng-9",
    name: "Rupchanda Fry",
    name_bn: "রূপচাঁদা ফ্রাই",
    category: "bengali-cuisine",
    price: 600,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1534080391025-097b4c8a739d?w=500&auto=format&fit=crop&q=60",
    desc: "Whole Rupchanda fish marinated in spices and shallow fried.",
    desc_bn: "মসলা দিয়ে মেরিনেট করে ভাজা গোটা রূপচাঁদা মাছ।"
  },
  {
    id: "beng-10",
    name: "Chingri Malai Curry",
    name_bn: "চিংড়ি মালাই কারী",
    category: "bengali-cuisine",
    price: 650,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1559737558-2f5a34f9a0c0?w=500&auto=format&fit=crop&q=60",
    desc: "Premium prawns cooked in a rich, creamy coconut milk gravy.",
    desc_bn: "নারিকেলের দুধে রান্না করা প্রিমিয়াম চিংড়ি মাছ।"
  },

  // Desserts & Drinks
  {
    id: "des-1",
    name: "Golap Jamun (1 Pc)",
    name_bn: "গোলাপ জামুন (১টি)",
    category: "desserts-drinks",
    price: 50,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=500&auto=format&fit=crop&q=60",
    desc: "Deep-fried milk solids soaked in cardamom flavored sugar syrup.",
    desc_bn: "এলাচ ফ্লেভারের চিনির সিরায় ভেজানো ঐতিহ্যবাহী মিষ্টি।"
  },
  {
    id: "des-2",
    name: "Borhani",
    name_bn: "বোরহানি",
    category: "desserts-drinks",
    price: 80,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1497534446932-c925b458314e?w=500&auto=format&fit=crop&q=60",
    desc: "Traditional spiced yogurt drink blended with mint, coriander, and mustard.",
    desc_bn: "টকদই, পুদিনা পাতা ও সরিষার দানার মিশ্রণে তৈরি মসলাদার পানীয়।"
  },
  {
    id: "des-3",
    name: "Payesh",
    name_bn: "পায়েস",
    category: "desserts-drinks",
    price: 80,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=500&auto=format&fit=crop&q=60",
    desc: "Sweet, creamy rice pudding flavored with green cardamom and saffron.",
    desc_bn: "এলাচ ও জাফরান সুগন্ধিযুক্ত মিষ্টি ও ক্রিমি চালের পায়েস।"
  },
  {
    id: "des-4",
    name: "Special Pudding",
    name_bn: "স্পেশাল পুডিং",
    category: "desserts-drinks",
    price: 120,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=500&auto=format&fit=crop&q=60",
    desc: "Rich baked caramel custard pudding.",
    desc_bn: "ক্যারামেল স্বাদের ওভেনে বেক করা কাস্টার্ড পুডিং।"
  }
];
