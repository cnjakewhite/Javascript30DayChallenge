
let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')
let x = 295
let y = 250


const ball = (star) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    shadow()
    ctx.beginPath()
    ctx.arc(300, 300, 150, 0, 2 * Math.PI)
    let grd = ctx.createRadialGradient(300, 300, 1, 380, 240, 150)
    grd.addColorStop(0, "#fad8a2")
    grd.addColorStop(1, "orange")
    ctx.fillStyle = grd
    ctx.strokeStyle = "white"
    ctx.fill()
    ctx.stroke()
    star()
    
}

const star = () => {
    ctx.beginPath()
    ctx.fillStyle = "#ff8c00"
    ctx.strokeStyle = "#ff8c00"
    ctx.moveTo(x, y)
    ctx.lineTo(x+ 10, y + 20) 
    ctx.lineTo(x+ 30, y + 20)
    ctx.lineTo(x+ 15, y + 33)
    ctx.lineTo(x+ 25, y + 60)
    ctx.lineTo(x, y + 50)
    ctx.lineTo(x - 25, y + 60)
    ctx.lineTo(x - 15, y + 33)
    ctx.lineTo(x - 30, y + 20)
    ctx.lineTo(x - 10, y + 20)
    ctx.lineTo(x, y)
    ctx.fill()
    ctx.stroke()
}

const oneStar = () => {
    x = 295
    y = 250
    star()
}


const twoStar = () => {
    x = 245
    y = 260
    star()
    x = 355
    y = 260
    star()
}

const threeStar = () => {
    x = 245
    y = 220
    star()
    x = 355
    y = 220
    star()
    x = 295
    y = 320
    star()
}

const fourStar = () => {
    x = 245
    y = 220
    star()
    x = 355
    y = 220
    star()
    x = 245
    y = 320
    star()
    x = 355
    y = 320
    star()
}

const fiveStar = () => {
    x = 260
    y = 200
    star()
    x = 340
    y = 200
    star()
    x = 235
    y = 280
    star()
    x = 365
    y = 280
    star()
    x = 300
    y = 340
    star()
}

const sixStar = () => {
    x = 260
    y = 200
    star()
    x = 340
    y = 200
    star()
    x = 235
    y = 280
    star()
    x = 365
    y = 280
    star()
    x = 300
    y = 340
    star()
    x = 300
    y = 270
    star()
}

const sevenStar = () => {
    x = 300
    y = 200
    star()
    x = 235
    y = 230
    star()
    x = 365
    y = 230
    star()
    x = 235
    y = 300
    star()
    x = 365
    y = 300
    star()
    x = 300
    y = 340
    star()
    x = 300
    y = 270
    star()
    x = 300
    y = 270
    star()
}

const shadow = () => {
    ctx.beginPath()
    ctx.ellipse(240, 370, 110, 80, Math.PI/ 24, 0, 2 * Math.PI)
    let grd = ctx.createRadialGradient(240, 370, 5, 250, 360, 150)
    grd.addColorStop(0, "grey")
    grd.addColorStop(1, "white")
    ctx.fillStyle = grd
    ctx.strokeStyle = "white"
    ctx.fill()
    ctx.stroke()
}

