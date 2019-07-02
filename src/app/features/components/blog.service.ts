import { Injectable } from '@angular/core';
import { HttpService } from '../../services/http.service';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  constructor(private httpService: HttpService) {
  }

  addBlog(data): any {
    return this.httpService.post('/blogs', data);
  }

  getAllBlogs() {
    return this.httpService.get('/blogs');
  }
}
