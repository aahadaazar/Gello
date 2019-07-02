import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "ge-editblog",
  templateUrl: "./editblog.component.html",
  styleUrls: ["./editblog.component.scss"]
})
export class EditblogComponent implements OnInit {
  editBlog = {
    name: " ",
    description: "",
    html: ""
  };
  notValidated = true;
  constructor(private _Activatedroute: ActivatedRoute) {}

  ngOnInit() {
    this._Activatedroute.paramMap.subscribe(params => {
      console.log(params);
      // this.editBlog = params;
      // console.log(params.params.name);
    });
  }

  saveBlog() {
    console.log("Hello World");
    console.log(this.editBlog);
  }
  checkValidation(event) {
    if (
      this.editBlog.name === "" ||
      this.editBlog.description === "" ||
      this.editBlog.html === ""
    ) {
      this.notValidated = true;
    } else {
      this.notValidated = false;
    }
  }
}
