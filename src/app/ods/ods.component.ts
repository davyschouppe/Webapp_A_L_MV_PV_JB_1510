import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ods',
  templateUrl: './ods.component.html',
  styleUrls: ['./ods.component.css']
})
export class OdsComponent implements OnInit {
  private ods = new Array<Object>();

  constructor() {
    this.ods = [{'nr': 130, 'beschrijving': 'Kiest adequaat hulpmiddel'},
      {'nr': 135, 'beschrijving': 'Gaat om met hulpverleners'},
      {'nr': 136, 'beschrijving': 'Maakt realistische keuzes'},
      {'nr': 147, 'beschrijving': 'Reageert gepast in noodsituaties'},
      {'nr': 149, 'beschrijving': 'Is mobiel'},
      {'nr': 151, 'beschrijving': 'Maakt gebruik van openbaar of ander gemeenschappelijk vervoer'}];
  }

  ngOnInit() {
  }

}
