import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ActivityPage } from '../activity/activity.page';
import { TrainingreleasePage } from '../trainingrelease/trainingrelease.page';
import { Index } from '../singleton.service';

@Component({
  selector: 'app-rest',
  templateUrl: './rest.page.html',
  styleUrls: ['./rest.page.scss'],
})
export class RestPage implements OnInit {

  @ViewChild(ActivityPage) public variavel: ActivityPage;

  dayData: any;
  data: any;
  timer: number = 5;
  index: any;


 

  constructor(private router: ActivatedRoute,
    public teste: TrainingreleasePage,
    private route: Router) { }

  ngOnInit() {
    const scoreIndex = Index.getInstance();
    this.index = scoreIndex.increaseIndex();
    console.log("INDEX PÓS SCOREINDEX", this.index);

    this.dayData = this.teste.day;
    this.index = scoreIndex;
    this.data = this.dayData[this.index._indexer];
    console.log('TESTE DO DATA ~~~~~>>>>>>', this.data);
    console.log('Teste do Index ~~~~>', this.index._indexer);

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
