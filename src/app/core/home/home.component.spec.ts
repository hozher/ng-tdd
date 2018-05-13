import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  xit('5. should do something', () => {
    expect(component).toBeTruthy();
  });

  xit(`6. should have 'Angular Fundamentals' as title`, async(() => {
    expect(component.title).toEqual('Angular Fundamentals');
  }));

  xit('7. should render title in a h2 tag', async(() => {
    expect(element.querySelector('h2').textContent).toEqual('ANGULAR FUNDAMENTALS');
  }));

  xit(`8. should render the fundamental links`, async(() => {
    const a = element.querySelectorAll('a');
    expect(a.length).toBe(3);

    expect(a[0].textContent).toContain('Template Syntax');
    expect(a[0].href).toEqual('https://angular.io/guide/template-syntax');

    expect(a[1].textContent).toContain('Structural Directives');
    expect(a[1].href).toEqual('https://angular.io/guide/structural-directives');

    expect(a[2].textContent).toContain('Pipes');
    expect(a[2].href).toEqual('https://angular.io/guide/pipes');
  }));

});
