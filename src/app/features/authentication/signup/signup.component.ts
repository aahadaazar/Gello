import { Component, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material";
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';

@Component({
  selector: "ge-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"]
})
export class SignupComponent implements OnInit {
  formData = {
    username: "",
    password: "",
    confirmPassword: "",
    firstname: ""
  };

  AlertType = {
    type: "",
    message: ""
  };

  formValidation: any;
  loading = false;
  constructor(private _snackBar: MatSnackBar, private loginService: LoginService,
    private router: Router) { }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000
    });
  }

  ngOnInit() { }

  registerUser() {
    this.formValidation = true;
    console.log(this.formData);
    if (
      this.formData.username === "" ||
      this.formData.password === "" ||
      this.formData.confirmPassword === "" ||
      this.formData.firstname === ""
    ) {
      this.openSnackBar("Form is empty!", "Close");
      return false;
    }
    if (
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
        this.formData.username
      )
    ) {
      this.formValidation = true;
    } else {
      this.AlertType.message = "You have entered an invalid email address!";
      this.openSnackBar(this.AlertType.message, "Close");
      this.formValidation = false;
      return false;
    }

    if (this.formData.password !== this.formData.confirmPassword) {
      this.AlertType.message = "Passwords do not match !";
      this.openSnackBar(this.AlertType.message, "Close");
      this.formValidation = false;
      return false;
    } else {
      this.formValidation = true;
    }
    if (this.formValidation) {
      console.log(this.formData);
      this.loading = true;
      const data = {
        username: this.formData.username.toLowerCase(),
        password: this.formData.password,
        firstname: this.formData.firstname
      };
      this.loginService.register(data).subscribe(res => {
        // console.log(res.data);
        this.loading = false;
        this._snackBar.open('Registration successful!!', 'Close', {
          duration: 2000,
          horizontalPosition: 'right',
          verticalPosition: 'top',
        });
        this.router.navigate(['/login']);
      }, err => {
        // console.log(err);
        this.loading = false;
        const message = 'Something went wrong';
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
