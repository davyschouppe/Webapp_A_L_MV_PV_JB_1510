import { Component, OnInit } from '@angular/core';
import { OrderByPipe } from '../custom_pipes/order-by.pipe';

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
  providers: [ OdsDataService ]
})
export class OdsComponent implements OnInit {
  // ods = new Array<Object>();
  _ods: Od[];
  myUnsubscribe: Subject<boolean> = new Subject<boolean>();
  removingOd;
  editingOd;
  od: FormGroup;
  editingOdFormGroup: FormGroup;

  constructor(private _odsDataService: OdsDataService,
    private fb: FormBuilder) {}

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
    this.od.reset();
    $('.ui.modal.makeod').modal('show');
  }
  openEditOd(od) {
    this.editingOdFormGroup.reset();
    this.editingOd = od;
    this.editingOdFormGroup.setValue({
      nr: this.editingOd.nr,
      beschrijving: this.editingOd.beschrijving
    });
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
      this.editingOd.beschrijving = this.editingOdFormGroup.value.beschrijving;
      this.editingOd.nr = this.editingOdFormGroup.value.nr;
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
