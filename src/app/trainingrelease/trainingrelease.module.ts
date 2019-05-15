import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TrainingreleasePage } from './trainingrelease.page';

const routes: Routes = [
  {
    path: '',
    component: TrainingreleasePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TrainingreleasePage]
})
export class TrainingreleasePageModule {}
