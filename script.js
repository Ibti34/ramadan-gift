

/* ⭐ stars */

for(let i=0;i<200;i++){

let s=document.createElement("div")

s.className="star"

s.style.top=Math.random()*100+"%"
s.style.left=Math.random()*100+"%"

document.body.appendChild(s)

}



/* 🎆 fireworks */

let canvas=document.getElementById("canvas")

let ctx=canvas.getContext("2d")

canvas.width=innerWidth
canvas.height=innerHeight

let particles=[]


function explode(){

for(let i=0;i<80;i++){

particles.push({

x:innerWidth/2,
y:innerHeight/2,

vx:(Math.random()-.5)*10,

vy:(Math.random()-.5)*10,

a:1

})

}

}


function draw(){

requestAnimationFrame(draw)

ctx.fillStyle="rgba(0,0,0,.2)"

ctx.fillRect(0,0,canvas.width,canvas.height)

particles.forEach(p=>{

p.x+=p.vx
p.y+=p.vy

p.a-=.01

ctx.globalAlpha=p.a

ctx.beginPath()

ctx.arc(p.x,p.y,3,0,6.28)

ctx.fillStyle="cyan"

ctx.fill()

})

}

draw()



/* click */

let gift=document.getElementById("gift")

let msg=document.getElementById("msg")

let from=document.getElementById("from")

let audio=document.getElementById("audio")


gift.onclick=()=>{

gift.classList.add("open")

msg.classList.add("show")

from.classList.add("showfrom")

audio.play()

setInterval(explode,800)

}
