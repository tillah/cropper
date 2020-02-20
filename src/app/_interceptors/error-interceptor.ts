// import {Injectable} from '@angular/core';
// import {HTTP_INTERCEPTORS, HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
// import {BehaviorSubject, Observable, throwError} from 'rxjs';
// import {catchError, filter, switchMap, take} from 'rxjs/operators';
// import {AuthenticationService} from '../_services/authentication.service';
// import {Tokens} from '../_models/tokens';
// import {AlertifyService} from '../_services/alertify.service';
// import {ApiResourceError} from '../_models/api-resource-error';
//
// @Injectable()
// export class ErrorInterceptor implements HttpInterceptor {
//
//     private isRefreshing = false;
//     private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
//
//     constructor(
//         private _alertifyService: AlertifyService,
//         private _authenticationService: AuthenticationService
//     ) {}
//
//     intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//         return next.handle(httpRequest).pipe(
//             catchError(error => {
//                 if (error instanceof HttpErrorResponse) {
//                     if (error.status === 401) {
//                         return this.handle401Error(httpRequest, next);
//                     }
//                     const applicationError = error.headers.get('Application-Error');
//                     if (applicationError) {
//                         return throwError(applicationError);
//                     }
//                     if (error.status === 0) {
//                         const apiResourceError: ApiResourceError = new ApiResourceError();
//                         apiResourceError.message = 'The backend service is not running.';
//                         apiResourceError.details = '';
//
//                         return throwError(apiResourceError);
//                     }
//                     const serverError = error.error;
//                     let modalStateErrors = '';
//                     if (serverError && typeof serverError === 'object') {
//                        modalStateErrors = serverError;
//                     }
//                     return throwError(modalStateErrors || serverError || 'Server Error');
//                 }
//             })
//         );
//     }
//
//     private handle401Error(httpRequest: HttpRequest<any>, next: HttpHandler) {
//         if (!this.isRefreshing) {
//             this.isRefreshing = true;
//             this.refreshTokenSubject.next(null);
//             return this._authenticationService.refreshToken().pipe(
//                 switchMap((token: Tokens) => {
//                     this.isRefreshing = false;
//                     this.refreshTokenSubject.next(token.accessToken);
//                     return next.handle(this.addToken(httpRequest, token.accessToken));
//                 })
//             );
//         } else {
//             return this.refreshTokenSubject.pipe(
//                 filter(token => token != null),
//                 take(1),
//                 switchMap(token => {
//                     return next.handle(this.addToken(httpRequest, token));
//                 })
//             );
//         }
//     }
//
//     private addToken(httpRequest: HttpRequest<any>, token: string) {
//         return httpRequest.clone({
//             setHeaders: {
//                 'Authorization': `Bearer ${token}`
//             }
//         });
//     }
// }
//
// export const ErrorInterceptorProvider = {
//     provide: HTTP_INTERCEPTORS,
//     useClass: ErrorInterceptor,
//     multi: true
// };
