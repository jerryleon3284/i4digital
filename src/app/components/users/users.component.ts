import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/users/Users';
import { Store } from '@ngrx/store';
import * as fromStore from 'src/app/store';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: Users[] = [];
  userInput:any;
  constructor(public store: Store<fromStore.AppState>) {
    store.select(fromStore.getUserByName('Leanne Graham')).subscribe((res) => {
      console.log('entro a by usernamer', res);
    });

    store.select(fromStore.getUsers).subscribe((res) => {
      this.users = res;
    });
  }

  ngOnInit(): void {}
}
