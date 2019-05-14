import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';


@Component({
  selector: 'app-traningrelease',
  templateUrl: './traningrelease.page.html',
  styleUrls: ['./traningrelease.page.scss'],
})
export class TraningreleasePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  @ViewChild('perfectScrollbar') perfectScrollbar: ElementRef;

  ngAfterViewInit() {
    new PerfectScrollbar(this.perfectScrollbar.nativeElement);
  }

  dificuldade = 'Facil';
  treino = '25';
}
