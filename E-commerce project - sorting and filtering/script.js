let products = {
  data: [
    {
      productName: "Html", category: "Frontend", price: "30", image: "html.jpg"
    },
    {
      productName: "Css", category: "Frontend", price: "30", image: "css.jpg"
    },
    {
      productName: "Javascript", category: "Frontend", price: "30", image: "javascript.jpg"
    },
    {
      productName: "bootstrap", category: "Frontend", price: "30", image: "Bootstrap.jpg"
    },
    {
      productName: "React.js", category: "Frontend", price: "30", image: "react.jpg"
    },
    {
      productName: "angular.js", category: "Backend", price: "49", image: "angular.jpg"
    },
    {
      productName: "jquery", category: "Backend", price: "49", image: "jquery.jpg"
    },
    {
      productName: "node.js", category: "Backend", price: "49", image: "node.jpg"
    },
    {
      productName: "nosql", category: "Backend", price: "49", image: "nosql.png"
    },
    {
      productName: "python", category: "program", price: "99", image: "python.png"
    },
    {
      productName: "c++", category: "program", price: "99", image: "c.jpg"
    },
    {
      productName: "java", category: "program", price: "99", image: "java.jpg"
    },
    {
      productName: "vue.js", category: "program", price: "99", image: "vuejs.jpg"
    },
    {
      productName: "solution architect", category: "Cloud", price: "29", image: "solution.jpg"
    },
    {
      productName: "Security Architect", category: "Cloud", price: "129", image: "Security.jpg"
    },
    {
      productName: "cloud systems administrator", category: "Cloud", price: "89", image: "cloud-systems-administrator.jpg"
    },
    {
      productName: "cloud security", category: "Cloud", price: "189", image: "cloudsecurity.jpg"
    },
    {
      productName: "Cloud Engineering", category: "Cloud", price: "49", image: "CloudEng.jpg"
    },
    {
      productName: "Cloud Architecture", category: "Cloud", price: "49", image: "Cloud-Architecture.jpg"
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