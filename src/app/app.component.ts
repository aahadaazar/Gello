import { Component, ViewChild } from "@angular/core";
import { MatMenuTrigger } from "@angular/material";

@Component({
  selector: "ge-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "Gello";
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  someMethod() {
    this.trigger.openMenu();
  }
}
