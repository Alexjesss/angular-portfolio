import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {animate, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  sticky = false;

  @ViewChild('stickynav') header: ElementRef;


  @HostListener('document:scroll', ['$event'])
  // tslint:disable-next-line:typedef
  onWindowScroll(){
    const windowScroll = window.pageYOffset;

    if (windowScroll > this.header.nativeElement.offsetHeight){
      this.sticky = true;
    }
    else {
      this.sticky = false;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
