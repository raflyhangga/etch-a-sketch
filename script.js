function createBoard(size = 16) {
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
            div.style.backgroundColor = "black";
        });
        
        board.insertAdjacentElement("beforeend",div);
    }


}



document.addEventListener('DOMContentLoaded', () => {
    createBoard();
})