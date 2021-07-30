import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
import { SlickCarouselComponent } from 'ngx-slick-carousel';
import { ViewChild } from '@angular/core';
// import {IvyCarouselModule} from 'angular-responsive-carousel';
// import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-sliderhome',
  templateUrl: './sliderhome.component.html',
  styleUrls: ['./sliderhome.component.css']
})
export class SliderhomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    (function ($) {
      $('.owl-carousel').owlCarousel({
        stagePadding: 20,/*the little visible images at the end of the carousel*/
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
              items: 1
            },
            // 1440:{
            //   items: 1
            // }

          
        }
    })
  //   $('.owl-carousel').owlCarousel({
  //     stagePadding: 20,/*the little visible images at the end of the carousel*/
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
  //           items: 3
  //         },
  //         1440:{
  //           items: 1
  //         }

        
  //     }
  // })
    })(jQuery);
  }

}
