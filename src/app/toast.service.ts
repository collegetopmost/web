import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Toast {
  id: number;
  type: 'success' | 'error' | 'info' | 'warning';
  message: string;
}
@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private toasts = new BehaviorSubject<Toast[]>([]);
  toasts$ = this.toasts.asObservable();

  private nextId = 1;

  show(type: Toast['type'], message: string) {
    const toast: Toast = { id: this.nextId++, type, message };
    this.toasts.next([...this.toasts.value, toast]);
    setTimeout(() => this.dismiss(toast.id), 3000);
  }

  dismiss(id: number) {
    this.toasts.next(this.toasts.value.filter(t => t.id !== id));
  }
}
