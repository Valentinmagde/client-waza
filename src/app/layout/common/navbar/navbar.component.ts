import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    isLogged: boolean = false;
    private readonly notifier: NotifierService;
    constructor(
        public _router: Router,
        private _authService: AuthService,
        notifierService: NotifierService,
    ) { 
        this.notifier = notifierService;
    }

    ngOnInit(): void {
        /**
         * Check the authentication status
         */
        this._authService.check().subscribe(
            (response)=>{
                this.isLogged = response;
            },
            (error) => {
                this.notifier.notify('error', error.error);
            }
        );
    }

    switcherClassApplied = false;
    switcherToggleClass() {
        this.switcherClassApplied = !this.switcherClassApplied;
    }

    classApplied = false;
    toggleClass() {
        this.classApplied = !this.classApplied;
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