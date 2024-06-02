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
      title: "Quymoq",
      image: "../assets/images/icons/kalbasa.svg",
      brand: "С картой",
      price: "599,99" ,
      description:
        "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
    },
    
  
    {
        title: "Quymoq",
        image:"../assets/images/icons/sasiska.svg",
        brand: "С картой",
        price: "44,50" ,
        description:
        "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
    },
    {
        title: "Quymoq",
        image: "../assets/images/icons/kitob.svg",
        brand: "С картой",
        price: "159,99" ,
        description:
        "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
    },
  
    {
      title: "Quymoq",
      image: "../assets/images/icons/kefir.svg",
      brand: "С картой",
      price: "49,39" ,
      description:
        "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
    },
    {
      title: "Quymoq",
      image: "../assets/images/icons/kefir.svg",
      brand: "С картой",
      price: "44,50" ,
      description:
        "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
    },
    {
        title: "Quymoq",
        image: "../assets/images/icons/kitob.svg",
        brand: "С картой",
        price: "77,99" ,
        description:
        "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
    },
    {
        title: "Quymoq",
        image:"../assets/images/icons/sasiska.svg",
        brand: "С картой",
        price: "44,50" ,
        description:
        "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
    },
    {
        title: "Quymoq",
        image: "../assets/images/icons/kalbasa.svg",
        brand: "С картой",
        price: "599,99" ,
        // img:{
        //     img_stairs:"https://img.freepik.com/free-vector/3d-metal-star-isolated_1308-117760.jpg",
        //     img_stairs:"https://img.freepik.com/free-vector/3d-metal-star-isolated_1308-117760.jpg",
        //     img_stairs:"https://img.freepik.com/free-vector/3d-metal-star-isolated_1308-117760.jpg",
        //     img_stairs:"https://img.freepik.com/free-vector/3d-metal-star-isolated_1308-117760.jpg",
        // },
        description:
          "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
        
      },
    
  ];
  
  const cards = document.querySelector(".cards");
  
  function displayProducts(data) {
    let str = "";
    data.forEach((product) => {
      str += `
        <div class='card'>
          <img src='${product.image}' alt='${product.title}' />
          <div class='card-content'>
          <h3>${product.price}₽</h3>
            <p>${product.brand}</p>
            <p>${product.description}</p>
            
            <button class="ss">В корзину</button>
          </div>
        </div>
      `;
    });
    cards.innerHTML = str;
  }
  
  displayProducts(products);
  



