import { Component, OnInit } from '@angular/core';

declare var $: any;
import {OdsDataService} from '../ods-data.service';
import {Od} from './od.model';
import {Subject} from 'rxjs/Subject';
// const _ = require('lodash');
import * as _ from 'lodash';

@Component({
  selector: 'app-ods',
  templateUrl: './ods.component.html',
  styleUrls: ['./ods.component.css'],
  providers: [OdsDataService]
})
export class OdsComponent implements OnInit {
  // private ods = new Array<Object>();
  private _ods: Od[];
  private myUnsubscribe: Subject<boolean> = new Subject<boolean>();
  removingOd;
  editingOd;

  constructor(private _odsDataService: OdsDataService) {
    // this.ods = [{'nr': 130, 'beschrijving': 'Kiest adequaat hulpmiddel'},
    //   {'nr': 135, 'beschrijving': 'Gaat om met hulpverleners'},
    //   {'nr': 136, 'beschrijving': 'Maakt realistische keuzes'},
    //   {'nr': 147, 'beschrijving': 'Reageert gepast in noodsituaties'},
    //   {'nr': 149, 'beschrijving': 'Is mobiel'},
    //   {'nr': 151, 'beschrijving': 'Maakt gebruik van openbaar of ander gemeenschappelijk vervoer'}];
  }

  ngOnInit() {
    this._odsDataService.ods.takeUntil(this.myUnsubscribe).subscribe(
      items => this._ods = items);
  }

  ngOnDestroy() {
    this.myUnsubscribe.next(true);
    this.myUnsubscribe.complete();
  }

  get ods() {
    return this._ods;
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
    _.remove(this._ods, {_id: this.removingOd._id});
    this._odsDataService.deleteOd(this.removingOd._id).subscribe();
  }

}
