import { Component, OnInit } from '@angular/core';

declare var $: any;
import { TrajectenDataService } from '../trajecten-data.service';
import { Od } from '../ods/od.model';
import { Afspraak } from '../afspraken/afspraak.model';
import { Traject } from '../traject/traject.model';
import { Locatie } from '../traject-locaties-detail/locatie.model';
import { Subject } from 'rxjs/Subject';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// const _ = require('lodash');
import * as _ from 'lodash';

@Component({
  selector: 'app-trajecten',
  templateUrl: './trajecten.component.html',
  styleUrls: ['./trajecten.component.css'],
  providers: [TrajectenDataService]
})
export class TrajectenComponent implements OnInit {
  private _trajecten: Traject[];
  private myUnsubscribe: Subject<boolean> = new Subject<boolean>();
  private traject: FormGroup;

  constructor(private _trajectenDataService: TrajectenDataService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this._trajectenDataService.trajecten.takeUntil(this.myUnsubscribe).subscribe(
      items => this._trajecten = items);

    this.traject = this.fb.group({
      naam: ['', [Validators.required, Validators.minLength(2)]]
    })
  }

  newTraject() {
    const traject = new Traject(this.traject.value.naam);
    this._trajectenDataService.addTraject(traject.toJSON()).subscribe(item => this._trajecten.push(item));
  }
  openNewTraject() {
    $('.ui.modal.maketraject')
      .modal('show')
      ;
  }

  getAmountOfLocations(traject: Traject): number {
    var number = 0;
    if(traject.locaties != null) {
      for (let l of traject.locaties) {
        number++;
      }
    }
    return number;
  }
}
