import { Component, OnInit, Input } from '@angular/core';
import { Traject } from '../traject/traject.model';
import { Locatie } from '../traject-locaties-detail/locatie.model';
import { Subject } from 'rxjs/Subject';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TrajectenDataService } from '../trajecten-data.service';
import { Router } from '@angular/router';
import * as _ from 'lodash';
declare var $: any;

@Component({
  selector: 'app-traject-locaties',
  templateUrl: './traject-locaties.component.html',
  styleUrls: ['./traject-locaties.component.css'],
  providers: [TrajectenDataService]
})
export class TrajectLocatiesComponent implements OnInit {
  @Input() traject;
  private myUnsubscribe: Subject<boolean> = new Subject<boolean>();
  private locatie: FormGroup;
  removing: Locatie;

  constructor(private _trajectenDataService: TrajectenDataService,
    private fb: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.locatie = this.fb.group({
      naam: ['', [Validators.required, Validators.minLength(3)]]
    })
  }

  newLocation() {
    if(this.locatie.valid) {
      const locatie = new Locatie(this.locatie.value.naam);
      this._trajectenDataService.addLocatie(locatie.toJSON(), this.traject.id).subscribe(item => this.traject.locaties.push(item));
      $('.ui.modal.makelocation').modal('hide');
    }
  }
  openNewLocation() {
    this.locatie.reset();
    $('.ui.modal.makelocation').modal('show');
  }
  closeNewLocation() {
    $('.ui.modal.makelocation').modal('hide');
  }

  openRemoveLocation(locatie: Locatie) {
    this.removing = locatie;
    $('.ui.modal.removelocatie').modal('show');
  }
  removeLocation() {
    _.remove(this.traject.locaties, {_id: this.removing.id});
    this._trajectenDataService.deleteLocatie(this.removing.id, this.traject.id).subscribe();
  }

  getFirstPicture(locatie: Locatie): string {
    if(locatie.afbeeldingen.length != 0) {
      return locatie.afbeeldingen[0].link;
    }
  }

  routeToLocatie(id: string){
    this.router.navigate(['/locatie', this.traject.id, id]);
  }
}
