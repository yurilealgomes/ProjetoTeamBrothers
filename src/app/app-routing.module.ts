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
    path: 'metas',
    loadChildren: './metas/metas.module#MetasPageModule'
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
    path: 'configuracao',
    loadChildren: './configuracao/configuracao.module#ConfiguracaoPageModule'
  },
  { path: 'step', loadChildren: './step/step.module#StepPageModule' },
  { path: 'step', loadChildren: './step/step.module#StepPageModule' },
  { path: 'userlevel', loadChildren: './userlevel/userlevel.module#UserlevelPageModule' },
  { path: 'remainingdays', loadChildren: './remainingdays/remainingdays.module#RemainingdaysPageModule' },
  { path: 'traningrelease', loadChildren: './traningrelease/traningrelease.module#TraningreleasePageModule' },
  { path: 'goals', loadChildren: './goals/goals.module#GoalsPageModule' },

 
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
