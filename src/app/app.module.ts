import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatToolbarModule,
  MatButtonModule,
  MatGridListModule,
  MatCardModule,
  MatSnackBarModule,
  MatProgressSpinnerModule
} from "@angular/material";
import { RouterModule, Routes } from "@angular/router";
import { WelcomeComponent } from "./features/welcome/welcome.component";
import { SignupComponent } from "./features/authentication/signup/signup.component";
import { FormsModule } from "@angular/forms";
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { LoginComponent } from './features/authentication/login/login.component';


const appRoutes: Routes = [
  { path: "hello", component: WelcomeComponent },
  { path: "signup", component: SignupComponent },
  { path: "login", component: LoginComponent },
  { path: "", redirectTo: "/hello", pathMatch: "full" }
];

@NgModule({
  declarations: [AppComponent, WelcomeComponent, SignupComponent, LoginComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule,
    MatSnackBarModule,
    MatCardModule,
    MatProgressSpinnerModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
