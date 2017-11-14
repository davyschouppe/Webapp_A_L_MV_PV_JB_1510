import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Traject } from './traject.model';
import { TrajectenDataService } from '../trajecten-data.service';

@Component({
  selector: 'app-traject',
  templateUrl: './traject.component.html',
  styleUrls: ['./traject.component.css'],
  providers: [TrajectenDataService]
})
export class TrajectComponent implements OnInit {
  private _traject: Traject;

  constructor(private route: ActivatedRoute,
    private trajectDataService: TrajectenDataService) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.trajectDataService.getTraject(id).subscribe(item => this._traject = item);

    console.log(this._traject); //DIT GEEFT OOK AL UNDIFINED?
  }
}
