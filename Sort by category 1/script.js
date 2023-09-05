let products = {
  data: [
    {
      productName: "Html", category: "Frontend", price: "30", image: "./img/html.jpg" 
    },
    {
      productName: "Css", category: "Frontend", price: "30", image: "./img/css.jpg"
    },
    {
      productName: "Javascript", category: "Frontend", price: "30", image: "./img/javascript.jpg"
    },
    {
      productName: "bootstrap", category: "Frontend", price: "30", image: "./img/Bootstrap.jpg"
    },
    {
      productName: "React.js", category: "Frontend", price: "30", image: "./img/react.jpg"
    },
    {
      productName: "angular.js", category: "Backend", price: "49", image: "./img/angular.jpg"
    },
    {
      productName: "jquery", category: "Backend", price: "49", image: "./img/jquery.jpg"
    },
    {
      productName: "node.js", category: "Backend", price: "49", image: "./img/node.jpg"
    },
    {
      productName: "nosql", category: "Backend", price: "49", image: "./img/nosql.png"
    },
    {
      productName: "python", category: "programming", price: "99", image: "./img/python.png"
    },
    {
      productName: "c++", category: "programming", price: "99", image: "./img/c.jpg"
    },
    {
      productName: "java", category: "programming", price: "99", image: "./img/java.jpg"
    },
    {
      productName: "vue.js", category: "programming", price: "99", image: "./img/vuejs.jpg"
    },
    {
      productName: "solution architect", category: "computing", price: "29", image: "./img/solution.jpg"
    },
    {
      productName: "Security Architect", category: "computing", price: "129", image: "./img/Security.jpg"
    },
    {
      productName: "cloud systems administrator", category: "computing", price: "89", image: "./img/cloud-systems-administrator.jpg"
    },
    {
      productName: "cloud security", category: "computing", price: "189", image: "./img/cloudsecurity.jpg"
    },
    {
      productName: "Cloud Engineering", category: "computing", price: "49", image: "./img/CloudEng.jpg"
    },
    {
      productName: "Cloud Architecture", category: "computing", price: "49", image: "./img/Cloud-Architecture.jpg"
    },
  ]
}

for (let i of products.data){
  // create card
  let card = document.createElement("div");
  // card should have category and should stay hidden initially
  card.classList.add("card", i.category, "hide");
  // Image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  // img tag
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);
  // container
  let container = document.createElement("div");
  container.classList.add("container");
  // Product name
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);
  // price
  let price = document.createElement("h6");
  price.innerText = "$"+i.price;
  container.appendChild(price);

  card.appendChild(container)
  document.getElementById("products").appendChild(card);
}

// Parameters passed from button (parameters same as category)
function filterProduct(value){
  // Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    // check if value equal innerText
    if(value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else{
      button.classList.remove("active");
    }
  });

  // Select all cards
  let elements = document.querySelectorAll(".card");
  //loop through all cards
  elements.forEach((element) => {
    // display all cards on 'all' button click
    if(value == "all"){
      element.classList.remove("hide");
    }
    else{
      // check if element contains category class
      if(element.classList.contains(value)){
        // display element based on category
        element.classList.remove("hide");
      } else{
        // hide other elemnts
        element.classList.add("hide")
      }
    }
  })
}

// search button click
document.getElementById("search").addEventListener("click", () =>{
  // initializations
  let searchInput = document.getElementById("search-input").value;
  let element = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card")
  // loop through all elemnts
  element.forEach((element,index) => {
    // check if the text include the search value
    if(element.innerText.includes(searchInput.toUpperCase())){
      // display matching card
      cards[index].classList.remove("hide")
    } else{
      // hide others
      cards[index].classList.add("hide")
    }
  })
})

// Initally display all products
window.onload = () => {
  filterProduct("all");
}