import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private http: HttpClient
    ) { }


  /*
    Function to get world covid data
 */
  getCovidData() {
    return this.http.get('https://www.livemint.com/feed-elections/5m/coronavirus.json');
  }
  
  
}
