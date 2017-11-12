import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-traject-ods',
  templateUrl: './traject-ods.component.html',
  styleUrls: ['./traject-ods.component.css']
})
export class TrajectOdsComponent implements OnInit {
  private ods = new Array<Object>();
  removingOd;

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

  openAddOd() {
    $('.ui.modal.addod').modal('show');
  }
  openRemoveOd(od) {
    this.removingOd = od;
    $('.ui.modal.removeod').modal('show');
  }

  addOd(od) {
    this.ods.push(od);
  }
  removeOd() {
    for( var x = 0; x < this.ods.length; x++) {
      if(this.ods[x] === this.removingOd) {
        this.ods.splice(x, 1);
      }
    }
  }
}
