import {Component, OnInit,OnDestroy} from '@angular/core';
import {LocalService} from './local.service';
import {ApiService} from './api.service';
import {Article} from './objects';
@Component({
    selector: "favourite",
    templateUrl: 'app/favourite.html'

})
export class FavouriteComponent implements OnInit ,OnDestroy{
    constructor(private localService: LocalService,private apiService :ApiService) {
    }
    articles:Article[];
    ngOnInit() {
        this.localService.setTabHide(true);
        this.localService.setTitle("我的收藏");
        this.apiService.getFavourite().then(articles=>this.articles=articles);
    }

    ngOnDestroy() {
        this.localService.setTabHide(false);
    }

} 
