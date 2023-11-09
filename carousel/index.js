const img = document.getElementById('img')
const imgs = document.querySelectorAll('#img img')

let index = 0

function run() {
    index++

    if(index >= imgs.length){
        index = 0
    }

    img.style.transform = `translateX(${-index * 600}px)`
}

setInterval(run, 2000)