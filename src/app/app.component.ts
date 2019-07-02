import { Component, ViewChild } from "@angular/core";
import { MatMenuTrigger } from "@angular/material";
import { Router } from "@angular/router";

@Component({
  selector: "ge-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "Gello";

  constructor(private router: Router) {}

  ngOnInit() {
  }
}
