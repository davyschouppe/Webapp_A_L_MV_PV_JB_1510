import { Component, OnInit } from '@angular/core';

declare var $: any;
import {OdsDataService} from '../ods-data.service';
import {Od} from './od.model';
import {Subject} from 'rxjs/Subject';
// const _ = require('lodash');
import * as _ from 'lodash';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
  private od: FormGroup;
  private editingOdFormGroup: FormGroup;

  constructor(private _odsDataService: OdsDataService, private fb: FormBuilder) {
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
    this.od = this.fb.group({
      nr: [null, [Validators.required]],
      beschrijving: [null, [Validators.required, Validators.minLength(2)]]
    });
    this.editingOdFormGroup = this.fb.group({
      nr: [null, [Validators.required]],
      beschrijving: [null, [Validators.required, Validators.minLength(2)]]
    });
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

  addOd() {
    if (this.od.valid) {
      const od = new Od(this.od.value.nr, this.od.value.beschrijving);
      this._odsDataService.addOd(od.toJSON()).subscribe(item => this._ods.push(item));
      this.od.reset();
    }
  }
  editOd() {
    if (this.editingOdFormGroup.valid) {
      this.editingOd.beschrijving = _.isNull(this.editingOdFormGroup.value.beschrijving) ? this.editingOd.beschrijving : this.editingOdFormGroup.value.beschrijving;
      this.editingOd.nr = _.isNull(this.editingOdFormGroup.value.nr) ? this.editingOd.nr : this.editingOdFormGroup.value.nr;
      this._ods[_.findIndex(this._ods, {_id : this.editingOd.id})] = this.editingOd;
      this._odsDataService.editOd(this.editingOd).subscribe();
      this.editingOdFormGroup.reset();
    }

  }
  removeOd() {
    _.remove(this._ods, {_id: this.removingOd._id});
    this._odsDataService.deleteOd(this.removingOd._id).subscribe();
  }

}
