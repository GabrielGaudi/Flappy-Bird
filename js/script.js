const canvas = document.getElementById('canvas').getContext('2d')

let fundo = new Bg(0,0,500,900,'img/sky.png')
let fundo2 = new Bg(500,0,500,900,'img/sky.png')
let ground = new Ground(0,700,500,200,'img/ground.png')
let ground2 = new Ground(500,700,500,200,'img/ground.png')

let bird = new Bird(50,400,63,51, 'img/bird0.png')

let canoRand = (Math.random(1) * 10)


document.addEventListener("keydown", function(tecla){
    if(tecla.keyCode == 32){
        bird.y -= 120
    }
})

function movimento(){
    bird.y += 3
}

function draw(){
    fundo.draw()
    fundo2.draw()

    ground.draw()
    ground2.draw()

    bird.draw()
}

function update(){
    fundo.move(1,-500,0)
    fundo2.move(1,0,500)

    ground.move(2,-500,0)
    ground2.move(2,0,500)

    bird.animacao(7,4,'bird')

    movimento()
}

function main(){
    canvas.clearRect(0,0,500,900)
    update()
    draw()
    requestAnimationFrame(main)
    console.log(canoRand)
}

main()