import { Component, OnInit } from "@angular/core";
import { BlogService } from '../blog.service';

@Component({
  selector: "ge-homepage",
  templateUrl: "./homepage.component.html",
  styleUrls: ["./homepage.component.scss"]
})
export class HomepageComponent implements OnInit {
  blogArray = [];

  loading = false;
  constructor(private blogService: BlogService) {}

  ngOnInit() {
    console.log(this.blogArray);
    this.blogService.getAllBlogs().subscribe(res => {
      this.blogArray = res.data;
    }, err => {
      console.log(err);
    });
  }

  toggleLike(event, i) {
    event.stopPropagation();
    event.preventDefault();
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.blogArray[i].liked = !this.blogArray[i].liked;
    }, 2000);
  }
}
