import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-home-page',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  initialTop = 0;
  parallaxRatio = 1;

  @ViewChild('parallax') parallax: ElementRef;

  @HostListener('window:scroll', ['$event'])
  // tslint:disable-next-line:typedef
  onWindowScroll(event){

    this.parallax.nativeElement.style.top = (this.initialTop - (window.scrollY * this.parallaxRatio)) + 'px';
  }

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
