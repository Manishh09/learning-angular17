import { ApplicationConfig, ErrorHandler } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { httpInterceptor } from './07_interceptors/functional/http.interceptor';
import { httpErrorInterceptor } from './07_interceptors/errors/http-error.interceptor';
import { GlobalErrorHandler } from './05_global-error-handling/global-error.handler';

export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler
    },
    provideRouter(routes, withComponentInputBinding())   ,
    provideAnimations(),
    provideHttpClient(withInterceptors([httpInterceptor, httpErrorInterceptor])),
    
  ]
};
