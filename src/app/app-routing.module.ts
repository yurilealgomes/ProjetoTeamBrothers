import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
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
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
