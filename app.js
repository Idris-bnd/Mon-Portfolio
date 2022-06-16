const animationDeTexte = document.querySelector('span');
const boxswipe = document.querySelector('.boxswipe');
const Homebutton = document.getElementById('buttonhome');

const liens = document.querySelector('nav .rightnav a');//transition
const transition = document.querySelector('.transition');//transition



//animation écriture
new Typewriter(animationDeTexte, {
    deleteSpeed: 40
})

.changeDelay('50')
.typeString('Développeur <span style="font-style: italic;">Front-end</span>,')
.pauseFor('800')
.typeString('<span style="color: #FF5733"> HTML</span>')
.pauseFor('800')
.deleteChars('4')
.pauseFor('500')
.typeString('<span style="color: #5BACF6">CSS</span>')
.pauseFor('800')
.deleteChars('3')
.pauseFor('500')
.typeString('<span style="color: #C5DA41;">JavaScript</span>.')
.pauseFor('2400')
.deleteChars('14')
.pauseFor('400')
.typeString('.')
.start()
//animation écriture


//transition

setTimeout(() =>{
    transition.classList.remove('active')
}, 400)


liens.addEventListener('click', (e) => {
    e.preventDefault()
    lienclic = liens.href;

    transition.classList.add('active')
    setTimeout(() => {
        window.location.href = lienclic
    }, 400)
})
