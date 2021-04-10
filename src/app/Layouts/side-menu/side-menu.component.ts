import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AboutComponent } from "../../others/about/about.component";

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  constructor( public router: Router, public dialog: MatDialog ) { }

  ngOnInit(): void {

    // Change style of active tab
    if (this.router.url.includes("/dashboard/characters")) {

      let element: HTMLElement = document.getElementById("characters-route");
      element.setAttribute("style", "background-color: #ffeccf");
      let element2: HTMLElement = document.getElementById("characters-route-anchor");
      element2.setAttribute("style", "color: #6F553F");

    } else if (this.router.url.includes("/dashboard/episodes")) {

      let element: HTMLElement = document.getElementById("episodes-route");
      element.setAttribute("style", "background-color: #ffeccf");
      let element2: HTMLElement = document.getElementById("episodes-route-anchor");
      element2.setAttribute("style", "color: #6F553F");
    }
  }

  openAbout() {
    const dialogRef = this.dialog.open(AboutComponent);
  }

}
