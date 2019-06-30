import { Component, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: "ge-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"]
})
export class SignupComponent implements OnInit {
  formData = {
    userEmail: "",
    userPasswordOne: "",
    userPasswordTwo: "",
    userName: ""
  };

  AlertType = {
    type: "",
    message: ""
  };

  formValidation: any;
  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000
    });
  }

  ngOnInit() {}

  registerUser() {
    this.formValidation = true;
    if (
      this.formData.userEmail === "" ||
      this.formData.userPasswordOne === "" ||
      this.formData.userPasswordTwo === "" ||
      this.formData.userName === ""
    ) {
      this.openSnackBar("Form is empty!", "Close");
      return false;
    }
    if (
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
        this.formData.userEmail
      )
    ) {
      this.formValidation = true;
    } else {
      this.AlertType.message = "You have entered an invalid email address!";
      this.openSnackBar(this.AlertType.message, "Close");
      this.formValidation = false;
      return false;
    }

    if (this.formData.userPasswordOne !== this.formData.userPasswordTwo) {
      this.AlertType.message = "Passwords do not match !";
      this.openSnackBar(this.AlertType.message, "Close");
      this.formValidation = false;
      return false;
    } else {
      this.formValidation = true;
    }
    if (this.formValidation) {
      this.AlertType.message = "You are ready to sign in!";
      this.openSnackBar(this.AlertType.message, "Close");
      console.log(this.formData);
    } else {
      this.AlertType.message = "Fields need to be checked";
      this.openSnackBar(this.AlertType.message, "Close");
    }
  }
}
