import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-hate-stas-status',
  templateUrl: './hate-stas-status.component.html',
  styleUrls: ['./hate-stas-status.component.css']
})
export class HateStasStatusComponent {

  @Input() hateStas: boolean;

  constructor() { }
}
