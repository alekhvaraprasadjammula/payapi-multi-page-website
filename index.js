const menuButton = document.getElementById("menu-button")
const menu = document.getElementById('menu')

function hideShowMenu() {
    console.log(menu)
    if (menu.classList.contains('active')){
        menu.classList.remove('active')
        setTimeout(() => {
            menuButton.classList.remove('active')
        }, 400)
    }
    else{
        menu.classList.add('active')
        menuButton.classList.add('active')
    }
}




