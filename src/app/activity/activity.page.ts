import { Component, OnInit, ViewChild, ViewChildren, QueryList, forwardRef, ContentChild, ɵConsole, Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TrainingreleasePage } from '../trainingrelease/trainingrelease.page';
import { RestPage } from '../rest/rest.page';


@Component({
  selector: 'app-activity',
  templateUrl: './activity.page.html',
  styleUrls: ['./activity.page.scss'],
})

export class ActivityPage implements OnInit {

  dayData: any;
  data: any;
  index: number = 0;
  timer: number = null;
  transferData: any;
  nextDay: any;

  constructor(private route: Router,
    private router: ActivatedRoute,
    public teste: TrainingreleasePage) { }

  ngOnInit() {
    this.dayData = this.teste.day;
    console.log(this.dayData);

    if (this.index < this.teste.day.length)
      this.index = this.teste.index;
    console.log(this.teste.index);

    this.data = this.dayData[this.index];
    this.teste.index += 1;
    console.log('this.data ~~> ', this.dayData[this.index]);

    if (this.data.seconds != null)
      this.defineTempo()
  }

  defineTempo() {
    this.timer = this.data.seconds;
    setInterval(() => {
      if (this.timer != 0 && this.timer != null)
        this.timer -= 1;
      else {
        clearInterval(this.timer);
        this.timer = 5;
        this.route.navigate(['/rest/']);
      }
    }, 1000);
  }
}






