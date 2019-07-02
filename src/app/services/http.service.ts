// tslint:disable-next-line:ordered-imports
import { Injectable } from '@angular/core';
import { throwError as observableThrowError, Subject } from 'rxjs';

// Import RxJs required methods
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { catchError, map } from 'rxjs/operators';
import { ApiConstant } from './api.constant';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  user;
  setUserSubject: Subject<any> = new Subject<any>();
  constructor(private http: HttpClient) { }

  createAuthorizationHeader(headers: HttpHeaders): HttpHeaders {
    // console.log(this.localstorage.getToken());
    const token = localStorage.getItem('token');
    if (token) {
      return headers.append('x-access-token', token);
    }
    else {
      return headers;
    }
  }

  post(url, data): any {
    const headers = this.createAuthorizationHeader(new HttpHeaders());
    return (
      this.http.post(ApiConstant.SERVER_PATH + url, data, {
        headers: headers
      })
        .pipe(map((res: any) => res), catchError((error: any) =>
          observableThrowError(this.showErrorSnackBar(error))
        ))
    );
  }

  get(url): any {
    const headers = this.createAuthorizationHeader(new HttpHeaders());
    this.createAuthorizationHeader(headers);
    return (
      this.http
        .get(ApiConstant.SERVER_PATH + url, {
          headers: headers
        })
        .pipe(map((res: any) => res), catchError((error: any) =>
          observableThrowError(this.showErrorSnackBar(error))
        ))
      // ...errors if any
    );
  }

  put(url, data): any {
    const headers = this.createAuthorizationHeader(new HttpHeaders());
    this.createAuthorizationHeader(headers);
    return (
      this.http
        .put(ApiConstant.SERVER_PATH + url, data, {
          headers: headers
        })
        .pipe(map((res: any) => res), catchError((error: any) =>
          observableThrowError(this.showErrorSnackBar(error))
        ))
    );
  }

  delete(url): any {
    const headers = this.createAuthorizationHeader(new HttpHeaders());
    this.createAuthorizationHeader(headers);
    return (
      this.http
        .delete(ApiConstant.SERVER_PATH + url, {
          headers: headers
        })
        .pipe(map((res: any) => res), catchError((error: any) =>
          observableThrowError(this.showErrorSnackBar(error))
        ))
    );
  }

  showErrorSnackBar(err): any {
    return err.error;
  }

  imageUpload(url, file, path, name): any {
    // let formData: FormData = new FormData();
    // formData.append('file', file);
    // formData.append('filename', file.name);
    // formData.append('path', path);
    const data = {
      file: file,
      filename: name,
      path: path
    };
    // formData);

    const headers = new HttpHeaders();
    this.createAuthorizationHeader(headers);
    return this.http
      .post(ApiConstant.SERVER_PATH + url, data, {
        headers: headers
      })
      .pipe(map((res: any) => res), catchError((error: any) =>
        observableThrowError(this.showErrorSnackBar(error))
      ));
  }

  isAuthenticated(token?): any {
    let headers = new HttpHeaders();
    let url = ApiConstant.SERVER_PATH + '/users/me';
    if (token) {
      url = `${ApiConstant.SERVER_PATH}/users/me?token=${token}`;
    }
    headers = this.createAuthorizationHeader(new HttpHeaders());

    return this.http
      .get(url, {
        headers: headers
      })
      .pipe(map((res: any) => res), catchError((error: any) =>
        observableThrowError(this.showErrorSnackBar(error))
      ));
  }
  saveuser(data): void {
    this.user = data;
    this.setUserSubject.next(data);
  }
  getUser(): any {
    return this.user;
  }
  setAuthenticatedUser(token, user): void {
    this.saveuser(user);
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', token);
  }
}
