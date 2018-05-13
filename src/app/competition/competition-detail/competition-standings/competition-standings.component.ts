import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-competition-standings',
  templateUrl: './competition-standings.component.html',
  styleUrls: ['./competition-standings.component.css']
})
export class CompetitionStandingsComponent {

  @Input() standings;

  constructor() { }

}
