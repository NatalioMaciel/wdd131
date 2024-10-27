const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];
const productList = document.getElementById("productReview")

products.forEach(product => {
    productList.innerHTML += `
        <select name="product" id="productReview" required>
            <option id="${product.id}" name="${product.name}">${product.name}</option>
        </select>
    `
});

function displayCopyright() {
    const currentYear = new Date().getFullYear();
    document.getElementById('copyright').textContent = `© ${currentYear} ⚒️ Natalio Maciel ⚒️ Luque, Paraguay`;
};

function displayLastModified() {
    const lastModified = document.lastModified;
    document.getElementById('last-modified').textContent = `Last modification: ${lastModified}`;
};




/*
const visitsReview = document.getElementById(".reviewCounter")
let numReviews = localStorage.getItem(JSON.parse("numReviews")) || 0;

reviewForm.addEventListener("submit", (event) => {
    if (numReviews !== 0) {
        visitsReview.textContent = numReviews;
    } else {
        visitsReview.textContent = `1`;
    }
    numReviews++;
    localStorage.setItem("numReviews", JSON.stringify(numReviews));
    console.log(numReviews);
});*/

window.onload = () => {
    displayCopyright();
    displayLastModified();
};
