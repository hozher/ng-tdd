import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionStandingsComponent } from './competition-standings.component';

describe('CompetitionStandingsComponent', () => {
  let component: CompetitionStandingsComponent;
  let fixture: ComponentFixture<CompetitionStandingsComponent>;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitionStandingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitionStandingsComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    component.standings = [{
      'position': 1,
      'teamName': 'FC Barcelona',
      'crestURI': 'http://upload.wikimedia.org/wikipedia/de/a/aa/Fc_barcelona.svg',
      'playedGames': 28,
      'points': 72,
      'goals': 72,
      'goalsAgainst': 13,
      'goalDifference': 59,
      'wins': 22,
      'draws': 6,
      'losses': 0,
      'home': {
        'goals': 38,
        'goalsAgainst': 6,
        'wins': 11,
        'draws': 2,
        'losses': 0
      },
      'away': {
        'goals': 34,
        'goalsAgainst': 7,
        'wins': 11,
        'draws': 4,
        'losses': 0
      }
    }];
    fixture.detectChanges();
  });

  xit('26. should do something', () => {
    expect(component).toBeTruthy();
  });

  xit('27. should display a table', () => {
    expect(element.querySelector('table')).toBeTruthy();
  });

  xit('28. should display a header row', () => {
    const headerRow = element.querySelector('thead > tr');
    expect(headerRow).toBeTruthy();

    const headerRowCells = headerRow.querySelectorAll('th');
    expect(headerRowCells[0].textContent).toBe('#');
    expect(headerRowCells[1].textContent).toBe('Club');
  });

  xit('29. should display team standings in body rows', () => {
    const bodyRows = element.querySelectorAll('tbody > tr');
    expect(bodyRows).toBeTruthy();
    expect(bodyRows.length).toBe(1);

    const headerRowCells = bodyRows[0].querySelectorAll('td');
    expect(bodyRows[0].querySelector('th').textContent).toBe('1', 'should display the position');
    expect(headerRowCells[0].textContent).toBe('FC Barcelona', 'should display team name');
  });
});
