function randHex () {
    let hasil = Math.floor(Math.random()*256);
    return hasil;
}



function changeColor(color = `rgb(${randHex()},${randHex()},${randHex()})`) {
    const divs = document.querySelectorAll(".board div")
    console.log("Tes")
    divs.forEach((div)=>{
        div.addEventListener('mouseover',()=>{
            div.style.backgroundColor = color;
        });
    })
}
function sparkles() {
    const divs = document.querySelectorAll(".board div")
    console.log("Tes")
    divs.forEach((div)=>{
        div.addEventListener('mouseover',()=>{
            div.style.backgroundColor = `rgb(${randHex()},${randHex()},${randHex()})`;
        });
    })
}

function createBoard(size = 16, color = "black") {
    // const colorButton = document.querySelector(".control-panel button#color")
    const board = document.querySelector('.board');

    // Adding grid into the board
    board.style.gridTemplateColumns = `repeat(${size},1fr)`
    board.style.gridTemplateRows = `repeat(${size},1fr)`
    
    // Adding divs into these grids
    let totalDivs = size**2;
    
    for (let i = 0; i < totalDivs; i++){
        let div = document.createElement("div");
        
        // Adding Hover Event Listener
        div.addEventListener('mouseover',()=>{
            div.style.backgroundColor = color;
        });
        
        board.insertAdjacentElement("beforeend",div);
    }
}

function resetBoard(){
    const divs = document.querySelectorAll(".board div")
    console.log("Tes")
    divs.forEach((div)=>{
        div.style.backgroundColor="var(--bgPrimary)";
    })
    
}

function getSize () {
    let size = parseInt(prompt("Choose you size between 1-100"));
    let warn = (document.querySelector(".header p"));
    if (size <= 0) {
        warn.textContent = "Your value is less than 0.";
        return false;
    }
    else if (size >= 100) {
        warn.textContent = "Your value is more than 100.";
        return false;
    }
    else {
        return size;
    }
}



document.addEventListener('DOMContentLoaded', () => {
    const buttonSize = document.querySelector(".header button");
    const resetButton = document.querySelector(".control-panel button#reset")
    const colorButton = document.querySelector(".control-panel button#color")
    const sparklesButton = document.querySelector(".control-panel button#sparkles")
    let size = 16;
    createBoard();

    buttonSize.addEventListener('click',()=>{
        size = getSize();
        if (size === false) return;
        createBoard(size);
        resetBoard();
    });

    resetButton.addEventListener('click',()=>{
        resetBoard();
    });

    colorButton.addEventListener('click', () => {
        changeColor();
    })
    sparklesButton.addEventListener('click', () => {
        sparkles();
    })

})