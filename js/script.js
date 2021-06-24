const menuButton = document.getElementsByClassName('menu')[0]
const menuItems = document.getElementById('menu-items')
const links = document.querySelectorAll('.link')

menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('menu-clicked')
    menuItems.classList.toggle('active')
    document.body.classList.toggle('body-overflow-hidden')
})

links.forEach(link => {
    link.addEventListener('click', () => {
        menuButton.classList.remove('menu-clicked')
        menuItems.classList.remove('active')
        document.body.classList.remove('body-overflow-hidden')
    })
})