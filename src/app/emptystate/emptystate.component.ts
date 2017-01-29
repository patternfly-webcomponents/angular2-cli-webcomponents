import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-emptystate',
  templateUrl: './emptystate.component.html',
  styleUrls: ['./emptystate.component.css']
})
export class EmptystateComponent implements OnInit {

  @ViewChild('pfTooltip') pfTooltip:ElementRef;

  tooltipText = "Opens Dashboard Tab...";
  
  constructor(private _router: Router) { }

  ngOnInit() {
    document.body.style.backgroundColor = '#fff';
  }

  mainAction(event) {
    (<any>this.pfTooltip).el.nativeElement.close();
    this._router.navigateByUrl("/dashboard");
  }

}
