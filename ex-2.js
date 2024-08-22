// Exercise #2 Product

const product = {
  name: "Xiaomi Air Purifier",
  price: 4000,
  ratings: 2.5,
  photo: null,
};
let socialMediaShare = "facebookShare";
// Start code here
product.ratings = 4.5
product.photo = "https://i01.appmifile.com/webfile/globalimg/products/pc/mi-air-purifier-3H/replace_03.jpg";
console.log(product.ratings);
console.log(product.photo);
let va1 = "code";
product[va1] = "IT010101";
console.log(product.code);
product.price = 6000;
console.log(product.price);
delete product.ratings;
console.log(product.ratings);
let v2 = "socialMediaShare";
product[v2] = 45.5;
console.log(product.socialMediaShare);
console.log(product);

