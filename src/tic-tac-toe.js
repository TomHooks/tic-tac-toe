class TicTacToe {
    constructor() {
        this.array = [[],[],[]];
        this.user = 'x';
        this.fields = 0;
        this.winner = null;
    }

    getCurrentPlayerSymbol() {
        return this.user;
    }

    nextTurn(rowIndex, columnIndex) {
        if(this.array[rowIndex][columnIndex]) return;

        this.array[rowIndex][columnIndex] = this.user;
        this.fields++;
       /* this._nextTurn = true;*/

        if( (this.array[0][0]&&this.array[0][0] === this.array[0][1]&&this.array[0][0] === this.array[0][2])
            ||(this.array[1][0]&&this.array[1][0] === this.array[1][1]&&this.array[1][0] === this.array[1][2])
            ||(this.array[2][0]&&this.array[2][0] === this.array[2][1]&&this.array[2][0] === this.array[2][2])
            ||(this.array[0][0]&&this.array[0][0] === this.array[1][1]&&this.array[0][0] === this.array[2][2])
            ||(this.array[0][2]&&this.array[0][2] === this.array[1][1]&&this.array[0][2] === this.array[2][0])
            ||(this.array[0][0]&&this.array[0][0] === this.array[1][0]&&this.array[0][0] === this.array[2][0])
            ||(this.array[0][1]&&this.array[0][1] === this.array[1][1]&&this.array[0][1] === this.array[2][1])
            ||(this.array[0][2]&&this.array[0][2] === this.array[1][2]&&this.array[0][2] === this.array[2][2])  ) {

            this.winner = this.user;
            this.user = (this.user == 'x') ? 'o' : 'x';
    }

    isFinished() {
            return (this.isDraw() == true || this.getWinner() != null) ? true : false;
        }



    getWinner() {
            return (this.winner == null) ? null : this.winner;
    }

    noMoreTurns() {
            return (this.fields == 9) ? true : false;
    }

    isDraw() {

            return (this.getWinner() == null && this.noMoreTurns() == true) ? true : false;
    }

    getFieldValue(rowIndex, colIndex) {
            return (this.array[rowIndex][colIndex] != null) ? this.array[rowIndex][colIndex] : null;
    }
}

module.exports = TicTacToe;
