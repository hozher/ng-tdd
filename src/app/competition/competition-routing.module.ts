import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CompetitionListComponent } from './competition-list/competition-list.component';
import { CompetitionDetailComponent } from './competition-detail/competition-detail.component';

export const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class CompetitionRoutingModule { }
