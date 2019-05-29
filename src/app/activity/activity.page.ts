import { Component, OnInit, ViewChild, ViewChildren, QueryList, forwardRef, ContentChild, ɵConsole, Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TrainingreleasePage } from '../trainingrelease/trainingrelease.page';
import { RestPage } from '../rest/rest.page';
import { Index } from '../singleton.service';


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

  constructor(private route: Router,
    private router: ActivatedRoute,
    public teste: TrainingreleasePage) { }

  ngOnInit() {
    const scoreindex = Index.getInstance();
    this.index = scoreindex;
    console.log("SCOREINDEX ~~~~~~~>>", scoreindex);

    this.dayData = this.teste.day;
    console.log("DAYDATA~~~~>",this.dayData);

    if (this.index < this.dayData.length)
      this.index = scoreindex.index._indexer;
    console.log("FODA_SE PORRA ~~~~~~~~>>>>> ", this.index._indexer);

    this.data = this.dayData[this.index._indexer];
    console.log('this.data ~~> ', this.dayData[this.index._indexer]);

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






