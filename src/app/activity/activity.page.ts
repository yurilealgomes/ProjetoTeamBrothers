import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { Router } from '@angular/router';

export interface Data {
  name: string;
  rep: string;
  gifPath: string;
  seconds: number;
}

@Component({
  selector: 'app-activity',
  templateUrl: './activity.page.html',
  styleUrls: ['./activity.page.scss'],
})

export class ActivityPage implements OnInit {


  constructor(private route: Router) { }

  ngOnInit() {
    setInterval(() => {
      if (this.timer != 0)
        this.timer -= 1;
      else {
        clearInterval(this.timer);
        this.route.navigate(['rest']);
      }
    }, 1000);

  }

  day2: Data[] = [
    { name: 'Abdominais', rep: 'x 10', gifPath: 'assets/gif/Treino-Abdômen - 5 - Abdominal.gif', seconds: null },
    { name: 'Abdominal russo', rep: 'x 12', gifPath: 'assets/gif/Treino-Abdômen - 11 - Abdominal Russo.gif', seconds: null },
    { name: 'Montanha', rep: 'x 12', gifPath: 'assets/gif/Treino-Abdômen - 14 - Montanha.gif', seconds: null },
    { name: 'Toque de calcanhar', rep: 'x 15', gifPath: 'assets/gif/Treino-Abdômen - 13 - Toque de Calcanhar.gif', seconds: null },
    { name: 'Elevação de pernas', rep: 'x 12', gifPath: 'assets/gif/no.jpg', seconds: null },
    { name: 'Prancha', rep: null, gifPath: 'assets/gif/Treino-Abdômen - 16 - Prancha.gif', seconds: 30 },
    { name: 'Abdominais', rep: 'x 10', gifPath: 'assets/gif/Treino-Abdômen - 5 - Abdominal.gif', seconds: null },
    { name: 'Abdominal russo', rep: 'x 12', gifPath: 'assets/gif/Treino-Abdômen - 11 - Abdominal Russo.gif', seconds: null },
    { name: 'Toque de calcanhar', rep: 'x 15', gifPath: 'assets/gif/Treino-Abdômen - 13 - Toque de Calcanhar.gif', seconds: null },
    { name: 'Toque de calcanhar', rep: 'x 15', gifPath: 'assets/gif/Treino-Abdômen - 13 - Toque de Calcanhar.gif', seconds: null },
    { name: 'Elevação de pernas', rep: 'x 12', gifPath: 'assets/gif/no.jpg', seconds: null },
    { name: 'Prancha', rep: null, gifPath: 'assets/gif/Treino-Abdômen - 16 - Prancha.gif', seconds: 30 },
    { name: 'Alongamento cobra', rep: null, gifPath: 'assets/gif/Treino-Peito - 12 - Alongamento cobra.gif', seconds: 20 },
    { name: 'Alongamento da coluna lombar lado esquerdo', rep: null, gifPath: 'assets/gif/Treino-Abdômen - 18 - Alongamento da coluna lombar lado esquerdo.gif', seconds: 30 },
    { name: 'Alongamento da coluna lombar lado esquerdo', rep: null, gifPath: 'assets/gif/Treino-Abdômen - 19 - Alongamento da coluna lombar lado direito.gif', seconds: 30 },
  ];

  timer: any = this.day2[5].seconds;

}






