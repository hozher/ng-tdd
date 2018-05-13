import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompetitionListComponent } from './competition-list/competition-list.component';
import { CompetitionDetailComponent } from './competition-detail/competition-detail.component';
import { CompetitionRoutingModule } from './competition-routing.module';
import { CompetitionStandingsComponent } from './competition-detail/competition-standings/competition-standings.component';

@NgModule({
  imports: [
    CommonModule,
    CompetitionRoutingModule
  ],
  declarations: [
    CompetitionListComponent,
    CompetitionDetailComponent,
    CompetitionStandingsComponent
  ]
})
export class CompetitionModule { }
