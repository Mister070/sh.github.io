const button_1 = document.querySelector('#button_1_1')
const logo_1 = document.querySelector('#logo_1')

console.log(button_1)
console.log(logo_1)

button_1.addEventListener('click', function(){
    logo_1.remove()
})

const button_2 = document.querySelector('#button_1_2')
const button_3 = document.querySelector('#button_1_3')
const button_4 = document.querySelector('#button_1_4')
const logo_2 = document.querySelector('#logo_2')
const logo_3 = document.querySelector('#logo_3')
const logo_4 = document.querySelector('#logo_4')

button_2.addEventListener('click', function(){
    logo_2.remove()
})
button_3.addEventListener('click', function(){
    logo_3.remove()
})
button_4.addEventListener('click', function(){
    logo_4.remove()
})

