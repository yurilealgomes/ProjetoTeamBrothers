import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {ProgressBarModule} from "angular-progress-bar";
import PerfectScrollbar from 'perfect-scrollbar';
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
      if (this.loadProgress < 100)
        this.loadProgress += 1;
      else
        clearInterval(this.loadProgress);
    }, 100);
  }
  
  remainingDays = 27;
  calcRemainingDays = (28-this.remainingDays)/28*100;

  
  @ViewChild('perfectScrollbar') perfectScrollbar: ElementRef;

  ngAfterViewInit() {
    new PerfectScrollbar(this.perfectScrollbar.nativeElement);
  }

}
