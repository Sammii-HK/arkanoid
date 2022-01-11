console.log("TS Loaded 👾");

import { CanvasView } from "./view/CanvasView";
import { Ball } from "./sprites/Ball";
import { Brick } from "./sprites/Brick";
import { Paddle } from "./sprites/Paddle";

//  Images
import BALL_IMAGE from './images/ball.png';
import BRICK_IMAGE from './images/brick.png';
import PADDLE_IMAGE from './images/paddle.png';

// Level & Colours
import {
  PADDLE_SPEED,
  PADDLE_WIDTH,
  PADDLE_HEIGHT,
  PADDLE_STARTX,
  BALL_SPEED,
  BALL_SIZE,
  BALL_STARTX,
  BALL_STARTY
} from './setup';

let gameOver = false;
let score = 0;

function setGameOver(view: CanvasView) {
  view.drawInfo('Game Over!');
  gameOver = false;
}

function setGameWin(view: CanvasView) {
  view.drawInfo('You Win');
  gameOver = false;
}

function gameLoop(
  view: CanvasView,
  ball: Ball,
  bricks: Brick[],
  paddle: Paddle,
) {}

function startGame(view: CanvasView) {}

// Create a new view
const view = new CanvasView('#game-canvas');
view.initStartButton(startGame)
