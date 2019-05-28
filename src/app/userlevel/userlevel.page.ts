import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-userlevel',
  templateUrl: './userlevel.page.html',
  styleUrls: ['./userlevel.page.scss'],
})
export class UserlevelPage implements OnInit {

  @Input() userChoiceLevel: string;
  
  constructor() { }

  ngOnInit() {
  }

  defineDificuldade(dificuldade) {
    console.log('Selected level ~~> ', dificuldade);
    this.userChoiceLevel = dificuldade;
  }
}
