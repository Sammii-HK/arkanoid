console.log("TS Loaded 👾");

import { CanvasView } from "./view/CanvasView";
import { Ball } from "./sprites/Ball";
import { Brick } from "./sprites/Brick";
import { Paddle } from "./sprites/Paddle";
import { Collision } from "./Collision";

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

import { createBricks } from './helpers';

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
  bricks: Brick[],
  ball: Ball,
  paddle: Paddle,
  collision: Collision,
) {
  view.clear();
  view.drawBricks(bricks);
  view.drawSprite(paddle);
  view.drawSprite(ball);
  //  Move Ball
  ball.moveBall();

  // Move paddle + check it stays within the game canvas
  if (
    (paddle.isMovingLeft && paddle.pos.x > 0) ||
    (paddle.isMovineRight && paddle.pos.x < view.canvas.width - paddle.width)
  ) {
    paddle.movePaddle();
  }

  collision.checkBallCollision(ball, paddle, view);
  const collidingBrick = collision.isCollidingBricks(ball, bricks);

  if (collidingBrick) {
    score += 1;
    view.drawScore(score);
  }

  // Game over when ball leaves game field
  if (ball.pos.y > view.canvas.height) gameOver = true;
  // If game won set gameover + display win
  if (bricks.length === 0) return setGameWin(view);
  // return if gameover and dont run requestAnimationFrame
  if (gameOver) return setGameOver(view);
  
  requestAnimationFrame(() => gameLoop(view, bricks, ball, paddle, collision))
}

function startGame(view: CanvasView) {
  // Reset displays
  score = 0;
  view.drawInfo('');
  view.drawScore(0);
  // Create collision instance
  const collision = new Collision();
  // Create all bricks
  const bricks = createBricks();
  // Create Ball
  const ball = new Ball(
    BALL_SPEED,
    BALL_SIZE,
    { x: BALL_STARTX, y: BALL_STARTY },
    BALL_IMAGE,
  )
  // Create paddle
  const paddle = new Paddle(
    PADDLE_SPEED,
    PADDLE_WIDTH,
    PADDLE_HEIGHT,
    {
      x: PADDLE_STARTX,
      y: view.canvas.height - PADDLE_HEIGHT - 5,
    },
    PADDLE_IMAGE,
  )

  gameLoop(view, bricks, ball, paddle, collision)
}

// Create a new view
const view = new CanvasView('#game-canvas');
view.initStartButton(startGame)
