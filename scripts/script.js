const open = document.querySelector(".open")
const close = document.querySelector(".close")
const navbar = document.querySelector(".navbar")
const logo = document.querySelector("#logo")
const background = document.querySelector(".background-image")
const banner = document.querySelector(".banner-image")
const header = document.querySelector(".header")

function openSidebar() {
        open.classList.add("hidden")
        close.classList.remove("hidden")
        navbar.classList.remove("hidden-sm")
        header.classList.add("primary")
        logo.classList.add("whitesmoke")
        close.classList.add("whitesmoke")
}
function closeSidebar() {
        open.classList.remove("hidden")
        close.classList.add("hidden")
        navbar.classList.add("hidden-sm")
        header.classList.remove("primary")
        logo.classList.remove("whitesmoke")
        close.classList.remove("whitesmoke")
}

const saves = document.querySelectorAll(".card-save")

saves.forEach(save => {
    save.addEventListener("click", function(event) {
        event.preventDefault()
        saveProject(event)
    });
});

function saveProject(event) {
    const save = event.currentTarget
    if (save.classList.contains("saved")) {
        save.classList.remove("saved")
    } else {
        save.classList.add("saved")
    }
}


const btnTodos = document.querySelector("#btn-todos");
const btnComerciais = document.querySelector("#btn-comerciais");
const btnResidenciais = document.querySelector("#btn-residenciais");

const comerciais = document.querySelector(".comerciais");
const residenciais = document.querySelector(".residenciais");

function exibirTodos() {
    comerciais.classList.remove("hidden")
    residenciais.classList.remove("hidden")
    btnTodos.classList.add("active")
    btnComerciais.classList.remove("active")
    btnResidenciais.classList.remove("active")
}

function exibirComerciais() {
    comerciais.classList.remove("hidden")
    residenciais.classList.add("hidden")
    btnTodos.classList.remove("active")
    btnComerciais.classList.add("active")
    btnResidenciais.classList.remove("active")
}

function exibirResidenciais() {
    comerciais.classList.add("hidden")
    residenciais.classList.remove("hidden")
    btnTodos.classList.remove("active")
    btnComerciais.classList.remove("active")
    btnResidenciais.classList.add("active")
}


document.addEventListener("DOMContentLoaded", function() {  
    var textos = ["inspira", "transforma", "inova", "encanta"]
    var contador = 0
    const rotative = document.querySelector(".rotative-text")

    function mudarTexto() {
        rotative.innerHTML = textos[contador]
        contador++;
        if (contador >= textos.length) {
            contador = 0;
        }
    }
    setInterval(mudarTexto, 3000);
});

var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

document.addEventListener("click", closeAllSelect);



function openDropdown() {
    document.querySelector("#dropdown").classList.toggle("show");
    document.querySelector(".dropbtn").classList.toggle("selected");
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

updateSliders();
updateColor();

function changeBackground(backgroundColor = color.value) {
    openDropdown()
    document.body.style.backgroundColor = backgroundColor;
    document.body.style.color = textColor;
}

function getTextColor(r, g, b) {
    let luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance > 0.5 ? 'black' : 'white';
}

    