import { Component, OnInit } from '@angular/core';
import {AfsprakenDataServiceService} from '../afspraken-data-service.service';
import {Afspraak} from "./afspraak.model";
import {Subject} from "rxjs/Subject";
declare var $: any;

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

  constructor(private _afsprakenDataService: AfsprakenDataServiceService) {
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

  }
  removeRule() {
    for (var x = 0; x < this.afspraken.length; x++) {
      if (this.afspraken[x] === this.removingAfspraak) {
        this.afspraken.splice(x, 1);
      }
    }
  }

}
