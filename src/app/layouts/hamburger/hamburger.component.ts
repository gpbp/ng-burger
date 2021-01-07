import { Component, HostBinding, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.css']
})
export class HamburgerComponent implements OnInit {
  menuIsOpened = false;

  @HostBinding('style.border') border: string = "3px solid #000";

  constructor() { }

  ngOnInit(): void {}

  @HostListener('click', ['$event'])
  openSideBar(mouseEvent: MouseEvent): void {
    if (mouseEvent.button === 0) {
      this.menuIsOpened = !this.menuIsOpened;
      this.toggleBorder();
    }  
  }

  private toggleBorder(): void {
    this.border = (this.menuIsOpened) ? "none" : "3px solid #000";
  }

}
