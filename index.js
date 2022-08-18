let babrir = document.getElementById('boton_abrir')
let bcerrar = document.getElementById('boton_cerrar')
let sidebar = document.getElementById('sidebar')
let blink = document.querySelectorAll('.blink')


babrir.addEventListener('click', () => {
    sidebar.classList.add('mostrarSidebar')
})
bcerrar.addEventListener('click', () => {
    sidebar.classList.remove('mostrarSidebar')
})

blink.forEach(button => {
    button.addEventListener('click', () => {
    sidebar.classList.remove('mostrarSidebar')
    })
})