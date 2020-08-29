
let canvas = document.getElementById('face')
let ctx = canvas.getContext('2d')
let degree;
let secondDegree;
let minuteDegree;

const face = () => {
    ctx.beginPath()
    ctx.arc(300, 300, 200, 0, 2 * Math.PI)
    ctx.stroke()
    

    //12 o clock
    ctx.beginPath()
    ctx.moveTo(300, 110)
    ctx.lineTo(300, 100)
    ctx.stroke()

    //6 o clock
    ctx.beginPath()
    ctx.moveTo(300, 490)
    ctx.lineTo(300, 500)
    ctx.stroke()

    //3 o clock
    ctx.beginPath()
    ctx.moveTo(490, 300)
    ctx.lineTo(500, 300)
    ctx.stroke()

    // 9 o clock
    ctx.beginPath()
    ctx.moveTo(110, 300)
    ctx.lineTo(100, 300)
    ctx.stroke()
}

const hand = (x, y, length, angle) => {
    let radians = angle / 180 * Math.PI;
    let endX = x + length * Math.cos(radians);
    let endY = y - length * Math.sin(radians);

    ctx.beginPath();
    ctx.moveTo(x, y)
    ctx.lineTo(endX, endY);
    ctx.stroke();
}

const getTimeHours = () => {
    let d = new Date()
    for(i = 0; i < 23; i++) {
        if(d.getHours() === 0) {
            degree = 90
        }
        else if(d.getHours() == i){
            degree = 90 - (i * 30)
        }
    }

}
const getTimeSeconds = () => {
    let d = new Date()
    for(i = 0; i < 59; i++) {
        if(d.getSeconds() === 0){
            secondDegree = 90;
        }
        else if(d.getSeconds() === i){
            secondDegree = (90 - (i * 6))
        }
    }
}

const getTimeMinutes = () => {
    let d = new Date()
    for(i = 0; i < 59; i++) {
        if(d.getMinutes() == 0){
            minuteDegree = 90;
        }
        else if(d.getMinutes() == i){
            minuteDegree = (90 - (i * 6))
        }
    }

}

setInterval(function showTime() {
    getTimeSeconds()
    getTimeMinutes()
    getTimeHours()
    getTimeSeconds()
    ctx.clearRect(0, 0, 1000, 1000)
    face()
    hand(300, 300, 160, secondDegree)
    hand(300, 300, 100, degree)
    hand(300, 300, 140, minuteDegree)
}, 500)