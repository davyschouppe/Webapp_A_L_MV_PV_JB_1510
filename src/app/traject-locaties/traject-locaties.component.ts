import { Component, OnInit, Input } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-traject-locaties',
  templateUrl: './traject-locaties.component.html',
  styleUrls: ['./traject-locaties.component.css']
})
export class TrajectLocatiesComponent implements OnInit {
  @Input() traject;
  //private locaties = new Array<Object>();
  removeLocatie;

  constructor() {
  }

  ngOnInit() {
    console.log(this.traject);
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

  removeLocation() {
    /*for( var x = 0; x < this.locaties.length; x++) {
      if(this.locaties[x] === this.removeLocatie) {
        this.locaties.splice(x, 1);
      }
    }*/
  }

}
