import { Component, OnInit } from '@angular/core';
import {BlogServiceService} from '../blog-service.service';
import {Blog} from '../../Blog';
import {Route, Router} from '@angular/router';

import { ActivatedRoute, Params } from '@angular/router';
import {Equal} from 'tslint/lib/utils';
import {_if} from 'rxjs/observable/if';
import {errorComparator} from 'tslint/lib/verify/lintError';
import {type} from 'os';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  match: boolean=false;
  authorName: string;
  blogContent: string;
  blogTitle: string;
  blogCategory; string;
  blogId: number;
  sentBlog: Blog;
  entityExists: boolean;
  entityWithSomeErrorExists: boolean;



  constructor(private request: BlogServiceService , private route: ActivatedRoute, private router: Router) { }


  ngOnInit() {
    this.blogId = this.route.snapshot.params['id'];

    this.request.getBlogById(this.blogId)
                   .subscribe((blog: Blog) => {
                                this.sentBlog = blog;
                          },
                        (err) => {
                           if (err.status == 404) {
                                  this.entityExists = false; }
                          else if(err.status != 200) {
                             this.entityWithSomeErrorExists = true;
                           }
                        }
                     ) ;

  }

  editBlog(authorName, id) {
    if ((this.route.snapshot.params["id"]) == id &&
      ((this.route.snapshot.params["name"]) === authorName )) {

      this.match = !this.match;
    }
    else {
      alert("Please enter correct author name and blog id");
    }
  }
    updateBlog(blogTitle, blogContent, blogCategory) {
         const tempBlog = {
           blogTitle: blogTitle,
           blogContent: blogContent,
           blogCategory: blogCategory,
           id: this.blogId,
           blogRating: Math.floor(Math.random() * 10) + 1,
           authorName: this.sentBlog.authorName
         }
        this.request.editBlog(tempBlog)
             .subscribe(() => this.router.navigate(['/homepage']) );

      }



  }
