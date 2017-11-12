import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-traject-afspraken',
  templateUrl: './traject-afspraken.component.html',
  styleUrls: ['./traject-afspraken.component.css']
})
export class TrajectAfsprakenComponent implements OnInit {
  private afspraken = new Array<Object>();
  removeAfspraak;

  constructor() {
    this.afspraken = [{'icon': '../../assets/images/trap.png', 'beschrijving': 'We lopen rechts op de trap'},
      {'icon': '../../assets/images/stappen-per-2.jpg', 'beschrijving': 'We stappen per 2'},
      {'icon': '../../assets/images/deur-kloppen.png', 'beschrijving': 'We kloppen op de deur voor we binnengaan'},
      {'icon': '../../assets/images/gillen-kruis-rood.png', 'beschrijving': 'We gillen niet'},
      {'icon': '../../assets/images/groep-blijven.png', 'beschrijving': 'We blijven bij de groep'},
      {'icon': '../../assets/images/lopen-kruis-rood.png', 'beschrijving': 'We lopen niet'}];
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
    this.afspraken.push(afspraak);
  }
  removeRule() {
    for( var x = 0; x < this.afspraken.length; x++) {
      if(this.afspraken[x] === this.removeAfspraak) {
        this.afspraken.splice(x, 1);
      }
    }
  }

}
