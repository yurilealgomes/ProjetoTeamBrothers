import { Component, OnInit, ViewChild, ViewChildren, QueryList, forwardRef, ContentChild, ɵConsole, Injectable } from '@angular/core';
import { Router, ActivatedRoute, RouterModule, Routes } from '@angular/router';
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
  t: number = 0;

  constructor(private route: Router,
    private router: ActivatedRoute,
    public teste: TrainingreleasePage) { }


  public switchTemplate() {
    console.log("TAMANHO DO I ~~~~~~~~~~~~~~~~~~~~~~~~~> ", this.i);
    console.log("TAMANHO DO I ~~~~~~~~~~~~~~~~~~~~~~~~~> ", this.dayData[this.i]);~
    console.log(" TAMANHO DO T >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", this.t);
    if (this.template == 1) {
      this.defineTempo();
      this.template = 2;
      if(this.t > this.i){
        console.log("ENTROU NO ROUTER PAGE ~~~~~~~~~~");
        
      }
    } else if (this.template == 2) {
      this.template = 1;
      if(this.dayData[this.i].seconds != null )
        this.countseconds();
    }
  }

  public switchExercise() {
    this.i = this.i + 1;
    this.t = this.t + 1;
    this.switchTemplate();
  }

  ngOnInit() {
    this.dayData = this.teste.day;
    console.log(this.dayData);
  }


  public async defineTempo() {
    this.timer = 3;
    var interval = setInterval(() => {
      this.timer--;
      if(this.timer < 0 ){
        clearInterval(interval);
        this.switchTemplate();
      };
    }, 1000);
  }

  public async countseconds() {
    this.countsec  = 3;
    var interval = setInterval(() => {
      this.countsec--;
      if(this.countsec < 0 ){
        clearInterval(interval);
        this.t = this.t + 1;
        this.switchTemplate();
      };
    }, 1000);
  }
}







