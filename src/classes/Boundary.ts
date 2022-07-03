import { Position } from "../interfaces/Position";

export interface BoundaryProps {
  position: Position;
  width?: number;
  height?: number;
  context: CanvasRenderingContext2D;
}

export class Boundary {
  public position: Position;
  public width: number;
  public height: number;
  static width: number = 48;
  static height: number = 48;
  public context: CanvasRenderingContext2D

  constructor(
    {
      position,
      height = 48,
      width = 48,
      context,
    }: BoundaryProps
  ) {
    this.position = position;
    this.width = width;
    this.height = height;
    this.context = context;
  }

  draw() {
    this.context.fillStyle = 'rgba(255, 0, 0, 0)';
    this.context.fillRect(
      this.position.x,
      this.position.y,
      this.width,
      this.height,
    );
  }
}
