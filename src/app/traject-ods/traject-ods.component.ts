import { Component, OnInit, Input } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-traject-ods',
  templateUrl: './traject-ods.component.html',
  styleUrls: ['./traject-ods.component.css']
})
export class TrajectOdsComponent implements OnInit {
  @Input() traject;
  //private ods = new Array<Object>();
  removingOd;

  constructor() {
  }

  ngOnInit() {
    console.log(this.traject);
  }

  openAddOd() {
    $('.ui.modal.addod').modal('show');
  }
  openRemoveOd(od) {
    this.removingOd = od;
    $('.ui.modal.removeod').modal('show');
  }

  addOd(od) {
    //this.ods.push(od);
  }
  removeOd() {
    /*for( var x = 0; x < this.ods.length; x++) {
      if(this.ods[x] === this.removingOd) {
        this.ods.splice(x, 1);
      }
    }*/
  }
}
