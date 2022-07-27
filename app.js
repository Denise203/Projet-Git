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




// function changeImage(url) {
//     document.querySelector(".img").src = url;
// }