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
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})

  export class DeleteComponent implements OnInit {

  data: Object = {
    ValidateName:  JSON.stringify(this.route.params['name']),
  validateId: JSON.stringify(this.route.params['id'])
}

  constructor(private request: BlogServiceService , private route: ActivatedRoute, private router: Router) { }


  ngOnInit() {
    console.log((this.route.snapshot.params['id']));
    console.log((this.route.snapshot.params['name']));
    console.log(typeof (this.route.snapshot.params['name']))
  }

  deleteBlog(authorName, id) {
    if ((this.route.snapshot.params["id"]) == id   &&
      ((this.route.snapshot.params["name"]) === authorName )) {
      this.request.blogDeletion(id)
        .subscribe(() => this.router.navigate(['/homepage']) );

    }
    else {
        alert("Please enter correct author name and blog id");

      this.router.navigate(['/homepage']);
    }
  }


}
