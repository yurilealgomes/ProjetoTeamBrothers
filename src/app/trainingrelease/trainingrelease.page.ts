import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';


@Component({
  selector: 'app-trainingrelease',
  templateUrl: './trainingrelease.page.html',
  styleUrls: ['./trainingrelease.page.scss'],
})
export class TrainingreleasePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  @ViewChild('perfectScrollbar') perfectScrollbar: ElementRef;

  ngAfterViewInit() {
    new PerfectScrollbar(this.perfectScrollbar.nativeElement);
  }

  dificuldade = 'Fácil';
  treino = '25';
}
