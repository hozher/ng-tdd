import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { FootballDataService } from './football-data.service';

describe('FootballDataService', () => {
  let service: FootballDataService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ FootballDataService ]
    });
    service = TestBed.get(FootballDataService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  xit('9. should do something', () => {
    expect(service).toBeTruthy();
  });

  describe('Method: getCompetitions', () => {

    xit('10. should expose a method to get competitions', () => {
      expect(service.getCompetitions).toBeDefined();
    });

    xit('11. should retrieve an array of competitions from the API', () => {
      const testData = [{
        'id': 424,
        'caption': 'European Championships France 2016',
        'league': 'EC',
        'year': '2016',
        'currentMatchday': 3,
        'numberOfMatchdays': 7,
        'numberOfTeams': 24,
        'numberOfGames': 38,
        'lastUpdated': '2016-06-22T04:34:39Z'
      }];

      service.getCompetitions().subscribe(data => expect(data).toEqual(testData));

      const req = httpTestingController.expectOne('http://api.football-data.org/v1/competitions');
      expect(req.request.method).toEqual('GET');
      expect(req.request.headers.get('X-Auth-Token')).toBeTruthy('should pass headers');
      req.flush(testData);
    });

  });


  describe('Method: getCompetitionStandings', () => {

    xit('12. should expose a method to get competition standings', () => {
      expect(service.getCompetitionStandings).toBeDefined();
    });

    xit('13. should retrieve competition standings from the API', () => {
      const testData = {
        'leagueCaption': 'Primera Division 2017',
        'matchday': 28,
        'standing': [{
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
        }]
      };

      service.getCompetitionStandings(455).subscribe(
        data => expect(data).toEqual(testData.standing, 'should map the standing')
      );

      const req = httpTestingController.expectOne('http://api.football-data.org/v1/competitions/455/leagueTable');
      expect(req.request.method).toEqual('GET');
      expect(req.request.headers.get('X-Auth-Token')).toBeTruthy('should pass headers');
      req.flush(testData);
    });

  });
});
