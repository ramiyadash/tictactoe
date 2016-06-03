
var tictactoe_div ;
var TicTacToe = function(divId){   //tic tac toe class for declaring the array of cells 
	this.divId=divId;
	tictactoe_div = divId;
	document.getElementById("TEXT").innerHTML = " ";
	this.players=["O" ,"X"]; // Defining the players as X and O.
	this.isGameOver=false;   
	this.currentPlayer=0;	
	var cell = document.querySelectorAll("#my_div button"); // array of cells in my_div button container.
	var cellArray = new Array();
	for(var i=0;i<cell.length;i++){
		cellArray[i]= new Cell(i,cell,this);
		
	}
	
	
}
var Cell = function(position,cell,referenceClass){  //cell class for rendering the cells
	var pos=position;
	var cell=cell;
	var referenceClass = referenceClass;
	var cellObj= this;       
	cell[pos].addEventListener("click", function(){
		if (referenceClass.isGameOver){    
			document.getElementById("TEXT").innerHTML = "GAME OVER.Refresh to play new game ";	
			return;
		}
		else if (!cellObj.isValidCell(this)) {
			console.log("Invalid choice");
			document.getElementById("TEXT").innerHTML = "Wrong choice,please click another cell";
		} 
		else {
			document.getElementById("TEXT").innerHTML = " ";
			var display=new ShowText(cell[pos]);       
			display.setMessage(referenceClass.players[referenceClass.currentPlayer]);
			referenceClass.isGameOver= cellObj.checkVictory(cell,referenceClass.players,referenceClass.currentPlayer);
			if(referenceClass.isGameOver){                    
				document.getElementById("TEXT").innerHTML = "Kudos&nbsp"+referenceClass.players[referenceClass.currentPlayer];
			}
			else if(cellObj.isDraw(cell)){               
				console.log("GAME IS A  DRAW");
				document.getElementById("TEXT").innerHTML = "Draw Match";
				referenceClass.isGameOver=true;
			}
			referenceClass.currentPlayer++
			referenceClass.currentPlayer=referenceClass.currentPlayer%2;
		}
	});
}

Cell.prototype.checkVictory= function(cell,player,currentPlayer){ 
	var cells= cell;
	var players= player;
	var currentTurn= currentPlayer;
	
	//top row
	if (cells[0].innerHTML == players[currentTurn] &&
			cells[1].innerHTML == players[currentTurn] &&
			cells[2].innerHTML == players[currentTurn]){
		return true;
		
	}
	//middle row    
	if (cells[3].innerHTML == players[currentTurn] &&
			cells[4].innerHTML == players[currentTurn] &&
			cells[5].innerHTML == players[currentTurn]){
				return true;
				
	}
	//bottom row
	if (cells[6].innerHTML == players[currentTurn] &&
			cells[7].innerHTML == players[currentTurn] &&
			cells[8].innerHTML == players[currentTurn]){
		return true;

	}
	
	//left diagonal
	if (cells[0].innerHTML == players[currentTurn] &&
			cells[4].innerHTML == players[currentTurn] &&
			cells[8].innerHTML == players[currentTurn]){
		return true;
		
	}
	
	//right diaogonal
	if (cells[2].innerHTML == players[currentTurn] &&
			cells[4].innerHTML == players[currentTurn] &&
			cells[6].innerHTML == players[currentTurn]){
		return true;
		
	}
	
	//left column
	if (cells[0].innerHTML == players[currentTurn] &&
			cells[3].innerHTML == players[currentTurn] &&
			cells[6].innerHTML == players[currentTurn]){
		return true;
		
	}
	
	//middle row
	if (cells[1].innerHTML == players[currentTurn] &&
			cells[4].innerHTML == players[currentTurn] &&
			cells[7].innerHTML == players[currentTurn]){
		return true;
		
	}
	
	//right column
	if (cells[2].innerHTML == players[currentTurn] &&
			cells[5].innerHTML == players[currentTurn] &&
			cells[8].innerHTML == players[currentTurn]){
		return true;
		
	}
	return false;
}

Cell.prototype.isDraw= function(cell){ //Method of the Cell class to check for a draw.
	var sqr=cell;
	for(var i=0;i<sqr.length;i++){
		if (sqr[i].innerHTML.length==0){
			return false;
		}
	}
	return true;
}

Cell.prototype.isValidCell= function(button){ //method to check if a cell is checked already
	if(button.innerHTML.length==0){
		return true;
	}
	else return false;
}
 var ShowText = function(text) {  //class to display text 
	var putText= text;
	function setResult(message){
		putText.innerHTML= message;
	}
	return {setMessage:setResult};
}
 

 

