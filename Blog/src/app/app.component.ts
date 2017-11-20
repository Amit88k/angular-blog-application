import { Component, OnInit } from '@angular/core';
import {Blog} from '../Blog';
import {BlogServiceService} from './blog-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private request: BlogServiceService) {
  }

  blogData: Blog[]

  ngOnInit() {
    this.request.getBlogs()
      .subscribe(amit => this.blogData = amit);
  }
}
