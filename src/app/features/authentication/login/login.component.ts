import { Component, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: "ge-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  formData = {
    userPassword: "",
    userName: ""
  };

  AlertType = {
    type: "",
    message: ""
  };

  formValidation: any;
  loading = false;
  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000
    });
  }

  ngOnInit() {}

  loginUser() {
    this.formValidation = true;
    if (this.formData.userName === "" || this.formData.userPassword === "") {
      this.openSnackBar("Form is empty!", "Close");
      return false;
    }
    if (this.formValidation) {
      this.AlertType.message = "You are ready to sign in!!";
      this.openSnackBar(this.AlertType.message, "Close");
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 5000);
      console.log(this.formData);
    } else {
      this.AlertType.message = "Fields need to be checked";
      this.openSnackBar(this.AlertType.message, "Close");
    }
  }
}
