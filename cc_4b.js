let products = [
  {
    sku: "E1001",
    name: "Wireless Headphones",
    category: "electronics",
    price: 120,
    inventory: 15
  },
  {
    sku: "A2001",
    name: "Graphic T-Shirt",
    category: "apparel",
    price: 25,
    inventory: 40
  },
  {
    sku: "G3001",
    name: "Organic Apples",
    category: "groceries",
    price: 4,
    inventory: 100
  },
  {
    sku: "H4001",
    name: "Laundry Detergent",
    category: "household",
    price: 12,
    inventory: 30
  },
  {
    sku: "B5001",
    name: "Notebook",
    category: "stationery",
    price: 3,
    inventory: 60
  }
];

products.forEach(product => {
  let discountRate = 0;

  switch (product.category) {
    case "electronics":
      discountRate = 0.20;
      break;

    case "apparel":
      discountRate = 0.15;
      break;

    case "groceries":
    case "household":
      discountRate = 0.10;
      break;

    default:
      discountRate = 0;
  }
  product.promoPrice = product.price - (product.price * discountRate);
});

console.log(products);
