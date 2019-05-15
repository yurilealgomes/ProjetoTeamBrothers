import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Tela Inicial',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Dias restantes',
      url: '/remainingdays',
      icon: 'calendar'
    },
    {
      title: 'Atividades',
      url: '/activity',
      icon: 'walk'
    },
    {
      title: 'Relatório',
      url: '#',
      icon: 'bookmarks'
    },
    {
      title: 'Lembrete',
      url: '#',
      icon: 'alarm'
    },
    {
      title: 'Configuração',
      url: '#',
      icon: 'cog'
    },
    {
      title: 'Descanso',
      url: '#',
      icon: 'bicycle'
    },
    {
      title: 'Fim de atividade',
      url: '#',
      icon: 'bicycle'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
