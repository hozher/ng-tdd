import { Location } from '@angular/common';
import { async, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { routes } from './app-routing.module';
import { AppModule } from './app.module';

describe('AppRoutingModule', () => {
  let location: Location;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule,
        RouterTestingModule.withRoutes(routes)
      ],
    });
  }));

  beforeEach(() => {
    location = TestBed.get(Location);
    router = TestBed.get(Router);
  });

  xit('17. should navigate to home', async(() => {
    router.navigate(['']).then(() => {
      expect(location.path()).toBe('/');
    });
  }));

});
