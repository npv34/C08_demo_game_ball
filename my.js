let ball = new Ball(200, 300, 20, "red");
ball.draw();

let bar = new Bar(100, 400, 200, 10)


setInterval(function () {
    ball.move();
    ball.collision(bar)
    bar.draw();
    console.log(ball.y)
}, 50)
