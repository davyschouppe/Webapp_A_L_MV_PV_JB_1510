import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-leerlingen-detail-tracking',
  templateUrl: './leerlingen-detail-tracking.component.html',
  styleUrls: ['./leerlingen-detail-tracking.component.css']
})
export class LeerlingenDetailTrackingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.kaart .image')
      .dimmer('toggle')
    ;
  }
}
