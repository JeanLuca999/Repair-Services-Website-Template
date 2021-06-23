const menuButton = document.getElementsByClassName('menu')[0]
const menuItems = document.getElementById('menu-items')

menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('menu-clicked')
    menuItems.classList.toggle('active')
})