import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landingPage.component.html',
  styleUrls: ['./landingPage.component.css']
})
export class LandingPageComponent implements OnInit {

  windowWidth = window.innerWidth;
  windowHeight = window.innerHeight;

  constructor() { }

  ngOnInit(): void {
  }

}

function moveBackground(event): void {
const mouseX = event.clientX;
const mouseY = event.clientY;

const calculateX = mouseX / (this.windowWidth / 7);
const calculateY = mouseY / (this.windowHeight / 7);

video.style.transform = 'translate(-' + calculateX.toString() + '%,-' + calculateY.toString() + '%)';
}

hero.addEventListener('mousemove', moveBackground(event));
