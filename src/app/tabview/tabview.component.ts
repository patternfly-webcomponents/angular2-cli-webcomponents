import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-tabview',
  templateUrl: './tabview.component.html',
  styleUrls: ['./tabview.component.css']
})
export class TabviewComponent implements OnInit {
  @ViewChild('pfTabs') pfTabs:ElementRef;

  onTabChanged(event: Event){
    alert('oh cool! the active tab is now: ' + (<any>event).detail);
  }

  constructor() { }

  ngOnInit() {
    document.body.style.backgroundColor = '#fff';
  }
}
