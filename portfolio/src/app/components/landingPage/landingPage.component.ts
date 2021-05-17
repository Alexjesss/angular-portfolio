import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {Element} from '@angular/compiler';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landingPage.component.html',
  styleUrls: ['./landingPage.component.css']
})
export class LandingPageComponent implements OnInit {

  windowWidth = window.innerWidth;
  windowHeight = window.innerHeight;

  constructor() { }

  @ViewChild('hero') hero: HTMLElement ;

  ngOnInit(): void {
  }

  @HostListener('document:mousemove', ['$event'])
  moveBackground(e): void {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const hero = this.hero;
    const calculateX = mouseX / (this.windowWidth / 7);
    const calculateY = mouseY / (this.windowHeight / 7);

    this.hero.style.transform = 'translate(-"\'" + this.calculateX.toString() + \'%,-\' + calculateY.toString() + \'%)';
    console.log(this.hero);
  }
}



