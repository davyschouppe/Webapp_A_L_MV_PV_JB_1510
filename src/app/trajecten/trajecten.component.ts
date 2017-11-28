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
  _trajecten: Traject[];
  myUnsubscribe: Subject<boolean> = new Subject<boolean>();
  traject: FormGroup;

  constructor(private _trajectenDataService: TrajectenDataService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this._trajectenDataService.trajecten.takeUntil(this.myUnsubscribe).subscribe(
      items => this._trajecten = items);

    this.traject = this.fb.group({
      naam: ['', [Validators.required, Validators.minLength(3)]]
    })
  }

  newTraject() {
    if(this.traject.valid) {
      const traject = new Traject(this.traject.value.naam);
      this._trajectenDataService.addTraject(traject.toJSON()).subscribe(item => this._trajecten.push(item));
      $('.ui.modal.maketraject').modal('hide');
    }
  }
  openNewTraject() {
    this.traject.reset();
    $('.ui.modal.maketraject').modal('show');
  }
  closeNewTraject() {
    $('.ui.modal.maketraject').modal('hide');
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
