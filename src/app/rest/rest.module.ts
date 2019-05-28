import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RestPage } from './rest.page';
import { ProgressBarModule } from 'angular-progress-bar';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { TrainingreleasePage } from '../trainingrelease/trainingrelease.page';
import { ActivityPage } from '../activity/activity.page';

const routes: Routes = [
  {
    path: '',
    component: RestPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ProgressBarModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    })
  ],
  declarations: [RestPage],
  providers: [
    TrainingreleasePage
  ]
})
export class RestPageModule {}
