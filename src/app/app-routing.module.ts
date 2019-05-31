import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'step',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'relatorio',
    loadChildren: './relatorio/relatorio.module#RelatorioPageModule'
  },
  {
    path: 'lembrete',
    loadChildren: './lembrete/lembrete.module#LembretePageModule'
  },
  {
    path: 'step',
    loadChildren: './step/step.module#StepPageModule'
  },
  {
    path: 'userlevel',
    loadChildren: './userlevel/userlevel.module#UserlevelPageModule'
  },
  {
    path: 'remainingdays',
    loadChildren: './remainingdays/remainingdays.module#RemainingdaysPageModule'
  },
  {
    path: 'trainingrelease',
    loadChildren: './trainingrelease/trainingrelease.module#TrainingreleasePageModule'
  },
  {
    path: 'activity',
    loadChildren: './activity/activity.module#ActivityPageModule'
  },
  {
    path: 'rest',
    loadChildren: './rest/rest.module#RestPageModule'
  },  { path: 'endactivity', loadChildren: './endactivity/endactivity.module#EndactivityPageModule' },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
