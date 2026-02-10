import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { Component } from '@angular/core';

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
import { SelectCityComponent } from './select-city/select-city.component';
import { MatIconModule } from '@angular/material/icon';
import { ApiService } from '../../api.service';
import { ToastService } from '../../toast.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-popup-signup',
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
  templateUrl: './popup-signup.component.html',
  styleUrl: './popup-signup.component.scss',
})
export class PopupSignupComponent {
  selectedCity: any;
  form: FormGroup = new FormGroup({});
  constructor(
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<PopupSignupComponent>,
    private fb: FormBuilder,
    private toast:ToastService,
    private api: ApiService,

  ) {
    this.initialize();
    this.getListCity();
    this.getListState();
    this.getListCourse();
  }
  formSubmitted=false
  stateList: any = [];
  getListState() {
    this.stateList = [];

    this.api.getapi('getListState').subscribe(
      (res: any) => {
        this.stateList = res?.data;
      },
      (error: any) => {},
    );
  }
  cityList: any = [];
  getListCity() {
    this.cityList = [];

    this.api.getapi('getListCity').subscribe(
      (res: any) => {
        this.cityList = res?.data;
      },
      (error: any) => {},
    );
  }
  courseList: any = [];
  getListCourse() {
    this.courseList = [];

    this.api.getapi('getListCoursesActive').subscribe(
      (res: any) => {
        this.courseList = res?.data;
      },
      (error: any) => {},
    );
  }
  initialize() {
    this.form = this.fb.group({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      contactNo: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[6-9]\d{9}$/),
      ]),
      course: new FormControl(null, []),
      state: new FormControl(null, []),
      city: new FormControl(null, []),
    });
  }
  save() {
    this.form.markAllAsTouched();
    this.form.updateValueAndValidity();
    if (this.form.valid) {
      console.log('Valid');
      let obj=this.form.value
         this.api.postapi('enquiry_generate',obj).subscribe(
      (res: any) => {
   this.formSubmitted=true
        setTimeout(() => {
          this.dialogRef.close()
        }, 3000);
      //   this.showSnack('Thank You For Connecting,will Connect Seperatly')
      },
      (error: any) => {},
    );
    } else {
      console.log('invalid');
    }
  }
  
// showSnack(msg:any) {
//   this.snackbar.add({
//     msg:msg,
//     timeout: 3000
//   });
// }
  checkState(type: any) {
    if (type == 'CITY') {
      let stateId = this.form.controls['state'].value;
      if (stateId == undefined || stateId == null) {
        // this.toast.show('error', 'Please Select State First');
        return false;
      } else {
        return true;
      }
    } else {
      return true;
    }
  }
  openSelectDialog(list: any, title: any) {
    let listFilter: any = [];
    if (this.checkState(title)) {
      if (title == 'City') {
        let stateId = this.form.controls['state'].value;
        let city_list = this.cityList?.filter(
          (f: any) => f.state_id == stateId,
        );
        listFilter = city_list;
      } else {
        listFilter = list;
      }
      const dialogRef = this.dialog.open(SelectCityComponent, {
        width: '90vw',
        maxWidth: '400px',
        height: '80vh',
        data: { list: listFilter, title: title },
      });

      dialogRef.afterClosed().subscribe((item) => {
        if (item) {
          if (title == 'City') {
            this.selectedCity = item;
            this.form.controls['city'].setValue(item?.id);
          }

          if (title == 'State') {
            this.selectedState = item;
            this.form.controls['state'].setValue(item?.id);
            this.selectedCity = null;
            this.form.controls['city'].setValue(null);
          }
          if (title == 'Course') {
            this.selectedCourse = item;
            this.form.controls['course'].setValue(item?.id);
          }
        }
      });
    }
  }
  selectedState: any;
  selectedCourse: any;
}
