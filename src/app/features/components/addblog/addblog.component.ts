import { Component, OnInit } from "@angular/core";

@Component({
  selector: "ge-addblog",
  templateUrl: "./addblog.component.html",
  styleUrls: ["./addblog.component.scss"]
})
export class AddblogComponent implements OnInit {
  newBlog = {
    name: "",
    description: "",
    html: ""
  };
  notValidated = true;
  constructor() {}

  ngOnInit() {}

  saveBlog() {
    console.log("Hello World");
    console.log(this.newBlog);
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
