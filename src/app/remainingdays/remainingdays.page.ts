import { Component, OnInit } from '@angular/core';
import {ProgressBarModule} from "angular-progress-bar";
@Component({
  selector: 'app-remainingdays',
  templateUrl: './remainingdays.page.html',
  styleUrls: ['./remainingdays.page.scss'],
})
export class RemainingdaysPage implements OnInit {
  loadProgress = 0;
  constructor() { }

  ngOnInit() {
    setInterval(() => {
      if (this.loadProgress < 99)
        this.loadProgress += 100/30;
      else
        clearInterval(this.loadProgress);
    }, 100);
  }
  
  remainingDays = 30;

}
