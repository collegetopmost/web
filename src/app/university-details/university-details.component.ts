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
@Component({
  selector: 'app-university-details',
  imports: [CommonModule, MatIcon, ReactiveFormsModule],
  templateUrl: './university-details.component.html',
  styleUrl: './university-details.component.scss',
})
export class UniversityDetailsComponent {
  faqList = [
    {
      question: 'Does D.Y. Patil University provide fully online degrees?',
      answer:
        'Yes, D.Y. Patil University provides full-time online BBA and MBA.',
      open: false,
    },
    {
      question: 'Is an Online Degree from Dr. D.Y. Patil Valid?',
      answer: 'Yes, the online degree is UGC-approved and globally valid.',
      open: false,
    },
    {
      question: 'Is there scholarship facility at DPU for its online course?',
      answer:
        'There are scholarship and fee concessions for certain special categories- students from a defence background or with special abilities and alumni of the university.',
      open: false,
    },
    {
      question:
        'How are the exams conducted for the online courses at D Y Patil?',
      answer:
        'The university conducts online proctored exams at designated exam centres for the online courses.',
      open: false,
    },
  ];

  reviewForm: FormGroup;
  rating = 0;
  isSubmitting = false;
  showPreview = false;
  today = new Date();

  toggle(index: number) {
    this.faq_university[index].open = !this.faq_university[index].open;
  }

  private observer: IntersectionObserver | undefined;

  constructor(
    private fb: FormBuilder,
    private el: ElementRef,
    private activatedRoute: ActivatedRoute,
    private api: ApiService,
    private sanitizer: DomSanitizer,
    private dialog: MatDialog,
  ) {
    this.reviewForm = this.fb.group({
      rating: [0, [Validators.required, Validators.min(1), Validators.max(5)]],
      title: ['', [Validators.required, Validators.maxLength(100)]],
      course: ['', [Validators.required, Validators.maxLength(100)]],
      content: ['', [Validators.required, Validators.maxLength(500)]],
      verified: [false, [Validators.requiredTrue]],
    });
  }
  openRagistration() {
    this.dialog.open(PopupSignupComponent, {
      width: '500px',
    });
  }
  universityDetails: any;
  getUniversityDetails() {
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
        },
        (error: any) => {},
      );
  }
  aboutusDetails: any = [];
  streamDetail: any = [];
  processDetails: any = [];
  faq_university: any = [];
  accreditedDetail: any = [];
  courseDetails: any = [];
  topicDetails: any = [];
  faculty_list: any = [];
  tagDetails: any = [];
  expertsOur: any = [];
  getListExpert() {
    this.expertsOur = [];

    this.api.getapi('getListExpert').subscribe(
      (res: any) => {
        this.expertsOur = res?.data?.filter(
          (f: any) => f.typeOfExperts == 'OUR_EXPERTS',
        );

        this.expertsOur = this.sortBySrNo(this.expertsOur);
        this.expertsOur?.forEach((f: any) => {
          this.expertsOur.push(f);
        });
        if (this.expertsOur?.length >= 4) {
          this.expertsOur = this.expertsOur.slice(0, 3);
        }

        console.log('expertsOur', this.expertsOur);
      },
      (error: any) => {},
    );
  }
  boardsDetails: any = [];
  sortBySrNo(arr: any) {
    return arr.sort((a: any, b: any) => a.srNo - b.srNo);
  }
  private isClickScrolling = false;
  ngAfterViewInit() {
    const menuItems = document.querySelectorAll('.sidebar_li');
    const sections = document.querySelectorAll('h3.tabs_title');

    menuItems.forEach((li) => {
      li.addEventListener('click', () => {
        this.isClickScrolling = true;

        menuItems.forEach((x) => x.classList.remove('active'));
        li.classList.add('active');

        const targetId = li.getAttribute('data-target');
        const targetElement = document.getElementById(targetId!);

        targetElement?.scrollIntoView({ behavior: 'smooth', block: 'start' });

        setTimeout(() => (this.isClickScrolling = false), 700);
      });
    });

    const observer = new IntersectionObserver(
      (entries) => {
        if (this.isClickScrolling) return;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            menuItems.forEach((li) =>
              li.classList.toggle(
                'active',
                li.getAttribute('data-target') === id,
              ),
            );
          }
        });
      },
      {
        root: null, // ✅ important: observe window scroll
        threshold: 0.3, // ✅ tune sensitivity
        rootMargin: '-100px 0px 0px 0px', // ✅ highlight when section top is reached
      },
    );

    sections.forEach((sec) => observer.observe(sec));
  }
  universityName: any;

  ngOnInit(): void {
    // Auto-show preview when form values change
    this.reviewForm.valueChanges.subscribe(() => {
      this.showPreview = true;
    });
    this.activatedRoute.params.subscribe((params: any) => {
      this.universityName = params?.name;
    });
    this.getUniversityDetails();
    this.getListExpert();
    console.log('universityName', this.universityName);
  }

  setRating(value: number): void {
    this.rating = value;
    this.reviewForm.patchValue({ rating: value });
  }

  getRatingText(): string {
    const rating = this.rating;
    if (rating === 5) return 'Excellent';
    if (rating === 4) return 'Very Good';
    if (rating === 3) return 'Good';
    if (rating === 2) return 'Average';
    if (rating === 1) return 'Poor';
    return 'Select your rating';
  }

  submitReview(): void {
    if (this.reviewForm.valid) {
      this.isSubmitting = true;

      // Simulate API call
      setTimeout(() => {
        console.log('Review submitted:', this.reviewForm.value);

        // In real app, you would call your service here
        // this.reviewService.submitReview(this.reviewForm.value).subscribe(...)

        // Reset form after successful submission
        this.resetForm();
        this.isSubmitting = false;

        // Show success message (you can implement a toast/notification)
        alert('Thank you for your review! It has been submitted successfully.');
      }, 1500);
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.reviewForm.controls).forEach((key) => {
        const control = this.reviewForm.get(key);
        control?.markAsTouched();
      });
    }
  }

  resetForm(): void {
    this.rating = 0;
    this.reviewForm.reset({
      rating: 0,
      title: '',
      course: '',
      content: '',
      verified: false,
    });
    this.showPreview = false;
  }
}
