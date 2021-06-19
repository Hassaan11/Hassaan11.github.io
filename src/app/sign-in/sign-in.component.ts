import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  SocialAuthService,
  GoogleLoginProvider,
  SocialUser,
  FacebookLoginProvider,
} from 'angularx-social-login';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  Email = '';
  Password = '';
  loginForm: FormGroup | undefined;
  socialUser: SocialUser = new SocialUser();
  isLoggedin: boolean = false;

  lat: any;
  lng: any;
  // @Output() onRouteClick = (route: String) => {};
  constructor(
    private formBuilder: FormBuilder,
    private socialAuthService: SocialAuthService,
    private authService: SocialAuthService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user;
      this.isLoggedin = user != null;
      console.log(this.socialUser);
    });
  }
  refreshToken(): void {
    this.authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }
  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
  loginWithFacebook(): void {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
  signOut(): void {
    this.socialAuthService.signOut();
  }
  logOut(): void {
    this.socialAuthService.signOut();
  }
  // route = () => {
  //   console.log('in route');
  //   this.onRouteClick('signup');
  // };
  onEmailChange = (event: Event) => {
    this.Email = (<HTMLInputElement>event.target).value;
  };
  onPassChange = (event: Event) => {
    this.Password = (<HTMLInputElement>event.target).value;
  };
}
