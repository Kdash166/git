const canvas = document.querySelector("#ballCanvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");
const balls = [];

class Ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.xVel = (Math.random() - 0.5) * 10;
    this.yVel = (Math.random() - 0.5) * 10;
    this.size = Math.random() * 30 + 10;
    this.color = Ball.getRandomColor();
  }
  static getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${b},${g})`;
  }

  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }

  update() {
    //   Check if it's about to hit the canvas boundary
    if (this.x + this.size >= canvas.width || this.x - this.size <= 0) {
      this.xVel = -this.xVel;
    }
    if (this.y + this.size >= canvas.height || this.y - this.size <= 0) {
      this.yVel = -this.yVel;
    }
    this.x += this.xVel;
    this.y += this.yVel;

    // bouncing functionality above edge sensing
    if (this.y + this.size < canvas.height) {
      this.yVel += 0.3;
      // controls gravity
    }
  }
}

function loop() {
ctx.fillStyle = "#f2f2f2";
ctx.fillRect(0, 0, canvas.width, canvas.height);
  for (let ball of balls) {
    ball.update();
    ball.draw();
  }
  requestAnimationFrame(loop);
  // calls the animation again and again.
// method tells the browser to call an animation function and repeat it very fast, forever.
}
loop();
canvas.addEventListener("click", (e) => {
  const ball = new Ball(e.clientX, e.clientY);
  balls.push(ball);
});

// canvas  //

//  the canvas web API allows you to animate 
// using scripting rather then compex css animations
// lots of things you could do in CSS but most things 
// that are complex should be done in canvas as it is
// optimised and in canvas. 
// canvas is used for animation, game graphics, 
// data visualization, photo manipulation, and real-time video processing.
// you would need to use a guide or read a book or work through challlenges 
// to become expert at this. 
// generally you start drawing  -> then make commands  -> finish drawing 
// you can also apply lots of conditions like loops etc to this to create all sorts
// of effects. 
// you can make a reusable path to a different rectangle. 
// you can use MDN in canvas it could easily be a whole course on its own. 