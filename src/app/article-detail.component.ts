import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {ApiService} from './api.service';
import {ActivatedRoute} from '@angular/router';
import {Article} from './objects';

@Component({
    selector: "article-detail",
    templateUrl: 'article-detail.html'

})
export class ArticleDetailComponent implements OnInit {

    article: Article;
    pdfSrc = "";
    page: number = 2;

    constructor(private apiService: ApiService, private route: ActivatedRoute, private location: Location) {
    }

    ngOnInit() {

        this.route.params.subscribe(params => {
            this.apiService.getArticle(params['fid']).then(article => {
                this.article = article;
                this.pdfSrc = this.article.download;
            });

        });
    }

    toggleFavourite() {
        this.apiService.toggleFavourite(this.article.fid);
        this.article.isFavourite = (this.article.isFavourite == '0' ? '1' : '0');
    }

    goBack() {
        this.location.back();
    }


} 
