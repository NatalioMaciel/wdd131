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
    productList.innerHTML +=`
        <select name="product" id="productReview" required>
            <option id="${product.id}" name="${product.name}">${product.name}</option>
        </select>
    `
});

let reviewCounter = localStorage.getItem("reviewCounter") || 0;
document.getElementById("reviewCounter").textContent = reviewCounter;

const reviewForm = document.getElementById("reviewForm");
reviewForm.addEventListener("submit", (event) => {
  event.preventDefault(); 
  reviewCounter++;
  localStorage.setItem("reviewCounter", reviewCounter);
  document.getElementById("reviewCounter").textContent = reviewCounter;

  window.location.href = "review.html";
});

function displayCopyright() {
    const currentYear = new Date().getFullYear();
    document.getElementById('copyright').textContent = `© ${currentYear} ⚒️ Natalio Maciel ⚒️ Luque, Paraguay`;
};

function displayLastModified() {
    const lastModified = document.lastModified;
    document.getElementById('last-modified').textContent = `Last modification: ${lastModified}`;
};

window.onload = 
displayCopyright(),
displayLastModified()
;
