document.addEventListener('DOMContentLoaded', () =>  {
    const gridDisplay = document.querySelector('.grid')
    let squares = []
    const width = 4

    function createBoard(){
        for (let i = 0; i < width*width; i++){
            let square = document.createElement('div')
            square.innerHTML = null
            gridDisplay.appendChild(square)
            squares.push(square)
        }
        generate()
        generate()
    }

    createBoard()


    function generate() {
        let beginningNums = [2, 4]
        var randBeginningNum = Math.floor(Math.random() * beginningNums.length)
        var randomNumber = Math.floor(Math.random() * squares.length)
        if (squares[randomNumber].innerHTML == 0) {
        squares[randomNumber].innerHTML = beginningNums[randBeginningNum]
        // checkForGameOver()
        } else generate()
    }
})
