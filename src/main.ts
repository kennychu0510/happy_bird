import { Bird } from './bird';
import { CONSTANTS } from './constant';
const { FRAME_WIDTH, FRAME_HEIGHT } = CONSTANTS;

import { selectElement } from './helper';
import { Obstacle } from './obstacle';

const canvas = selectElement('canvas') as HTMLCanvasElement;

const ctx = canvas.getContext('2d')!;
const OBSTACLES: Obstacle[] = [new Obstacle(ctx, 0), new Obstacle(ctx, 150)];
const BIRD = new Bird(ctx)
function draw() {
  ctx.clearRect(0, 0, FRAME_WIDTH, FRAME_HEIGHT);
  OBSTACLES.forEach((obstacle) => obstacle.draw());
  BIRD.draw();
  requestAnimationFrame(draw);
}

requestAnimationFrame(draw);
