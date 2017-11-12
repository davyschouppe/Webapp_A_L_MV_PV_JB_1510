import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-afspraken',
  templateUrl: './afspraken.component.html',
  styleUrls: ['./afspraken.component.css']
})
export class AfsprakenComponent implements OnInit {
  private afspraken = new Array<Object>();
  removingAfspraak;
  editingAfspraak;

  constructor() {
    this.afspraken = [{ 'icon': '../../assets/images/trap.png', 'beschrijving': 'We lopen rechts op de trap' },
    { 'icon': '../../assets/images/stappen-per-2.jpg', 'beschrijving': 'We stappen per 2' },
    { 'icon': '../../assets/images/deur-kloppen.png', 'beschrijving': 'We kloppen op de deur voor we binnengaan' },
    { 'icon': '../../assets/images/gillen-kruis-rood.png', 'beschrijving': 'We gillen niet' },
    { 'icon': '../../assets/images/groep-blijven.png', 'beschrijving': 'We blijven bij de groep' },
    { 'icon': '../../assets/images/lopen-kruis-rood.png', 'beschrijving': 'We lopen niet' }];
  }

  ngOnInit() {
  }

  openNewRule() {
    $('.ui.modal.makerule').modal('show');
  }
  openEditRule(afspraak) {
    this.editingAfspraak = afspraak;
    $('.ui.modal.editrule').modal('show');
  }
  openRemoveRule(afspraak) {
    this.removingAfspraak = afspraak;
    $('.ui.modal.removerule').modal('show');
  }

  addRule(afspraak) {
    this.afspraken.push(afspraak);
  }
  editRule() {

  }
  removeRule() {
    for (var x = 0; x < this.afspraken.length; x++) {
      if (this.afspraken[x] === this.removingAfspraak) {
        this.afspraken.splice(x, 1);
      }
    }
  }

}
