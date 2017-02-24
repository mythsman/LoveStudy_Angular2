import {Component, OnInit, OnDestroy} from '@angular/core';
import {LocalService} from './local.service';
import {ApiService} from './api.service';
import {ActivatedRoute, Params} from '@angular/router';
import {Article} from './objects';
@Component({
    selector: "article-detail",
    templateUrl: 'app/article-detail.html'

})
export class ArticleDetailComponent implements OnInit {

    article: Article;

    constructor(private apiService: ApiService, private localService: LocalService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.localService.setTabHide(true);
        this.localService.setTitle("当前文档");
        this.route.params.subscribe(params => {
            this.apiService.getArticle(params['fid']).then(article => this.article = article);
        });
    }

    toggleFavourite() {
        this.apiService.toggleFavourite(this.article.fid);
        this.article.isFavourite = (this.article.isFavourite == '0' ? '1' : '0');
    }

    ngOnDestroy() {
        this.localService.setTabHide(false);
    }

} 
