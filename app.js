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

    function generate() {
        let beginningNums = [2, 4]
        var randBeginningNum = Math.floor(Math.random() * beginningNums.length)
        var randomNumber = Math.floor(Math.random() * squares.length)
        if (squares[randomNumber].innerHTML == 0) {
        squares[randomNumber].innerHTML = beginningNums[randBeginningNum]
        // checkForGameOver()
        } else generate()
    }

    function moveRight(){
        for (let i=0; i < squares.length; i++){
            if(i % 4 == 0){
                let item1 = squares[i].innerHTML
                let item2 = squares[i+1].innerHTML
                let item3 = squares[i+2].innerHTML
                let item4 = squares[i+3].innerHTML


                let row = [parseInt(item1), parseInt(item2), parseInt(item3), parseInt(item4)]
                let l = 0

                while(l != 4){
                    for (let j=0; j < row.length-1; j++){
                        if(row[j+1] % 2 != 0){
                            row[j + 1] = row[j]
                            row[j] = NaN
                        }
                    }
                    l++
                }

                for (let i = 0; i < row.length; i++){
                    if(isNaN(row[i])){
                        row[i] = null
                    }
                }

                squares[i].innerHTML = row[0]
                squares[i+1].innerHTML = row[1]
                squares[i+2].innerHTML = row[2]
                squares[i+3].innerHTML = row[3]

            }
        }
        
    }

    function moveLeft(){
        for (let i=0; i < squares.length; i++){
            if(i % 4 == 0){
  
                let item1 = squares[i].innerHTML
                let item2 = squares[i+1].innerHTML
                let item3 = squares[i+2].innerHTML
                let item4 = squares[i+3].innerHTML


                let row = [parseInt(item1), parseInt(item2), parseInt(item3), parseInt(item4)]
                let l = 0

                while(l != 4){
                    for (let j=row.length-1; j > 0; j--){
                        if(row[j-1] % 2 != 0){
                            row[j - 1] = row[j]
                            row[j] = NaN
                        }
                    }
                   l++
                }

                for (let i = 0; i < row.length; i++){
                    if(isNaN(row[i])){
                        row[i] = null
                    }
                }

                squares[i].innerHTML = row[0]
                squares[i+1].innerHTML = row[1]
                squares[i+2].innerHTML = row[2]
                squares[i+3].innerHTML = row[3]

            }
        }
    }

    function moveUp(){
        for (let i=0; i < 4; i++){
                let item1 = squares[i].innerHTML
                let item2 = squares[i+4].innerHTML
                let item3 = squares[i+8].innerHTML
                let item4 = squares[i+12].innerHTML

                let row = [parseInt(item1), parseInt(item2), parseInt(item3), parseInt(item4)]
                let l = 0

                while(l != 4){
                    for (let j=row.length-1; j > 0; j--){
                        if(row[j-1] % 2 != 0){
                            row[j - 1] = row[j]
                            row[j] = NaN
                        }
                    }
                    l++
                }

                for (let i = 0; i < row.length; i++){
                    if(isNaN(row[i])){
                        row[i] = null
                    }
                }


                squares[i].innerHTML = row[0]
                squares[i+4].innerHTML = row[1]
                squares[i+8].innerHTML = row[2]
                squares[i+12].innerHTML = row[3]
        }
    }
    
    function moveDown(){
        for (let i=0; i < 4; i++){
            let item1 = squares[i].innerHTML
            let item2 = squares[i+4].innerHTML
            let item3 = squares[i+8].innerHTML
            let item4 = squares[i+12].innerHTML

            let row = [parseInt(item1), parseInt(item2), parseInt(item3), parseInt(item4)]
            let l = 0

            while(l != 4){
                for (let j=0; j < row.length-1; j++){
                    if(row[j+1] % 2 != 0){
                        row[j + 1] = row[j]
                        row[j] = NaN
                    }
                }
                l++
            }

            for (let i = 0; i < row.length; i++){
                if(isNaN(row[i])){
                    row[i] = null
                }
            }


            squares[i].innerHTML = row[0]
            squares[i+4].innerHTML = row[1]
            squares[i+8].innerHTML = row[2]
            squares[i+12].innerHTML = row[3]
        }
    }

    createBoard()

    document.onkeydown = function (event){
        switch(event.keyCode){
            case 37:
                moveLeft()
                console.log("Left")
                generate()
                break
            
            case 38:
                moveUp()
                console.log("Up")
                generate()
                break

            case 39:
                moveRight()
                console.log("Right")
                generate()
                break
            
            case 40:
                moveDown()
                console.log("Down")
                generate()
                break
        }
    }
})
