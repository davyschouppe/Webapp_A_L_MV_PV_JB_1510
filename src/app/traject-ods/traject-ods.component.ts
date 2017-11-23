import { Component, OnInit, Input } from '@angular/core';
import { Traject } from '../traject/traject.model';
import { Od } from '../ods/od.model';
import { Subject } from 'rxjs/Subject';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TrajectenDataService } from '../trajecten-data.service';
import { OdsDataService } from '../ods-data.service';
import * as _ from 'lodash';
declare var $: any;

@Component({
  selector: 'app-traject-ods',
  templateUrl: './traject-ods.component.html',
  styleUrls: ['./traject-ods.component.css'],
  providers: [TrajectenDataService, OdsDataService]
})
export class TrajectOdsComponent implements OnInit {
  @Input() traject;
  private _ods: Od[];
  private myUnsubscribe: Subject<boolean> = new Subject<boolean>();
  private removing;

  constructor(private _trajectenDataService: TrajectenDataService,
    private _odsDataService: OdsDataService) { }

  ngOnInit() {
  }

  openAddOd() {
    this.loadOds();
    $('.ui.modal.addod').modal('show');
  }
  openRemoveOd(od: Od) {
    this.removing = od;
    $('.ui.modal.removeod').modal('show');
  }

  addOd(od: Od) {
    this._trajectenDataService.addOd(od.toJSON(), this.traject.id).subscribe(item => this.traject.ods.push(item));
    _.remove(this._ods, {id: od.id});
  }
  removeOd() {
    _.remove(this.traject.ods, {_id: this.removing._id});
    this._trajectenDataService.deleteOd(this.traject.id, this.removing._id).subscribe();
  }

  loadOds() {
    this._odsDataService.ods.takeUntil(this.myUnsubscribe).subscribe(
      items => this._ods = items,
      error => console.log("Error: ", error),
      () => this.updateOdList());
  }

  updateOdList() {
    for (var i = 0; i < this.traject.ods.length; i++) {
      for (var j = 0; j < this._ods.length; j++) {
        if (this._ods[j].id == this.traject.ods[i]._id) {
          this._ods.splice(j, 1);
        }
      }
    }
  }
}
