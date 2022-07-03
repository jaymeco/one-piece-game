import { Position } from '../interfaces/Position';

export interface MapProps {
  position: Position;
  context: CanvasRenderingContext2D;
  image: HTMLImageElement;
}

export class Map {
  public position: Position;
  public context: CanvasRenderingContext2D;
  public image: HTMLImageElement;

  constructor(
    { position, context, image }: MapProps
  ) {
    this.position = position;
    this.context = context;
    this.image = image;
  }

  draw() {
    this.context.drawImage(
      this.image,
      this.position.x,
      this.position.y,
    );
  }
}