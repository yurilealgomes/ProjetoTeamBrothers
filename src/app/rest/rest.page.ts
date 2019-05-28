import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ActivityPage } from '../activity/activity.page';
import { TrainingreleasePage } from '../trainingrelease/trainingrelease.page';
import { Singleton } from '../singleton.service';

@Component({
  selector: 'app-rest',
  templateUrl: './rest.page.html',
  styleUrls: ['./rest.page.scss'],
})
export class RestPage implements OnInit {

  @ViewChild(ActivityPage) public variavel: ActivityPage;

  dayData: any;
  data: any;
  timer: number = 10;
  @Input("index")
  index: any;

  constructor(private router: ActivatedRoute,
    public teste: TrainingreleasePage,
    private route: Router) { }

  ngOnInit() {
    this.dayData = this.teste.day;
    this.index = this.teste.index;
    this.data = this.dayData[this.index];
    console.log('this.data restPage~~~> ', this.data)

    setInterval(() => {
      if (this.timer != 0)
        this.timer -= 1;
      else {
        clearInterval(this.timer);
        this.timer = 10;
        this.route.navigate(['/activity/']);
      }
    }, 1000);
  }
}
