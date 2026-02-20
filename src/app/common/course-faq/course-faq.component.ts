import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-course-faq',
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
  templateUrl: './course-faq.component.html',
  styleUrl: './course-faq.component.scss',
})
export class CourseFaqComponent {
  constructor(
    private dialogRef: MatDialogRef<CourseFaqComponent>,
    private api: ApiService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.course = this.data?.course;
    this.getFaqCoursesWise()
  }

  closeDialog() {
    this.dialogRef.close();
  }
  course: any;
  faqList: any = [];
  getFaqCoursesWise() {
    this.faqList = [];
    let obj = { course_id: this.course?.id };
    this.api.postapi('getFaqCoursesWise', obj).subscribe(
      (res: any) => {
        this.faqList = res?.data;
        console.log("getFaqCoursesWise",this.faqList);
        
      },
      (error: any) => {},
    );
  }
}
