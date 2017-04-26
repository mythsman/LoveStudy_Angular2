import {Component, OnInit} from '@angular/core';
import {ApiService} from './api.service';
import {Article} from './objects';
import {Location} from '@angular/common';
@Component({
    selector: "favourite",
    templateUrl: 'favourite.html'

})
export class FavouriteComponent implements OnInit {
    constructor(private apiService :ApiService, private location: Location) {
    }
    articles:Article[];
    ngOnInit() {

        this.apiService.getFavourite().then(articles=>  this.articles=articles);
    }

    goBack(){
        this.location.back();
    }

} 
