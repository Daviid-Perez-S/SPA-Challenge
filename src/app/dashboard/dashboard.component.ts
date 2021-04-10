import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  // URL where get SNK audio theme from
  public urlAudio = "https://firebasestorage.googleapis.com/v0/b/hosting-personal-5fb40.appspot.com/o/spa-challenge-api-audio%2FLinked%20Horizon-Shinzou%20wo%20Sasageyo.mp3?alt=media&token=ce09db43-9a1c-448f-9616-7f6538a4abbe";

  constructor() { }

  ngOnInit(): void {
    //
  }

}
