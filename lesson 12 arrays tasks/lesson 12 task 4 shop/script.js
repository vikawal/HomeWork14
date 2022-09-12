// Tasks:
// 1. Read through code. Read documentation about all new methods, to better understand how to use them. Search for documentation here https://developer.mozilla.org/ru/
// 2. 
// 3. 
// 4. Add and display price of product

// We create array with 3 products (objects)
const products = [
{ 
  imageSrc: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjA2ODIwNTI&ixlib=rb-1.2.1&q=80', 
  name: 'T-Shirt: ',
  price: '   from 7 euro'
},
{
  imageSrc: 'https://images.unsplash.com/photo-1582552938357-32b906df40cb?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjA2ODI1Njk&ixlib=rb-1.2.1&q=80', 
  name: 'Jeans: ',
  price: '   from 10 euro'
},
{
  imageSrc: 'https://images.unsplash.com/photo-1593032580308-d4bafafc4f28?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjA2ODI4OTE&ixlib=rb-1.2.1&q=80',
  name: 'Jackets: ', //ADD 'Jackets'
  price: '   from 45 euro'
},
  //ADD MORE 3 grid elements
 {
  imageSrc: 'https://images.unsplash.com/photo-1601379327928-bedfaf9da2d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3dlYXRlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
  name: 'Sweaters: ',
  price: '   from 30 euro'
}, 
  {
  imageSrc: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHNob2VzJTIwZm9ybWFsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  name: 'Shoes: ',
  price: '   from 40 euro'
}, 
  {
  imageSrc: 'https://images.unsplash.com/photo-1518912217224-3b1ae276c89e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHNjYXJmfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  name: 'Accesorios: ',
  price: '   from 5 euro'
}
];
// Getting <div> element from HTML to which we will attach grid elements later
const grid = document.getElementById('ecom-products');

// Declaring function which takes in image src and outputs <img> html elememt
function createImage(src) {
  if (!src) throw new Error('Please, provide image src');
  // Creating image element
  const image = document.createElement('img');
  // Adding source to it
  image.setAttribute('src', src);
  // Returning ready image element
  return image;
}

// Declaring function which takes product object and outputs <div> with <img> and text HTML elements
function createGridItem(product) {
  if (!product) throw new Error('Please, provide product');
  // Creating <div> which will contain image and name
  const gridItem = document.createElement('div');
  // Creating image element
  const image = createImage(product.imageSrc);
  // Creating text node. We do not make check if name exists here. 
  // Instead we make this (product.name || ''). Means if product.name exists use it. Otherwise,     // if product.name is undefined (not provided) use empty string.
  const textNode = document.createTextNode(product.name || '');
  const textNode1 = document.createTextNode(product.price || '');
  
  // Put image inside of gridItem
  gridItem.appendChild(image);
  // Put text inside of gridItem, will attach after last child, so after image
  gridItem.appendChild(textNode);
  // Return grid item 
  gridItem.appendChild(textNode1);
  
  return gridItem;
}

// Iterate through array of products
for(let i = 0; i < products.length; i++) {
  // Body of the loop.
  // On each iteration create an HTML element (grid item) with product
  const product = createGridItem(products[i]);
  // Attach HTML element to the grid
  grid.appendChild(product);
}