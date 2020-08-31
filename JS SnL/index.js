let dieCount = 1;

const snl = () => {
    if (dieCount == 3) {
        dieCount += 36
    } else if(dieCount == 10) {
        dieCount += 24
    } else if (dieCount == 58){
        dieCount += 4
    } else if(dieCount == 55) {
        dieCount += 18
    } else if(dieCount == 74) {
        dieCount += 10
    } else if(dieCount == 26) {
        dieCount -= 12
    } else if(dieCount == 49 || dieCount == 98){
        dieCount -= 17
    } else if(dieCount == 83) {
        dieCount -= 22
    } else if(dieCount == 93){
        dieCount -= 21
    }
}

const createRow1 = (n1, n2) => {
    for(i = 0; i < 10; i++){
        let div = document.createElement('div')
        div.classList.add(`cell${n2 + i + 1}`, `cell`)
        let text = document.createTextNode(`${n1 + i}`)
        div.appendChild(text)
        let grid = document.getElementById('gridContainer')
        grid.appendChild(div)
    }
}

const createRow2 = (n1, n2) => {
    for(i = 0; i < 10; i++){
        let div = document.createElement('div')
        div.classList.add(`cell${n2 - i}`, `cell`)
        let text = document.createTextNode(`${n2 - i}`)
        div.appendChild(text)
        let grid = document.getElementById('gridContainer')
        grid.appendChild(div)
    }
}

const startGame = () => {
    createRow2(90, 100)
    createRow1(81, 80)
    createRow2(70, 80)
    createRow1(61, 60)
    createRow2(50, 60)
    createRow1(41, 40)
    createRow2(30, 40)
    createRow1(21, 20)
    createRow2(10, 20)
    createRow1(1, 0)

    let pos = document.querySelector(`.cell${dieCount}`)
    pos.classList.add('active')
}
    
window.onload = startGame();



const dieRoll = () => {
    //remove active class from original position
    let pos = document.querySelector(`.cell${dieCount}`)
    pos.classList.remove(`active`)

    // roll for random number between 1 & 6
    let roll = Math.floor(Math.random() * 6 + 1)
    let prev = dieCount
    dieCount += roll

    //prevent dieCount from going over 100 and causing issues
    if(dieCount >= 100){
        dieCount = 100
    }

    //check whether or not to move up or fall down
    snl()

    //show movement
    for(let i = prev; i < dieCount; i++){
        pos = document.querySelector(`.cell${i}`)
        pos.classList.add('move')
    }

    //add new active square

    pos = document.querySelector(`.cell${dieCount}`)
    pos.classList.add('active')

    winCheck()

    //remove movement
    for(let i = prev; i < dieCount; i++)
        setInterval( () => { 
            document.querySelector(`.cell${i}`).classList.remove('move')
            }, 1000 );
}

const winCheck = () => {
    if(dieCount >= 100){
        document.getElementById('win').style.visibility = "visible";
    }
}