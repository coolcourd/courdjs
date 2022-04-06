const makeModal = (triggerElem, inside) => {
    randomId = `lightbox${Math.floor(Math.random() * 1000000000)}`
    openModal = () => {
        const modal = document.createElement('div')
        modal.id = randomId
        modal.class = 'courd-modal'
        modal.style.position = 'fixed'
        document.body.appendChild(modal)
        modal.style.width = '100vw'
        modal.style.height = '100vh'
        modal.style.background = 'rgba(0, 0, 0, .3)'
        modal.style.top = '0px'
        modal.style.zIndex = 99998
        const myDiv = document.createElement('div')
        myDiv.style.width = '80vw'
        myDiv.style.height = '80vh'
        myDiv.innerHTML = inside
        myDiv.addEventListener("click", function(e) {
            e.stopPropagation();
        });
        modal.style.display = 'flex'
        modal.style.alignItems = 'center'
        modal.style.justifyContent = 'center'
        modal.appendChild(myDiv)
        modal.addEventListener('click', modal.remove)
        myDiv.style.boxShadow = '1px 1px 20px black'
    }

    triggerElem.style.cursor = 'pointer'
    triggerElem.addEventListener('click', () => openModal())
    return () => document.getElementById(randomId).remove()
}


// //example
// const hello = document.querySelector('#target')
// const inside = `
// <div>
// I am a modal!
// </div>
// `

// const removeModal = makeModal(hello, inside)
