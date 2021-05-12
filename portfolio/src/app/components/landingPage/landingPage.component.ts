import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landingPage.component.html',
  styleUrls: ['./landingPage.component.css']
})
export class LandingPageComponent implements OnInit {

  windowWidth = window.innerWidth;
  windowHeight = window.innerHeight;

  constructor() { }

  @ViewChild('hero') hero: string;

  ngOnInit(): void {
  }

  @HostListener('document:mousemove', ['$event'])
  moveBackground(e): void {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const calculateX = mouseX / (this.windowWidth / 7);
    const calculateY = mouseY / (this.windowHeight / 7);

    this.hero = 'translate(-' + calculateX.toString() + '%,-' + calculateY.toString() + '%)';
    console.log(this.hero);
  }

}



