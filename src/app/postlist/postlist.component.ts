import { Component,OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

// component decorator class
@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css'],
  // create this only for this component, creates service class, this creates new class instance so this way would probably create so many of them and it will be too much for a big app which will reduce app speed,computer speed
  // providers: [PostService]
})
export class PostlistComponent {
postList:Array<any>;
  constructor(private postService:PostService){

    this.postList = postService.postList
  }
  ngOnInit(): void {
    
  }

}
