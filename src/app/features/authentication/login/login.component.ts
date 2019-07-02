import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { HttpService } from '../../../services/http.service';
import { MatSnackBar } from "@angular/material";

@Component({
  selector: "ge-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  formData = {
    password: "",
    username: ""
  };

  AlertType = {
    type: "",
    message: ""
  };

  formValidation: any;
  loading = false;
  constructor(private _snackBar: MatSnackBar, private loginService: LoginService,
    private router: Router, private httpService: HttpService) {}

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000
    });
  }

  ngOnInit() {}

  loginUser() {
    this.formValidation = true;
    if (this.formData.username === "" || this.formData.password === "") {
      this.openSnackBar("Form is empty!", "Close");
      return false;
    }
    if (this.formValidation) {
      // this.AlertType.message = "You are ready to sign in!!";
      // this.openSnackBar(this.AlertType.message, "Close");
      this.loading = true;
      const data = {
        username: this.formData.username.toLowerCase(),
        password: this.formData.password
      };
      this.loginService.login(data).subscribe(res => {
        // console.log(res.data);
        this.httpService.setAuthenticatedUser(res.data.token, res.data.user);
        this.loading = false;
        this._snackBar.open('Login successful!!', 'Close', {
          duration: 2000,
          horizontalPosition: 'right',
          verticalPosition: 'top',
        });
        this.router.navigate(['/home']);
      }, err => {
        // console.log(err);
        this.loading = false;
        const message = err.err && err.err.name === 'IncorrectUsernameError' ? err.err.message : 'Something went wrong';
        this._snackBar.open(message, 'Close', {
          duration: 2000,
          horizontalPosition: 'right',
          verticalPosition: 'top',
        });
      });
    } else {
      this.AlertType.message = "Fields need to be checked";
      this.openSnackBar(this.AlertType.message, "Close");
    }
  }
}
