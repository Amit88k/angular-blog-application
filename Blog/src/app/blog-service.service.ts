import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {Router} from '@angular/router';

const header = {headers: new Headers({'Content-Type': 'application/json'})}
const URL = 'http://localhost:3000/Blogs';

@Injectable()
export class BlogServiceService {

  constructor(private http: Http, private router: Router) { }

  getBlogs() {
    return this.http.get(URL).map(res => res.json());
  }

  postBlogData(data) {
    return this.http.post(URL, data, header).map(res => res.json());
  }

  blogDeletion(blogID){
    console.log(URL + '/' + blogID);
     return this.http.delete(URL + '/' + blogID)
                 .map(res => null);

    //this.router.navigate(["/home"]);
  }

  getBlogById(blogId) {
    return (this.http.get(URL + '/' + blogId))
                    .map(res => res.json());
       }
  editBlog(tempBlog) {
        return this.http.put(URL + '/' + tempBlog.id, tempBlog )
                   .map(res => res.json());
       }



}
