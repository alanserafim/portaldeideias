import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const requestUrl: Array<any> = req.url.split('/');
    const apiUrl: Array<any> = environment.api_url.split('/');
    const token = localStorage.getItem('token')

    if (token && (requestUrl[2] === apiUrl[2])){
      const newRequest = req.clone({ setHeaders: { 'Authorization': `Bearer ${token}`}});
      return next.handle(newRequest);
    } else {
      return next.handle(req);
    }
  }
}
