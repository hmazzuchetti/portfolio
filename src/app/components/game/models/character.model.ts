export class Character {
    x: number; // character position on the x-axis
    y: number; // character position on the y-axis
    width: number; // character width
    height: number; // character height
    speed: number; // character speed
    jumping: boolean; // whether the character is currently jumping
  
    constructor(x: number, y: number, width: number, height: number, speed: number) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.speed = speed;
      this.jumping = false;
    }
  
    jump() {
      if (!this.jumping) {
        // set the character's jumping state to true
        this.jumping = true;
        
        // set the character's vertical speed to a negative value
        // to make it move upward
        this.speed = -10;
      }
    }
  
    moveRight() {
      // move the character to the right
      this.x += this.speed;
    }
  }