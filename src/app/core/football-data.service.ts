import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { CoreModule } from './core.module';
import { Observable } from 'rxjs/internal/Observable';

const headers = new HttpHeaders({
  'X-Auth-Token': '', // Register for a free API token https://www.football-data.org/client/register
});

@Injectable()
export class FootballDataService {

  private apiUrl = 'http://api.football-data.org/v1/';

  constructor(private http: HttpClient) { }

  getCompetitions(): Observable<any>  {
    return;
  }

  getCompetitionStandings(id: any): Observable<any> {
    return;
  }

}
