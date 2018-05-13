import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';

import { CompetitionListComponent } from './competition-list.component';
import { FootballDataService } from '../../core/football-data.service';
import { RouterLinkStubDirective } from '../../../testing/router-link-directive.stub';

describe('CompetitionListComponent', () => {
  let component: CompetitionListComponent;
  let fixture: ComponentFixture<CompetitionListComponent>;
  let element: HTMLElement;
  let footballDataService: FootballDataService;

  beforeEach(async(() => {
    const footballDataServiceStub = jasmine.createSpyObj('FootballDataService', ['getCompetitions']);
    const testData = [{
      'id': 455,
      'caption': 'Primera Division 2017',
      'league': 'PD',
      'year': '2017',
      'currentMatchday': 30,
      'numberOfMatchdays': 38,
      'numberOfTeams': 20,
      'numberOfGames': 380,
      'lastUpdated': '2018-03-21T11:00:15Z'
    }, {
      'id': 467,
      'caption': 'World Cup 2018 Russia',
      'league': 'WV',
      'year': '2018',
      'currentMatchday': 1,
      'numberOfMatchdays': 8,
      'numberOfTeams': 32,
      'numberOfGames': 64,
      'lastUpdated': '2018-01-10T14:10:08Z'
    }];
    footballDataServiceStub.getCompetitions.and.returnValue(of(testData));

    TestBed.configureTestingModule({
      declarations: [
        CompetitionListComponent,
        RouterLinkStubDirective
      ],
      providers: [
        { provide: FootballDataService, useValue: footballDataServiceStub },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    footballDataService = TestBed.get(FootballDataService);
    fixture = TestBed.createComponent(CompetitionListComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
  });

  xit('14. should do something', () => {
    expect(component).toBeTruthy();
  });

  xit('15. should retrieve competitions on init', () => {
    expect(footballDataService.getCompetitions).not.toHaveBeenCalled();

    fixture.detectChanges();

    expect(footballDataService.getCompetitions).toHaveBeenCalledTimes(1);
  });

  xit('16. should render a list of competitions', () => {
    fixture.detectChanges();

    const cards = element.querySelectorAll('.card');
    expect(cards.length).toBe(2);

    expect(cards[0].querySelector('.card-title').textContent).toContain('Primera Division 2017');
    expect(cards[0].querySelector('.card-subtitle').textContent).toContain('Matchday 30 of 38');

    expect(cards[1].querySelector('.card-title').textContent).toContain('World Cup 2018 Russia');
    expect(cards[1].querySelector('.card-subtitle').textContent).toContain('Matchday 1 of 8');
  });

  xit('21. should link each item to the competition detail page', () => {
    fixture.detectChanges();
    // find DebugElements with an attached RouterLinkStubDirective
    const linkDes = fixture.debugElement.queryAll(By.directive(RouterLinkStubDirective));
    const routerLinks = linkDes.map(de => de.injector.get(RouterLinkStubDirective));

    expect(routerLinks.length).toBe(2);
    expect(routerLinks[0].linkParams).toEqual(['.', 455]);
    expect(routerLinks[1].linkParams).toEqual(['.', 467]);
  });

});
