import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Traject } from './traject.model';
import { TrajectenDataService } from '../trajecten-data.service';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-traject',
  templateUrl: './traject.component.html',
  styleUrls: ['./traject.component.css'],
  providers: [TrajectenDataService]
})
export class TrajectComponent implements OnInit {
  _traject: Traject;

  constructor(private route: ActivatedRoute,
    private trajectDataService: TrajectenDataService,
    private router: Router) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.trajectDataService.getTraject(id).subscribe(item => this._traject = item);
  }

  openDeleteTraject() {
    $('.ui.modal.removetraject').modal('show');
  }
  deleteTraject() {
    $('.ui.modal.removetraject').modal('hide');
    this.trajectDataService.deleteTraject(this._traject.id).subscribe(
      item => null,
      error => console.error(error),
      () => {
        this.router.navigate(['/trajecten']);
      }
    );
  }
}
