import { Component, OnInit, ViewChild, ViewChildren, QueryList, forwardRef, ContentChild, ɵConsole, Injectable } from '@angular/core';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { TrainingreleasePage } from '../trainingrelease/trainingrelease.page';
import { RestPage } from '../rest/rest.page';
import { Index } from '../singleton.service';
import { SWITCH_TEMPLATE_REF_FACTORY__POST_R3__ } from '@angular/core/src/linker/template_ref';
import { HomePage } from '../home/home.page';



@Component({
  selector: 'app-activity',
  templateUrl: './activity.page.html',
  styleUrls: ['./activity.page.scss'],
})

export class ActivityPage implements OnInit {

  dayData: any;
  data: any;
  index: any;
  timer: number = null;
  transferData: any;
  nextDay: any;
  template: any = 1;
  i: number = 0;
  countsec: number = null;

  constructor(private route: Router,
    private router: ActivatedRoute,
    public teste: TrainingreleasePage) { }


  public switchTemplate() {
    console.log("TAMANHO DO I ~~~~~~~~~~~~~~~~~~~~~~~~~> ", this.i);
    console.log("TAMANHO DO I ~~~~~~~~~~~~~~~~~~~~~~~~~> ", this.dayData[this.i]);
    console.log('@@@@@@@@@@@@@@@@@@@@@@@@ ENTROU NO SWITCH TEMPLATE @@@@@@@@@@@@@@@@@@@@@@@@')
    if (this.template == 1) {
      this.defineTempo();
      this.template = 2;
      console.log('TROCOU TEMPLATE PRA 2 (REST)');
    } else if (this.template == 2) {
      this.template = 1;
      if(this.dayData[this.i].seconds != null )
        this.countseconds();
      console.log('TROCOU TEMPLATE PRA 1 (ACTIVITY)')
    }
  }

  public switchExercise() {
    console.log('@@@@@@@@@@@@@@@@@@@@@@@@ ENTROU NO SWITCH EXERCISE @@@@@@@@@@@@@@@@@@@@@@@@');
    this.i = this.i + 1;
    console.log('@@@@@@@@@@@@@@@@@@@@@@@@ CHAMOU O SWITCH TEMPLATE @@@@@@@@@@@@@@@@@@@@@@@@')
    this.switchTemplate();
  }

  ngOnInit() {
    this.dayData = this.teste.day;
    console.log(this.dayData);
  }


  public async defineTempo() {
    this.timer = 3;
    var interval = setInterval(() => {
      console.log("CONTADOR =========== ", this.timer);
      this.timer--;
      if(this.timer < 0 ){
        clearInterval(interval);
        console.log('Ding!');
        this.switchTemplate();
      };
    }, 1000);
  }

  public async countseconds() {
    this.countsec  = 3;
    var interval = setInterval(() => {
      console.log("CONTADOR =========== ", this.countsec);
      this.countsec--;
      if(this.countsec < 0 ){
        clearInterval(interval);
        console.log('Ding!');
        this.switchExercise();
      };
    }, 1000);
  }
}







