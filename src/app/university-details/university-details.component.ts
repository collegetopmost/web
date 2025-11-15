
import { Component, AfterViewInit, HostListener, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-university-details',
  imports: [CommonModule, MatIcon],
  templateUrl: './university-details.component.html',
  styleUrl: './university-details.component.scss'
})
export class UniversityDetailsComponent {
  faqList = [
    {
      question: 'Does D.Y. Patil University provide fully online degrees?',
      answer: 'Yes, D.Y. Patil University provides full-time online BBA and MBA.',
      open: false
    },
    {
      question: 'Is an Online Degree from Dr. D.Y. Patil Valid?',
      answer: 'Yes, the online degree is UGC-approved and globally valid.',
      open: false
    },
    {
      question: 'Is there scholarship facility at DPU for its online course?',
      answer: 'There are scholarship and fee concessions for certain special categories- students from a defence background or with special abilities and alumni of the university.',
      open: false
    },
    {
      question: 'How are the exams conducted for the online courses at D Y Patil?',
      answer: 'The university conducts online proctored exams at designated exam centres for the online courses.',
      open: false
    }
  ];

  toggle(index: number) {
    this.faqList[index].open = !this.faqList[index].open;
  }

  private observer: IntersectionObserver | undefined;

  constructor(private el: ElementRef) { }
  private isClickScrolling = false;
  ngAfterViewInit() {
    const menuItems = document.querySelectorAll('.sidebar_li');
    const sections = document.querySelectorAll('h3.tabs_title');

    menuItems.forEach(li => {
      li.addEventListener('click', () => {
        this.isClickScrolling = true;

        menuItems.forEach(x => x.classList.remove('active'));
        li.classList.add('active');

        const targetId = li.getAttribute('data-target');
        const targetElement = document.getElementById(targetId!);

        targetElement?.scrollIntoView({ behavior: 'smooth', block: 'start' });

        setTimeout(() => this.isClickScrolling = false, 700);
      });
    });

    const observer = new IntersectionObserver(entries => {
      if (this.isClickScrolling) return;

      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          menuItems.forEach(li =>
            li.classList.toggle('active', li.getAttribute('data-target') === id)
          );
        }
      });
    }, {
      root: null,          // ✅ important: observe window scroll
      threshold: 0.3,      // ✅ tune sensitivity
      rootMargin: "-100px 0px 0px 0px" // ✅ highlight when section top is reached
    });

    sections.forEach(sec => observer.observe(sec));
  }

}
