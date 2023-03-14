import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostsInterface } from 'src/core/posts.interface';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  postURL = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private httpClient: HttpClient) {}

  get() {
    return this.httpClient.get<PostsInterface[]>(this.postURL);
  }
  post() {}
  delete() {}
  put() {}
  patch() {}
}
