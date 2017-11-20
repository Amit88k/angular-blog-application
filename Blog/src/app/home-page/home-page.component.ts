import { Component, OnInit } from '@angular/core';
import {Blog} from '../../Blog';
import {BlogServiceService} from '../blog-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private request: BlogServiceService) { }
  blogData: Blog[]
  ngOnInit() {
    this.request.getBlogs()
      .subscribe(amit => this.blogData = amit);
  }


  onDelete(obj ) {
    console.log("id is " + obj.id);
    window.location.href = '/delete/' + obj.id + '/' + obj.authorName;
    // window.location.href = ''
  }

  onEdit(obj ) {
    console.log("id is " + obj.id);
    window.location.href = '/edit/' + obj.id + '/' + obj.authorName;
    // window.location.href = ''
  }



}
