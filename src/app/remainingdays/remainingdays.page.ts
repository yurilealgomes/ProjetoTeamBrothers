import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {ProgressBarModule} from "angular-progress-bar";
import { ActivatedRoute } from '@angular/router';
import { UserlevelPage } from '../userlevel/userlevel.page';
import { HomePage } from '../home/home.page';
@Component({
  selector: 'app-remainingdays',
  templateUrl: './remainingdays.page.html',
  styleUrls: ['./remainingdays.page.scss'],
})
export class RemainingdaysPage implements OnInit {
  loadProgress = 0;

  @ViewChild(HomePage) public variavel: HomePage;

  dificuldade: any;

  constructor(private router: ActivatedRoute) {}

  ngOnInit() {
    setInterval(() => {
      if (this.loadProgress < 100)
        this.loadProgress += 1;
      else
        clearInterval(this.loadProgress);
    }, 100);

    this.dificuldade = this.router.snapshot.params['level'];
    console.log('Recebido ~~~~~>', this.router.snapshot.params['level'])
  }
  
  remainingDays = 28;
  calcRemainingDays = (28-this.remainingDays)/28*100;
}
