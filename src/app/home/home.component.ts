import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, MatIcon],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  currentIndex = 0;
  constructor(private sanitizer: DomSanitizer, private router: Router ){ }
  banners = [
    {
      title: "Those who can see into your eyes never lie",
      subtitle: "Say Hi 👋 to Video Counselling",
      image: "assets/images/banner_0.png"
    },
    {
      title: "Your Vision Matters",
      subtitle: "Book Online Appointment Easily",
      image: "assets/images/banner_1.png"
    }
  ];
  @ViewChild('sliderRef') slider!: ElementRef;

  scrollLeft() {
    this.slider.nativeElement.scrollBy({
      left: -300,
      behavior: 'smooth'
    });
  }

  scrollRight() {
    this.slider.nativeElement.scrollBy({
      left: 300,
      behavior: 'smooth'
    });
  }
  stats = [
    {
      icon: "😄",
      value: "1 Lakh+",
      label: "Trusted by Students"
    },
    {
      icon: "🧑‍🏫",
      value: "500+",
      label: "Expert Mentors"
    },
    {
      icon: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      value: "4.8/5 (3000)",
      label: "Google Rating",
      isImage: true
    }
  ];
  services = [
    {
      bg: "linear-gradient(135deg, #ffecd2, #fcb69f)",
      title: "Empower Your Dreams with Fast Financial Support",
      subtitle: "Lowest interest rates",
      tag: "Loans Available",
      image: "https://cdn-icons-png.flaticon.com/512/201/201623.png",
      button: "College Top Most Loans"
    },
    {
      bg: "linear-gradient(135deg, #d4fc79, #96e6a1)",
      title: "Find Answers to All Edu-Questions from Experts",
      subtitle: "24/7",
      tag: "Q&A Portal",
      image: "https://cdn-icons-png.flaticon.com/512/5948/5948534.png",
      button: "College Top Most Q&A Portal"
    },
    {
      bg: "linear-gradient(135deg, #84fab0, #8fd3f4)",
      title: "Explore Jobs in One Click",
      subtitle: "500+ Jobs everyday",
      tag: "Job Portal",
      image: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
      button: "College Top Most Job Portal"
    }
  ];
  openUniversity() {
    this.router.navigate(['university-details/1']);
  }
  @ViewChild('sliderRef') sliderExpart!: ElementRef;
  mentors = [
    {
      name: "Divyanshi Rai",
      title: "Sr. Mentor",
      qualification: "MBA",
      experience: "5 years",
      rating: 4.8,
      counselling: 1278,
      image:
        "assets/images/experts_5.jpg",
    },
    {
      name: "Raghavendra Singh",
      title: "Sr. Mentor",
      qualification: "MCA",
      experience: "4 years",
      rating: 4.7,
      counselling: 2174,
      image:
        "assets/images/experts_4.jpg",
    },
    {
      name: "Sakshi Rajput",
      title: "Sr. Mentor",
      qualification: "M.Com",
      experience: "5 years",
      rating: 4.5,
      counselling: 1724,
      image:
        "assets/images/experts_3.jpg",
    },
    {
      name: "Manish Thapliyal",
      title: "Sr. Mentor",
      qualification: "MA",
      experience: "6 years",
      rating: 4.6,
      counselling: 1943,
      image:
        "assets/images/experts_2.jpg",
    },
    {
      name: "Divyanshi Rai",
      title: "Sr. Mentor",
      qualification: "MBA",
      experience: "5 years",
      rating: 4.8,
      counselling: 1278,
      image:
        "assets/images/experts_1.jpg",
    },
    {
      name: "Raghavendra Singh",
      title: "Sr. Mentor",
      qualification: "MCA",
      experience: "4 years",
      rating: 4.7,
      counselling: 2174,
      image:
        "assets/images/experts_0.jpg",
    },
  ];

  scrollLeftExpart() {
    this.sliderExpart.nativeElement.scrollBy({ left: -320, behavior: 'smooth' });
  }

  scrollRightExpart() {
    this.sliderExpart.nativeElement.scrollBy({ left: 320, behavior: 'smooth' });
  }

  universities = [
    {
      "logo": "https://amityonline.com/_s/amity_logo_c_white_ffbfeced80.svg",
      "name": "Amity University Online",
      "courses": 78
    },
    {
      "logo": "https://onlinejain.com/img/Jain-Online-Logo.addc71da.webp",
      "name": "Jain University Online",
      "courses": 69
    },
    {
      "logo": "https://www.dypatilonlinemba.jaro.in/public/images/dpu-logo.webp",
      "name": "DY Patil University Online",
      "courses": 38
    },
    {
      "logo": "https://collegevidya.com/_next/image/?url=https%3A%2F%2Fd1aeya7jd2fyco.cloudfront.net%2Flogo%2FLiverpool_John_Moores_University.webp&w=128&q=100",
      "name": "Liverpool John Moores University",
      "courses": 28
    },
    {
      "logo": "https://collegevidya.com/_next/image/?url=https%3A%2F%2Fd1aeya7jd2fyco.cloudfront.net%2Flogo%2FGolden_Gate_University.webp&w=128&q=100",
      "name": "Golden Gate University",
      "courses": 35
    },
    {
      "logo": "https://www.onlinemanipal.com/wp-content/themes/flamingo/assets/images/OM_Logo.svg",
      "name": "MAHE Manipal Online",
      "courses": 37
    },
    {
      "logo": "https://cdn.itm.edu/assets/Logo_1_da908f25bf.png",
      "name": "IIM Nagpur",
      "courses": 9
    },
    {
      "logo": "https://collegevidya.com/_next/image/?url=https%3A%2F%2Fd1aeya7jd2fyco.cloudfront.net%2Flogo%2FLovely-Professional-University-Online-logo.jpg&w=128&q=100",
      "name": "LPU Online",
      "courses": 24
    }
  ];

  platformList = [
    { count: '3565+', icon: 'job', title: 'Job Portal' },
    { count: '3000+', icon: 'internship', title: 'Internship Portal' },
    { count: 'LIVE', icon: 'expo', title: 'Virtual Expo' },
    { count: 'New', icon: 'career', title: 'Career Finder Test' },
    { count: 'Education', icon: 'loan', title: 'Education Loans' },
    { count: 'Info', icon: 'roi', title: 'ROI Calculator' },
    { count: 'Post', icon: 'post', title: 'Post Admission Services' },
    { count: 'Identify', icon: 'verify', title: 'Verify Your University' }
  ];
  getIcon(name: string): SafeHtml {
    const gradient = `
    <defs>
      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#f58634"/>
        <stop offset="100%" stop-color="#403e87"/>
      </linearGradient>
    </defs>
  `;

    const icons: any = {
      job: `
      <svg width="48" height="48" fill="none" stroke="url(#grad)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        ${gradient}
        <rect x="8" y="14" width="32" height="24" rx="6"></rect>
        <path d="M18 14v-4a6 6 0 0 1 12 0v4"></path>
      </svg>
    `,
      internship: `
      <svg width="48" height="48" fill="none" stroke="url(#grad)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        ${gradient}
        <rect x="10" y="6" width="28" height="36" rx="4"></rect>
        <path d="M14 14h20M14 22h20M14 30h14"></path>
      </svg>
    `,
      expo: `
      <svg width="48" height="48" fill="none" stroke="url(#grad)" stroke-width="2">
        ${gradient}
        <circle cx="16" cy="18" r="4"></circle>
        <circle cx="32" cy="18" r="4"></circle>
        <circle cx="24" cy="30" r="4"></circle>
      </svg>
    `,
      career: `
      <svg width="48" height="48" fill="none" stroke="url(#grad)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        ${gradient}
        <circle cx="24" cy="14" r="6"></circle>
        <path d="M6 42c3-14 10-18 18-18s15 4 18 18"></path>
      </svg>
    `,
      loan: `
      <svg width="48" height="48" fill="none" stroke="url(#grad)" stroke-width="2">
        ${gradient}
        <circle cx="24" cy="24" r="14"></circle>
        <path d="M24 10v28"></path>
        <path d="M14 24h20"></path>
      </svg>
    `,
      roi: `
      <svg width="48" height="48" fill="none" stroke="url(#grad)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        ${gradient}
        <path d="M10 28v8l8-8 20-20"></path>
      </svg>
    `,
      post: `
      <svg width="48" height="48" fill="none" stroke="url(#grad)" stroke-width="2">
        ${gradient}
        <rect x="6" y="12" width="36" height="24" rx="4"></rect>
        <path d="M6 12l18 14 18-14"></path>
      </svg>
    `,
      verify: `
      <svg width="48" height="48" fill="none" stroke="url(#grad)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        ${gradient}
        <path d="M12 40V18l12-8 12 8v22"></path>
        <path d="M18 28l6 6 10-10"></path>
      </svg>
    `
    };

    return this.sanitizer.bypassSecurityTrustHtml(icons[name]);
  }
  expertList = [
    { name: 'Rahul Kumar', role: 'Senior Counsellor', photo: 'assets/images/experts_0.jpg' },
    { name: 'Ankit Verma', role: 'Career Advisor', photo: 'assets/images/experts_1.jpg' },
    { name: 'Riya Sharma', role: 'Student Support', photo: 'assets/images/experts_2.jpg' },
    { name: 'Kunal Singh', role: 'Mentor', photo: 'assets/images/experts_3.jpg' },
    { name: 'Priya Nair', role: 'Guidance Coach', photo: 'assets/images/experts_4.jpg' },
    { name: 'Neha Gupta', role: 'Support Lead', photo: 'assets/images/experts_5.jpg' }
  ];

  faqList = [
    {
      question: 'What are your charges?',
      answer: 'CV will always be free for students/ learners.',
      open: false
    },
    {
      question: 'How is College Top Most different from others?',
      answer: 'We at College Top Most are a one-stop solution for all who wish to pursue their higher education via online universities/ edtech. Since our foundation in 2019, we have believed selecting the right university/ edtech is the first step to achieving your career goals. This is why we :',
      open: false
    },
    {
      question: 'Why take admission through College Top Most?',
      answer: 'There are scholarship and fee concessions for certain special categories- students from a defence background or with special abilities and alumni of the university.',
      open: false
    },
    {
      question: 'Independent Platform? What is the process?',
      answer: 'The university conducts online proctored exams at designated exam centres for the online courses.',
      open: false
    },
    {
      question: 'How is College Top Most different from others?',
      answer: 'We at College Top Most are a one-stop solution for all who wish to pursue their higher education via online universities/ edtech. Since our foundation in 2019, we have believed selecting the right university/ edtech is the first step to achieving your career goals. This is why we :',
      open: false
    },
    {
      question: 'Why take admission through College Top Most?',
      answer: 'There are scholarship and fee concessions for certain special categories- students from a defence background or with special abilities and alumni of the university.',
      open: false
    },
    {
      question: 'Independent Platform? What is the process?',
      answer: 'The university conducts online proctored exams at designated exam centres for the online courses.',
      open: false
    }
  ];
  toggle(index: number) {
    this.faqList[index].open = !this.faqList[index].open;
  }

  testimonialUsers = [
    { image: 'https://randomuser.me/api/portraits/men/32.jpg', company: 'https://logo.clearbit.com/nykaa.com' },
    { image: 'https://randomuser.me/api/portraits/women/44.jpg', company: 'https://logo.clearbit.com/livspace.com' },
    { image: 'https://randomuser.me/api/portraits/men/12.jpg', company: 'https://logo.clearbit.com/salesforce.com' },
    { image: 'https://randomuser.me/api/portraits/women/81.jpg', company: 'https://logo.clearbit.com/magicbricks.com' },
    { image: 'https://randomuser.me/api/portraits/men/60.jpg', company: 'https://logo.clearbit.com/paytm.com' },
    { image: 'https://randomuser.me/api/portraits/men/35.jpg', company: 'https://logo.clearbit.com/nttdata.com' },
    { image: 'https://randomuser.me/api/portraits/men/19.jpg', company: 'https://logo.clearbit.com/metlife.com' },
    { image: 'https://randomuser.me/api/portraits/women/15.jpg', company: 'https://logo.clearbit.com/wipro.com' },
    { image: 'https://randomuser.me/api/portraits/men/5.jpg', company: 'https://logo.clearbit.com/tcs.com' },
    { image: 'https://randomuser.me/api/portraits/men/41.jpg', company: 'https://logo.clearbit.com/google.com' },

    { image: 'https://randomuser.me/api/portraits/women/55.jpg', company: 'https://logo.clearbit.com/accenture.com' },
    { image: 'https://randomuser.me/api/portraits/men/88.jpg', company: 'https://logo.clearbit.com/infosys.com' },
    { image: 'https://randomuser.me/api/portraits/men/77.jpg', company: 'https://logo.clearbit.com/hdfcbank.com' },
    { image: 'https://randomuser.me/api/portraits/women/66.jpg', company: 'https://logo.clearbit.com/byjus.com' },
    { image: 'https://randomuser.me/api/portraits/men/13.jpg', company: 'https://logo.clearbit.com/amazon.com' },

    { image: 'https://randomuser.me/api/portraits/women/23.jpg', company: 'https://logo.clearbit.com/flipkart.com' },
    { image: 'https://randomuser.me/api/portraits/men/29.jpg', company: 'https://logo.clearbit.com/zoho.com' },
    { image: 'https://randomuser.me/api/portraits/women/12.jpg', company: 'https://logo.clearbit.com/deloitte.com' },
    { image: 'https://randomuser.me/api/portraits/men/16.jpg', company: 'https://logo.clearbit.com/ola.com' },
    { image: 'https://randomuser.me/api/portraits/women/37.jpg', company: 'https://logo.clearbit.com/reliance.com' },

    { image: 'https://randomuser.me/api/portraits/men/23.jpg', company: 'https://logo.clearbit.com/myntra.com' },
    { image: 'https://randomuser.me/api/portraits/women/89.jpg', company: 'https://logo.clearbit.com/capgemini.com' },
    { image: 'https://randomuser.me/api/portraits/men/71.jpg', company: 'https://pngimg.com/uploads/ibm/ibm_PNG19663.png' },
    { image: 'https://randomuser.me/api/portraits/women/78.jpg', company: 'https://logo.clearbit.com/adityabirlacapital.com' },
    { image: 'https://randomuser.me/api/portraits/men/9.jpg', company: 'https://logo.clearbit.com/phonepe.com' }
  ];

  currentSpotlight = 0;
  /* Avatar cloud positions (adjust for your screen size) */
  positions = [
    // Left Cluster (Top → Bottom)
    { top: '10px', left: '12%' },
    { top: '80px', left: '4%' },
    { top: '160px', left: '10%' },
    { top: '240px', left: '6%' },
    { top: '310px', left: '14%' },

    // Mid-Left Cluster
    { top: '40px', left: '26%' },
    { top: '140px', left: '22%' },
    { top: '150px', left: '35%' },
    { top: '300px', left: '24%' },
    { top: '360px', left: '32%' },

    // Center Slight Spread
    { top: '20px', left: '45%' },
    { top: '150px', left: '48%' },
    { top: '90px', left: '58%' },
    { top: '260px', left: '53%' },
    { top: '340px', left: '46%' },

    // Mid-Right Cluster
    { top: '50px', right: '25%' },
    { top: '160px', right: '22%' },
    { top: '220px', right: '30%' },
    { top: '310px', right: '22%' },
    { top: '370px', right: '28%' },

    // Right Cluster (Top → Bottom)
    { top: '20px', right: '6%' },
    { top: '90px', right: '14%' },
    { top: '170px', right: '8%' },
    { top: '250px', right: '12%' },
    { top: '330px', right: '5%' }
  ];

  ngOnInit(): void {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.banners.length;
    }, 3500);
    let last = -1;
    setInterval(() => {
      let next;
      do {
        next = Math.floor(Math.random() * this.testimonialUsers.length);
      } while (next === last);
      this.currentSpotlight = next;
      last = next;
    }, 1800);
  }
}
