let source = document.querySelector('.img')
let lien = document.querySelector('link')
let theme = 'light'
function changeTheme(){
    switch(theme) {
        case ('light'):
            lien.setAttribute('href', 'dark.css')
            source.setAttribute('src','images/lune.png' )
            theme= 'dark'
            break
        default:
            lien.setAttribute('href', 'light.css')
            source.setAttribute('src','images/soleil.png' )
            theme = 'light'
            break
    }
}



let menu = document.querySelector('.menu')
let nav = document.querySelector('nav')
let change = true
menu.addEventListener('click', function(){
    switch (change) {
        case true:
            nav.classList.add('open')
            change = false
            break;
        default:
            nav.classList.remove('open')
            change = true
            break;
    }
})