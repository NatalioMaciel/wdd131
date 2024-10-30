const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
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
        category.innerHTML = `<span class="label">Category:</span> ${products.category}`;
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
const keychainlink = document.querySelector("#keychain");
const plushlink = document.querySelector("#plush");
const boardlink = document.querySelector("#board");
const grilllink = document.querySelector("#grill");
/*
stuffedlink.addEventListener("click", () => {
    const filteredStuffed = products.filter(product => products.category.includes("Stuffed"))

    createProducts(filteredStuffed);
});

newlink.addEventListener("click", () => {
    const filteredNewTemples = temples.filter(temple => {
        const dedicatedYear = parseInt(temple.dedicated.split(",")[0]);
        return dedicatedYear > 2000;
    });

    createTempleCard(filteredNewTemples);
});

largelink.addEventListener("click", () => {
    const largeTemples = temples.filter(temples => {
        tArea = temples.area;
        return tArea > 90000;
    });

    createTempleCard(largeTemples);
});

smalllink.addEventListener("click", () => {
    const smallTemples = temples.filter(temples => {
        tArea = temples.area;
        return tArea < 10000;
    });

    createTempleCard(smallTemples);
});

homelink.addEventListener("click", () => {
    const homeTemples = temples.filter(temples => {
        tHome = temples.templeName;
        return tHome !== "";
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