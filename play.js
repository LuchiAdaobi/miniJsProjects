const container = document.getElementById("container");
const img = document.getElementById("img");

container.addEventListener("mousemove", (e) => {
  const x = e.clientX - e.target.offsetLeft;
  const y = e.clientY - e.target.offsetTop;

  img.style.transformOrigin = `${x}px ${y}px`;
  img.style.transform = 'scale(2)';
});

container.addEventListener("mouseleave", (e) => {
  img.style.transform = `scale(1)`;
  img.style.transformOrigin = `center center`;
});

// background gradient

btn 
container

btn.addEventListener('click', ()=> {
const colorGrad = colorG()

document.body.background = colorgrad.gradient

container.innerHTML = ''

    // const text
    // text.claas

    text.innerText = `<h4> HSL Color : {colograd.color1}, {colograd.color1}
                    <h4> Grd Color : {randomColr(color1)} {randomColr(color2)}`

    container.appendChild(text)
})

function colorGrad(){
    const degree = Math.random() * 361 -1
    const color1 = `hsl(${Math.random() * 360 } , 100% 50%)`
    const color2 = `Math.random() * 360 -1`

    return {
        gradient : `linearGradiene(${degree}deg, ${color1}, ${color2})`,
        color1 : color1,
        color2 : color2,
    }
}

function randomColr(color){
    const hex = `hsl()`
    const col = hex

    if(hex > 30){
        color = 'Red'
    } else if(hex<8){
        color = 'Blue'
    } else if( hex == 8) {
        color = 'pink'
    }else {
        color = 'magenta'
    }
}

  if (hue >= 0 && hue < 15) {
    return "Red";
  } else if (hue >= 15 && hue < 45) {
    return "Orange";
  } else if (hue >= 45 && hue < 75) {
    return "Yellow";
  } else if (hue >= 75 && hue < 165) {
    return "Green";
  } else if (hue >= 165 && hue < 210) {
    return "Cyan";
  } else if (hue >= 210 && hue < 255) {
    return "Blue";
  } else if (hue >= 255 && hue < 285) {
    return "Indigo";
  } else if (hue >= 285 && hue < 315) {
    return "Violet";
  } else if (hue >= 315 && hue < 330) {
    return "Magenta";
  } else if (hue >= 330 && hue < 345) {
    return "Pink";
  } else {
    return "Red";
  }

//     if (hue >= 0 && hue < 15) {
//     return "Red";
//   } else if (hue >= 15 && hue < 45) {
//     return "Orange";
//   } else if (hue >= 45 && hue < 75) {
//     return "Yellow";
//   } else if (hue >= 75 && hue < 165) {
//     return "Green";
//   } else if (hue >= 165 && hue < 240) {
//     return "Blue";
//   } else if (hue >= 240 && hue < 300) {
//     return "Purple";
//   } else if (hue >= 300 && hue < 345) {
//     return "Pink";
//   } else {
//     return "Red";
//   }

//     if (hue >= 0 && hue < 30) {
//     return "Red";
//   } else if (hue >= 30 && hue < 90) {
//     return "Yellow";
//   } else if (hue >= 90 && hue < 150) {
//     return "Green";
//   } else if (hue >= 150 && hue < 210) {
//     return "Cyan";
//   } else if (hue >= 210 && hue < 270) {
//     return "Blue";
//   } else if (hue >= 270 && hue < 330) {
//     return "Magenta";
//   } else if (hue >= 330 && hue <= 360) {
//     return "Red";
//   } else {
//     return "Unknown"; // Default color name for any other hue values
//   }


