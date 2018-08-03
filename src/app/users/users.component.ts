import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users$: Object;

  constructor(private data: DataService) { }

  ngOnInit() { // Runs when component loads
    this.data.getUsers().subscribe(data => this.users$ = data)
    // We're subscribing to our getUsers method and binding our users$ object to the results returned by the API
  }

}
