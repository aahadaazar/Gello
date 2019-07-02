import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { BlogService } from '../blog.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: "ge-editblog",
  templateUrl: "./editblog.component.html",
  styleUrls: ["./editblog.component.scss"]
})
export class EditblogComponent implements OnInit {
  editBlog: any = {
    title: " ",
    description: "",
    html: ""
  };
  notValidated = true;
  constructor(private _Activatedroute: ActivatedRoute, private router: Router, private _snackBar: MatSnackBar, private blogService: BlogService) { }

  ngOnInit() {
    this._Activatedroute.paramMap.subscribe((params: any) => {
      console.log(params);
      this.blogService.getBlog(params.params.id).subscribe(res => {
        this.editBlog = res.data;
      }, err => {
        console.log(err);
      })
    });
  }

  saveBlog() {
    console.log("Hello World");
    console.log(this.editBlog);
    this.blogService.editBlog(this.editBlog._id, this.editBlog).subscribe(res => {
      // console.log(res.data);
      this._snackBar.open('Blog added successfully!!', 'Close', {
        duration: 2000,
        horizontalPosition: 'right',
        verticalPosition: 'top',
      });
      this.router.navigate(['/home']);
    }, err => {
      // console.log(err);
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
      this.editBlog.title === "" ||
      this.editBlog.description === "" ||
      this.editBlog.html === ""
    ) {
      this.notValidated = true;
    } else {
      this.notValidated = false;
    }
  }
}
