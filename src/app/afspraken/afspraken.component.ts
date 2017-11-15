import { Component, OnInit } from '@angular/core';
import {AfsprakenDataServiceService} from '../afspraken-data-service.service';
import {Afspraak} from "./afspraak.model";
import {Subject} from "rxjs/Subject";
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
declare var $: any;
import * as _ from 'lodash';

@Component({
  selector: 'app-afspraken',
  templateUrl: './afspraken.component.html',
  styleUrls: ['./afspraken.component.css'],
  providers: [AfsprakenDataServiceService]
})
export class AfsprakenComponent implements OnInit {
  private _afspraken: Afspraak[];
  private myUnsubscribe: Subject<boolean> = new Subject<boolean>();
  //private afspraken = new Array<Object>();
  removingAfspraak;
  editingAfspraak;
  private editingAfspraakFormGroup: FormGroup;

  constructor(private _afsprakenDataService: AfsprakenDataServiceService, private fb: FormBuilder) {
    // this.afspraken = [{ 'icon': '../../assets/images/trap.png', 'beschrijving': 'We lopen rechts op de trap' },
    // { 'icon': '../../assets/images/stappen-per-2.jpg', 'beschrijving': 'We stappen per 2' },
    // { 'icon': '../../assets/images/deur-kloppen.png', 'beschrijving': 'We kloppen op de deur voor we binnengaan' },
    // { 'icon': '../../assets/images/gillen-kruis-rood.png', 'beschrijving': 'We gillen niet' },
    // { 'icon': '../../assets/images/groep-blijven.png', 'beschrijving': 'We blijven bij de groep' },
    // { 'icon': '../../assets/images/lopen-kruis-rood.png', 'beschrijving': 'We lopen niet' }];
  }

  ngOnInit() {
    this._afsprakenDataService.afspraken.takeUntil(this.myUnsubscribe).subscribe(
      items => this._afspraken = items);
    this.editingAfspraakFormGroup = this.fb.group({
      icon: [null, [Validators.required]],
      beschrijving: [null, [Validators.required]],
    });
  }
  ngOnDestroy() {
    this.myUnsubscribe.next(true);
    this.myUnsubscribe.complete();
  }

  get afspraken() {
    return this._afspraken;
  }

  openNewRule() {
    $('.ui.modal.makerule').modal('show');
  }
  openEditRule(afspraak) {
    this.editingAfspraak = afspraak;
    $('.ui.modal.editrule').modal('show');
  }
  openRemoveRule(afspraak) {
    this.removingAfspraak = afspraak;
    $('.ui.modal.removerule').modal('show');
  }

  addRule(afspraak) {
    this.afspraken.push(afspraak);
  }
  editRule() {
    this.editingAfspraak.beschrijving = _.isNull(this.editingAfspraakFormGroup.value.beschrijving) ? this.editingAfspraak.beschrijving : this.editingAfspraakFormGroup.value.beschrijving;
    this.editingAfspraak.icon = _.isNull(this.editingAfspraakFormGroup.value.icon) ? this.editingAfspraak.icon : this.editingAfspraakFormGroup.value.icon;
    this._afspraken[_.findIndex(this._afspraken, {_id : this.editingAfspraak.id})] = this.editingAfspraak;
    this._afsprakenDataService.editAfspraak(this.editingAfspraak).subscribe();
    this.editingAfspraakFormGroup.reset();
  }
  removeRule() {
    for (var x = 0; x < this.afspraken.length; x++) {
      if (this.afspraken[x] === this.removingAfspraak) {
        this.afspraken.splice(x, 1);
      }
    }
  }

}
