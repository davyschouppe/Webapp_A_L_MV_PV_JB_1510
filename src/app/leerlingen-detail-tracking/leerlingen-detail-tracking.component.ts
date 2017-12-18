import {Component, Input, OnInit} from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-leerlingen-detail-tracking',
  templateUrl: './leerlingen-detail-tracking.component.html',
  styleUrls: ['./leerlingen-detail-tracking.component.css']
})
export class LeerlingenDetailTrackingComponent implements OnInit {
  @Input() leerling;
  lat= 51.678418;
  lng= 7.809007;

  constructor() {
  }

  ngOnInit() {
    $('.kaart .image')
      .dimmer('toggle')
    ;
  }
}
