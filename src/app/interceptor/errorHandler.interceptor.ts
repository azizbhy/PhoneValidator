import {Injectable} from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {filter, map} from 'rxjs/operators';
import {formValidationResponse} from '../model/formValidationResponse.model';
import {MatSnackBar} from '@angular/material/snack-bar';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private window: MatSnackBar) { }

 
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
          filter((event: any) => event instanceof HttpResponse),
          map((event: HttpResponse<formValidationResponse>) => {
            const {body} = event;
            if (body && body.success === false) {
           
              const {code, info, type} = body.error;
              switch (code) {
                case 101: this.snackBar("Invalid Credentials"); break;
                case 103: this.snackBar("Invalid Request"); break;
                case 310: this.snackBar(info); break;
              }

              throw new HttpErrorResponse({
                error: info,
                headers: event.headers,
                status: code,
                statusText: type,
                // @ts-ignore
                url: event.url || null
              });
            } else {
              return event;
            }
          }));
    }

  snackBar(message: string) {
    this.window.open(message, "Done");
  }
}


