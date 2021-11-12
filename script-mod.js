// never finished this to do revealing module pattern instead
    const gameFlow = (function() {

        const squareUpdate = () => {
     //   function squareUpdate(player) {
            let squareContent = this.textContent;
    
            console.log(this);
            if (squareContent=="") {
            this.textContent="x";
    
            }
        }
    
        return {squareUpdate}
    })();
    

// Game board object
const gameBoardModule = {

    init: function () {

        this.createRows();
        this.createGameSquares();
    },

    cacheDom: function() {
        const gameBoard = document.getElementById('gameboard');

    },
    
    createRows: function () {
        const numberOfRows = 3;
        const row=[];

        for (i=0; i<numberOfRows; i++) {
            let rowInit = document.createElement("div");
            rowInit.id = i;
            rowInit.classList.add("row");
            row.push(rowInit);
            console.log("Row "+row);

            gameboard.appendChild(rowInit);

        }       
    },

    createGameSquares : function () {
        const gameBoardSquares = [];
        const numberOfGameSquares = 9;
        let squareState; 
        let list=[];

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
            list[i].addEventListener("click", gameFlow.squareUpdate.bind(this)); 
        }
    }  

};

gameBoardModule.init();

