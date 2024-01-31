const commodityData = [
  {
    id: 1,
    name: "Test 1",
    product: "Product 1",
    price: 10.99,
    quantity: 5,
  },
  {
    id: 2,
    name: "Test 2",
    product: "Product 2",
    price: 15.99,
    quantity: 3,
  },
  {
    id: 3,
    name: "Test 3",
    product: "Product 3",
    price: 20.99,
    quantity: 8,
  },
  {
    id: 4,
    name: "Test 4",
    product: "Product 4",
    price: 5.99,
    quantity: 2,
  },
  {
    id: 5,
    name: "Test 5",
    product: "Product 5",
    price: 12.99,
    quantity: 6,
  },
  {
    id: 6,
    name: "Test 6",
    product: "Product 6",
    price: 18.99,
    quantity: 4,
  },
  {
    id: 7,
    name: "Test 7",
    product: "Product 7",
    price: 9.99,
    quantity: 7,
  },
  {
    id: 8,
    name: "Test 8",
    product: "Product 8",
    price: 14.99,
    quantity: 1,
  },
  {
    id: 9,
    name: "Test 9",
    product: "Product 9",
    price: 7.99,
    quantity: 9,
  },
  {
    id: 10,
    name: "Test 10",
    product: "Product 10",
    price: 11.99,
    quantity: 2,
  },
  {
    id: 11,
    name: "Test 11",
    product: "Product 11",
    price: 16.99,
    quantity: 5,
  },
  {
    id: 12,
    name: "Test 12",
    product: "Product 12",
    price: 8.99,
    quantity: 3,
  },
  {
    id: 13,
    name: "Test 13",
    product: "Product 13",
    price: 13.99,
    quantity: 7,
  },
  {
    id: 14,
    name: "Test 14",
    product: "Product 14",
    price: 19.99,
    quantity: 4,
  },
  {
    id: 15,
    name: "Test 15",
    product: "Product 15",
    price: 6.99,
    quantity: 1,
  },
  {
    id: 16,
    name: "Test 16",
    product: "Product 16",
    price: 10.99,
    quantity: 6,
  },
  {
    id: 17,
    name: "Test 17",
    product: "Product 17",
    price: 15.99,
    quantity: 2,
  },
  {
    id: 18,
    name: "Test 18",
    product: "Product 18",
    price: 20.99,
    quantity: 8,
  },
  {
    id: 19,
    name: "Test 19",
    product: "Product 19",
    price: 5.99,
    quantity: 3,
  },
  {
    id: 20,
    name: "Test 20",
    product: "Product 20",
    price: 12.99,
    quantity: 7,
  },
];

const dashboardTable = [
  {
    name: "iPhone 14 Pro Max",
    "d-sale": 1000,
    "m-sale": 10000,
    "all-sale": 100000,
  },
  {
    name: "小米12 Pro",
    "d-sale": 800,
    "m-sale": 8000,
    "all-sale": 80000,
  },
  {
    name: "华为P50 Pro",
    "d-sale": 600,
    "m-sale": 6000,
    "all-sale": 60000,
  },
  {
    name: "iPad Pro 2024",
    "d-sale": 500,
    "m-sale": 5000,
    "all-sale": 50000,
  },
  {
    name: "MacBook Pro 2024",
    "d-sale": 400,
    "m-sale": 4000,
    "all-sale": 40000,
  },
  {
    name: "AirPods Pro 2",
    "d-sale": 300,
    "m-sale": 3000,
    "all-sale": 30000,
  },
  {
    name: "Apple Watch Series 8",
    "d-sale": 200,
    "m-sale": 2000,
    "all-sale": 20000,
  },
  {
    name: "iPhone 14",
    "d-sale": 100,
    "m-sale": 1000,
    "all-sale": 10000,
  },
  {
    name: "小米12",
    "d-sale": 80,
    "m-sale": 800,
    "all-sale": 8000,
  },
  {
    name: "华为P50",
    "d-sale": 60,
    "m-sale": 600,
    "all-sale": 6000,
  },
  {
    name: "iPad Air 2024",
    "d-sale": 50,
    "m-sale": 500,
    "all-sale": 5000,
  },
  {
    name: "MacBook Air 2024",
    "d-sale": 40,
    "m-sale": 400,
    "all-sale": 4000,
  },
  {
    name: "AirPods 3",
    "d-sale": 30,
    "m-sale": 300,
    "all-sale": 3000,
  },
];

const dashboardChart = [
  {
    name: "iPhone 系列",
    data: [3452, 3829, 3129, 4272, 3198, 2963, 4280],
  },
  {
    name: "三星 Galaxy 系列",
    data: [2901, 3678, 2507, 1294, 2517, 1178, 1345],
  },
  {
    name: "华为 Mate 系列",
    data: [1712, 2456, 1967, 3316, 2231, 1867, 3089],
  },
  {
    name: "OPPO 系列",
    data: [2890, 1214, 1183, 2114, 1987, 1456, 2012],
  },
  {
    name: "小米 12 系列",
    data: [2189, 1012, 1994, 3089, 1904, 3345, 4901],
  },
];

const conversionChart = [
  { time: "Mon", visits: 174, sales: 101 },
  { time: "Tue", visits: 252, sales: 122 },
  { time: "Wed", visits: 412, sales: 290 },
  { time: "Thu", visits: 211, sales: 151 },
  { time: "Fri", visits: 245, sales: 110 },
  { time: "Sat", visits: 372, sales: 322 },
  { time: "Sun", visits: 311, sales: 210 },
];

const activeUserChart = [
  { time: "Mon", num: 320, new: 120 },
  { time: "Tue", num: 332, new: 132 },
  { time: "Wed", num: 301, new: 101 },
  { time: "Thu", num: 334, new: 134 },
  { time: "Fri", num: 390, new: 90 },
  { time: "Sat", num: 330, new: 230 },
  { time: "Sun", num: 320, new: 210 },
];

export {
  commodityData,
  dashboardTable,
  dashboardChart,
  conversionChart,
  activeUserChart,
};
