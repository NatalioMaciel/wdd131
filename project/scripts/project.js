document.addEventListener("DOMContentLoaded", () => {

    const mainnav = document.querySelector('.navigation')
    const hambutton = document.querySelector('#menu');

    hambutton.addEventListener('click', (event) => {
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

    const searchInput = document.getElementById('search');

    searchInput.addEventListener('input', function () {
        const filter = searchInput.value.toLowerCase();
        const filteredProducts = products.filter(product =>
            product.productName.toLowerCase().includes(filter)
        );
        createProducts(filteredProducts);
    });

    createProducts(products);


    const popup = document.getElementById("popup");
    const closePopup = document.getElementById("closePopup");
    const orderForm = document.getElementById("orderForm");
    const message = document.getElementById("message");

    function createProducts(productToShow) {
        const productGrid = document.querySelector(".products-grid");
        productGrid.innerHTML = "";

        productToShow.forEach(products => {
            let card = document.createElement("section");
            let name = document.createElement("h3");
            let category = document.createElement("p");
            let img = document.createElement("img");
            let button = document.createElement("button");

            name.textContent = products.productName;
            category.innerHTML = `<span class="figcaption"></span> ${products.category}`;
            img.setAttribute("src", products.image);
            img.setAttribute("alt", `${products.productName}`);
            img.setAttribute("loading", "lazy");
            button.textContent = "Order it now";
            button.className = "select-button";

            button.addEventListener("click", () => {
                popup.style.display = "block";
            });

            card.appendChild(name);
            card.appendChild(category);
            card.appendChild(img);
            card.appendChild(button);

            productGrid.appendChild(card);
        });
    }

    /*
    closePopup.addEventListener("click", () => {
        popup.style.display = "none";
    });

    
    orderForm.addEventListener("submit", (event) => {
        event.preventDefault(); 

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;

        message.textContent = `Gracias ${name}, nos contactaremos contigo para verificar los detalles de tu pedido.`;
        message.style.display = "block"; 

        setTimeout(() => {
            popup.style.display = "none"; 
        }, 3000);
    });*/

    document.getElementById("ContactForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Evita que se recargue la página

        // Recoger los datos del formulario
        const fullname = document.getElementById("fullname").value;
        const phonenumber = document.getElementById("phonenumber").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("msg").value;
        const newsletter = document.getElementById("newsletter").checked;

        // Crear un objeto con la información
        const contactInfo = {
            name: fullname,
            phone: phonenumber,
            email: email,
            message: message,
            subscribe: newsletter
        };

        // Recuperar el array existente del localStorage o inicializar uno nuevo
        const existingContacts = JSON.parse(localStorage.getItem("contacts")) || [];

        // Agregar el nuevo contacto al array
        existingContacts.push(contactInfo);

        // Guardar el array actualizado en localStorage
        localStorage.setItem("contacts", JSON.stringify(existingContacts));

        // Mostrar mensaje de agradecimiento
        document.getElementById("thankYouMessage").style.display = "block";

        // Limpiar el formulario (opcional)
        this.reset();
    });


    const stuffedlink = document.getElementById("stuffed");
    if (stuffedlink) {
        stuffedlink.addEventListener("click", () => {
            const filteredStuffed = products.filter(product => product.category.includes("Stuffed"));
            createProducts(filteredStuffed);
        });
    }

    const keychainlink = document.getElementById("keyChain");
    if (keychainlink) {
        keychainlink.addEventListener("click", () => {
            const filteredKeyChain = products.filter(product => product.category.includes("Key Chain"));
            createProducts(filteredKeyChain);
        });
    }

    const plushlink = document.getElementById("plush");
    if (plushlink) {
        plushlink.addEventListener("click", () => {
            const filteredPlush = products.filter(product => product.category.includes("Plush"));
            createProducts(filteredPlush);
        });
    }

    const boardlink = document.getElementById("board");
    if (boardlink) {
        boardlink.addEventListener("click", () => {
            const filteredBoard = products.filter(product => product.category.includes("Board"));
            createProducts(filteredBoard);
        });
    }

    const grilllink = document.getElementById("grill");
    if (grilllink) {
        grilllink.addEventListener("click", () => {
            const filteredGrill = products.filter(product => product.category.includes("Grill"));
            createProducts(filteredGrill);
        });
    }

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
});


