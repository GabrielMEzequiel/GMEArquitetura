function openDropdown(indice) {
    if (indice == 0) {
        document.querySelector("#corPredefinida").classList.toggle("show");
        document.querySelector(".btnPredefinida").classList.toggle("selected");
    } else {
        document.querySelector("#corPersonalizada").classList.toggle("show");
        document.querySelector(".btnPersonalizada").classList.toggle("selected");
    }
    
}

let radioButtons = document.querySelectorAll('input[name="colorFormat"]');
let radioChecked = 0;

let color = document.querySelector("#color");
let textColor;

let rgbSlider = document.querySelectorAll(".rgbSlider");
let rgbOutput = document.querySelectorAll(".rgbOutput");
let rgbLabel = document.querySelectorAll(".rgbLabel");

let hslSlider = document.querySelectorAll(".hslSlider");
let hslOutput = document.querySelectorAll(".hslOutput");
let hslLabel = document.querySelectorAll(".hslLabel");

radioButtons.forEach(function(radio) {
    radio.addEventListener('change', function(event) {
        radioChecked = parseInt(event.target.value);
        updateSliders();
    });
});

color.addEventListener('input', function() {
    updateSlidersFromInput();
});

function updateSliders() {
    if (radioChecked === 0) { // RGB
        for (let i = 0; i < 3; i++) {
            document.querySelector(".rgbSliders").classList.remove("hidden");
            document.querySelector(".hslSliders").classList.add("hidden");
            
            rgbOutput[i].textContent = rgbSlider[i].value;
            updateColor();

            rgbSlider[i].addEventListener('input', function() {
                rgbOutput[i].textContent = rgbSlider[i].value;
                updateColor();
            });
        }
    } else if (radioChecked === 1) { // HEX
        for (let i = 0; i < 3; i++) {
            document.querySelector(".rgbSliders").classList.remove("hidden");
            document.querySelector(".hslSliders").classList.add("hidden");

            rgbOutput[i].textContent = parseInt(rgbSlider[i].value).toString(16).padStart(2, '0');
            updateColor();

            rgbSlider[i].addEventListener('input', function() {
                rgbOutput[i].textContent = parseInt(rgbSlider[i].value).toString(16).padStart(2, '0');
                updateColor();
            });
        }
    } else { // HSL
        for (let i = 0; i < 3; i++) {
            document.querySelector(".rgbSliders").classList.add("hidden");
            document.querySelector(".hslSliders").classList.remove("hidden");

            if (i === 0) {
                hslOutput[i].textContent = hslSlider[i].value;
            } else {
                hslOutput[i].textContent = hslSlider[i].value + "%";
            }
            updateColor();

            hslSlider[i].addEventListener('input', function() {
                if (i === 0) {
                    hslOutput[i].textContent = hslSlider[i].value;
                } else {
                    hslOutput[i].textContent = hslSlider[i].value + "%";
                }
                updateColor();
            });
        }
    }
}

function updateColor() {
    if (radioChecked === 0) { // RGB
        let r = rgbSlider[0].value;
        let g = rgbSlider[1].value;
        let b = rgbSlider[2].value;
        textColor = getTextColor(r, g, b);

        color.value = `rgb(${r}, ${g}, ${b})`;
        color.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        color.style.color = textColor;
    } else if (radioChecked === 1) { // HEX
        let r = parseInt(rgbSlider[0].value).toString(16).padStart(2, '0');
        let g = parseInt(rgbSlider[1].value).toString(16).padStart(2, '0');
        let b = parseInt(rgbSlider[2].value).toString(16).padStart(2, '0');
        textColor = getTextColor(parseInt(r, 16), parseInt(g, 16), parseInt(b, 16));

        color.value = `#${r}${g}${b}`;
        color.style.backgroundColor = `#${r}${g}${b}`;
        color.style.color = textColor;
    } else { // HSL
        let h = hslSlider[0].value;
        let s = hslSlider[1].value;
        let l = hslSlider[2].value;
        let rgbColor = hslToRgb(parseInt(h), parseInt(s) / 100, parseInt(l) / 100);
        textColor = getTextColor(rgbColor.r, rgbColor.g, rgbColor.b);
                
        color.value = `hsl(${h}, ${s}%, ${l}%)`;
        color.style.backgroundColor = `hsl(${h}, ${s}%, ${l}%)`;
        color.style.color = textColor;
    }
}

function updateSlidersFromInput() {
    let value = color.value.trim();
    if (radioChecked === 0 && value.startsWith("rgb")) {
        let rgb = value.match(/\d+/g);
        if (rgb && rgb.length === 3) {
            rgbSlider[0].value = rgb[0];
            rgbSlider[1].value = rgb[1];
            rgbSlider[2].value = rgb[2];
            updateSliders();
        }
    } else if (radioChecked === 1 && value.startsWith("#")) {
        let hex = value.replace("#", "");
        if (hex.length === 6) {
            rgbSlider[0].value = parseInt(hex.substring(0, 2), 16);
            rgbSlider[1].value = parseInt(hex.substring(2, 4), 16);
            rgbSlider[2].value = parseInt(hex.substring(4, 6), 16);
            updateSliders();
        }
    } else if (radioChecked === 2 && value.startsWith("hsl")) {
        let hsl = value.match(/\d+/g);
        if (hsl && hsl.length === 3) {
            hslSlider[0].value = hsl[0];
            hslSlider[1].value = hsl[1];
            hslSlider[2].value = hsl[2];
            updateSliders();
        }
    }
}

function hslToRgb(h, s, l) {
    let r, g, b;

    if (s === 0) {
        r = g = b = l; // achromatic
    } else {
        const hue2rgb = (p, q, t) => {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        };
        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }

    return { r: Math.round(r * 255), g: Math.round(g * 255), b: Math.round(b * 255) };
}

function changeBackground(indice, backgroundColor = color.value, colorText = textColor) {
    openDropdown(indice);
    
    document.body.style.backgroundColor = backgroundColor;
    document.body.style.color = colorText;
    document.querySelectorAll(".seta").forEach( function(seta) {
       seta.style.color = colorText; 
    })
}

function getTextColor(r, g, b) {
    let luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance > 0.5 ? 'var(--color-primary)' : 'whitesmoke';
}

updateSliders();
updateColor();