import { Component, OnInit } from "@angular/core";
import { BlogService } from '../blog.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: "ge-addblog",
  templateUrl: "./addblog.component.html",
  styleUrls: ["./addblog.component.scss"]
})
export class AddblogComponent implements OnInit {
  newBlog: any = {
    title: "",
    description: "",
    html: ""
  };
  notValidated = true;
  loading = true;
  constructor(private blogService: BlogService, private _snackBar: MatSnackBar,
    private router: Router) {}

  ngOnInit() {}

  saveBlog() {
    console.log(this.newBlog);
    this.blogService.addBlog(this.newBlog).subscribe(res => {
      // console.log(res.data);
      this.loading = false;
      this._snackBar.open('Blog added successfully!!', 'Close', {
        duration: 2000,
        horizontalPosition: 'right',
        verticalPosition: 'top',
      });
      this.router.navigate(['/home']);
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
  }
  checkValidation(event) {
    if (
      this.newBlog.name === "" ||
      this.newBlog.description === "" ||
      this.newBlog.html === ""
    ) {
      this.notValidated = true;
    } else {
      this.notValidated = false;
    }
  }
}
