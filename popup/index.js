const open = document.getElementById('open')
const close = document.getElementById('close')
const popup = document.getElementById('popup')

open.addEventListener('click', () => {
    popup.classList.add('active')
})

close.addEventListener('click', () => {
    popup.classList.add('slideOut')
    setTimeout(()=> {
        popup.classList.remove('active')
        popup.classList.remove("slideOut");
    }, 1000)
})