import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  @Input('init_state')
  public requestState: boolean;
  
  @Input('init_text')
  public textAlert: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
