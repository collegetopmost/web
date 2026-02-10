import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
@Component({
  selector: 'app-select-city',

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
  ],
  templateUrl: './select-city.component.html',
  styleUrl: './select-city.component.scss',
})
export class SelectCityComponent {
  searchText = '';

  list: any = [];
  title: any;
  constructor(
    private dialogRef: MatDialogRef<SelectCityComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.list = this.data?.list;
    this.title = this.data?.title;
  }

  filteredCities() {
    if(this.list?.length){
    return this.list?.filter((ele: any) =>
      ele?.name?.toLowerCase()?.includes(this.searchText.toLowerCase()),
    );
  }else{
    []
  }
  }

  selectCity(city: string) {
    this.dialogRef.close(city);
  }

  close() {
    this.dialogRef.close();
  }
}
