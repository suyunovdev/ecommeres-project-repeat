const menu = document.querySelector('.humburger') 
const  navLink = document.querySelector('.navlink')
menu.addEventListener('click',() =>{
    navLink.classList.toggle('show')
})



/////////////////////////////

const btnOpen = document.querySelector('.people-str');
const btn = document.querySelector('.navbar')
btnOpen.addEventListener('click', () =>{
    btn.classList.add('open')
})
const btnClose = document.querySelector('.btn-open')

btnClose.addEventListener('click', () =>{
    btn.classList.remove('open')
})


//////////////////////

const products = [
    {
      id:1,
      title: "Kalbasa",
      image: "../assets/images/icons/kalbasa.svg",
      brand: "С картой",
      price: "599,99" ,
      description:
        "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
    },
    
  
    {
      id:2,
        title: "Kalbasa",
        image:"../assets/images/icons/sasiska.svg",
        brand: "С картой",
        price: "44,50" ,
        description:
        "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
    },
    {
      id:3,
        title: "Kalbasa",
        image: "../assets/images/icons/kitob.svg",
        brand: "С картой",
        price: "159,99" ,
        description:
        "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
    },
  
    {
      id:4,
      title: "Kefir",
      image: "../assets/images/icons/kefir.svg",
      brand: "С картой",
      price: "49,39" ,
      description:
        "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
    },
    {
      id:5,
      title: "Kefir",
      image: "../assets/images/icons/kefir.svg",
      brand: "С картой",
      price: "44,50" ,
      description:
        "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
    },
    {
      id:6,
        title: "Kalbasa",
        image: "../assets/images/icons/kitob.svg",
        brand: "С картой",
        price: "77,99" ,
        description:
        "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
    },
    {
      id:7,
        title: "Kalbasa",
        image:"../assets/images/icons/sasiska.svg",
        brand: "С картой",
        price: "44,50" ,
        description:
        "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
    },
    {
      id:8,
        title: "Kalbasa",
        image: "../assets/images/icons/kalbasa.svg",
        brand: "С картой",
        price: "599,99" ,
        description:
          "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
        
      },
    
  ];
  
  const cards = document.querySelector(".cards");
  
  function displayProducts(data) {
    let str = "";
    data.forEach((product) => {
      str += `
        <div class='card' data-id=${product.id}>
          <img src='${product.image}' alt='${product.title}' />
          <div class='card-content'>
          <h3>${product.price}₽</h3>
            <p>${product.description}</p>
            
            <button name='product-buttton'  class="ss">В корзину</button>
          </div>
        </div>
      `;
    });
    cards.innerHTML = str;
  }
  
  displayProducts(products);

const CreatAll =(id) =>{
  window.open(`../pages/korzinka.html?id=${id}`,"_self");
}



  cards.addEventListener("click", (e) => {
 let {name} = e.target
 if(name ==="product-buttton"){
  let id = e.target.closest("[data-id]").dataset.id;
  CreatAll(id)
 }

 

  })
  



