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
import { EnquiryFormShotComponent } from '../enquiry-form-shot/enquiry-form-shot.component';
@Component({
  selector: 'app-intrest-question',
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
  templateUrl: './intrest-question.component.html',
  styleUrl: './intrest-question.component.scss'
})
export class IntrestQuestionComponent {
  currentIndex = 0;
  answers: any[] = [];
  textAnswer: string = '';
  animationClass = 'slide-in';
  isCompleted = false;

  constructor(private dialogRef: MatDialogRef<IntrestQuestionComponent>,private dialog:MatDialog,@Inject(MAT_DIALOG_DATA) public data: any,private api:ApiService) {
this.questions=this.data?.questionList

  }

  // QUESTIONS DATA
  questions:any = [
    {
      type: 'text',
      question: 'What do you enjoy the most?',
      options: ['Coding', 'Designing', 'Management']
    },
    {
      type: 'image',
      question: 'Choose your vibe',
      options: [
        { img: 'assets/images/career_question.png', title: 'Developer' },
        { img: 'assets/images/career_question.png', title: 'Designer' },
        { img: 'assets/images/career_question.png', title: 'Business' }
      ]
    },
    {
      type: 'input',
      question: 'Describe your dream career'
    }
  ];

  // GET CURRENT QUESTION
  get currentQuestion():any {
    return this.questions[this.currentIndex];
  }

  // SELECT OPTION (TEXT / IMAGE)
  selectAnswer(ans: any,isCompleted:any=false) {
   // this.answers[this.currentIndex] = ans;
    this.questions[this.currentIndex].selectedAnswer = ans?.id;
    this.next();
    this.isCompleted=isCompleted
    console.log("this.isCompleted",this.isCompleted);
    
  }

  // SUBMIT TEXT ANSWER
  submitTextAnswer(currentQuestion:any) {
    if (!currentQuestion.selectedAnswer || currentQuestion?.selectedAnswer?.trim() === ''){

    }else{
  this.next();
    };
  
  }
  getProgress(): number {
  if (this.isCompleted) {
    return 100;
  }
  return ((this.currentIndex) / this.questions.length) * 100;
}
submitAnswer(){
  console.log("anser",this.questions);
  
}
  // NEXT QUESTION
  next() {
    this.animateOut();

    setTimeout(() => {

      if (this.currentIndex < this.questions.length - 1) {
        this.currentIndex++;

        // restore if coming forward again
        if (this.currentQuestion?.type === 'input') {
          this.textAnswer = this.answers[this.currentIndex] || '';
        }

      } else {
        this.isCompleted = true;
      }

      this.animateIn();

    }, 300);
  }

  // BACK BUTTON
  goBack() {
    if (this.currentIndex === 0) return;

    this.animateOut();

    setTimeout(() => {
      this.currentIndex--;

      // restore previous answer
      if (this.currentQuestion?.type === 'input') {
        this.textAnswer = this.answers[this.currentIndex] || '';
      }

      this.animateIn();
    }, 300);
  }

  // CLOSE DIALOG
  closeDialog() {
    this.dialogRef.close();
  }

  // ANIMATION HELPERS
  animateOut() {
    this.animationClass = 'slide-out';
  }

  animateIn() {
    this.animationClass = 'slide-in';
  }
  checkUserDeatils(){
      let getUser=localStorage.getItem("userInfo")
  let userDetails=null;
  if(getUser){
userDetails=JSON.parse(getUser)
if(userDetails?.id){
  this.saveResult()
}
  }else{
    this.openEnquiry()
  }
  }
openEnquiry() {
  const dialogRef = this.dialog.open(EnquiryFormShotComponent, {
    width: '400px',
    maxWidth: '95vw'
  });
    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
this.saveResult()
      } else {
      }
    });
}
saveResult(){
  let getUser=localStorage.getItem("userInfo")
  let userDetails=null;
  if(getUser){
userDetails=JSON.parse(getUser)
  }
  let answer:any=[]
  this.questions?.forEach((ques:any)=>{
let findanswe=ques?.answers?.find((ans:any)=>ans.id==ques?.selectedAnswer)
let findansweId=null
if(findanswe){
findansweId=findanswe?.id
}
 let obj={
    user_id:userDetails?.id,
    question_id:ques?.id,
    user_answer:ques?.selectedAnswer,
    answer_id:findansweId

  }
  answer.push(obj)
  })
  let obj={
    answers:answer
  }
         this.api.postapi('submitAnswer',obj).subscribe(
      (res: any) => {

    
          this.dialogRef.close(true)
    
      //   this.showSnack('Thank You For Connecting,will Connect Seperatly')
      },
      (error: any) => {
  
  },  )

  
}
}
