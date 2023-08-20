const copy = document.querySelector('.button')
const VALUE = document.querySelector('#copy-url')
const ALERT = document.querySelector('.alert')

copy.addEventListener('click', function() {

    if(VALUE.value === '') {
        ALERT.classList.add('error')
    }
    navigator.clipboard.writeText(VALUE.value)
    
    ALERT.classList.add('active')

    setTimeout(function() {
        ALERT.classList.remove('active')
    },2000)
})

