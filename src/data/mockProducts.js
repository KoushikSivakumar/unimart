export const mockProducts = [
  {
    id: '1',
    name: 'Handmade Bento Brownies',
    price: 180,
    category: 'Food',
    description:
      'Small-batch fudge brownies packed for late study nights, club meets, and quick hostel treats.',
    image:
      'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=80',
    shopId: 'sugar-lab',
    shopName: 'Sugar Lab',
    seller: 'Ananya Rao',
    campus: 'North Campus',
    stock: 'Available today',
  },
  {
    id: '2',
    name: 'Thrifted Denim Jacket',
    price: 650,
    category: 'Clothing',
    description:
      'Relaxed-fit denim jacket with light fading. Freshly washed and ready for a new semester rotation.',
    image:
      'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&w=900&q=80',
    shopId: 'closet-circuit',
    shopName: 'Closet Circuit',
    seller: 'Kabir Mehta',
    campus: 'Arts Block',
    stock: 'One left',
  },
  {
    id: '3',
    name: 'Custom Lab Record Cover',
    price: 120,
    category: 'Stationery',
    description:
      'Personalized waterproof covers for lab records, sketchbooks, and notebooks with clean minimal lettering.',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
    shopId: 'paper-pixel',
    shopName: 'Paper Pixel',
    seller: 'Mira Shah',
    campus: 'Design Studio',
    stock: 'Made to order',
  },
  {
    id: '4',
    name: 'Used Scientific Calculator',
    price: 420,
    category: 'Electronics',
    description:
      'Exam-approved calculator in good condition with a fresh battery and clear display.',
    image:
      'https://images.unsplash.com/photo-1564473185935-58113cba1e80?auto=format&fit=crop&w=900&q=80',
    shopId: 'tech-table',
    shopName: 'Tech Table',
    seller: 'Dev Nair',
    campus: 'Engineering Block',
    stock: 'Available',
  },
  {
    id: '5',
    name: 'Portrait Sketch Commission',
    price: 350,
    category: 'Art',
    description:
      'A5 graphite portrait sketch from a reference photo. Great for gifts, fest stalls, and farewell notes.',
    image:
      'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=900&q=80',
    shopId: 'line-room',
    shopName: 'Line Room',
    seller: 'Ira Thomas',
    campus: 'Fine Arts Wing',
    stock: '3 slots open',
  },
  {
    id: '6',
    name: 'Poster Design Help',
    price: 250,
    category: 'Services',
    description:
      'Clean event posters for societies and class projects. Includes one concept and two quick revisions.',
    image:
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80',
    shopId: 'studio-hour',
    shopName: 'Studio Hour',
    seller: 'Rohan Iyer',
    campus: 'Media Lab',
    stock: 'Taking requests',
  },
];

export const getProductById = (id) =>
  mockProducts.find((product) => product.id === id);

export const getProductsByShop = (shopId) =>
  mockProducts.filter((product) => product.shopId === shopId);

export const getShopById = (shopId) => {
  const products = getProductsByShop(shopId);
  const firstProduct = products[0];

  if (!firstProduct) {
    return null;
  }

  return {
    id: shopId,
    name: firstProduct.shopName,
    seller: firstProduct.seller,
    campus: firstProduct.campus,
    categories: [...new Set(products.map((product) => product.category))],
    productCount: products.length,
    products,
  };
};
