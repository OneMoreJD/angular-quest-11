import { Injectable } from '@angular/core';
import { Cocktail } from './models/Cocktail';
import { HttpClient } from '@angular/common/http';
import { Observable } from  'rxjs';
import { map } from  "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class CocktailService {

  cocktails: Cocktail[];

  constructor(private http: HttpClient) { }

  getCocktails(): Observable<Cocktail[]> {
    return this.http.get("assets/cocktails.json").pipe(map(data => {
      return data as Cocktail[];
    }));
  }
}
