let button = document.getElementById("button")
let output = document.getElementById("output")

function randInt(max) {
    return Math.floor(Math.random() * max);
}

function randRGB() {
    return `rgb(${randInt(255)}, ${randInt(255)}, ${randInt(255)})`;
}

button.addEventListener("click", () => {
    output.style.background = randRGB();
})

// button.addEventListener("click", () => {

// let redValue = Math.ceil(Math.random() * 255)
// let greenValue = Math.ceil(Math.random() * 255)
// let blueValue = Math.ceil(Math.random() * 255)

// console.log(redValue, greenValue, blueValue)
// output.setAttribute("style", `background-color: rgb(${redValue}, ${greenValue}, ${blueValue})`)

// })
