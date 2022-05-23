let newDiv;
let divAmount = 256;

for (let i = 0; i < divAmount; i++) {
    
newDiv = document.createElement("div");
newDiv.className = "grid-div";
document.getElementById("grid-container").appendChild(newDiv);
}

function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
      color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
} 

let hover = document.getElementById("grid-container");

hover.addEventListener("mouseover", function(event) {
    event.target.style.backgroundColor = randomColor();
})

