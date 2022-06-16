const liens = document.querySelectorAll('nav a');//transition
const transition = document.querySelector('.transition');//transition
console.log(liens);



//transition

setTimeout(() =>{
    transition.classList.remove('active')
}, 400)

for(i=0; i < liens.length; i++){
    let lien = liens[i]

    lien.addEventListener('click', (e) =>{
        e.preventDefault()
        lienclic = lien.href
        console.log(lienclic);

        transition.classList.add('active')
        setTimeout(() =>{
            window.location.href = lienclic
        }, 400)
    })
}