import { Component,OnInit } from '@angular/core';

declare var Swiper:any;

@Component({
  selector: 'main-page',
  templateUrl: 'app/main-page.html'
  
})

export class MainPageComponent implements OnInit{
	ngOnInit():void{
        new Swiper('.swiper-container', {
			direction: 'horizontal',
			loop:true,
			autoplay: 2000,
            autoplayDisableOnInteraction: false,
            pagination: '.swiper-pagination',
            paginationClickable: true,
			observer:true,
        });
	}
}
