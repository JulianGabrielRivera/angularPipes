import { Component,OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../models/post';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  // injectable class, using the provider to do this
  providers: [PostService]
})
export class PostComponent implements OnInit {
  posts:Array<any>;
  // injecting service class to constructor, dependency injection
  constructor(private postService:PostService){
  //  let postService = new PostService()
   this.posts =postService.postList;
  }
  ngOnInit(): void {
    
  }
  addNewData(){
    // since we are using interface Post here, we need to make sure it matches exactly our Post interface
    let newPost: Post={id:1, postTitle:'post 8'}
    this.postService.addPost(newPost)
  }
}
