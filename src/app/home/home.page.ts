import { Component, ViewChild, ElementRef, Input } from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';
import { UserlevelPage } from '../userlevel/userlevel.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  ngOnInit() {
  }

  @ViewChild('perfectScrollbar') perfectScrollbar: ElementRef;

  ngAfterViewInit() {
    new PerfectScrollbar(this.perfectScrollbar.nativeElement);
  }
  
}
