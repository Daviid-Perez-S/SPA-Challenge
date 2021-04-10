import { Component, Input, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Character } from 'src/app/Interfaces/character';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { RestApiService } from 'src/app/Services/rest-api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-character-item',
  templateUrl: './character-item.component.html',
  styleUrls: ['./character-item.component.scss']
})
export class CharacterItemComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  
  public characterNameError:boolean = false;
  public characterLocationError:boolean = false;

  @Input('init')
  public character: Character;

  @Output()
  public notifyAlert: EventEmitter<any> = new EventEmitter();

  public characterCopy: Character;
  public isExpanded: boolean = false;

  constructor( 
    public dialog: MatDialog,
    public restApi: RestApiService,
  ) {}

  ngOnInit(): void {
    // Make a deep copy of Character object
    this.characterCopy = JSON.parse(JSON.stringify(this.character));  
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  /**
   * Validate form inputs
   */
  checkInputs() {
    // Manual validation of form inputs
    if (this.character.name == "" ) {
      this.characterNameError = true;
    } else {
      this.characterNameError = false;
    }
    if (this.character.location.name == "") {
      this.characterLocationError = true;
    } else {
      this.characterLocationError = false;
    }
  }
  
  /**
   * Reset the Character object
   */
  onReset(): void {
    // Restore our character from backup object
    this.character = JSON.parse(JSON.stringify(this.characterCopy));
  }

  /**
   * Update character edited on API
   * 
   * @param id number - Character ID
   */
  onSubmit(id: number): void {

    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.subscription = this.restApi.updateCharacter(id, this.character).subscribe(data => {
          // Make a deep copy of Character object
          this.characterCopy = JSON.parse(JSON.stringify(this.character));
          // Close current panel
          this.isExpanded = false;
          // Emit event to characters-list component
          this.notifyAlert.emit(true);
        },
        (error) => {
          this.notifyAlert.emit(false);
        });
      }
    });
  }

}
