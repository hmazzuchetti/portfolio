export class Obstacle {
    x: number; // obstacle position on the x-axis
    y: number; // obstacle position on the y-axis
    width: number; // obstacle width
    height: number; // obstacle height
    speed: number; // obstacle speed
  
    constructor(x: number, y: number, width: number, height: number, speed: number) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.speed = speed;
    }

    moveLeft() {
        // move the character to the right
        this.x -= this.speed;
      }
  }