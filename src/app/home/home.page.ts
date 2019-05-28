import { Component, ViewChild, ElementRef, Input } from '@angular/core';
import { UserlevelPage } from '../userlevel/userlevel.page';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild(UserlevelPage) public variavel: UserlevelPage;

  dificuldade: any;

  constructor(private router: ActivatedRoute) {}

  ngOnInit() {
    this.dificuldade = this.router.snapshot.params['level'];
    console.log('Recebido ~~~~~>', this.router.snapshot.params['level'])
  }
}
