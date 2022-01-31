import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';
import { NotifierService } from 'angular-notifier';
import { Observable, timer } from 'rxjs';

// import custom validator  class
import { CustomValidators } from 'src/app/providers/CustomValidators';
import { Classes } from 'src/app/core/classes/classes.types';
import { Schools } from 'src/app/core/schools/schools.types';
import { ClassesService } from 'src/app/core/classes/classes.service';
import { SchoolsService } from 'src/app/core/schools/schools.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterPageComponent implements OnInit {

  @ViewChild('signUpNgForm') signUpNgForm: NgForm = <NgForm>{};

  signUpForm: FormGroup = new FormGroup({});
  showAlert: boolean = false;
  classes$: Observable<Classes[]> = Observable.create();
  schools$: Observable<Schools[]> = Observable.create();
  private readonly notifier: NotifierService;

  /**
   * Constructor
   */
  constructor(
      private _authService: AuthService,
      private _formBuilder: FormBuilder,
      private _router: Router,
      notifierService: NotifierService,
      private _classesService: ClassesService,
      private _schoolsService: SchoolsService
  )
  {
    this.notifier = notifierService;
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void
  {
      // Create the form
      this.signUpForm = this._formBuilder.group(
          {
              firstName        : ['', Validators.required],
              userName         : ['', Validators.required],
              type             : ['', Validators.required],
              level            : ['', Validators.required],
              birthday         : ['', Validators.required],
              currentSchool    : ['', Validators.required],
              parentEmail      : ['',  [
                Validators.required,
                Validators.email
              ]],
              email            : ['', [
                Validators.required,
                Validators.email
              ]],
              password         : ['', [
                Validators.required,
                Validators.minLength(6)
              ]],
              passwordConfirm  : ['', Validators.required],
              agreements       : ['', Validators.requiredTrue]
          },
          {validator: CustomValidators.mustMatch('password', 'passwordConfirm')}
      );

      this.classes$  = this._classesService.classes$;
      this.schools$  = this._schoolsService.schools$;
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Update form
   */
  updateForm(): void {

    if(this.signUpForm.controls['type'].value === 'ELEVE'){
      if(!this.signUpForm.controls['level']){
        this.signUpForm.addControl('level', new FormControl(null, Validators.required));
        this.signUpForm.addControl('birthday', new FormControl(null, Validators.required));
        this.signUpForm.addControl('currentSchool', new FormControl(null, Validators.required));
        this.signUpForm.addControl('parentEmail', new FormControl(null, Validators.required));
      }

      this.signUpForm.removeControl('email');
    }
    else if(this.signUpForm.controls['type'].value === 'PARENT'){
      if(!this.signUpForm.controls['email']){
        this.signUpForm.addControl('email', new FormControl(null, Validators.required));
      }
      this.signUpForm.removeControl('level');
      this.signUpForm.removeControl('birthday');
      this.signUpForm.removeControl('currentSchool');
      this.signUpForm.removeControl('parentEmail');
    }
  }
  /**
   * Sign up
   */
  signUp(): void
  {
      // Do nothing if the form is invalid
      // if ( this.signUpForm.invalid )
      // {
      //     return;
      // }

      // Disable the form
      this.signUpForm.disable();

      if(this.signUpForm.controls['birthday']){
        const birthday = new Date(this.signUpForm.controls['birthday'].value);
        this.signUpForm.controls['birthday'].setValue(birthday.getTime()/1000);
      }

      // Sign up
      this._authService.signUp(this.signUpForm.value)
          .subscribe(
              (user) => {
                this.notifier.notify('success', 'Compte créé avec succès!!');

                // Reset the form
                this.signUpNgForm.resetForm();

                // Navigate to the confirmation required page
                // Make the user wait a bit before redirection
                timer(2000).subscribe(() => {
                  this._router.navigate(['login']);
                });
              },
              (error) => {
                this.notifier.notify('error', error.error);
                  
                // Re-enable the form
                this.signUpForm.enable();
              }
          );
  }

}
