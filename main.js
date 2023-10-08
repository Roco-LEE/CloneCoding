var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

var dino = {
    x : 10,
    y : 200,
    width : 50,
    height : 50,
    draw() {
        ctx.fillStyle = 'green';
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}
dino.draw();

class Cactus {
    constructor(){
        this.x = 500;
        this.y = 200;
        this.width = 50;
        this.height = 50;
    }
    draw(){
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

var timer = 0;
var cactusArray = [];
var jumpTimer = 0;

function 프레임마다실행(){
    requestAnimationFrame(프레임마다실행);
    timer++;

    ctx.clearRect(0,0, canvas.width, canvas.height);
    
    if(timer % 200 == 0) {
        var cactus = new Cactus();
        cactusArray.push(cactus)
    }
    cactusArray.forEach((a, i, o)=>{
        if(a.x < 0) {
            o.splice(i, 1)
        }
        a.x--;
        a.draw();
    })
    
    if(jumping == true) {
        dino.y -= 5;
        jumpTimer++;
    }
    if(jumping == false) {
        if(dino.y < 200)
        dino.y += 5;
    }
    if(jumpTimer > 20) {
        jumping = false;
        jumpTimer = 0;
    }

    dino.draw();
}
프레임마다실행();

var jumping = false;
document.addEventListener('keydown', function(e){
    if(e.code === 'Space') {
        jumping = true;
    }
})