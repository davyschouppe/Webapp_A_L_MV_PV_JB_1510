import { Component, OnInit } from '@angular/core';

declare var $: any;
import { TrajectenDataService } from '../trajecten-data.service';
import { Od } from '../ods/od.model';
import { Afspraak } from '../afspraken/afspraak.model';
import { Traject } from '../traject/traject.model';
import { Locatie } from '../traject-locaties-detail/locatie.model';
import { Subject } from 'rxjs/Subject';
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

  constructor(private _trajectenDataService: TrajectenDataService) { }

  ngOnInit() {
    this._trajectenDataService.trajecten.takeUntil(this.myUnsubscribe).subscribe(
      items => this._trajecten = items);
  }

  getAmountOfLocations(traject: Traject): number {
    var number = 0;
    for (let l of traject.locaties) {
      number ++;
    }
    console.log(number);
    return number;
  }

  openNewTraject() {
    $('.ui.modal.maketraject')
      .modal('show')
      ;
  }

}
