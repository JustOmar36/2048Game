document.addEventListener('DOMContentLoaded', () =>  {
    const gridDisplay = document.querySelector('.grid')
    const displayResult = document.getElementById('result')
    const displayScore = document.getElementById('score')
    let score = 0
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
            coloring()
            scoreDisplay()
            checkGame()
        } 
        else generate()
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

                for (let i = row.length-1; i >= 0; i--){
                    if(row[i] == row[i-1]){
                        row[i] = row[i-1]*2
                        score += row[i-1]*2
                        row[i - 1] = NaN
        
                    }
                }

                for (let j=0; j < row.length-1; j++){
                    if(row[j+1] % 2 != 0){
                        row[j + 1] = row[j]
                        row[j] = NaN
        
                    }
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
                
                for (let i = 0; i < row.length-1; i++){
                    if(row[i] == row[i+1]){
                        row[i] = row[i+1]*2
                        score += row[i+1]*2
                        row[i+1] = NaN
        
                    }
                }

                for (let j=row.length-1; j > 0; j--){
                    if(row[j-1] % 2 != 0){
                        row[j - 1] = row[j]
                        row[j] = NaN
        
                    }
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

                for (let i = 0; i < row.length-1; i++){
                    if(row[i] == row[i+1]){
                        row[i] = row[i+1]*2
                        score += row[i+1]*2
                        row[i+1] = NaN
        
                    }
                }

                for (let j=row.length-1; j > 0; j--){
                    if(row[j-1] % 2 != 0){
                        row[j - 1] = row[j]
                        row[j] = NaN
        
                    }
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

            for (let i = 0; i < row.length-1; i++){
                if(row[i] == row[i+1]){
                    row[i+1] = row[i]*2
                    score += row[i]*2
                    row[i] = NaN
    
                }
            }

            for (let j=0; j < row.length-1; j++){
                if(row[j+1] % 2 != 0){
                    row[j + 1] = row[j]
                    row[j] = NaN
    
                }
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

    function checkGame(){
        let lose = 0
        for (let i = 0; i < squares.length; i++){
            if(squares[i].innerHTML == 2048){
                displayResult.innerHTML = "You Win!"
            }
            
            if(parseInt(squares[i].innerHTML) % 2 != 0){
                lose++
            }
            
        }

        if(lose == 0){
            displayResult.innerHTML = "You Lost!"
        }
    }

    function scoreDisplay(){
        displayScore.innerHTML = score
    }

    function coloring(){
        for (let i = 0; i < squares.length; i++){
            if(squares[i].innerHTML == 0 || squares[i].innerHTML == 2){squares[i].style.backgroundColor ='#E2BB4D'; squares[i].style.color = 'black'}
            else if(squares[i].innerHTML == 4){squares[i].style.backgroundColor = '#DBA39A'; squares[i].style.color = 'white'}
            else if(squares[i].innerHTML == 8){squares[i].style.backgroundColor = '#F0DBDB'; squares[i].style.color = 'black'}
            else if(squares[i].innerHTML == 16){squares[i].style.backgroundColor = "#F5EBE0"; squares[i].style.color = 'black'}
            else if(squares[i].innerHTML == 32){squares[i].style.backgroundColor = "#C58940"; squares[i].style.color = 'white'}
            else if(squares[i].innerHTML == 64){squares[i].style.backgroundColor = "#FF7000"; squares[i].style.color = 'white'}
            else if(squares[i].innerHTML == 128){squares[i].style.backgroundColor = "#540375"; squares[i].style.color = 'white'}
            else if(squares[i].innerHTML == 256){squares[i].style.backgroundColor = "#10A19D"; squares[i].style.color = 'white'}
            else if(squares[i].innerHTML == 512){squares[i].style.backgroundColor = "#5F8D4E"; squares[i].style.color = 'white'}
            else if(squares[i].innerHTML == 1024){squares[i].style.backgroundColor = "#E5D9B6"; squares[i].style.color = 'black'}
            else if(squares[i].innerHTML >= 2048){squares[i].style.backgroundColor = "#DC3535"; squares[i].style.color = 'white'}
        }
    }

    createBoard()

    document.onkeydown = function (event){
        
        switch(event.keyCode){
            case 37:
                moveLeft()
                coloring()
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
