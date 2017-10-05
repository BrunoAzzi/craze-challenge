import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateX(100%)', opacity: 0}),
          animate('500ms', style({transform: 'translateX(0)', opacity: 1}))
        ])
      ]
    )
  ],
})
export class TestimonialComponent implements OnInit {
  currentSlide = 0;

  slideList = [
    {
      title: '“Craze is one of the most complete app packages I have ever come across. I would highly reccomend it to anyone!”',
      author: 'Sarah Hunt 1',
      hidden: false
    },
    {
      title: '“Craze is one of the most complete app packages I have ever come across. I would highly reccomend it to anyone!”',
      author: 'Sarah Hunt 2',
      hidden: true
    },
    {
      title: '“Craze is one of the most complete app packages I have ever come across. I would highly reccomend it to anyone!”',
      author: 'Sarah Hunt 3',
      hidden: true
    },
    {
      title: '“Craze is one of the most complete app packages I have ever come across. I would highly reccomend it to anyone!”',
      author: 'Sarah Hunt 4',
      hidden: true
    },
  ];

  constructor() { }

  ngOnInit() {
    this.autoChangeSlide();
  }

  autoChangeSlide() {
    const maxIndex = this.slideList.length;
    const that = this;

    setTimeout(() => {
      let currentIndex = this.currentSlide + 1;
      currentIndex = currentIndex >= maxIndex ? 0 : currentIndex;
      that.showSlide(currentIndex);
      that.autoChangeSlide();
    }, 4000);
  }

  showSlide(index) {
    this.toggleHidden(index);
    this.toggleHidden(this.currentSlide);
    this.currentSlide = index;
  }

  toggleHidden(index) {
    this.slideList[index].hidden = !this.slideList[index].hidden;
  }


}
