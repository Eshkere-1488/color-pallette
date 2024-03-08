const btn = document.querySelector('.colour-choser')
let colourDiv = document.querySelector('.colour')
let currentColour = document.querySelector('.current-colour')
let allTheColours = document.querySelector('.all-the-colours')
let prevColours = document.querySelector('.prev-colours')
let placeholder = document.querySelector('.placeholder')
clicked = false
let n = new Number
btn.addEventListener('click', () => {
    n = (Math.random() * 0xfffff * 1000000).toString(16);
    placeholder.style.display = 'none'
    colourDiv.style.backgroundColor = `#${n.slice(0, 6)}`
    currentColour.textContent = `#${n.slice(0, 6)}`
    let newColour = document.createElement('div')
    newColour.classList.add('new-colour')
    newColour.style.backgroundColor = `#${n.slice(0, 6)}`
    allTheColours.append(newColour)
    allTheColours.style.alignItems = 'normal'
    allTheColours.style.justifyContent = 'normal'
    document.querySelectorAll('.new-colour').forEach(e => {
        e.addEventListener('click', () => {
            colourDiv.style.backgroundColor = e.style.backgroundColor
        });
    })
})
currentColour.addEventListener('click', () => {
    navigator.clipboard.writeText(`#${n.slice(0, 6)}`)
})
currentColour.addEventListener('mouseover', () => {
    currentColour.textContent = 'Copy'
})
currentColour.addEventListener('mouseout', () => {
    currentColour.textContent = `#${n.slice(0, 6)}`
})
prevColours.addEventListener('click', () => {
    if (clicked == false) {
        allTheColours.style.display = 'flex'
        clicked = true
    } else {
        allTheColours.style.display = 'none'
        clicked = false
    }
})