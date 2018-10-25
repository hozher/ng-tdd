import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CompetitionListComponent } from './competition-list/competition-list.component';
import { CompetitionDetailComponent } from './competition-detail/competition-detail.component';

export const routes: Routes = [
  { path: 'competitions', component: CompetitionListComponent},
  { path: 'competitions/:id', component: CompetitionDetailComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class CompetitionRoutingModule { }
