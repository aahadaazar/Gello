import { Injectable } from '@angular/core';
import { HttpService } from '../../../services/http.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private httpService: HttpService) {
  }

  login(data): any {
    return this.httpService.post('/users/login', data);
  }

  register(data) {
    return this.httpService.post('/users/register', data);
  }
}
