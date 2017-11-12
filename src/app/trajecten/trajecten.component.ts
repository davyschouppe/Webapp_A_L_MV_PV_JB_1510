import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-trajecten',
  templateUrl: './trajecten.component.html',
  styleUrls: ['./trajecten.component.css']
})
export class TrajectenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  newTraject() {
    $('.ui.modal.maketraject')
    .modal('show')
    ;
  }

}
