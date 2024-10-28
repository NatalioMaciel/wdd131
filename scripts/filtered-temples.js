const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Asuncion Paraguay",
        location: "Asuncion, Paraguay",
        dedicated: "2002, Mayo, 19",
        area: 11906,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/asuncion-paraguay-temple/asuncion-paraguay-temple-6969.jpg"
    },
    {
        templeName: "Bogotá Colombia",
        location: "Bogotá, Colombia",
        dedicated: "1999, April, 26",
        area: 53500,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/bogota-colombia-temple/bogota-colombia-temple-28832.jpg"
    },
    {
        templeName: "Buenos Aires Argentina",
        location: "Buenos Aires, Argentina",
        dedicated: "1986, January, 19",
        area: 30659,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/buenos-aires-argentina-temple/buenos-aires-argentina-temple-4088.jpg"
    },

    // Add more temple objects here...
];

function createTempleCard(templesToShow) {
    const templeGrid = document.querySelector(".temples-grid");
    templeGrid.innerHTML = "";

    templesToShow.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", "${temple.templeName} Temple");
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        templeGrid.appendChild(card);
    });
}

const oldlink = document.querySelector("#old");
const newlink = document.querySelector("#new");
const largelink = document.querySelector("#large");
const smalllink = document.querySelector("#small");
const homelink = document.querySelector("#home");

oldlink.addEventListener("click", () => {
    const filteredOldTemples = temples.filter(temple => {
        const dedicatedYear = parseInt(temple.dedicated.split(",")[0]);
        return dedicatedYear < 1900;
    });

    createTempleCard(filteredOldTemples);
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

    createTempleCard(homeTemples);
});

function displayCopyright() {
    const currentYear = new Date().getFullYear();
    document.getElementById('copyright').textContent = `© ${currentYear} ⚒️ Natalio Maciel ⚒️ Luque, Paraguay`;
}

function displayLastModified() {
    const lastModified = document.lastModified;
    document.getElementById('last-modified').textContent = `Last modification: ${lastModified}`;
}

window.onload = () => {
    createTempleCard(temples);
    displayCopyright();
    displayLastModified();
};