const canvas = document.querySelector('#canvas')

let ctx = canvas.getContext('2d')


const ladder = (sw, sh, ew, eh) => {
    ctx.beginPath()
    ctx.moveTo(0, 0)
    ctx.moveTo(sw, canvas.height - sh)
    ctx.lineTo(ew, canvas.height - eh)
    ctx.lineWidth = 5;
    ctx.stroke()
}

const snake = (sw, sh, ew, eh) => {
    ctx.beginPath()
    ctx.moveTo(0, 0)
    ctx.moveTo(sw, canvas.height - sh)
    ctx.lineTo(ew, canvas.height - eh)
    ctx.lineWidth = 5;
    ctx.strokeStyle = "red";
    ctx.stroke()
}

ladder(170, 40, 120, 200)
ladder(750, -80, 380, 200)
ladder(150, 320, 120, 390)
ladder(340, 340, 440, 440)
ladder(400, 440, 200, 500)

snake(320, 160, 400, 80)
snake(520, 280, 520, 200)
snake(150, 500, 40, 380)
snake(440, 550, 580, 450)
snake(150, 550, 40, 500)