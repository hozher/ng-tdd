import { Location } from '@angular/common';
import { async, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { routes } from './competition-routing.module';
import { CompetitionModule } from './competition.module';

describe('CompetitionRoutingModule', () => {
  let location: Location;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CompetitionModule,
        RouterTestingModule.withRoutes(routes)
      ],
    });
  }));

  beforeEach(() => {
    location = TestBed.get(Location);
    router = TestBed.get(Router);
  });

  xit('18. should navigate to the competitions list', async(() => {
    router.navigate(['competitions']).then(() => {
      expect(location.path()).toBe('/competitions');
    });
  }));

  xit('19. should navigate to the competition details', async(() => {
    router.navigate(['competitions', '53']).then(() => {
      expect(location.path()).toBe('/competitions/53');
    });
  }));

});
