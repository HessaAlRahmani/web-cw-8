let board = [
    ['00', '01', '02'],
    ['10', '11', '12'],
    ['20', '21', '22']
]

let turn = "O";

function press(cellNO) {
    let x = cellNO.charAt(0);
    let y = cellNO.charAt(1);

    if (turn == "O"){
        turn = "X";
    }
    else{
        turn = "O";
    }

    board[x][y] = turn;
    let cell = document.getElementById(cellNO);
    cell.innerText = turn;
    
    if(board[0][0] == turn && board[0][1] == turn && board[0][2] == turn){
        document.getElementById("status").innerText = turn;
    }

    else if(board[1][0] == turn && board[1][1] == turn && board[1][2] == turn){
        document.getElementById("status").innerText = turn;
    }

    else if(board[2][0] == turn && board[2][1] == turn && board[2][2] == turn){
        document.getElementById("status").innerText = turn;
    }

    else if(board[0][0] == turn && board[1][1] == turn && board[2][2] == turn){
        document.getElementById("status").innerText = turn;
    }

    else if(board[2][0] == turn && board[1][1] == turn && board[0][2] == turn){
        document.getElementById("status").innerText = turn;
    }

    else if(board[0][0] == turn && board[1][0] == turn && board[2][0] == turn){
        document.getElementById("status").innerText = turn;
    }

    else if(board[0][1] == turn && board[1][1] == turn && board[2][1] == turn){
        document.getElementById("status").innerText = turn;
    }

    else if(board[0][2] == turn && board[1][2] == turn && board[2][2] == turn){
        document.getElementById("status").innerText = turn;
    }

    console.log(cellNO)
    
}