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
  MatProgressSpinnerModule,
  MatInputModule
} from "@angular/material";
import { RouterModule, Routes } from "@angular/router";
import { WelcomeComponent } from "./features/welcome/welcome.component";
import { SignupComponent } from "./features/authentication/signup/signup.component";
import { FormsModule } from "@angular/forms";
import { LoginComponent } from './features/authentication/login/login.component';
import { HomepageComponent } from './features/components/homepage/homepage.component';
import { AddblogComponent } from './features/components/addblog/addblog.component';
import { EditblogComponent } from './features/components/editblog/editblog.component';


const appRoutes: Routes = [
  { path: "hello", component: WelcomeComponent },
  { path: "signup", component: SignupComponent },
  { path: "login", component: LoginComponent },
  { path: "home", component: HomepageComponent },
  { path: "add", component: AddblogComponent },
  { path: "edit", component: EditblogComponent },
  { path: "", redirectTo: "/hello", pathMatch: "full" }
];

@NgModule({
  declarations: [AppComponent, WelcomeComponent, SignupComponent, LoginComponent, HomepageComponent, AddblogComponent, EditblogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule,
    MatInputModule,
    MatSnackBarModule,
    MatCardModule,
    MatProgressSpinnerModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
