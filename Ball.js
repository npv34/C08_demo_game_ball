class Ball {
    x;
    y;
    radius;
    canvas;
    color;
    speed;
    flag;
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.canvas = document.getElementById('myCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.speed = 6;
        this.flag = 'top'
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.closePath();
    }

    moveTop() {
        this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
        this.y = this.y - this.speed;
        this.draw();
    }

    moveDown() {
        this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
        this.y = this.y + this.speed;
        this.draw();
    }

    move() {
        console.log(this.y)
        if (this.y - this.radius <= 0) {
            this.flag = 'down'
        }

        if (this.canvas.height <= this.y + this.radius) {
            this.flag = 'top'
        }

        switch (this.flag) {
            case 'down':
                this.moveDown();
                break;
            case 'top':
                this.moveTop();
                break;
            default:
                this.moveTop();
        }
    }

    collision(bar) {
        if (bar.y <= this.y + this.radius
            && bar.x <= this.x
            && this.x <= bar.x + bar.width) {
             this.flag = 'top'
        }
    }
}
