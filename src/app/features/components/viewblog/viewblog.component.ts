import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { BlogService } from '../blog.service';

@Component({
  selector: 'ge-viewblog',
  templateUrl: './viewblog.component.html',
  styleUrls: ['./viewblog.component.scss']
})
export class ViewblogComponent implements OnInit {
  viewBlog: any;
  buttonDisable = true;
  commentText : any;
  constructor(private _Activatedroute: ActivatedRoute, private blogService: BlogService) { }

  ngOnInit() {
    this._Activatedroute.paramMap.subscribe((params: any) => {
      console.log(params.params);
      this.blogService.getBlog(params.params.id).subscribe(res => {
        this.viewBlog = res.data;
      }, err => {
        console.log(err);
      })
    });
  }

  handleCommentText(event) {
    if (this.commentText === '') {
      this.buttonDisable = true;
    }
    else {
      this.buttonDisable = false;
    }
  }

  addComment() {
    this.blogService.addComment(this.viewBlog._id, { text: this.commentText }).subscribe(res => {
      this.viewBlog = res.data;
    }, err => {
      console.log(err);
    });
  }
}
