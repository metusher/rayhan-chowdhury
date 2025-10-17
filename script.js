const nameText = "Md. Rayhan Chowdhury";
const subtitleText = "Structural Health Monitoring | Seismic Risk Analysis";

let i = 0;
function typeEffect() {
  if (i < nameText.length) {
    document.getElementById("name").innerHTML += nameText.charAt(i);
    i++;
    setTimeout(typeEffect, 100);
  } else {
    typeSubtitle();
  }
}

let j = 0;
function typeSubtitle() {
  if (j < subtitleText.length) {
    document.getElementById("subtitle").innerHTML += subtitleText.charAt(j);
    j++;
    setTimeout(typeSubtitle, 50);
  }
}

window.onload = typeEffect;
