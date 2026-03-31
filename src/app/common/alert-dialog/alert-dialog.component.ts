import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { Component,Inject } from '@angular/core';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { MatIconModule } from '@angular/material/icon';
import { ApiService } from '../../api.service';
import { ToastService } from '../../toast.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-alert-dialog',
 imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIcon,
    FormsModule,
    MatIconModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './alert-dialog.component.html',
  styleUrl: './alert-dialog.component.scss'
})
export class AlertDialogComponent {
  selectedCity: any;
  form: FormGroup = new FormGroup({});
  constructor(
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<AlertDialogComponent>,
    private fb: FormBuilder,
    private toast:ToastService,
    private api: ApiService,
   @Inject(MAT_DIALOG_DATA) public data: any,
  ) {

    
  }

 close(){
  this.dialogRef.close()
 }
  


}
