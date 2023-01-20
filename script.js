let fields = document.querySelectorAll('.field');

let winnerMsg = document.querySelector('.winner-msg');

let resetBtn = document.querySelector('.reset');

let player = true;

let firstRow = [];
let seccondRow = [];
let thirdRow = [];

for (const btn of fields) {
    btn.addEventListener('click', () => {
        if(player){
            btn.textContent = 'X';
            player = false;
            if(btn.getAttribute('placement') === "0"){
                firstRow[0] = 'x';
            }
            else if(btn.getAttribute('placement') === "1"){
                firstRow[1] = 'x';
            }
            else if(btn.getAttribute('placement') === "2"){
                firstRow[2] = 'x';
            }

            else if(btn.getAttribute('placement') === "3"){
                seccondRow[0] = 'x'
            }
            else if(btn.getAttribute('placement') === "4"){
                seccondRow[1] = 'x'
            }
            else if(btn.getAttribute('placement') === "5"){
                seccondRow[2] = 'x'
            }

            else if(btn.getAttribute('placement') === "6"){
                thirdRow[0] = 'x'
            }
            else if(btn.getAttribute('placement') === "7"){
                thirdRow[1] = 'x'
            }
            else if(btn.getAttribute('placement') === "8"){
                thirdRow[2] = 'x'
            }
        }
        else{
            btn.textContent = 'O';
            player = true;
            
            console.log(btn.getAttribute('placement'))

            if(btn.getAttribute('placement') === "0"){
                firstRow[0] = 'o';
            }
            else if(btn.getAttribute('placement') === "1"){
                firstRow[1] = 'o';
            }
            else if(btn.getAttribute('placement') === "2"){
                firstRow[2] = 'o';
            }

            else if(btn.getAttribute('placement') === "3"){
                seccondRow[0] = 'o'
            }
            else if(btn.getAttribute('placement') === "4"){
                seccondRow[1] = 'o'
            }
            else if(btn.getAttribute('placement') === "5"){
                seccondRow[2] = 'o'
            }

            else if(btn.getAttribute('placement') === "6"){
                thirdRow[0] = 'o'
            }
            else if(btn.getAttribute('placement') === "7"){
                thirdRow[1] = 'o'
            }
            else if(btn.getAttribute('placement') === "8"){
                thirdRow[2] = 'o'
            }
        }

        if(firstRow[0] === 'x' && firstRow[1] === 'x' && firstRow[2] === 'x'){
            console.log('Igrac 1 je pobedio');
            winnerMsg.textContent = 'Player 1 wins';
        }
        else if(seccondRow[0] === 'x' && seccondRow[1] === 'x' && seccondRow[2] === 'x'){
            console.log('Igrac 1 je pobedio');
            winnerMsg.textContent = 'Player 1 wins';
        }
        else if(thirdRow[0] === 'x' && thirdRow[1] === 'x' && thirdRow[2] === 'x'){
            console.log('Igrac 1 je pobedio');
            winnerMsg.textContent = 'Player 1 wins';
        }
        else if(firstRow[0] === 'x' && seccondRow[0] === 'x' && thirdRow[0] === 'x'){
            console.log('Igrac 1 je pobedio');
            winnerMsg.textContent = 'Player 1 wins';
        }
        else if(firstRow[1] === 'x' && seccondRow[1] === 'x' && thirdRow[1] === 'x'){
            console.log('Igrac 1 je pobedio');
            winnerMsg.textContent = 'Player 1 wins';
        }
        else if(firstRow[2] === 'x' && seccondRow[2] === 'x' && thirdRow[2] === 'x'){
            console.log('Igrac 1 je pobedio');
            winnerMsg.textContent = 'Player 1 wins';
        }
        else if(firstRow[0] === 'x' && seccondRow[1] === 'x' && thirdRow[2] === 'x'){
            console.log('Igrac 1 je pobedio');
            winnerMsg.textContent = 'Player 1 wins';
        }
        else if(firstRow[2] === 'x' && seccondRow[1] === 'x' && thirdRow[0] === 'x'){
            console.log('Igrac 1 je pobedio');
            winnerMsg.textContent = 'Player 1 wins';
        }


        else if(firstRow[0] === 'o' && firstRow[1] === 'o' && firstRow[2] === 'o'){
            console.log('Igrac 2 je pobedio');
            winnerMsg.textContent = 'Player 2 wins';
        }
        else if(seccondRow[0] === 'o' && seccondRow[1] === 'o' && seccondRow[2] === 'o'){
            console.log('Igrac 2 je pobedio');
            winnerMsg.textContent = 'Player 2 wins';
        }
        else if(thirdRow[0] === 'o' && thirdRow[1] === 'o' && thirdRow[2] === 'o'){
            console.log('Igrac 2 je pobedio');
            winnerMsg.textContent = 'Player 2 wins';
        }
        else if(firstRow[0] === 'o' && seccondRow[0] === 'o' && thirdRow[0] === 'o'){
            console.log('Igrac 2 je pobedio');
            winnerMsg.textContent = 'Player 2 wins';
        }
        else if(firstRow[1] === 'o' && seccondRow[1] === 'o' && thirdRow[1] === 'o'){
            console.log('Igrac 2 je pobedio');
            winnerMsg.textContent = 'Player 2 wins';
        }
        else if(firstRow[2] === 'o' && seccondRow[2] === 'o' && thirdRow[2] === 'o'){
            console.log('Igrac 2 je pobedio');
            winnerMsg.textContent = 'Player 2 wins';
        }
        else if(firstRow[0] === 'o' && seccondRow[1] === 'o' && thirdRow[2] === 'o'){
            console.log('Igrac 2 je pobedio');
            winnerMsg.textContent = 'Player 2 wins';
        }
        else if(firstRow[2] === 'o' && seccondRow[1] === 'o' && thirdRow[0] === 'o'){
            console.log('Igrac 2 je pobedio');
            winnerMsg.textContent = 'Player 2 wins';
        }
        else{
            winnerMsg.textContent = 'Draw';
        }



    })
}

resetBtn.addEventListener('click', () =>{
    for (const btn of fields){
        btn.textContent = '';
        firstRow.length = 0;
        seccondRow.length = 0;
        thirdRow.length = 0;
        winnerMsg.textContent = '';
    }
})

console.log(firstRow);
console.log(seccondRow);
console.log(thirdRow);