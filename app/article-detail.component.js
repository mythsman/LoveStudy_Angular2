"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var local_service_1 = require('./local.service');
var api_service_1 = require('./api.service');
var router_1 = require('@angular/router');
var ArticleDetailComponent = (function () {
    function ArticleDetailComponent(apiService, localService, route) {
        this.apiService = apiService;
        this.localService = localService;
        this.route = route;
    }
    ArticleDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.localService.setTabHide(true);
        this.localService.setTitle("当前文档");
        this.route.params.subscribe(function (params) {
            _this.apiService.getArticle(params['fid']).then(function (article) { return _this.article = article; });
        });
    };
    ArticleDetailComponent.prototype.toggleFavourite = function () {
        this.apiService.toggleFavourite(this.article.fid);
        this.article.isFavourite = (this.article.isFavourite == '0' ? '1' : '0');
    };
    ArticleDetailComponent.prototype.ngOnDestroy = function () {
        this.localService.setTabHide(false);
    };
    ArticleDetailComponent = __decorate([
        core_1.Component({
            selector: "article-detail",
            templateUrl: 'app/article-detail.html'
        }), 
        __metadata('design:paramtypes', [api_service_1.ApiService, local_service_1.LocalService, router_1.ActivatedRoute])
    ], ArticleDetailComponent);
    return ArticleDetailComponent;
}());
exports.ArticleDetailComponent = ArticleDetailComponent;
//# sourceMappingURL=article-detail.component.js.map