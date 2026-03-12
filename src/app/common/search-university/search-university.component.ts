import { Component, Inject,OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-university',
   standalone: true, 
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
  templateUrl: './search-university.component.html',
  styleUrls: ['./search-university.component.scss']
})
export class SearchUniversityComponent implements OnInit  {
  searchText = '';

  list: any = [];
  title: any;
  constructor(
    private dialogRef: MatDialogRef<SearchUniversityComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.initaite()
 
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





ngOnInit(){

  // simulate API load
this.initaite()

}
trendingInstitutes:any=[]
initaite(){
  this.trendingInstitutes = [
    {
      id:1,
      name:'IIT Delhi',
      logo:'https://collegetopmost.com/adminad/backend/collegetopmost/public/university/60751771180265.png'
    },
    {
      id:2,
      name:'IIT Bombay',
      logo:'https://collegetopmost.com/adminad/backend/collegetopmost/public/university/60751771180265.png'
    },
    {
      id:3,
      name:'Delhi University',
      logo:'https://collegetopmost.com/adminad/backend/collegetopmost/public/university/60751771180265.png'
    },
      {
      id:4,
      name:'IIT Delhi',
      logo:'https://collegetopmost.com/adminad/backend/collegetopmost/public/university/60751771180265.png'
    },
    {
      id:5,
      name:'IIT Bombay',
      logo:'https://collegetopmost.com/adminad/backend/collegetopmost/public/university/60751771180265.png'
    },
    {
      id:6,
      name:'Delhi University aaaa vv vvvvvvv vss ss aaaa aaaaaa a',
      logo:'https://collegetopmost.com/adminad/backend/collegetopmost/public/university/60751771180265.png'
    }
  ];
}

trackById(index:number,item:any){
  return item.id;
}

searchInstitute(){
  console.log(this.searchText);
}

selectInstitute(inst:any){
  console.log(inst);
}

close(){
  this.dialogRef.close();
}
}
