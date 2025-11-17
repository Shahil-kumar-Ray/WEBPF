/* Create a h2 heading element with text "Hello HTML".
 Append "From JavaScript" to this text using Javascript. */
let h2 = document.createElement("h2")
h2.innerText = "hello HTML"

let body = document.querySelector('body')
body.append(h2)

h2.innerText = h2.innerText.concat("from Javascript")

// /* Create three div with common class "box". Access them 
// and add some text to each of them using Javascript */

let div = document.getElementsByClassName('box')

let j=1;
for(let i of div){
    i.innerText = `Div${j}`
    j++
}

/* Create a button element. give it a text "Click Here", 
background color of red and text color of white. Insert
the button as the first element inside the body tag. */

// let button = document.createElement("button")
// button.innerText = "Click Here"
// button.style.backgroundColor = 'red'
// button.style.color = 'white'

// let body = document.querySelector('body')
// body.prepend(button)





/* Create a button that changes the screen to dark mode 
when clicked once and light mode when clicked again */
