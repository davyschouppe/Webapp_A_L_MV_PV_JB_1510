import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-leerlingen-detail-info',
  templateUrl: './leerlingen-detail-info.component.html',
  styleUrls: ['./leerlingen-detail-info.component.css']
})
export class LeerlingenInfoDetailComponent implements OnInit {
  @Input() leerling;

  constructor() { }

  ngOnInit() {
  }

}
