import {
  Component,
  AfterViewInit,
  HostListener,
  ElementRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { PopupSignupComponent } from '../common/popup-signup/popup-signup.component';
import {
  DomSanitizer,
  SafeHtml,
  SafeResourceUrl,
} from '@angular/platform-browser';
import { MatDialog } from '@angular/material/dialog';
import { GallaryDialogComponent } from '../university-details/gallary-dialog/gallary-dialog.component';
@Component({
  selector: 'app-school-details',
  imports: [CommonModule, MatIcon, ReactiveFormsModule],
  templateUrl: './school-details.component.html',
  styleUrl: './school-details.component.scss'
})
export class SchoolDetailsComponent {

  constructor(
    private fb: FormBuilder,
    private el: ElementRef,
    private activatedRoute: ActivatedRoute,
    private api: ApiService,
    private sanitizer: DomSanitizer,
    private dialog: MatDialog,
  ) {
       this.activatedRoute.params.subscribe((params: any) => {
      this.universityName = params?.name;
    });
    this.getSchoolDetails();
  }
  universityName:any
    universityDetails: any;
  getSchoolDetails() {
    this.universityDetails = null;
    this.api
      .postapi('getUniversityDetails', { fullName: this.universityName })
      .subscribe(
        (res: any) => {
          this.universityDetails = res?.data;
          if (this.universityDetails?.youtubelink) {
            this.universityDetails.youtubeSanitizeLink =
              this.sanitizer.bypassSecurityTrustResourceUrl(
                this.universityDetails.youtubelink,
              );
          }
          if (this.universityDetails.boardsDetail?.length) {
            this.boardsDetails = this.sortBySrNo(
              this.universityDetails.boardsDetail,
            );
          }
          if (this.universityDetails.accreditedDetail?.length) {
            this.accreditedDetail = this.sortBySrNo(
              this.universityDetails.accreditedDetail,
            );
          }

          if (this.universityDetails.aboutusDetail?.length) {
            this.aboutusDetails = this.universityDetails.aboutusDetail;
          }
          if (this.universityDetails.streamDetail?.length) {
            this.streamDetail = this.sortBySrNo(
              this.universityDetails.streamDetail,
            );
          }
       
          if (this.universityDetails.tagDetails?.length) {
            this.tagDetails = this.sortBySrNo(
              this.universityDetails.tagDetails,
            );
          }
          if (this.universityDetails.courseDetails?.length) {
            this.courseDetails = this.sortBySrNo(
              this.universityDetails.courseDetails,
            );
          }
          //  if (this.universityDetails.placementDetails?.length) {
          //   this.placementDetails = this.sortBySrNo(
          //     this.universityDetails.placementDetails,
          //   );
          //   this.placementDetails?.forEach((place:any)=>{
          //     place.count=0
          //     let interval:any
          //     this.startCounter(place,interval)
          //   })
          // }
          

          if (this.universityDetails.topicDetails?.length) {
            this.topicDetails = this.sortBySrNo(
              this.universityDetails.topicDetails,
            );
            this.topicDetails?.forEach((topic: any) => {
              topic.explainArray = this.sortBySrNo(topic.explainArray);
            });
            this.topicDetails?.forEach((topic: any) => {
              topic.imageArray = this.sortBySrNo(topic.imageArray);
            });
            this.topicDetails?.forEach((topic: any) => {
              topic.flowArray = [];
              if (
                !topic?.contentOrderFirst ||
                topic?.contentOrderFirst == 'EXPLAIN'
              ) {
                if (topic?.explainArray?.length) {
                  topic.flowArray.push({array:topic?.explainArray,type:"EXPLAIN"});
                }
                if (topic?.imageArray?.length) {
                  topic.flowArray.push({array:topic?.imageArray,type:"IMAGES"});
                }
              } else if (topic?.contentOrderFirst == 'IMAGES') {
                if (topic?.imageArray?.length) {
              topic.flowArray.push({array:topic?.imageArray,type:"IMAGES"});
                }
                if (topic?.explainArray?.length) {
                   topic.flowArray.push({array:topic?.explainArray,type:"EXPLAIN"});
                }
              }
   
          
            });
                   console.log("  this.topicDetails?",  this.topicDetails);
          }
          if (this.universityDetails.processDetails?.length) {
            this.processDetails = this.sortBySrNo(
              this.universityDetails.processDetails,
            );
            this.processDetails?.forEach((process: any) => {
              process.stepArray = this.sortBySrNo(process.stepArray);
            });
            console.log('this.processDetails', this.processDetails);
          }
          if (this.universityDetails.faculty_list?.length) {
            this.faculty_list = this.sortBySrNo(
              this.universityDetails.faculty_list,
            );
          }
          if (this.universityDetails.faq_university?.length) {
            this.faq_university = this.sortBySrNo(
              this.universityDetails.faq_university,
            );
            this.faq_university?.forEach((faq: any) => {
              faq.open = false;
            });
          }
          this.iconicFacultyDetails=this.universityDetails.iconicFacultyDetails
          this.broucherList=this.universityDetails.broucherDetails
          this.brochureImages=this.sortBySrNo(this.broucherList)
          this.gallary=this.universityDetails?.gallaryList
          this.gallary=this.sortBySrNo(this.gallary)
          this.gallary?.forEach((ele:any) => {
            ele.imageArray=this.sortBySrNo(ele.imageArray)
          });
        },
        (error: any) => {},
      );
  }
  gallary:any=[]
  broucherList:any=[]
  brochureImages:any=[]
  iconicFacultyDetails:any=[]
  faq_university:any=[]
  faculty_list:any=[]
  processDetails:any=[]
  topicDetails:any=[]
  placementDetails:any=[]
  courseDetails:any=[]
  tagDetails:any=[]
     streamDetail:any=[]
          aboutusDetails:any=[]
          accreditedDetail:any=[]
          boardsDetails:any=[]

    sortBySrNo(arr: any) {
    return arr.sort((a: any, b: any) => a.srNo - b.srNo);
  }

   ripple(event: any) {
    const card = event.currentTarget;

    const circle = document.createElement("span");
    const diameter = Math.max(card.clientWidth, card.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - card.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - card.offsetTop - radius}px`;
    circle.classList.add("ripple");

    const ripple = card.getElementsByClassName("ripple")[0];
    if (ripple) ripple.remove();

    card.appendChild(circle);
  }

  tilt(event: MouseEvent, card: HTMLElement) {
    if (this.isMobile()) return; // 👈 disable on mobile

    const rect = card.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 15;
    const rotateY = (x - centerX) / 15;

    card.style.transform =
      `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
  }

  resetTilt(card: HTMLElement) {
    card.style.transform = `rotateX(0) rotateY(0) scale(1)`;
  }
    isMobile(): boolean {
    return window.innerWidth <= 768;
  }

  
  sections = [
    { id: 'about', label: 'About' },
    { id: 'courses', label: 'Courses' },
    { id: 'boards', label: 'Boards' },
    { id: 'accredited', label: 'Accredited' },
    { id: 'admission', label: 'Admission' },
    { id: 'placements', label: 'Placements' },
    { id: 'members', label: 'Members' },
    { id: 'faqs', label: 'FAQs' }
  ];

  activeSection: string = 'about';

  scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  @HostListener('window:scroll', [])
  onScroll() {
    const scrollTop = document.documentElement.scrollTop;
    const docHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    // progress
    const progress = (scrollTop / docHeight) * 100;
    const progressEl = document.getElementById('sxProgress');
    if (progressEl) progressEl.style.width = progress + '%';

    // active section
    this.sections.forEach(sec => {
      const el = document.getElementById(sec.id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          this.activeSection = sec.id;
        }
      }
    });
  }
}
