import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    console.log(this.today);
  }

  title = 'portfolio-angular';
  today = new Date().getFullYear();
  myAge : number = (this.today - 1997);
}
