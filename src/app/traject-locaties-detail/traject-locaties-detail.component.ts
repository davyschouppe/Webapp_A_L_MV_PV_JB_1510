import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Traject } from '../traject/traject.model';
import { Locatie } from './locatie.model';
import { Afbeelding } from './afbeelding.model';
import { TrajectenDataService } from '../trajecten-data.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
declare var $: any;
import * as _ from 'lodash';

@Component({
  selector: 'app-traject-locaties-detail',
  templateUrl: './traject-locaties-detail.component.html',
  styleUrls: ['./traject-locaties-detail.component.css'],
  providers: [TrajectenDataService]
})
export class TrajectLocatiesDetailComponent implements OnInit {
  _traject: Traject;
  _locatie: Locatie;
  afbeelding: FormGroup;
  removing: Afbeelding;
  input = new FormData();

  constructor(private route: ActivatedRoute,
    private _trajectenDataService: TrajectenDataService,
    private fb: FormBuilder) { }

  ngOnInit() {
    const trajectid = this.route.snapshot.paramMap.get('trajectid');
    const locatieid = this.route.snapshot.paramMap.get('locatieid');
    this._trajectenDataService.getTraject(trajectid).subscribe(
      item => this._traject = item,
      error => console.log('Error: ', error),
      () => {
        for (var i = 0; i < this._traject.locaties.length; i++) {
          if (this._traject.locaties[i].id == locatieid) {
            this._locatie = this._traject.locaties[i];
          }
        }
      }
    );

    $('.special.card .image').dimmer({
      on: 'hover'
    });

    this.afbeelding = this.fb.group({
      afbeelding: [null, Validators.required]
    });
  }

  newAfbeelding() {
    // OUDE METHODE:
    /*if (this.afbeelding.valid) {
      const afbeelding = new Afbeelding(this.afbeelding.value.link);
      this._trajectenDataService.addAfbeelding(this._traject.id, this._locatie.id, afbeelding.toJSON()).subscribe(item => this._locatie.afbeeldingen.push(item));
      $('.ui.modal.makeafbeelding').modal('hide');
    }*/

    // NIEUWE METHODE:
    var image = this.prepareSave();
    this._trajectenDataService.uploadAfbeelding(this._traject.id, this._locatie.id, image)
      .subscribe(item => this._locatie.afbeeldingen.push(item));
    this.afbeelding.reset();
    this.closeNewAfbeelding();
  }
  // Als de gebruiker de file aanpast zal deze functie opgeroepen worden.
  // De waarde van afbeelding zal dan verandert worden naar de nieuwe afbeelding.
  onFileChange(event) {
    if(event.target.files.length > 0) {
      let file = event.target.files[0];
      this.afbeelding.get('afbeelding').setValue(file);
    }
  }
  // Return het file object.
  prepareSave(): any {
    let input = new FormData();
    input.append('imgLocatie', this.afbeelding.get('afbeelding').value);
    return input;
  }

  openNewAfbeelding() {
    this.afbeelding.reset();
    $('.ui.modal.makeafbeelding').modal('show');
  }
  closeNewAfbeelding() {
    $('.ui.modal.makeafbeelding').modal('hide');
  }

  openRemove(afbeelding: Afbeelding) {
    this.removing = afbeelding;
    $('.ui.modal.remove').modal('show');
  }
  closeRemove() {
    $('.ui.modal.remove').modal('hide');
  }
  removeAfbeelding() {
    _.remove(this._locatie.afbeeldingen, {_id: this.removing.id});
    this._trajectenDataService.deleteAfbeelding(this._traject.id, this._locatie.id, this.removing.id).subscribe();
    this.removing = null;
    this.closeRemove();
  }

  setDimmer() {
    $('.special.card .image').dimmer({on: 'hover'});
  }
}
