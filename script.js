const gameBoardModule = (function() {
 
    let list=[];
    const numberOfGameSquares = 9;


    function init() {
        const gameBoard = document.getElementById('gameboard');
        let squareState; 
    

        const numberOfRows = 3;
        const row=[];
        
        const gameBoardSquares = [];

        //create rows for squares to go in
        for (i=0; i<numberOfRows; i++) {
            let rowInit = document.createElement("div");
            rowInit.id = i;
            rowInit.classList.add("row");
            row.push(rowInit);
            gameboard.appendChild(rowInit);
         }
    

        //create squares
        for (i=0; i<numberOfGameSquares; i++) {
            list[i] = document.createElement("div");
            list[i].id=i;
            list[i].classList.add("square");
            squareState = "";
            list[i].textContent = squareState;
            if (i<3) {
                row[0].appendChild(list[i]);
            }
            else if (i>=3 && i<6) {
                row[1].appendChild(list[i]);
            }
            else if (i>=6) {
                row[2].appendChild(list[i]);
            }

            gameBoardSquares.push(squareState);
        }
        // event listeners
     /*    for (i=0; i< gameBoardSquares.length; i++) {
            list[i].addEventListener("click", squareUpdate); 
        } */
    
    }
    init();

    
   function squareUpdate() {
            let squareContent = this.textContent;
            if (squareContent=="") {
                this.textContent = gameFlow.whoseTurn();
                //gameFlow.assessBoardState();
    
            }
        }

    function clearBoard () {
        for (i=0; i<list.length; i++) {
        list[i].textContent = "";
        console.log("List i " + list[i].textContent);
        }
      
    }
    
        return {list, clearBoard, numberOfGameSquares, squareUpdate};
    })();

const gameFlow = (function() {
        let turn ="x"; 
        let totalNumberOfGoes = gameBoardModule.numberOfGameSquares;
        let numberOfGoesCount = 1;

        // set event listeners 
            for (i=0; i< gameBoardModule.list.length; i++) {
                console.log("List for listener " + gameBoardModule.list[i].textContent);
                gameBoardModule.list[i].addEventListener("click", gameBoardModule.squareUpdate); 
            } 
        

        function whoseTurn() {

            if (numberOfGoesCount < totalNumberOfGoes) {
                console.log("Number of goes " +numberOfGoesCount);
                numberOfGoesCount++;
                turn= _setTurn(turn);
                assessBoardState(); 

            }
            else if (numberOfGoesCount == totalNumberOfGoes) {
               turn= _setTurn(turn);
                let winner = assessBoardState(); 
                console.log("Winner: " + winner);
               _playerWins("tie");
 
            }
            return turn;  


        }
        function _setTurn(turn) {
            
                turn=="x" ? turn="o" : turn="x";
                console.log("turn " + turn);
                //assessBoardState();
                return turn
            
        } 
        
        function assessBoardState() {
            let winningResult = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

            let resultx = [];
            let resulto= [];
            let winnerPresent = false; 

            for (i=0; i<gameBoardModule.list.length; i++) {
                if (gameBoardModule.list[i].textContent =="x") {
                       resultx.push(i);
                }
                else if (gameBoardModule.list[i].textContent=="o") {
                    resulto.push(i);
                }
            }
            
                for (j=0; j<winningResult.length; j++) {
                    if (winningResult[j].every(elem => resultx.includes(elem))){
                        winnerPresent=true;
                        _playerWins("x");
                    }
                    else if (winningResult[j].every(elem => resulto.includes(elem))){
                        winnerPresent=true;
                        _playerWins("o");
                    }
                }
                return winnerPresent;
            }

            function _playerWins(player) {
                let resultMessage = document.getElementById('result');

                if (player=="x" || player=="o") {
                    resultMessage.textContent = `${player} wins!`
                }
                else if (player=="tie") {
                    resultMessage.textContent = "It's a tie!";
                }
                numberOfGoesCount=1;
                gameBoardModule.clearBoard();
            

            }

          
        return {whoseTurn: whoseTurn, assessBoardState: assessBoardState};
    })();
    



