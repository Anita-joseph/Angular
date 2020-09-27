import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'my-app';
	teams$ = this.http.get('/api/teams');
	// teams$: Observable<any> = this.http.get('/api/teams');
	constructor(private http: HttpClient) { }
}
