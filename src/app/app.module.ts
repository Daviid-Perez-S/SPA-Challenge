import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Angular Material
import { AngularMaterialModule } from "./angular-material.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Components
import { HeaderComponent } from './Layouts/header/header.component';
import { SideMenuComponent } from './Layouts/side-menu/side-menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { CharactersListComponent } from './dashboard/characters-list/characters-list.component';
import { CharacterItemComponent } from './dashboard/characters-list/character-item/character-item.component';
import { BadgeComponent } from './dashboard/characters-list/character-item/badge/badge.component';
import { EpisodesListComponent } from './dashboard/episodes-list/episodes-list.component';
import { AlertComponent } from './dashboard/characters-list/alert/alert.component';
import { DialogComponent } from './dashboard/characters-list/dialog/dialog.component';
import { AboutComponent } from './others/about/about.component';

// Forms module
import { FormsModule } from '@angular/forms';

// HttpClient module for RESTful API
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideMenuComponent,
    DashboardComponent,
    NotFoundPageComponent,
    CharactersListComponent,
    CharacterItemComponent,
    BadgeComponent,
    EpisodesListComponent,
    AlertComponent,
    DialogComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule,
    HttpClientModule,
  ],
  entryComponents: [
    DialogComponent,
    AboutComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
