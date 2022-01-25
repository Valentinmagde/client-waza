import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { timer } from 'rxjs';
import { AuthService } from 'src/app/core/auth/auth.service';
import { UserService } from 'src/app/core/user/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginPageComponent implements OnInit {

  @ViewChild('signInNgForm') signInNgForm: NgForm = <NgForm>{};

  signInForm: FormGroup = new FormGroup({});
  showAlert: boolean = false;

  /**
   * Constructor
   */
  constructor(
      private _activatedRoute: ActivatedRoute,
      private _authService: AuthService,
      private _userService: UserService,
      private _formBuilder: FormBuilder,
      private _router: Router
  ) {
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
      // Get the phone number of the latest emitted user
      let userName = '';
      this._userService.user$.subscribe((user) => {
        userName = user.userName;
      });

      // Create the form
      this.signInForm = this._formBuilder.group({
          userName: [userName || '', Validators.required],
          password: ['', Validators.required],
          rememberMe: ''
      });
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Sign in
   */
  signIn(): void {
    // Return if the form is invalid
    if (this.signInForm.invalid) {
        return;
    }

    // Disable the form
    this.signInForm.disable();

    // Sign in
    this._authService.signIn(this.signInForm.value)
    .subscribe(
        (user) => {
            if(user.role){
                let role = user.role
                if(role.title === 'Parent'){
                    this._router.navigate(['instructor-dashboard']);
                }
                else{
                    this._router.navigate(['user-dashboard']);
                }
            }
        },
        (error) => {
            const errorStatus = error.status;

            if (errorStatus === 423) {
                // Make the user wait a bit before redirection
                // timer(2000).subscribe(() => {
                //     this._router.navigate(['confirmation-required'], { queryParams: { phone: this.signInForm.get('phone').value } });
                // });
            }
            else {
                // Re-enable the form
                this.signInForm.enable();
            }
        }
    );
  }

  /**
   * Sign in with Google
   */
  // signInWithGoogle(): void {
  //     this.signInForm.disable();

  //     this.showAlert = false;

  //     this._authService.signInWithSocial(GoogleLoginProvider.PROVIDER_ID)
  //         .subscribe((socialUser) => {
  //             if (socialUser) {

  //                 this._redirectAfterSignIn();
  //             }
  //             else {
  //                 this.signInForm.enable();
  //             }
  //         },
  //         (error) => {
  //             this.alert = {
  //                 type: 'error',
  //                 message: error.customMessage
  //             };

  //             this.showAlert = true;

  //             this.signInForm.enable();
  //         });
  // }

  /**
   * Sign in with Facebook
   */
  // signInWithFacebook(): void {
  //     this.signInForm.disable();

  //     this.showAlert = false;

  //     this._authService.signInWithSocial(FacebookLoginProvider.PROVIDER_ID)
  //         .subscribe((socialUser) => {

  //             if (socialUser) {

  //                 this._redirectAfterSignIn();
  //             }
  //             else {
  //                 this.signInForm.enable();
  //             }
  //         },
  //         (error) => {
  //             this.alert = {
  //                 type: 'error',
  //                 message: error.customMessage
  //             };

  //             this.showAlert = true;

  //             this.signInForm.enable();
  //         });
  // }

  /**
   * Redirect after sign in
   */
  private _redirectAfterSignIn(): void {

      // Set the redirect url.
      // The '/signed-in-redirect' is a dummy url to catch the request and redirect the user
      // to the correct page after a successful sign in. This way, that url can be set via
      // routing file and we don't have to touch here.
      const redirectURL = this._activatedRoute.snapshot.queryParamMap.get('redirectURL') || '/signed-in-redirect';

      // Navigate to the redirect url
      this._router.navigateByUrl(redirectURL);
  }

}
