import { Injectable } from "@angular/core";
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from "rxjs";
import { environment } from "../../../environments/environment";
import { catchError, map } from "rxjs/operators";
import { CustomHttpErrorResponse } from "./api.types";

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
    /**
     * Constructor
     */
    constructor() {}

    /**
     * Intercept
     *
     * @param req
     * @param next
     */
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any>
    {
        // Clone the request object
        let newReq = req.clone({
            url: `${ environment.apiBaseUrl }${ req.url}`
        });

        // Response
        return next.handle(newReq).pipe(
            map((event: HttpEvent<any>) => {
                //Format successful response to return body data
                if (event instanceof HttpResponse) {
                    return event.clone({ body: event.body.data });
                }

                return event;
            }),
            catchError((error) => {
                // Format error response to expose errors array directly in the body
                if (error instanceof HttpErrorResponse) {
                    // Create a custom error response because HttpErrorResponse.message is read only
                    // const newError = new CustomHttpErrorResponse({
                    //     error: error.error,
                    //     headers: error.headers,
                    //     status: error.status,
                    //     statusText: error.statusText,
                    //     url: error.url || undefined
                    // });

                    // Add each error message followed by a new line to the custom message property
                    // newError.customMessage = newError.error.reduce((accumulator: any, current: any) => {
                    //     // Server validation errors are not to be formatted
                    //     if (current.message.includes(' ')) {
                    //         return accumulator + `${current.message}` + '\n';
                    //     }

                    //     // Otherwise prefix every error message with scope and reason for translation
                    //     const scope = current.message.split('_')[0];
                    //     const reason = current.message.substr(scope.length + 1);

                    //     return accumulator + `ERRORS.${scope}.${reason}` + '\n';
                    // }, '');
                    return throwError(error);
                }

                return throwError(error);
            })
        );
    }
}
