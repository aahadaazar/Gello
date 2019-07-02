import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'ge-viewblog',
  templateUrl: './viewblog.component.html',
  styleUrls: ['./viewblog.component.scss']
})
export class ViewblogComponent implements OnInit {

  constructor(private _Activatedroute: ActivatedRoute) { }

  ngOnInit() {
    this._Activatedroute.paramMap.subscribe((params: any) => {
      console.log(params.params);
    });
  }
}
