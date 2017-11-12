import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-traject-locaties',
  templateUrl: './traject-locaties.component.html',
  styleUrls: ['./traject-locaties.component.css']
})
export class TrajectLocatiesComponent implements OnInit {
  private locaties = new Array<Object>();
  removeLocatie;
  editLocatie;

  constructor() { 
    this.locaties = [{'naam': 'Kleine speelplaats', 'fotos': ['https://', 'https://']},
    {'naam': 'Leraarskamer', 'fotos': ['https://', 'https://']},
    {'naam': 'Voetbalveld', 'fotos': ['https://', 'https://', 'https://']},
    {'naam': 'Kleine werkplaats', 'fotos': ['https://']},
    {'naam': 'TAVA', 'fotos': ['https://']},
    {'naam': 'Grote werkplaats', 'fotos': ['https://', 'https://']},
    {'naam': 'EHBO', 'fotos': ['https://']},
    {'naam': 'Secretariaat', 'fotos': ['https://']},
    {'naam': 'Grote speelplaats', 'fotos': ['https://']},
    {'naam': 'Keuken', 'fotos': ['https://']},
    {'naam': 'Snoezelruimte', 'fotos': ['https://']},
    {'naam': 'Grote keuken', 'fotos': ['https://']},
    {'naam': 'Toiletten', 'fotos': ['https://']},]
  }

  ngOnInit() {

  }
  
  newLocation() {
    $('.ui.modal.makelocation')
    .modal('show')
    ;
  }
  openRemoveLocation(locatie) {
    this.removeLocatie = locatie;
    $('.ui.modal.removelocatie').modal('show');
  }
  openEditLocation(locatie) {
    this.editLocatie = locatie;
    $('.ui.modal.editlocatie').modal('show');
  }

  removeLocation() {
    for( var x = 0; x < this.locaties.length; x++) {
      if(this.locaties[x] === this.removeLocatie) {
        this.locaties.splice(x, 1);
      }
    }
  }

}
