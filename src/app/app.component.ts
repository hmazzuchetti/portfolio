import { Component, OnInit } from '@angular/core';
import { ProfessionalExperience } from './models/professional-exp.model';
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

  professionalExperience: ProfessionalExperience[] = [
    new ProfessionalExperience(
      'Autonomous',
      'Fullstack Developer',
      'February-2020',
      'January-2022',
      'My career started autonomously, with very low knowledge of development I started developing a React Native Application for a cosmetic products network, I created the register, login system, a product listing component and the next step was to create an affiliate system for customers, providing coupons to those who used the app. My next project was a diploma query system for a university using React and Firebase, the goal was to make diplomas available online for the students, my last autonomous project was a system for a wound care clinic, the clinic nurses can fulfill forms with their patient data and the wounds evolution, downloading a PDF with the data,  it was developed with Angular and Firebase.',
      ['React', 'Angular', 'Javascript', 'TypeScript', 'Firebase', 'HTML', 'CSS', 'Figma', 'Git'],
    ),
    new ProfessionalExperience(
      'Ubivis',
      'Frontend Developer',
      'February-2022',
      'August-2022',
      'My goal at Ubivis was to Develop new Components. The components where mostly CRUD formularies. They where developed using Angular and the UI/UX was planned using Figma. The formulary had an interesting logic, it was step driven, which means that the user was unable make a mistake and having a negative experience. I also had to create some more complex components that used the most of the Angular Framework, an example is one that the user could read files from the backend and also drag and drop files to store them at the backend. We had weekly sprints, I was constantly supervised by senior developers, learning more each day.',
      ['Angular', 'TypeScript', 'RestAPI', 'HTML', 'CSS', 'Figma', 'Git'],
      `After 7 months learning and developing, both on Ubivis and on my personal life, I received a job offer from Smartgreen, an IOT company who needed a leader to manage and lead the front end team on creating their new front end system which I accepted. I'm very happy with the experience I had at Ubivis, and I'm very grateful for the opportunity they gave me.`
    ),
    new ProfessionalExperience(
      'Smartgreen',
      'Frontend Leader',
      'August-2022',
      'Present',
      `I'm currently the Front-end Leader on Smartgreen, a smart city company that provides the means to control public illumination through an IOT web system. My role is to architect and develop the new IOT System, maintain the current system, manage the git repository, teach the front-end team Angular good practices, and assign tasks. The team is currently composed of 4 developers.`,
      ['Angular', 'TypeScript', 'GraphQL', 'HTML', 'CSS', 'Insomnia', 'Figma', 'Git'],
    )
  ]
}
