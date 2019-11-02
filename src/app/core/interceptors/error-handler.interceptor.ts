import { Injectable } from "@angular/core";
import { HttpEvent, HttpRequest, HttpHandler, HttpInterceptor, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            retry(2),
            catchError((error: HttpErrorResponse) => {  
                return throwError(this.handleErrors(error));
            })
        );
    }

    private handleErrors(error: HttpErrorResponse): string {
        let errorMessage='';  
        
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        return errorMessage;
    }
}
