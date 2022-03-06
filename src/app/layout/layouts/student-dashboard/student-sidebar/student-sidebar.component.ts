import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/auth/auth.service';
import { UserService } from 'src/app/core/user/user.service';
import { User } from 'src/app/core/user/user.types';

@Component({
    selector: 'app-student-sidebar',
    templateUrl: './student-sidebar.component.html',
    styleUrls: ['./student-sidebar.component.scss']
})
export class StudentSidebarComponent implements OnInit {
    user$: Observable<User> = Observable.create();
    private readonly notifier: NotifierService;
    constructor(
        private _userService: UserService,
        private _authService: AuthService,
        private _router: Router,
        notifierService: NotifierService,
    ) { 
        this.notifier = notifierService;
    }

    ngOnInit(): void {
        this.user$ = this._userService.user$
    }

    switcherClassApplied = false;
    switcherToggleClass() {
        this.switcherClassApplied = !this.switcherClassApplied;
    }

    sidebarSwitcherClassApplied = false;
    sidebarSwitcherToggleClass() {
        this.sidebarSwitcherClassApplied = !this.sidebarSwitcherClassApplied;
    }

    /**
     * Sigout the user
     */
     signOut(): void
     {
        this._authService.signOut().subscribe(
            (response)=>{
                this._router.navigate(['login']);
            },
            (error) => {
                this.notifier.notify('error', error.error);
            }
        );
    }
}