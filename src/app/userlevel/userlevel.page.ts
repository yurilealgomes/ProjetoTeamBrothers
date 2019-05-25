import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userlevel',
  templateUrl: './userlevel.page.html',
  styleUrls: ['./userlevel.page.scss'],
})
export class UserlevelPage implements OnInit {

  userChoiceLevel: any;
  constructor() { }

  ngOnInit() {
  }

  defineDificuldade(dificuldade) {
    console.log('Selected level ~~> ', dificuldade);
    this.userChoiceLevel = dificuldade;
  }
}
