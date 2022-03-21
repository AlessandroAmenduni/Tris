const cells = document.querySelectorAll('.cell');
//console.log(cells[0].innerText);

const board = [];
let turn = 0;

for(let i = 0; i < cells.length; i++)
{
    const cell = cells[i];
    cell.addEventListener('click', function(){

        //controllo se c'è già un valore nella cella esco 
        if( board[i]){ 
            return;
        }

        let sign;
        if(turn % 2 == 0 ){
            sign = 'X';
        }else{
            sign = '0';
        }

        turn++;
        cell.innerText = sign;
        board[i] = sign;
        
        var victory = checkVictory();
        console.log(board);
        if(victory){            
            alert("vinto!");
        }else if(turn === 9){
            alert("pareggio!");
        }
    });
}


function checkVictory(){
    const coppieVincenti = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
        [0, 4, 8]

    ];

    for(let i = 0; i < coppieVincenti.length; i++){
        let controllo = coppieVincenti[i];
        //console.log(controllo);

        var a = controllo[0];
        var b = controllo[1];
        var c = controllo[2];

        if( board[a] && board[a] === board[b] && board[b] === board[c]){
            return true;
        }
    }
    return false;
}


function Alert(){
    var alert;
    var game = document.querySelectorAll('.game');

    alert.innerText = '<div class="alerts"><h1>!Vittoria!<h1></div>';

    game = game + alert;
}