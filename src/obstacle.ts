import { CONSTANTS } from './constant';
const { FRAME_HEIGHT, FRAME_WIDTH, OBSTACLE_WIDTH, OBSTACLE_GAP } = CONSTANTS;
export class Obstacle {
  x = FRAME_WIDTH;
  height = OBSTACLE_GAP;
  y = Math.random() * (FRAME_HEIGHT - this.height);
  width = OBSTACLE_WIDTH;
  ctx: CanvasRenderingContext2D;
  constructor(ctx: CanvasRenderingContext2D, offset: number) {
    this.ctx = ctx;
    this.x += offset;
  }
  tick = 0;

  draw() {
    this.ctx.fillStyle = 'grey';
    this.ctx.fillRect(this.x, 0, this.width, this.y);
    this.ctx.fillRect(this.x, this.y + this.height, this.width, FRAME_HEIGHT);
    this.tick++;
    this.update();
  }

  update() {
    this.x -= 0.5;
    if (this.x + this.width < 0) {
      this.x = FRAME_WIDTH;
      this.y = Math.random() * (FRAME_HEIGHT - this.height);
    }
  }
}
