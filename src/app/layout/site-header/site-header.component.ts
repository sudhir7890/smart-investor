import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css']
})
export class SiteHeaderComponent implements OnInit {
  isActive = true;

    public isAuthenticated: string;
  public angularImage: string = '/assets/img/angular2.png';

  public menuItems: Object[] = [
    {
      icon: 'library_books',
      title: 'Medium @jeroenouw',
      link: 'https://medium.com/@jeroenouw'
    },
    {
      icon: 'description',
      title: 'Generated docs',
      link: 'http://ngxmatfire-docs.jerouw.nl/'
    },
    {
      icon: 'description',
      title: 'Features',
      link: 'https://github.com/jeroenouw/AngularMaterialFirebase/blob/master/docs/FEATURES.md'
    },
    {
      icon: 'flight_takeoff',
      title: 'Quick start',
      link: 'https://github.com/jeroenouw/AngularMaterialFirebase/blob/master/docs/DEVELOPER.md'
    },
    {
      icon: 'archive',
      title: 'NPM packages',
      link: 'https://www.npmjs.com/~jeroenouw'
    },
    {
      icon: 'link',
      title: 'Fork on Github',
      link: 'https://github.com/jeroenouw/AngularMaterialFirebase'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
