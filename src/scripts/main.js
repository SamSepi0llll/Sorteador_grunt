document.addEventListener('DOMContentLoaded', function(){
    const form = document.querySelector('form')
    form.addEventListener('submit', function(e){
        e.preventDefault()
        let numeroMaximo = document.querySelector('#numero-maximo').value
        numeroMaximo = parseInt(numeroMaximo)

        let numeroAleatorio = Math.random() * numeroMaximo

        document.querySelector('#resultado-valor').innerText = Math.floor(numeroAleatorio + 1)
        document.querySelector('.resultado').style.display = 'block'
    })
})