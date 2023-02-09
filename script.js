let img = document.querySelector('.img-iphone-background img')
let btns = document.querySelectorAll('div[data-color]')
let color_text = document.querySelector('.color-text')
let openBtn = document.querySelectorAll('[data-open]')
let closeBtn = document.querySelectorAll('[data-close]')
let modal = document.querySelector('.modal')
let modalBg = document.querySelector('.modal-bg')



let img_color = {
    Purple: './IMG/iphone-14-pro-storage-select-202209-6-7inch-deeppurple.jpg',
    Gold: './IMG/iphone-14-pro-finish-select-202209-6-7inch-gold.jpg',
    Silver:'./IMG/iphone-14-pro-finish-select-202209-6-7inch-silver.jpg',
    Black: './IMG/iphone-14-pro-finish-select-202209-6-7inch-spaceblack.jpg'
}
btns.forEach(btn => {
    btn.onclick = () => {
        let key = btn.getAttribute('data-color')
        img.src = img_color[key]       
    }
})
openBtn.forEach(openBtn => {
    openBtn.onclick = () => {
        modalBg.style.display = 'block'
        modal.style.display = 'block'
    }
})

closeBtn.forEach(closeBtn => {
    closeBtn.onclick = () => {
        modalBg.style.display = 'none'
        modal.style.display = 'none'
    }
})





let Purple = document.querySelector('.color-D')
Purple.onmouseenter = () => {
    color_text.innerHTML = 'Color - Deep Purple'
}
Purple.onmouseleave = () => {
    color_text.innerHTML = 'Color - Deep Purple'
 }
 
let Gold = document.querySelector('.color-G')
Gold.onmouseenter = () => {
    color_text.innerHTML = 'Color - Gold'
}
Gold.onmouseleave = () => {
    color_text.innerHTML = 'Color - Deep Purple'
 }
 
let Silver = document.querySelector('.color-S')
Silver.onmouseenter = () => {
    color_text.innerHTML = 'Color - Silver'
}
Silver.onmouseleave = () => {
    color_text.innerHTML = 'Color - Silver'
 }
 
let Black = document.querySelector('.color-B')
Black.onmouseenter = () => {
    color_text.innerHTML = 'Color - Space Black'
}
Black.onmouseleave = () => {
    color_text.innerHTML = 'Color - Space Black'
 }
 