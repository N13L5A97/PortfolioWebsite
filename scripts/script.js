// alle knoppen in een variabele zetten

menuButton = document.querySelector('#menuButton')
homeButton = document.querySelector('#homeButton')
aboutButton = document.querySelector('#aboutButton')
projectsButton = document.querySelector('#projectsButton')
socialsButton = document.querySelector('#socialsButton')
contactButton = document.querySelector('#contactButton')


// alle knoppen toggelen het menu

menuButton.addEventListener('click', function() {
    document.querySelector('#menu').classList.toggle('open')
    console.log("check")
})

homeButton.addEventListener('click', function() {
    document.querySelector('#menu').classList.toggle('open')
    console.log("check")
})

aboutButton.addEventListener('click', function() {
    document.querySelector('#menu').classList.toggle('open')
    console.log("check")
})

projectsButton.addEventListener('click', function() {
    document.querySelector('#menu').classList.toggle('open')
    console.log("check")
})

socialsButton.addEventListener('click', function() {
    document.querySelector('#menu').classList.toggle('open')
    console.log("check")
})

contactButton.addEventListener('click', function() {
    document.querySelector('#menu').classList.toggle('open')
    console.log("check")
})





// deze functie ff beter maken 
    // function toggleMenu() {
    //     document.querySelector('#menu').classList.toggle('open')
    //     console.log("check")
    // }

    // const buttons = document.querySelectorAll('button')
    // buttons.forEach(button => button.addEventListener('click', toggleMenu))