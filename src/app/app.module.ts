import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignComponent } from './sign/sign.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { courseService } from './courses/courses.service';
import { FacebookModule } from 'ngx-facebook';
import { FormsModule } from '@angular/forms';

import {
  SocialLoginModule,
  SocialAuthServiceConfig,
  FacebookLoginProvider,
  GoogleLoginProvider,
} from 'angularx-social-login';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LocationComponent } from './location/location.component';
import { CoursesComponent } from './courses/courses.component';

// import { GoogleLoginProvider } from 'angularx-social-login';

@NgModule({
  declarations: [
    AppComponent,
    SignComponent,
    SignInComponent,
    NavbarComponent,
    FooterComponent,
    LocationComponent,
    CoursesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SocialLoginModule,
    FormsModule,
    FacebookModule.forRoot(),
    RouterModule.forRoot([
      { path: 'signin', component: SignInComponent },
      { path: 'signup', component: SignComponent },
      { path: 'location', component: LocationComponent },
      { path: 'courses', component: CoursesComponent },

      { path: '', redirectTo: '/courses', pathMatch: 'full' },
    ]),

    // AgmCoreModule.forRoot({
    //   apiKey:
    //     '659064580758-8tlei4488ec2npdcd7pvlkn8inc4tesc.apps.googleusercontent.com',
    // }),
  ],
  providers: [
    courseService,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '659064580758-8tlei4488ec2npdcd7pvlkn8inc4tesc.apps.googleusercontent.com'
            ),
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('530540961418430'),
          },
        ],
      } as SocialAuthServiceConfig,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
