import { Component, OnInit, Input } from '@angular/core';
import { Traject } from '../traject/traject.model';
import { Afspraak } from '../afspraken/afspraak.model';
import { Subject } from 'rxjs/Subject';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TrajectenDataService } from '../trajecten-data.service';
import { AfsprakenDataServiceService } from '../afspraken-data-service.service';
import * as _ from 'lodash';
declare var $: any;

@Component({
  selector: 'app-traject-afspraken',
  templateUrl: './traject-afspraken.component.html',
  styleUrls: ['./traject-afspraken.component.css'],
  providers: [TrajectenDataService, AfsprakenDataServiceService]
})
export class TrajectAfsprakenComponent implements OnInit {
  @Input() traject;
  _afspraken: Afspraak[];
  myUnsubscribe: Subject<boolean> = new Subject<boolean>();
  removing;

  constructor(private _trajectenDataService: TrajectenDataService,
    private _afsprakenDataService: AfsprakenDataServiceService) { }

  ngOnInit() {
  }

  openAddRule() {
    this.loadRules();
    $('.ui.modal.addrule').modal('show');
  }
  openRemoveRule(afspraak) {
    this.removing = afspraak;
    $('.ui.modal.removerule').modal('show');
  }

  addRule(afspraak: Afspraak) {
    this._trajectenDataService.addAfspraak(afspraak.toJSON(), this.traject.id).subscribe(item => {
      this.traject.afspraken.push(item);
    });
    _.remove(this._afspraken, {id: afspraak.id});
  }
  removeRule() {
    _.remove(this.traject.afspraken, {_id: this.removing._id});
    this._trajectenDataService.deleteAfspraak(this.traject.id, this.removing._id).subscribe();
  }

  loadRules() {
    this._afsprakenDataService.afspraken.takeUntil(this.myUnsubscribe).subscribe(
      items => this._afspraken = items,
      error => console.log("Error: ", error),
      () => this.updateRuleList());
  }

  updateRuleList() {
    for (var i = 0; i < this.traject.afspraken.length; i++) {
      for (var j = 0; j < this._afspraken.length; j++) {
        if (this._afspraken[j].id == this.traject.afspraken[i]._id) {
          this._afspraken.splice(j, 1);
        }
      }
    }
  }
}
