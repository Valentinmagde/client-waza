import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/user/user.service';
import { User } from 'src/app/core/user/user.types';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-user-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.scss']
})
export class StudentProfileComponent implements OnInit {
  user$: Observable<User> = Observable.create();
  constructor(
    private _userService: UserService,
    public datepipe: DatePipe
  ) { }

  ngOnInit(): void {
    this.user$ = this._userService.user$;
  }

}
