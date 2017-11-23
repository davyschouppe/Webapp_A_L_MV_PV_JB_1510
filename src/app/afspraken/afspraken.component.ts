import { Component, OnInit } from '@angular/core';
import { AfsprakenDataServiceService } from '../afspraken-data-service.service';
import { Afspraak } from "./afspraak.model";
import { Subject } from "rxjs/Subject";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  private afspraak: FormGroup;
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
    this.afspraak = this.fb.group({
      icon: [null, [Validators.required]],
      beschrijving: [null, [Validators.required, Validators.minLength(2)]]
    });
    this.editingAfspraakFormGroup = this.fb.group({
      icon: [null, [Validators.required]],
      beschrijving: [null, [Validators.required, Validators.minLength(2)]],
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
    this.afspraak.reset();
    $('.ui.modal.makerule').modal('show');
  }
  openEditRule(afspraak) {
    this.editingAfspraakFormGroup.reset();
    this.editingAfspraak = afspraak;
    this.editingAfspraakFormGroup.setValue({
      icon: this.editingAfspraak.icon,
      beschrijving: this.editingAfspraak.beschrijving
    });
    $('.ui.modal.editrule').modal('show');
  }
  openRemoveRule(afspraak) {
    this.removingAfspraak = afspraak;
    $('.ui.modal.removerule').modal('show');
  }

  addRule() {
    if (this.afspraak.valid) {
      const afspraak = new Afspraak(this.afspraak.value.icon, this.afspraak.value.beschrijving);
      this._afsprakenDataService.addAfspraak(afspraak.toJSON()).subscribe(item => this._afspraken.push(item));
      this.afspraak.reset();
    }
  }
  editRule() {
    if (this.editingAfspraakFormGroup.valid) {
      this.editingAfspraak.icon = this.editingAfspraakFormGroup.value.icon;
      this.editingAfspraak.beschrijving = this.editingAfspraakFormGroup.value.beschrijving;
      this._afspraken[_.findIndex(this._afspraken, { _id: this.editingAfspraak.id })] = this.editingAfspraak;
      this._afsprakenDataService.editAfspraak(this.editingAfspraak).subscribe();
      this.editingAfspraakFormGroup.reset();
    }
  }
  removeRule() {
    _.remove(this._afspraken, { _id: this.removingAfspraak._id });
    this._afsprakenDataService.deleteAfspraak(this.removingAfspraak._id).subscribe();
  }

}
