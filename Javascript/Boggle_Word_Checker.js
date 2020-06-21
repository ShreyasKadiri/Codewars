/*
Write a function that determines whether a string is a valid guess in a Boggle board, as per the rules of Boggle. A Boggle board is a 2D array of individual characters, e.g.:

[ ["I","L","A","W"],
  ["B","N","G","E"],
  ["I","U","A","O"],
  ["A","S","R","L"] ]
Valid guesses are strings which can be formed by connecting adjacent cells (horizontally, vertically, or diagonally) without re-using any previously used cells.

For example, in the above board "BINGO", "LINGO", and "ILNBIA" would all be valid guesses, while "BUNGIE", "BINS", and "SINUS" would not.

Your function should take two arguments (a 2D array and a string) and return true or false depending on whether the string is found in the array as per Boggle rules.

Test cases will provide various array and string sizes (squared arrays up to 150x150 and strings up to 150 uppercase letters). You do not have to check whether the string is a real word or not, only if it's a 
valid guess.

*/



var x = [-1, -1, -1, 0, 0, 1, 1, 1];
var y = [-1, 0, 1, -1, 1, -1, 0, 1];
var taken = [];

function search(grid, posX, posY, currIndex, word){
	if(currIndex == word.length){
		return true;
	}
	var toLook = word[currIndex];
	/* check neighbours */
	for(var d=0; d<8; d++){
		var rd = posX+x[d],
		cd = posY+y[d];
		if(rd < 0 || rd >= grid.length || cd < 0 || cd >= grid[0].length){
			continue;
		}
		/* check neighbour */
		if(taken[rd][cd] === false && grid[rd][cd] == toLook){		
			var old_taken = taken;
			taken[rd][cd] = true;
			if(search(grid, rd, cd, currIndex+1, word)){
				return true;
			}
			taken = old_taken;
		}
	}
	return false;	
}


function checkWord( board, word ) {
	/* initialize taken */
	for(var row=0, lr=board.length; row<lr; row++){
		taken[row] = [];
		for(var col=0, lc=board[0].length; col<lc; col++){
			taken[row][col] = false;
		}
	}


	/* find first occurence */
	for(var row=0, lr=board.length; row<lr; row++){
		for(var col=0, lc=board[0].length; col<lc; col++){
			if(board[row][col] == word[0]){
				taken[row][col] = true;
				if(word.length == 1){
					return true;
				}
				if(search(board, row, col, 1, word)){
					return true;
				}else{
					for(var row2=0; row2<lr; row2++){
						for(var col2=0; col2<lc; col2++){
							taken[row2][col2] = false;
						}
					}
				}
			}
		}
	}
	return false;
}
