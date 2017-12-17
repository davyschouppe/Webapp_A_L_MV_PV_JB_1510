import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FirebaseService} from '../firebase.service';

@Component({
  selector: 'app-leerlingen-detail',
  templateUrl: './leerlingen-detail.component.html',
  styleUrls: ['./leerlingen-detail.component.css']
})
export class LeerlingenDetailComponent implements OnInit {
  leerling: any;
  constructor(private _firebaseService: FirebaseService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this._firebaseService.getLeerling(id).subscribe(leerling => {
      this.leerling = leerling;
      console.log(leerling);
    });
  }
}
