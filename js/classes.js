class obj{
    quadro = 0
    tempo = 0 

    constructor(x,y,width,height,imagem){
        this.x = x
        this.y = y
        this.width = width
        this.height = height 
        this.imagem = imagem
    }
    draw(){
        let img = new Image()
        img.src = this.imagem
        canvas.drawImage(img, this.x, this.y, this.width, this.height)
    }
    animacao(vel,limite,nomeImg){
        this.tempo ++
        if(this.tempo >= vel){
            this.tempo = 0
            this.quadro ++
        }

        if(this.quadro >= limite){
            this.quadro = 0
        }

        this.imagem = 'img/'+nomeImg+this.quadro+".png"
    }
}

class Bg extends obj{
    move(velocidade, limite, posicao){
        this.x -= velocidade

        if(this.x < limite){
            this.x = posicao
        }
    }
}

class Ground extends obj{
    move(velocidade, limite, posicao){
        this.x -= velocidade

        if(this.x < limite){
            this.x = posicao
        }
    }
}

class Bird extends obj{
    
}
