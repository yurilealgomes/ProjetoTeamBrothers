import { Component, OnInit, ViewChild, ViewChildren, QueryList, forwardRef, ContentChild, ɵConsole, Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TrainingreleasePage } from '../trainingrelease/trainingrelease.page';
import { RestPage } from '../rest/rest.page';
import { Index } from '../singleton.service';
import { SWITCH_TEMPLATE_REF_FACTORY__POST_R3__ } from '@angular/core/src/linker/template_ref';


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

  constructor(private route: Router,
    private router: ActivatedRoute,
    public teste: TrainingreleasePage) { }


  public switchTemplate() {
    console.log('@@@@@@@@@@@@@@@@@@@@@@@@ ENTROU NO SWITCH TEMPLATE @@@@@@@@@@@@@@@@@@@@@@@@')
    if (this.template == 1) {
      this.defineTempo();
      this.template = 2;
      console.log('TROCOU TEMPLATE PRA 2 (REST)');
    } else{
      this.template = 1;
      console.log('TROCOU TEMPLATE PRA 1 (ACTIVITY)')
    }
  }

  public switchExercise() {
    console.log('@@@@@@@@@@@@@@@@@@@@@@@@ ENTROU NO SWITCH EXERCISE @@@@@@@@@@@@@@@@@@@@@@@@');
    this.i++;
    console.log('@@@@@@@@@@@@@@@@@@@@@@@@ CHAMOU O SWITCH TEMPLATE @@@@@@@@@@@@@@@@@@@@@@@@')
    this.switchTemplate();
  }

  ngOnInit() {
    this.dayData = this.teste.day;
    console.log(this.dayData);
  }


  public async defineTempo() {
    this.timer = 30;
    setInterval(() => {
      if (this.timer != 0 && this.timer != null)
        this.timer -= 1;
      else {
        clearInterval(this.timer);
        this.switchTemplate();
      }
    }, 1000);
  }
}






