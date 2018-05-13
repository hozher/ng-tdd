import { Component } from '@angular/core';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterLinkStubDirective } from '../testing/router-link-directive.stub';

/* tslint:disable:component-selector */
@Component({selector: 'router-outlet', template: ''})
class RouterOutletStubComponent { }

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        RouterLinkStubDirective,
        RouterOutletStubComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  xit('1. should do something', () => {
    expect(component).toBeTruthy();
  });

  xit(`2. should have 'TDD Workshop' as title`, () => {
    expect(component.title).toEqual('TDD Workshop');
  });

  xit('3. should render the navigation bar', () => {
    const nav = element.querySelector('nav');
    expect(nav).toBeTruthy();
    expect(nav.classList).toContain('navbar');
  });

  xit('4. should render title in an anchor tag', () => {
    expect(element.querySelector('a.navbar-brand').textContent).toContain('Welcome to TDD Workshop!');
  });

  xit('20. should link to home and competitions page in the navbar', () => {
    // find DebugElements with an attached RouterLinkStubDirective
    const linkDes = fixture.debugElement.queryAll(By.directive(RouterLinkStubDirective));
    // get attached link directive instances using each DebugElement's injector
    const routerLinks = linkDes.map(de => de.injector.get(RouterLinkStubDirective));

    expect(routerLinks.length).toBe(2);
    expect(routerLinks[0].linkParams).toEqual(['']);
    expect(routerLinks[1].linkParams).toEqual(['competitions']);
  });
});
