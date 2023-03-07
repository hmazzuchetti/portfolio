import { Component, OnInit } from '@angular/core';
import { Project } from './models/projects.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
  }

  title = 'portfolio-angular';
  today = new Date().getFullYear();
  myAge : number = (this.today - 1997);
  projectList : Project [] = [
    new Project(
      'Airbnb Online Exp. Clone', 
      'February-2022', 
      'A clone of the Online Experience web page of AirBnb using Bootstrap 5, HTML and CSS.',
      ['Focusing on responsiveness using Bootstrap 5.', 'Complementary styling with CSS.', 'Structured with HTML.'],
      '../assets/img/airbnb_exp_clone.png',
      'https://sad-jackson-072188.netlify.app/'
      ),
    new Project(
      'Apple Clone',
      'December-2021',
      'A clone of the Apple website using HTML and CSS. Basic concepts like unordered list and flex box.',
      ['Focusing on applying basic concepts of HTML and CSS.', 'Complementary styling with CSS.', 'Structured with HTML.'],
      '../assets/img/apple_clojne.png',
      'https://hopeful-yonath-a6af52.netlify.app/'
    ),
    new Project(
      'AirBnb Press Clone',
      'February-2022',
      'A clone of the Press web page of AirBnb using Bootstrap 4, HTML and CSS.',
      ['Focusing on responsiveness using Bootstrap 4.', 'Complementary styling with CSS.', 'Structured with HTML.'],
      '../assets/img/airbnb_press_clone.png',
      'https://brave-kowalevski-d81e58.netlify.app/'
    ),
    new Project(
      'AirBnb Home Clone',
      'February-2022',
      'A clone of the Home web page of AirBnb using Bootstrap 4, HTML and CSS.',
      ['Focusing on responsiveness using Bootstrap 4.', 'Complementary styling with CSS.', 'Structured with HTML.'],
      '../assets/img/airbnb_home_clone.png',
      'https://optimistic-fermat-7011c9.netlify.app/'
    ),
    new Project(
      'Newsweek Clone',
      'December-2021',
      'A clone of the Home web page of Newsweek using Bootstrap 3.6, HTML and CSS.',
      ['Focusing on responsiveness using Bootstrap 3.6.', 'Complementary styling with CSS.', 'Structured with HTML.'],
      '../assets/img/newsweek_clone.png',
      'https://tender-haibt-f3565e.netlify.app/'
    ),
    new Project(
      'Netflix Clone',
      'October-2021',
      'Netflix home clone, using React',
      ['Website content fed by an API brought by the Axios library.','Component based.', 'Complementary styling with CSS.', 'Structured with HTML.', 'Deployed with Firebase'],
      '../assets/img/netflix_clone.png',
      'https://netflix-clone-f415f.web.app/'
    ),
  ]
}
