// Define the static values for temperature and wind speed (matching displayed values)
let temperature = 45; // °F (use a value in °F for this example)
let windSpeed = 10;   // mph (use a value in mph for this example)


function calculateWindChill(temp, windSpeed) {
    return 35.74 + (0.6215 * temp) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temp * Math.pow(windSpeed, 0.16));
}

function displayWindChill() {
    if (temperature <= 50 && windSpeed > 3) {
        let windChill = calculateWindChill(temperature, windSpeed);
        document.getElementById("windChill").textContent = windChill.toFixed(2) + "°F";
    } else {
        document.getElementById("windChill").textContent = "N/A";
    }
}


function checkWidth() {
    const weatherimage = document.getElementById('weather-image');

    if (window.innerWidth < 1000) {
        weatherimage.style.display = 'block';
    } else {
        weatherimage.style.display = 'none';
    }
}



/*footer*/
function displayCopyright() {
    const currentYear = new Date().getFullYear();
    document.getElementById('copyright').textContent = `© ${currentYear} ⚒️ Natalio Maciel ⚒️ Luque, Paraguay`;
}

function displayLastModified() {
    const lastModified = document.lastModified;
    document.getElementById('last-modified').textContent = `Last modification: ${lastModified}`;
}



window.onresize = checkWidth;
window.onload = displayWindChill;
    displayCopyright();
    displayLastModified();
    checkWidth();