const Buttom = document.querySelector('#NextPage')

const PegarNomes = () => {
    
    let Player1 = document.querySelector('#P1').value
    if(Player1 == ''){
        Player1 = 'Player1'
    }

    let Player2 = document.querySelector('#P2').value
    if(Player2 == ''){
        Player2 = 'Player2'
    }
    console.log(typeof Player2)

    localStorage.setItem('P1', Player1)
    localStorage.setItem('P2', Player2)
}


Buttom.addEventListener('click', PegarNomes)