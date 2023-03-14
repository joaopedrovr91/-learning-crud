import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post/post.service';
import { PostsInterface } from 'src/core/posts.interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  allposts: PostsInterface[] = [];
  constructor(private posts: PostService) {}
  ngOnInit() {
    this.posts.get().subscribe((data) => console.log((this.allposts = data)));
  }
}
