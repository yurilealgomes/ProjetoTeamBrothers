import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TrainingreleasePage } from '../trainingrelease/trainingrelease.page';

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
    if (this.i == this.dayData.length) {
      this.route.navigate(['/endofactivity/'], {queryParams: {totalExercises: this.dayData.length}});
    }
    if (this.template == 1) {
      this.defineTempo();
      this.template = 2;
    } else if (this.template == 2) {
      this.template = 1;
      if (this.dayData[this.i].seconds != null)
        this.countseconds();
    }
  }

  public switchExercise() {
    this.i = this.i + 1;
    this.switchTemplate();
  }

  ngOnInit() {
    this.dayData = this.teste.day;
  }

  public async defineTempo() {
    this.timer = 30;
    var interval = setInterval(() => {
      this.timer--;
      if (this.timer < 0) {
        clearInterval(interval);
        this.switchTemplate();
      };
    }, 1000);
  }

  public async countseconds() {
    this.countsec = 30;
    var interval = setInterval(() => {
      this.countsec--;
      if (this.countsec < 0) {
        clearInterval(interval);
        this.switchExercise();
      };
    }, 1000);
  }
}







