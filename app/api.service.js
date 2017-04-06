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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var ApiService = (function () {
    function ApiService(http) {
        this.http = http;
        this.getListUrl = "http://localhost/getList";
        this.getUserUrl = "http://localhost/getUser";
        this.getArticlesUrl = "http://localhost/getArticles";
        this.getArticleUrl = "http://localhost/getArticle";
        this.toggleFavouriteUrl = "http://localhost/toggleFavourite";
        this.getFavouriteUrl = "http://localhost/getFavourite";
        this.getUploadedUrl = "http://localhost/getUploaded";
        this.Uid = "32";
    }
    ApiService.prototype.handleError = function (error) {
        return Promise.reject(error.message || error);
    };
    ApiService.prototype.getUser = function () {
        return this.http.get(this.getUserUrl + "?uid=" + this.Uid)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ApiService.prototype.getList = function () {
        return this.http.get(this.getListUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ApiService.prototype.getArticles = function (schoolName, collegeName, courseName) {
        return this.http.get(this.getArticlesUrl + "?school=" + schoolName + "&college=" + collegeName + "&course=" + courseName)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ApiService.prototype.getArticle = function (fid) {
        return this.http.get(this.getArticleUrl + "?fid=" + fid)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ApiService.prototype.toggleFavourite = function (fid) {
        return this.http.get(this.toggleFavouriteUrl + "?uid=" + this.Uid + "&fid=" + fid)
            .toPromise()
            .then()
            .catch(this.handleError);
    };
    ApiService.prototype.getFavourite = function () {
        return this.http.get(this.getFavouriteUrl + "?uid=" + this.Uid)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ApiService.prototype.getUploaded = function () {
        return this.http.get(this.getUploadedUrl + "?uid=" + this.Uid)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ApiService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ApiService);
    return ApiService;
}());
exports.ApiService = ApiService;
//# sourceMappingURL=api.service.js.map