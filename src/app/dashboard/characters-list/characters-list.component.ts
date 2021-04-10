import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Character } from 'src/app/Interfaces/character';
import { RestApiService } from "../../Services/rest-api.service";

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss']
})
export class CharactersListComponent implements OnInit, OnDestroy {

  public characters: Character[];
  public isAlertVisible: boolean = false;
  private subscription: Subscription;
  public textAlert: string;
  public isLoading: boolean = true;
  public requestState: boolean;

  constructor( public restApi: RestApiService ) { }

  ngOnInit(): void {
    this.loadCharacters();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  /**
   * Load all the characters from the api
   * 
   * @returns any
   */
  loadCharacters() {

    this.subscription = this.restApi.getCharacters().subscribe((data: Character[]) => {

      this.characters = { ...data };
      // Parsing string to JSON
      for (const ch of this.characters['data']) {
        ch.origin = JSON.parse(ch.origin);
        ch.location = JSON.parse(ch.location);
      }
      this.isLoading = false;
    },
    (error) => {
      this.isLoading = false;
      window.alert('There was a problem getting characters list');
    });    
  }

  /**
   * Method to display alert for some seconds
   */
  onNotifyAlert(stateRequest): void {
    if (stateRequest) {
      this.textAlert = "Character updated successfully!"
    } else {
      this.textAlert = "Error - Character not updated";
    }
    this.requestState = stateRequest;
    this.isAlertVisible = true;
    setTimeout(() => {
      this.isAlertVisible = false;
    }, 5000);
  }

}
