import { Component, ViewChild } from "@angular/core";
import { MatMenuTrigger } from "@angular/material";
import { Router } from "@angular/router";
import { HttpService } from './services/http.service';

@Component({
  selector: "ge-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "Gello";

  constructor(private router: Router, private httpService: HttpService) {
  }

  ngOnInit() {
  }
  
  logout() {
    this.httpService.deleteUser();
    this.router.navigate(['/login']);
  }
}
