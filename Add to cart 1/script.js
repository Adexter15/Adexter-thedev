const product = [
  {
      id: 0,
      image: 'imgs/angular.jpg',
      title: 'ANGULAR.JS',
      price: 120,
  },
  {
      id: 1,
      image: 'imgs/Bootstrap.jpg',
      title: 'Bootstrap',
      price: 60,
  },
  {
      id: 2,
      image: 'imgs/c.jpg',
      title: 'C++',
      price: 230,
  },
  {
      id: 3,
      image: 'imgs/Cloud-Architecture.jpg',
      title: 'Cloud-Architecture',
      price: 103,
  },
  {
      id: 4,
      image: 'imgs/cloud-systems-administrator.jpg',
      title: 'CLOUD SYSTEMS ADMINISTRATOR',
      price: 150,
  },
  {
      id: 5,
      image: 'imgs/cloudsecurity.jpg',
      title: 'CLOUD SECURITY',
      price: 200,
  },
  {
      id: 6,
      image: 'imgs/CloudEng.jpg',
      title: 'CLOUD ENGINEERING',
      price: 160,
  },
  {
      id: 7,
      image: 'imgs/html.jpg',
      title: 'HTML',
      price: 167,
  },
  {
      id: 8,
      image: 'imgs/java.jpg',
      title: 'JAVA',
      price: 250,
  },
  {
      id: 9,
      image: 'imgs/javascript.jpg',
      title: 'JAVASCRIPT',
      price: 90,
  },
  {
      id: 10,
      image: 'imgs/jquery.jpg',
      title: 'JQUERY',
      price: 128,
  },
  {
      id: 11,
      image: 'imgs/node.jpg',
      title: 'NODE.JS',
      price: 210,
  },
  {
      id: 12,
      image: 'imgs/nosql.png',
      title: 'NOSQL',
      price: 80,
  },
  {
      id: 13,
      image: 'imgs/python.png',
      title: 'PYTHON',
      price: 300,
  },
  {
      id: 14,
      image: 'imgs/React.jpg',
      title: 'REACT.JS',
      price: 143,
  },
  {
      id: 15,
      image: 'imgs/nosql.png',
      title: 'NOSQL',
      price: 198,
  },
  {
      id: 16,
      image: 'imgs/Security.jpg',
      title: 'SECURITY ARCHITECT',
      price: 100,
  },
  {
      id: 17,
      image: 'imgs/solution.jpg',
      title: 'SOLUTION ARCHITECT',
      price: 210,
  },
  {
      id: 18,
      image: 'imgs/vuejs.jpg',
      title: 'VUE.JS',
      price: 360,
  },
];
const categories = [...new Set(product.map((item)=>
  {return item}))]
  let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
  var {image, title, price} = item;
  return(
      `<div class='box'>
          <div class='img-box'>
              <img class='images' src=${image}></img>
          </div>
      <div class='bottom'>
      <p>${title}</p>
      <h2>$ ${price}.00</h2>`+
      "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
      `</div>
      </div>`
  )
}).join('')

var cart =[];

function addtocart(a){
  cart.push({...categories[a]});
  displaycart();
}
function delElement(a){
  cart.splice(a, 1);
  displaycart();
}

function displaycart(){
  let j = 0, total=0;
  document.getElementById("count").innerHTML=cart.length;
  if(cart.length==0){
      document.getElementById('cartItem').innerHTML = "Your cart is empty";
      document.getElementById("total").innerHTML = "$ "+0+".00";
  }
  else{
      document.getElementById("cartItem").innerHTML = cart.map((items)=>
      {
          var {image, title, price} = items;
          total=total+price;
          document.getElementById("total").innerHTML = "$ "+total+".00";
          return(
              `<div class='cart-item'>
              <div class='row-img'>
                  <img class='rowimg' src=${image}>
              </div>
              <p style='font-size:12px;'>${title}</p>
              <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
              "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
          );
      }).join('');
  }

  
}