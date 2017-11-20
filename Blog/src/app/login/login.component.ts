import { Component, OnInit } from '@angular/core';
import {BlogServiceService} from '../blog-service.service';
import {Blog} from '../../Blog';
import {Router, Route} from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
const URL = 'http://localhost:3000/Blogs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  authorName: string;
  blogContent: string;
  blogTitle: string;
  blogCategory;
  string;

  constructor(private request: BlogServiceService, private route: ActivatedRoute, private router: Router) {
  }

  items: Blog [] = [];

  ngOnInit() {
  }

  onSubmit(blogTitle, blogContent, authorName, blogCategory) {

    const blogData = {
      blogTitle: blogTitle,
      blogContent: blogContent,
      authorName: authorName,
      blogRating: Math.floor(Math.random() * (10)),
      blogCategory: blogCategory,
    }
    this.request.postBlogData(blogData)
      .subscribe(data => {
        this.items.push(blogData);


        this.router.navigate(['/homepage']);
      });

  }
}
