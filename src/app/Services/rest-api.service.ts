import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Character } from "../Interfaces/character";
import { Episode } from "../Interfaces/episode";
import { environment } from "../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  private apiURL = environment.base_URL;

  constructor(private http: HttpClient) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // --------- Characters ---------
  
  /**
   * HttpClient API get() method => Fetch characters list
   * 
   * @returns Observable<Character[]> Characters list
   */
  getCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(this.apiURL + '/api/characters', this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

    /**
     * HttpClient API put() method => Update character
     * 
     * @param id number - Character ID
     * @param character Character - Character to edit
     * @returns Observable<Character> - Updated character
     */
    updateCharacter(id: number, character: Character): Observable<Character> {
      return this.http.put<Character>(this.apiURL + '/api/characters/' + id, JSON.stringify(character), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
    }

    // --------- Episodes ---------
    
    /**
     * HttpClient API get() method => Fetch episodes list
     * 
     * @returns Observable<Episode[]> - Episodes list
     */
    getEpisodes(): Observable<Episode[]> {
      return this.http.get<Episode[]>(this.apiURL + '/api/episodes', this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
    }

    /**
     * Error handling
     * 
     * @param error HttpErrorResponse - Error
     */
    handleError(error: HttpErrorResponse) {
      let errorMessage = '';
      if(error.error instanceof ErrorEvent) {
        // Get client-side error
        errorMessage = error.error.message;
      } else {
        // Get server-side error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      // window.alert(errorMessage);
      return throwError(errorMessage);
   }
}
