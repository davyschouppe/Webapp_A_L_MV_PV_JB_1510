import { Component, OnInit, Input } from '@angular/core';
import { Traject } from '../traject/traject.model';
declare var $: any;

@Component({
  selector: 'app-traject-afspraken',
  templateUrl: './traject-afspraken.component.html',
  styleUrls: ['./traject-afspraken.component.css']
})
export class TrajectAfsprakenComponent implements OnInit {
  @Input() traject: Traject;
  @Input() counter: number;
  //private afspraken = new Array<Object>();
  removeAfspraak;

  constructor() {
  }

  ngOnInit() {
  }

  openAddRule() {
    $('.ui.modal.addrule').modal('show');
  }
  openRemoveRule(afspraak) {
    this.removeAfspraak = afspraak;
    $('.ui.modal.removerule').modal('show');
  }

  addRule(afspraak) {
    //this.afspraken.push(afspraak);
  }
  removeRule() {
    /*for( var x = 0; x < this.afspraken.length; x++) {
      if(this.afspraken[x] === this.removeAfspraak) {
        this.afspraken.splice(x, 1);
      }
    }*/
  }

}
