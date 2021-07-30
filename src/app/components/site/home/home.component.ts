import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
import { SlickCarouselComponent } from 'ngx-slick-carousel';
import { ViewChild } from '@angular/core';
// import {IvyCarouselModule} from 'angular-responsive-carousel';
// import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { 
  }

  ngOnInit() {
    (function ($) {
    //   $('#block1').owlCarousel({
    //     stagePadding: 10,/*the little visible images at the end of the carousel*/
    //     loop:true,
    //     rtl: false,
    //     lazyLoad:true,
    //     margin:0,
    //     nav:true,
    //     responsive:{
    //         0:{
    //             items:2
    //         },
    //         600:{
    //             items:2
    //         },
    //         800:{
    //             items: 3
    //         },
    //         1000:{
    //             items:2
    //         },
    //         1200:{
    //           items: 4
    //         },
    //         1440:{
    //           items: 4
    //         }

          
    //     }
    // });
    $('#block1,#block2,#block3').owlCarousel({
      stagePadding: 10,/*the little visible images at the end of the carousel*/
      loop:true,
      rtl: false,
      lazyLoad:true,
      margin:0,
      nav:true,
      responsive:{
          0:{
              items:2
          },
          600:{
              items:2
          },
          800:{
              items: 3
          },
          1000:{
              items:2
          },
          1200:{
            items: 3
          },
          1440:{
            items: 3
          }

        
      }
  });
    $('#blockC, #block5,#block6').owlCarousel({
      stagePadding: -3,/*the little visible images at the end of the carousel*/
      loop:true,
      rtl: false,
      lazyLoad:true,
      margin:0,
      nav:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          800:{
              items: 1
          },
          1000:{
              items:1
          },
          1200:{
            items: 1
          },
          1440:{
            items: 1
          }

        
      }
  })
    })(jQuery);
  }
  // slides = [
  //   {img: "assets/img/slider/shutterstocks.jpg"},
  //   {img: "assets/img/slider/bests.jpg"},
  //   {img: "assets/img/slider/tipss.jpg"},
  
  // ];
  
  // slideConfig = {"slidesToShow": 3, "slidesToScroll": 3};
  // addSlide() {
  //   this.slides.push({img: "http://placehold.it/350x150/777777"})
  // }
  
  // removeSlide() {
  //   this.slides.length = this.slides.length - 1;
  // }
  
  slickInit(e) {
    console.log('slick initialized');
  }
  
  breakpoint(e) {
    console.log('breakpoint');
  }
  
  afterChange(e) {
    console.log('afterChange');
  }
  
  beforeChange(e) {
    console.log('beforeChange');
  }
  @ViewChild('slickModal') slickModal: SlickCarouselComponent;
   next() {
    this.slickModal.slickNext();
    }
    
   prev() {
     this.slickModal.slickPrev();
   }
  //  images = [
  //   {path: 'assets/img/slider/shutterstocks.jpg'},
  //   {path: 'assets/img/slider/shutterstocks.jpg'},
  //   {path: 'assets/img/slider/shutterstocks.jpg'},
    
  //  ] 
   images = [
    {src: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg'},
    {src: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg'},
    {src: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg'},
    
   ] 
    // images = [700, 800, 807].map((n) => `assets/pic/id${n}/900/500`);


}
