// Global Error Handler Service

import { ErrorHandler, inject, Injectable, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NotificationService } from '../services/notification.service';

@Injectable({
    providedIn: 'root'
})
export class GlobalErrorHandler implements ErrorHandler {

    private readonly injector = inject(Injector);

    /**
     * Handles global errors in the application.
     *
     * @param {Error | HttpErrorResponse} error - The error object that needs to be handled.
     * @returns {void}
     *
     * This method uses the NotificationService to display error notifications to the user.
     * It differentiates between TypeError and ReferenceError, but currently handles all errors in the same way.
     * Additionally, it logs a message to the console indicating that the global error handler has been invoked.
     */
    handleError(error: Error | HttpErrorResponse): void {

        console.log("In Global Error Handler");
        const notificationService = this.injector.get(NotificationService);

        if (error instanceof TypeError || error instanceof ReferenceError) {
            notificationService.showNotification('error', error.message);
        } else {
            notificationService.showNotification('error', error.message);
        }

        
    }
}