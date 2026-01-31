import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
// import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-about-us',
  imports: [CommonModule, MatIcon],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {
  expertList = [
    { name: 'Rahul Kumar', role: 'Senior Counsellor', photo: 'assets/images/experts_0.jpg' },
    { name: 'Ankit Verma', role: 'Career Advisor', photo: 'assets/images/experts_1.jpg' },
    { name: 'Riya Sharma', role: 'Student Support', photo: 'assets/images/experts_2.jpg' },
    { name: 'Kunal Singh', role: 'Mentor', photo: 'assets/images/experts_3.jpg' },
    { name: 'Priya Nair', role: 'Guidance Coach', photo: 'assets/images/experts_4.jpg' },
    { name: 'Neha Gupta', role: 'Support Lead', photo: 'assets/images/experts_5.jpg' }
  ];
}
