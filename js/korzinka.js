const products = [
    {
        id: 1,
        title: "Kalbasa",
        image: "../assets/images/icons/kalbasa.svg",
        brand: "С картой",
        price: "599,99",
        description: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
    },
    {
        id: 2,
        title: "Kalbasa",
        image: "../assets/images/icons/sasiska.svg",
        brand: "С картой",
        price: "44,50",
        description: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
    },
    {
        id: 3,
        title: "Kalbasa",
        image: "../assets/images/icons/kitob.svg",
        brand: "С картой",
        price: "159,99",
        description: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
    },
    {
        id: 4,
        title: "Kefir",
        image: "../assets/images/icons/kefir.svg",
        brand: "С картой",
        price: "49,39",
        description: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
    },
    {
        id: 5,
        title: "Kefir",
        image: "../assets/images/icons/kefir.svg",
        brand: "С картой",
        price: "44,50",
        description: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
    },
    {
        id: 6,
        title: "Kalbasa",
        image: "../assets/images/icons/kitob.svg",
        brand: "С картой",
        price: "77,99",
        description: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
    },
    {
        id: 7,
        title: "Kalbasa",
        image: "../assets/images/icons/sasiska.svg",
        brand: "С картой",
        price: "44,50",
        description: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
    },
    {
        id: 8,
        title: "Kalbasa",
        image: "../assets/images/icons/kalbasa.svg",
        brand: "С картой",
        price: "599,99",
        description: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
    },
];



function displayProduct(productId) {
    const product = products.find(p => p.id === productId);

    if (product) {
        const productDetails = document.querySelector(".product-details");
        productDetails.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>Brand: ${product.brand}</p>
            <p>Price: ${product.price}</p>
            <p>${product.description}</p>
        `;
    } else {
        console.log("Product not found");
    }
}
displayProduct(3);




