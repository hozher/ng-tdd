import { Component, OnInit } from '@angular/core';

import { FootballDataService } from '../../core/football-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-competition-list',
  templateUrl: './competition-list.component.html',
  styleUrls: ['./competition-list.component.css']
})
export class CompetitionListComponent implements OnInit {

  competitions$: Observable<any>;

  constructor() { }

  ngOnInit() {

  }

}
