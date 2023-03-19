let randomizeButton = document.getElementById("randomizeColor");
let output = document.getElementById("colorOutput");
randomizeButton.addEventListener("click", () => {

let redValue = Math.ceil(Math.random() * 9)
let greenValue = Math.ceil(Math.random() * 9)
let blueValue = Math.ceil(Math.random() * 9)

output.innerHTML = 4
output.setAttribute("style", "background-color: rgb(120, 56, 255)")

})
