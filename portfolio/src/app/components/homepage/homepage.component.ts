import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  para = false;

  @ViewChild('parallax') parallax: ElementRef;

  @HostListener('document:scroll', ['$event'])
  // tslint:disable-next-line:typedef
  onWindowScroll(){
    const windowScroll = window.pageYOffset;

    if (windowScroll > this.parallax.nativeElement.offsetHeight){
      this.para = true;
    }
    else {
      this.para = false;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
