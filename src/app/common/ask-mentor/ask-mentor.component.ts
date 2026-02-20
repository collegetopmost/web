import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

import { MatExpansionModule } from '@angular/material/expansion';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { ApiService } from '../../api.service';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-ask-mentor',
   imports: [
    CommonModule,

    MatIcon,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    MatExpansionModule,
  ],
  templateUrl: './ask-mentor.component.html',
  styleUrl: './ask-mentor.component.scss'
})
export class AskMentorComponent {

    constructor(
    private dialogRef: MatDialogRef<AskMentorComponent>,
    private api: ApiService,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
this.initialize()
  }
  form: FormGroup = new FormGroup({});
   initialize() {
    this.form = this.fb.group({
      name: new FormControl(null, [Validators.required]),
      mentor_id: new FormControl(this.data?.id, [Validators.required]),
      enquiry_type: new FormControl('ASK_MENTOR', [Validators.required]),
      contactNo: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[6-9]\d{9}$/),
      ]),
      question: new FormControl(null,[Validators.required]),
  
    });
  }

  close() {
    this.dialogRef.close();
  }
formSubmitted=false
  submitForm() {
        this.form.markAllAsTouched();
    this.form.updateValueAndValidity();
    if (this.form.valid) {
      console.log(this.form.value);
            let obj=this.form.value
         this.api.postapi('ask_question_mentor',obj).subscribe(
      (res: any) => {
   this.formSubmitted=true
        setTimeout(() => {
          this.dialogRef.close()
        }, 3000);
      //   this.showSnack('Thank You For Connecting,will Connect Seperatly')
      },
      (error: any) => {},
    );

    }
  }
}
