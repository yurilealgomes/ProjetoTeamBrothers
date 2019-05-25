import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';


export interface Data {
  name: string;
  rep: string;
  gifPath: string;
  seconds: number;
}

@Component({
  selector: 'app-trainingrelease',
  templateUrl: './trainingrelease.page.html',
  styleUrls: ['./trainingrelease.page.scss'],
})

export class TrainingreleasePage implements OnInit {

  day1: Data[] = [
    {name: 'Saltar à corda', rep: null, gifPath: 'assets/gif/Treino-Abdômen - 1 - Saltar a Corda.gif', seconds: 20},
    {name: 'Flexão inclinada', rep: 'x 15', gifPath: 'assets/gif/no.jpg', seconds: null},
    {name: 'Flexão com os joelhos', rep: 'x 10', gifPath: 'assets/gif/no.jpg', seconds: null},
    {name: 'Flexões', rep: 'x 8', gifPath: 'assets/gif/no.jpg', seconds: null},
    {name: 'Flexão com os braços abertos', rep: 'x 8', gifPath: 'assets/gif/Treino-Braço - 3 - Flexão com os braços abertos.gif', seconds: null},
    {name: 'Flexão inclinada', rep: 'x 15', gifPath: 'assets/gif/no.jpg', seconds: null},
    {name: 'Flexão na caixa', rep: 'x 10', gifPath: 'assets/gif/Treino-Peito - 9 - Flexão na Caixa.gif', seconds: null},
    {name: 'Flexões', rep: 'x 8', gifPath: 'assets/gif/no.jpg', seconds: null},
    {name: 'Flexão com os braços abertos', rep: 'x 8', gifPath: 'assets/gif/Treino-Braço - 3 - Flexão com os braços abertos.gif', seconds: null},
    {name: 'Alongamento cobra', rep: null, gifPath: 'assets/gif/Treino-Peito - 12 - Alongamento cobra.gif', seconds: 20},
    {name: 'Alongamento do peito', rep: null, gifPath: 'assets/gif/Treino-Peito - 13 - Alongamento do Peito.gif', seconds: 20}
  ];

  day2: Data[] = [
    {name: 'Abdominais', rep: 'x 10', gifPath: 'assets/gif/Treino-Abdômen - 5 - Abdominal.gif', seconds: null},
    {name: 'Abdominal russo', rep: 'x 12', gifPath: 'assets/gif/Treino-Abdômen - 11 - Abdominal Russo.gif', seconds: null},
    {name: 'Montanha', rep: 'x 12', gifPath: 'assets/gif/Treino-Abdômen - 14 - Montanha.gif', seconds: null},
    {name: 'Toque de calcanhar', rep: 'x 15', gifPath: 'assets/gif/Treino-Abdômen - 13 - Toque de Calcanhar.gif', seconds: null},
    {name: 'Elevação de pernas', rep: 'x 12', gifPath: 'assets/gif/no.jpg', seconds: null},
    {name: 'Prancha', rep: null, gifPath: 'assets/gif/Treino-Abdômen - 16 - Prancha.gif', seconds: 30},
    {name: 'Abdominais', rep: 'x 10', gifPath: 'assets/gif/Treino-Abdômen - 5 - Abdominal.gif', seconds: null},
    {name: 'Abdominal russo', rep: 'x 12', gifPath: 'assets/gif/Treino-Abdômen - 11 - Abdominal Russo.gif', seconds: null},
    {name: 'Toque de calcanhar', rep: 'x 15', gifPath: 'assets/gif/Treino-Abdômen - 13 - Toque de Calcanhar.gif', seconds: null},
    {name: 'Toque de calcanhar', rep: 'x 15', gifPath: 'assets/gif/Treino-Abdômen - 13 - Toque de Calcanhar.gif', seconds: null},
    {name: 'Elevação de pernas', rep: 'x 12', gifPath: 'assets/gif/no.jpg', seconds: null},
    {name: 'Prancha', rep: null, gifPath: 'assets/gif/Treino-Abdômen - 16 - Prancha.gif', seconds: 30},
    {name: 'Alongamento cobra', rep: null, gifPath: 'assets/gif/Treino-Peito - 12 - Alongamento cobra.gif',seconds: 20},
    {name: 'Alongamento da coluna lombar lado esquerdo', rep: null, gifPath: 'assets/gif/Treino-Abdômen - 18 - Alongamento da coluna lombar lado esquerdo.gif', seconds: 30},
    {name: 'Alongamento da coluna lombar lado esquerdo', rep: null, gifPath: 'assets/gif/Treino-Abdômen - 19 - Alongamento da coluna lombar lado direito.gif', seconds: 30},
  ];

  day3: Data[] = [
    {name: 'Abdominais', rep: 'x 10', gifPath: 'assets/gif/Treino-Abdômen - 5 - Abdominal.gif', seconds: null},
    {name: 'Abdominal russo', rep: 'x 12', gifPath: 'assets/gif/Treino-Abdômen - 11 - Abdominal Russo.gif', seconds: null},
    {name: 'Montanha', rep: 'x 12', gifPath: 'assets/gif/Treino-Abdômen - 14 - Montanha.gif', seconds: null},
    {name: 'Toque de calcanhar', rep: 'x 15', gifPath: 'assets/gif/Treino-Abdômen - 13 - Toque de Calcanhar.gif', seconds: null},
    {name: 'Elevação de pernas', rep: 'x 12', gifPath: 'assets/gif/no.jpg', seconds: null},
    {name: 'Prancha', rep: null, gifPath: 'assets/gif/Treino-Abdômen - 16 - Prancha.gif', seconds: 30},
    {name: 'Abdominais', rep: 'x 10', gifPath: 'assets/gif/Treino-Abdômen - 5 - Abdominal.gif', seconds: null},
    {name: 'Abdominal russo', rep: 'x 12', gifPath: 'assets/gif/Treino-Abdômen - 11 - Abdominal Russo.gif', seconds: null},
    {name: 'Toque de calcanhar', rep: 'x 15', gifPath: 'assets/gif/Treino-Abdômen - 13 - Toque de Calcanhar.gif', seconds: null},
    {name: 'Toque de calcanhar', rep: 'x 15', gifPath: 'assets/gif/Treino-Abdômen - 13 - Toque de Calcanhar.gif', seconds: null},
    {name: 'Elevação de pernas', rep: 'x 12', gifPath: 'assets/gif/no.jpg', seconds: null},
    {name: 'Prancha', rep: null, gifPath: 'assets/gif/Treino-Abdômen - 16 - Prancha.gif', seconds: 30},
    {name: 'Alongamento cobra', rep: null, gifPath: 'assets/gif/Treino-Peito - 12 - Alongamento cobra.gif', seconds: 20},
    {name: 'Alongamento da coluna lombar lado esquerdo', rep: null, gifPath: 'assets/gif/Treino-Abdômen - 18 - Alongamento da coluna lombar lado esquerdo.gif', seconds: 30},
    {name: 'Alongamento da coluna lombar lado esquerdo', rep: null, gifPath: 'assets/gif/Treino-Abdômen - 19 - Alongamento da coluna lombar lado direito.gif', seconds: 30},
  ];
  

  constructor() { }

  ngOnInit() {
    
  }
  
  @ViewChild('perfectScrollbar') perfectScrollbar: ElementRef;

  ngAfterViewInit() {
    new PerfectScrollbar(this.perfectScrollbar.nativeElement);
  }

}
