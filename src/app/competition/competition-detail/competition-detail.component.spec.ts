import { Component, Input } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { CompetitionDetailComponent } from './competition-detail.component';
import { FootballDataService } from '../../core/football-data.service';
import { ActivatedRouteStub } from '../../../testing/activated-route.stub';

@Component({selector: 'app-competition-standings', template: ''})
class CompetitionStandingsStubComponent {
  @Input() standings;
}

describe('CompetitionDetailComponent', () => {
  let component: CompetitionDetailComponent;
  let fixture: ComponentFixture<CompetitionDetailComponent>;
  let element: HTMLElement;
  let activatedRoute: ActivatedRouteStub;
  let footballDataService: FootballDataService;

  beforeEach(async(() => {
    const activatedRouteStub = new ActivatedRouteStub({ id: 10 });
    const footballDataServiceStub = jasmine.createSpyObj('FootballDataService', ['getCompetitionStandings']);
    footballDataServiceStub.getCompetitionStandings.and.returnValue( of([]) );

    TestBed.configureTestingModule({
      declarations: [
        CompetitionDetailComponent,
        CompetitionStandingsStubComponent
      ],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteStub },
        { provide: FootballDataService, useValue: footballDataServiceStub },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    activatedRoute = TestBed.get(ActivatedRoute);
    footballDataService = TestBed.get(FootballDataService);
    fixture = TestBed.createComponent(CompetitionDetailComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
  });

  xit('22. should do something', () => {
    expect(component).toBeTruthy();
  });

  xit('23. should retrieve competition standings on init', () => {
    expect(footballDataService.getCompetitionStandings).not.toHaveBeenCalled();

    fixture.detectChanges();

    expect(footballDataService.getCompetitionStandings).toHaveBeenCalledTimes(1);
    expect(footballDataService.getCompetitionStandings).toHaveBeenCalledWith(10);
  });

  xit('24. should retrieve competition standings when route changes', () => {
    expect(footballDataService.getCompetitionStandings).not.toHaveBeenCalled();

    fixture.detectChanges();
    activatedRoute.setParamMap({ id: 15 });

    expect(footballDataService.getCompetitionStandings).toHaveBeenCalledTimes(2);
    expect(footballDataService.getCompetitionStandings).toHaveBeenCalledWith(15);
  });

  xit('25. should render the competition standings component', () => {
    expect(element.querySelector('app-competition-standings')).toBeTruthy();
  });
});
