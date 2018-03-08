var tabuleiro = Array() ;
tabuleiro[0]= Array();
tabuleiro[1]= Array();
tabuleiro[2]= Array();

for(var i=0; i<3; i++){
    for(var j=0; j<3; j++){
        tabuleiro[i][j] = "0";
    }
}

var vez = 1;

var n_jogadas = 0;

function jogada(i,j,numero){
    n_jogadas++;
    if(n_jogadas > 9){
        alert('DEU VELHA')
        return;
    }
    
    if(vez > 2){
        return;
    }

    if(vez == 1){
        tabuleiro[i][j] = 'X';
        vez++;

        document.getElementById(numero).style.background = "#00a8f3";

        if(tabuleiro[0][0] == 'X' && tabuleiro[0][1] == 'X' && tabuleiro[0][2] == 'X' ){
            alert ('jogador 1 venceu');
            vez=vez+2;
            return;
        }
        if(tabuleiro[1][0] == 'X' && tabuleiro[1][1] == 'X' && tabuleiro[1][2] == 'X' ){
            alert ('jogador 1 venceu');
            vez=vez+2;
            return;
        }
        if(tabuleiro[2][0] == 'X' && tabuleiro[2][1] == 'X' && tabuleiro[2][2] == 'X' ){
            alert ('jogador 1 venceu');
            vez=vez+2;
            return;
        }
        if(tabuleiro[0][0] == 'X' && tabuleiro[1][0] == 'X' && tabuleiro[2][0] == 'X' ){
            alert ('jogador 1 venceu');
            vez=vez+2;
            return;
        }
        if(tabuleiro[0][1] == 'X' && tabuleiro[1][1] == 'X' && tabuleiro[2][1] == 'X' ){
            alert ('jogador 1 venceu');
            vez=vez+2;
            return;
        }
        if(tabuleiro[0][2] == 'X' && tabuleiro[1][2] == 'X' && tabuleiro[2][2] == 'X' ){
            alert ('jogador 1 venceu');
            vez=vez+2;
            return;
        }
        if(tabuleiro[0][0] == 'X' && tabuleiro[1][1] == 'X' && tabuleiro[2][2] == 'X' ){
            alert ('jogador 1 venceu');
            vez=vez+2;
            return;
        }
        if(tabuleiro[0][2] == 'X' && tabuleiro[1][1] == 'X' && tabuleiro[2][0] == 'X' ){
            alert ('jogador 1 venceu');
            vez=vez+2;
            return;
        }

        return;
    }

    if(vez == 2){
        tabuleiro[i][j] = 'O';
        vez--;
        document.getElementById(numero).style.background = "#cf4856";
        if(tabuleiro[0][0] == 'O' && tabuleiro[0][1] == 'O' && tabuleiro[0][2] == 'O' ){
            alert ('jogador 2 venceu');
            vez=vez+2;
            return;
        }
        if(tabuleiro[1][0] == 'O' && tabuleiro[1][1] == 'O' && tabuleiro[1][2] == 'O' ){
            alert ('jogador 2 venceu');
            vez=vez+2;
            return;
        }
        if(tabuleiro[2][0] == 'O' && tabuleiro[2][1] == 'O' && tabuleiro[2][2] == 'O' ){
            alert ('jogador 2 venceu');
            vez=vez+2;
            return;
        }
        if(tabuleiro[0][0] == 'O' && tabuleiro[1][0] == 'O' && tabuleiro[2][0] == 'O' ){
            alert ('jogador 2 venceu');
            vez=vez+2;
            return;
        }
        if(tabuleiro[0][1] == 'O' && tabuleiro[1][1] == 'O' && tabuleiro[2][1] == 'O' ){
            alert ('jogador 2 venceu');
            vez=vez+2;
            return;
        }
        if(tabuleiro[0][2] == 'O' && tabuleiro[1][2] == 'O' && tabuleiro[2][2] == 'O' ){
            alert ('jogador 2 venceu');
            vez=vez+2;
            return;
        }
        if(tabuleiro[0][0] == 'O' && tabuleiro[1][1] == 'O' && tabuleiro[2][2] == 'O' ){
            alert ('jogador 2 venceu');
            vez=vez+2;
            return;
        }
        if(tabuleiro[0][2] == 'O' && tabuleiro[1][1] == 'O' && tabuleiro[2][0] == 'O' ){
            alert ('jogador 2 venceu');
            vez=vez+2;
            return;
        }
        return;

    }
}

