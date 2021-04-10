import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersListComponent } from "./dashboard/characters-list/characters-list.component";
import { EpisodesListComponent } from "./dashboard/episodes-list/episodes-list.component";
import { NotFoundPageComponent } from "./not-found-page/not-found-page.component";

const routes: Routes = [
  { path: 'dashboard/characters', component: CharactersListComponent },
  { path: 'dashboard/episodes', component: EpisodesListComponent },
  { path: '', redirectTo: '/dashboard/characters', pathMatch: 'full' },
  { path: 'dashboard', redirectTo: '/dashboard/characters', pathMatch: 'full' },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
