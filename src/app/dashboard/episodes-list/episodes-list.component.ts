import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Episode } from 'src/app/Interfaces/episode';
import { RestApiService } from '../../Services/rest-api.service';

@Component({
  selector: 'app-episodes-list',
  templateUrl: './episodes-list.component.html',
  styleUrls: ['./episodes-list.component.scss']
})
export class EpisodesListComponent implements OnInit, OnDestroy {

  public episodes: Episode[];
  private subscription: Subscription;

  constructor( public restApi: RestApiService ) { }

  ngOnInit(): void {
    this.loadEpisodes();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  /**
   * Load all the episodes from the api
   * 
   * @returns any
   */
  loadEpisodes(): any {
    this.subscription = this.restApi.getEpisodes().subscribe((data: Episode[]) => {
      this.episodes = { ...data };
    });
  }

}
