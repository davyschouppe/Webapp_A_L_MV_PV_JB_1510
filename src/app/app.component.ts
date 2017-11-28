import { Observable } from 'rxjs/Rx';
import { AuthenticationService } from './authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ AuthenticationService ]
})
export class AppComponent implements OnInit {

  constructor(private authService: AuthenticationService) {
  }

  get currentUser(): Observable<string> {
    return this.authService.user$;
  }

  ngOnInit() {
  }

}
