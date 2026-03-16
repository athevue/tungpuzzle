var moves = 0;
var time = 0;

/* timer */

setInterval(function(){
time++;
document.getElementById("time").innerHTML=time;
},1000);


/* swap tiles */

function swapTiles(cell1, cell2){

    var temp=document.getElementById(cell1).className;

    document.getElementById(cell1).className=
    document.getElementById(cell2).className;

    document.getElementById(cell2).className=temp;

}


/* shuffle board */

function shuffle(){

    moves=0;
    time=0;

    document.getElementById("moves").innerHTML=0;
    document.getElementById("time").innerHTML=0;

    for(var row=1;row<=4;row++){

    for(var column=1;column<=4;column++){

    var row2=Math.floor(Math.random()*4+1);
    var column2=Math.floor(Math.random()*4+1);

    swapTiles("cell"+row+column,"cell"+row2+column2);

            }   

        }

    }


/* simple game */

function simpleGame(){

    swapTiles("cell44","cell43");

    moves=0;
    time=0;

    document.getElementById("moves").innerHTML=0;
    document.getElementById("time").innerHTML=0;

}


/* clicking tiles */
function clickTile(row,column){

    var tile=document.getElementById("cell"+row+column).className;

    if(tile!="tile16"){

        // RIGHT
        if(column<4){
            if(document.getElementById("cell"+row+(column+1)).className=="tile16"){
                swapTiles("cell"+row+column,"cell"+row+(column+1));
                moves++;
                document.getElementById("moves").innerHTML=moves;
                setTimeout(()=>{Win()},200);
                return;
            }
        }

        // LEFT
        if(column>1){
            if(document.getElementById("cell"+row+(column-1)).className=="tile16"){
                swapTiles("cell"+row+column,"cell"+row+(column-1));
                moves++;
                document.getElementById("moves").innerHTML=moves;
                setTimeout(()=>{Win()},200);
                return;
            }
        }

        // ABOVE
        if(row>1){
            if(document.getElementById("cell"+(row-1)+column).className=="tile16"){
                swapTiles("cell"+row+column,"cell"+(row-1)+column);
                moves++;
                document.getElementById("moves").innerHTML=moves;
                setTimeout(()=>{Win()},200);
                return;
            }
        }

        // BELOW
        if(row<4){
            if(document.getElementById("cell"+(row+1)+column).className=="tile16"){
                swapTiles("cell"+row+column,"cell"+(row+1)+column);
                moves++;
                document.getElementById("moves").innerHTML=moves;
                setTimeout(()=>{Win()},200);
                return;
            }
        }

    }

}


/* check win */

function Win(){

    if(
    document.getElementById("cell11").className=="tile1" &&
    document.getElementById("cell12").className=="tile2" &&
    document.getElementById("cell13").className=="tile3" &&
    document.getElementById("cell14").className=="tile4" &&

    document.getElementById("cell21").className=="tile5" &&
    document.getElementById("cell22").className=="tile6" &&
    document.getElementById("cell23").className=="tile7" &&
    document.getElementById("cell24").className=="tile8" &&

    document.getElementById("cell31").className=="tile9" &&
    document.getElementById("cell32").className=="tile10" &&
    document.getElementById("cell33").className=="tile11" &&
    document.getElementById("cell34").className=="tile12" &&

    document.getElementById("cell41").className=="tile13" &&
    document.getElementById("cell42").className=="tile14" &&
    document.getElementById("cell43").className=="tile15" &&
    document.getElementById("cell44").className=="tile16"
    ){

    alert(
    "Congratulations!\n"+
    "Time: "+time+" seconds\n"+
    "Moves: "+moves
    );

    location.reload();

    }

}