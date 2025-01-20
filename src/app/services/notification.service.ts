import { inject, Inject, Injectable } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";
@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private readonly snackBar = inject(MatSnackBar);

  showNotification(type: "error" | 'info' | 'warn' | 'success', messageText: string): void {
    this.snackBar.open(messageText, 'Close', {
      duration: 2000,
      panelClass: ['mat-toolbar', `mat-${type}`]
    });
  }

}
