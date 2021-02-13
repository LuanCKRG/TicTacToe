document.addEventListener('DOMContentLoaded', () => {
    let squares = document.querySelectorAll('.square')

    squares.forEach((square) => {
        square.addEventListener('click', handleClick)
    })
})

const Gamer1 = localStorage.getItem('P1')
let Placar1 = 0
const Gamer2 = localStorage.getItem('P2')
let Placar2 = 0

const AssociarHTML = () => {
    document.querySelector('#Gamer1').innerText = Gamer1 + ': '
    document.querySelector('#Pont1').innerText = Placar1 + ' / '
    document.querySelector('#Gamer2').innerText = Gamer2 + ': '
    document.querySelector('#Pont2').innerText = Placar2
}

AssociarHTML()

const handleClick = (alvo) => {

    let square = alvo.target
    let position = square.id
    let vencedor

    if(handleMove(position)){
        vencedor = (playerTime == 0) ? Gamer1 : Gamer2

        if (vencedor == Gamer1){
            Placar1 ++
            AssociarHTML()
        }else{
            Placar2++
            AssociarHTML()
        }

        setTimeout(() => {alert(`A partida acabou - O Vencedor foi ${vencedor}`)}, 10)
    }
    updateSquares()
}

const updateSquares = () => {

    let squares = document.querySelectorAll('.square')

    squares.forEach((square) => {
        let position = square.id
        let symbol = board[position]


        if (symbol != ''){
            square.innerHTML = `<div class="${symbol}"></div>`
        }
    })
}

const Restart = () => { 

    let squares = document.querySelectorAll(".square");
  
    squares.forEach((square)=>{
        square.innerHTML = '';
    })
}

const Resetar = () => {
    board = ['', '', '', '', '', '', '', '', '']
    gameOver = false
    playerTime = 0
    Restart()
}
