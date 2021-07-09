let hash = '';
const chessBoard = function(size){
    const space = '  '
    for (let i = 0; i < size; i++) {
        hash += '\n'

        for (let j = 0; j < size; j++) {
            if((i +j) % 2 == 0) {
                hash  += space
            } else {
                hash  += "██"
            }
        }
    }
    console.log(hash)
};
chessBoard(8)