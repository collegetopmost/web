import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';

import { Component, Inject,OnInit } from '@angular/core';

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
import { stringify } from 'uuid';
@Component({
  selector: 'app-enquiry-form-shot',
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,

    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  templateUrl: './enquiry-form-shot.component.html',
  styleUrl: './enquiry-form-shot.component.scss'
})
export class EnquiryFormShotComponent {
  name: string = '';
  mobile: string = '';
  isSubmitted = false;

  constructor(private dialogRef: MatDialogRef<EnquiryFormShotComponent>,private fb: FormBuilder,private api:ApiService) {
    this.initialize()
  }

  close() {
    this.dialogRef.close();
  }

  submit() {
    this.form.markAllAsTouched()
    if (this.form.valid ) {
      this.isSubmitted = true;
    let obj=this.form.value
         this.api.postapi('enquiry_generate_form',obj).subscribe(
      (res: any) => {
  localStorage.setItem("userInfo",JSON.stringify(res?.rowData))
        setTimeout(() => {
          this.dialogRef.close(true)
        }, 3000);
      //   this.showSnack('Thank You For Connecting,will Connect Seperatly')
      },
      (error: any) => {
        this.form.markAllAsTouched()
      },
    );
      // Auto close after animation
      // setTimeout(() => {
      //   this.dialogRef.close();
      // }, 3500);
    }
  }

  // Extra safety validation
  isValidMobile(mobile: string): boolean {
    return /^[0-9]{10}$/.test(mobile);
  }

  // Prevent non-numeric input
  allowOnlyNumbers(event: KeyboardEvent) {
    const charCode = event.key;
    if (!/^[0-9]$/.test(charCode)) {
      event.preventDefault();
    }
  }
    form: FormGroup = new FormGroup({});
    initialize() {
    this.form = this.fb.group({
      name: new FormControl(null, [Validators.required]),
    
      contactNo: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[6-9]\d{9}$/),
      ]),
   
    });
  }
}
