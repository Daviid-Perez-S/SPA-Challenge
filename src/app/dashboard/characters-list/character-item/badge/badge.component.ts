import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent implements OnInit {

  @Input('init')
  public status: string;

  constructor() { }

  ngOnInit(): void {
    
    // Select all the badges within whole document
    let element : any = document.querySelectorAll('button.ch-badge');
    for (const el of element) {
      // Apply a random background color to every badge
      el.setAttribute("style", "background-color:" + '#' + (0x1000000+Math.random()*0xffffff).toString(16).substr(1,6));
    }
  }

}
