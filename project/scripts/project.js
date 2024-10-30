document.addEventListener("DOMContentLoaded", () => {
    const mainnav = document.querySelector('.navigation')
    const hambutton = document.querySelector('#menu');

    hambutton.addEventListener('click', (event) => {
        mainnav.classList.toggle('show');
        hambutton.classList.toggle('show');
    });

    const category = document.querySelector('.category')
    const categorynav = document.querySelector('#categorynav');

    categorynav.addEventListener('click', (event) => {
        category.classList.toggle('show');
        categorynav.classList.toggle('show');
    });

});

const products = [
    {
        productName: "Amigurris Cr7",
        category: "Stuffed Animals",
        image: "images/cr7.jpg",
    },
    {
        productName: "Amigurris Spider",
        category: "Key Chain",
        image: "images/key_chain_spider.jpg",
    },
    {
        productName: "Amigurris Bear",
        category: "Key Chain",
        image: "images/key_chain_bear.jpg",
    },
    {
        productName: "Amigurris Bee",
        category: "Key Chain",
        image: "images/key_chain_bee.jpg",
    },
    {
        productName: "Amigurris Tomato",
        category: "Stuffed Animals",
        image: "images/small_stuffed.jpg",
    },
    {
        productName: "Amigurris chick",
        category: "Key Chain",
        image: "images/key_chain_chick.jpg",
    },
    {
        productName: "Amigurris Unicorn",
        category: "Stuffed Animals",
        image: "images/unicorn.jpg",
    },
    {
        productName: "Handmade knife",
        category: "Grill Kit",
        image: "images/handmade_knife.jpg",
    },
    {
        productName: "Board Game",
        category: "Board Game",
        image: "images/board_games.jpg",
    },
    {
        productName: "Amigurris Cat",
        category: "Stuffed Animals",
        image: "images/small_stuffed_2.jpg",
    },
    {
        productName: "Plush Bouquet Flower",
        category: "Plush Bouquet",
        image: "images/stuffed_flowers2.jpg",
    },
    {
        productName: "Plush Bouquet Dinasor",
        category: "Plush Bouquet",
        image: "images/stuffed_flowers.jpg",
    },
];

function createProducts(productToShow) {
    const productGrid = document.querySelector(".products-grid");
    productGrid.innerHTML = "";

    productToShow.forEach(products => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let category = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = products.productName;
        category.innerHTML = `<span class="figcaption"></span> ${products.category}`;
        img.setAttribute("src", products.image);
        img.setAttribute("alt", "${products.prductName}");
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(category);
        card.appendChild(img);

        productGrid.appendChild(card);
    });
}

const stuffedlink = document.querySelector("#stuffed");
const keychainlink = document.querySelector("#keyChain");
const plushlink = document.querySelector("#plush");
const boardlink = document.querySelector("#board");
const grilllink = document.querySelector("#grill");


document.addEventListener("DOMContentLoaded", () => {
    const stuffedlink = document.getElementById("stuffed");
    if (stuffedlink) {
        stuffedlink.addEventListener("click", () => {
            const filteredStuffed = products.filter(product => product.category.includes("Stuffed"));
            createProducts(filteredStuffed);
        });
    } else {
        console.error("No se encontró el elemento con ID 'stuffedlink'");
    }

    const keychainlink = document.getElementById("keyChain");
    if (keychainlink) {
        keychainlink.addEventListener("click", () => {
            const filteredKeyChain = products.filter(product => product.category.includes("Key Chain"));
            createProducts(filteredKeyChain);
        });
    } else {
        console.error("No se encontró el elemento con ID 'keychainlink'");
    }

    const plushlink = document.getElementById("plush");
    if (plushlink) {
        plushlink.addEventListener("click", () => {
            const filteredPlush = products.filter(product => product.category.includes("Plush"));
            createProducts(filteredPlush);
        });
    } else {
        console.error("No se encontró el elemento con ID 'plushlink'");
    }

    const boardlink = document.getElementById("board");
    if (boardlink) {
        boardlink.addEventListener("click", () => {
            const filteredBoard = products.filter(product => product.category.includes("Board"));
            createProducts(filteredBoard);
        });
    } else {
        console.error("No se encontró el elemento con ID 'boardlink'");
    }

    const grilllink = document.getElementById("grill");
    if (grilllink) {
        grilllink.addEventListener("click", () => {
            const filteredGrill = products.filter(product => product.category.includes("Grill"));
            createProducts(filteredGrill);
        });
    } else {
        console.error("No se encontró el elemento con ID 'grilllink'");
    }
});

function displayCopyright() {
    const currentYear = new Date().getFullYear();
    document.getElementById('copyright').textContent = `© ${currentYear} 🎨 Good Arte - Handmade products 🎨 Luque, Paraguay`;
}

function displayLastModified() {
    const lastModified = document.lastModified;
    document.getElementById('last-modified').textContent = `Last modification: ${lastModified}`;
}

window.onload = () => {
    createProducts(products);
    displayCopyright();
    displayLastModified();
};
