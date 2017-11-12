import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-traject-locaties-detail',
  templateUrl: './traject-locaties-detail.component.html',
  styleUrls: ['./traject-locaties-detail.component.css']
})
export class TrajectLocatiesDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.special.cards .image').dimmer({
      on: 'hover'
    });
  }

}
