
const gameFlow = (function() {
        let turn ="x"; 

        function whoseTurn() {
            turn= _nextTurn(turn);   
            return turn;  

        }
        function _nextTurn(turn) {
            
                turn=="x" ? turn="o" : turn="x";
                console.log("next turn " + turn);
                //assessBoardState();
                return turn
            
        } 
        
        function assessBoardState() {
            let winningResult = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

            let resultx = [];
            let resulto= [];
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
                        _playerWins("x");
                        //console.log("X Wins!");
                    }
                    else if (winningResult[j].every(elem => resulto.includes(elem))){
                        //console.log("O Wins!");
                        _playerWins("o");
                    }
                }
                
                            

            }

            function _playerWins(player) {
                console.log(`${player} wins!`);

            //update message on dom
            //clear screen or at least freeze it
            //give option for new game

            }
               
        
            
    
        return {whoseTurn: whoseTurn, assessBoardState: assessBoardState};
    })();
    

const gameBoardModule = (function() {
    const gameBoard = document.getElementById('gameboard');
    let squareState; 
    let list=[];

    //create rows for squares to go in
    const numberOfRows = 3;
    const row=[];
    for (i=0; i<numberOfRows; i++) {
        let rowInit = document.createElement("div");
        rowInit.id = i;
        rowInit.classList.add("row");
        row.push(rowInit);
        gameboard.appendChild(rowInit);
     }

    // create gamesquares
    const gameBoardSquares = [];
    const numberOfGameSquares = 9;
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

    for (i=0; i< gameBoardSquares.length; i++) {
        list[i].addEventListener("click", squareUpdate); 
    }

    function _render () {

    }
    
   function squareUpdate() {
            let squareContent = this.textContent;
            const player = gameFlow.whoseTurn();
            console.log("player " + player);
            console.log(this);
            if (squareContent=="") {
            this.textContent=player;
            gameFlow.assessBoardState();
    
            }
        }
        return {list};
    })();

