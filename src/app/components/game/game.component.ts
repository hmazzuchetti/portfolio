import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit, OnDestroy, AfterViewInit {
  constructor(elRef:ElementRef) { }

  ngOnInit() {
    // this.loop();
    console.log(document.getElementById('#obstacle'));
  }

  @ViewChild('obstacle') obstacle!: ElementRef;
  ngAfterViewInit() {
    this.loop();
  }

  jumped: boolean = false;


  @HostListener('document:keyup', ['$event'])
    characterJump(event: KeyboardEvent) {
      if(event.key === 'ArrowUp'){
        this.jumped=true;
        setTimeout(() => {
          this.jumped=false;
        }, 1000);
      }
    }
  
  loop() {
    setInterval(() => {
      const obstaclePosition = this.obstacle.nativeElement.getBoundingClientRect().x;
      if(obstaclePosition <= 120 && this.jumped === false){
        this.obstacle.nativeElement.style.animation = 'none';
        this.obstacle.nativeElement.style.left = '50px';
        console.log('collision');
      }
    }, 10)
  }
  


  

  ngOnDestroy() {
  }
}
