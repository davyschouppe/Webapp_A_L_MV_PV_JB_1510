import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-ods',
  templateUrl: './ods.component.html',
  styleUrls: ['./ods.component.css']
})
export class OdsComponent implements OnInit {
  private ods = new Array<Object>();
  removingOd;
  editingOd;

  constructor() {
    this.ods = [{ 'nr': 130, 'beschrijving': 'Kiest adequaat hulpmiddel' },
    { 'nr': 135, 'beschrijving': 'Gaat om met hulpverleners' },
    { 'nr': 136, 'beschrijving': 'Maakt realistische keuzes' },
    { 'nr': 147, 'beschrijving': 'Reageert gepast in noodsituaties' },
    { 'nr': 149, 'beschrijving': 'Is mobiel' },
    { 'nr': 151, 'beschrijving': 'Maakt gebruik van openbaar of ander gemeenschappelijk vervoer' }];
  }

  ngOnInit() {
  }

  openNewOd() {
    $('.ui.modal.makeod').modal('show');
  }
  openEditOd(od) {
    this.editingOd = od;
    $('.ui.modal.editod').modal('show');
  }
  openRemoveOd(od) {
    this.removingOd = od;
    $('.ui.modal.removeod').modal('show');
  }

  addOd(od) {
    this.ods.push(od);
  }
  editOd() {

  }
  removeOd() {
    for (var x = 0; x < this.ods.length; x++) {
      if (this.ods[x] === this.removingOd) {
        this.ods.splice(x, 1);
      }
    }
  }

}
