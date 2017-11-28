import { Observable } from 'rxjs/Rx';
import { AuthenticationService } from '../authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigationbar',
  templateUrl: './navigationbar.component.html',
  styleUrls: ['./navigationbar.component.css'],
  providers: [ AuthenticationService ]
})
export class NavigationbarComponent implements OnInit {

  constructor(private authService: AuthenticationService) {
  }

  get currentUser(): Observable<string> {
    return this.authService.user$;
  }

  ngOnInit() {
  }

}
