import { Component, OnInit } from '@angular/core';
import { SafePipe } from './safe.pipe';



@Component({
  selector: 'app-tableau-frame',
  template: `<iframe [src]="'http://localhost:4202/assets/images/docMgmt.jpg' | safe" width="560" height="315" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>`,
  styleUrls: ['./tableau-frame.component.scss']
})
export class TableauFrameComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
