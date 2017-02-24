import { Component, OnInit,OnDestroy } from '@angular/core';
import {LocalService} from './local.service';
@Component({
	selector:"about",
	templateUrl:'app/about.html'
	
})
export class AboutComponent implements OnInit{
	constructor(private localService:LocalService){}
	ngOnInit(){
		this.localService.setTabHide(true);
		this.localService.setTitle("关于");
	}
	ngOnDestroy(){
		this.localService.setTabHide(false);
	}

} 
