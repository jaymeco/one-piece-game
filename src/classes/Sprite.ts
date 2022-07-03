import { Position } from '../interfaces/Position';

export interface SpriteProps {
  velocity: number;
  position: Position;
  context: CanvasRenderingContext2D;
  image: HTMLImageElement;
  frames: { max: number };
  sprites: {
    [key: string]: HTMLImageElement;
  };
}

export interface ObjectCollisor {
  position: Position;
  width: number;
  height: number;
}

export class Sprite {
  public position: Position;
  public context: CanvasRenderingContext2D;
  public image: HTMLImageElement;
  public frames: { max: number, val: number, elapsed: number }
  public width: number = 0;
  public height: number = 0;
  public isMoving = false;
  public sprites: {
    [key: string]: HTMLImageElement;
  };

  constructor(
    {
      position,
      velocity,
      context,
      image,
      frames,
      sprites
    }: SpriteProps
  ) {
    this.position = position;
    this.context = context;
    this.image = image;
    this.frames = {
      ...frames,
      val: 0,
      elapsed: 0,
    };
    this.image.onload = () => {
      this.width = this.image.width / frames.max;
      this.height = this.image.height;
    }
    this.sprites = sprites;
  }

  draw() {
    this.context.drawImage(
      this.image,
      this.frames.val * this.width,
      0,
      this.image.width / this.frames.max,
      this.image.height,
      this.position.x,
      this.position.y,
      this.image.width / this.frames.max,
      this.image.height,
    );

    if (this.isMoving) {
      if (this.frames.max > 1) {
        this.frames.elapsed++;
      }

      if (this.frames.elapsed % 10 === 0) {
        if (this.frames.val < this.frames.max - 1) {
          this.frames.val++;
        } else {
          this.frames.val = 0;
        }
      }
    } else {
      this.frames.val = 0;
      this.frames.elapsed = 0;
    }
  }

  isColliding(object: ObjectCollisor) {
    return (
      this.position.x + this.width >= object.position.x &&
      this.position.x <= object.position.x + object.width &&
      this.position.y <= object.position.y + object.height &&
      this.position.y + this.height >= object.position.y
    )
  }

  move(direction: string) {
    this.isMoving = true;
    this.image.src = this.sprites[direction].src;
  }
}