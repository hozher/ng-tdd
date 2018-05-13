import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { FootballDataService } from '../../core/football-data.service';

@Component({
  selector: 'app-competition-detail',
  templateUrl: './competition-detail.component.html',
  styleUrls: ['./competition-detail.component.css']
})
export class CompetitionDetailComponent implements OnInit {

  standings$: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private footballData: FootballDataService
  ) { }

  ngOnInit() {
    this.standings$ = this.route.paramMap;
  }

}
