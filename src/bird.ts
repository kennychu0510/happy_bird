import { CONSTANTS } from "./constant"

export class Bird {
  x = 20
  height = 20
  width = 20
  y = CONSTANTS.FRAME_HEIGHT / 2 - this.height / 2
  ctx: CanvasRenderingContext2D;
  velocity = CONSTANTS.GRAVITY

  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx
  }
  draw() {
    this.ctx.fillStyle = 'rgb(0,204,204)'
    this.ctx.fillRect(this.x, this.y, this.width, this.height)
    this.update();
  }

  update() {
    this.y += this.velocity / 200
    this.velocity += CONSTANTS.GRAVITY
  }

  jump() {
    this.velocity = -300
  }
}