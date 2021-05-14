import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';


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

    this.sticky = windowScroll > this.header.nativeElement.offsetHeight;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
