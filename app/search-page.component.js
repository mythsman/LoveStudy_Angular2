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
var api_service_1 = require('./api.service');
var local_service_1 = require('./local.service');
var SearchPageComponent = (function () {
    function SearchPageComponent(apiService, localService) {
        this.apiService = apiService;
        this.localService = localService;
    }
    SearchPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.getList().then(function (list) {
            _this.schools = list;
            _this.curSchool = _this.schools[0];
            _this.curCollege = _this.curSchool.colleges[0];
            _this.curCourse = _this.curCollege.courses[0];
        });
    };
    SearchPageComponent.prototype.onSearch = function () {
        var _this = this;
        this.apiService.getArticles(this.curSchool.name, this.curCollege.name, this.curCourse.name).then(function (articles) {
            _this.articles = articles;
        });
    };
    SearchPageComponent.prototype.onSchoolChange = function (schoolName) {
        this.curSchool = this.schools.find(function (op) { return op.name == schoolName; });
    };
    SearchPageComponent.prototype.onCollegeChange = function (collegeName) {
        this.curCollege = this.curSchool.colleges.find(function (op) { return op.name == collegeName; });
    };
    SearchPageComponent.prototype.onCourseChange = function (courseName) {
        this.curCourse = this.curCollege.courses.find(function (op) { return op.name == courseName; });
    };
    SearchPageComponent = __decorate([
        core_1.Component({
            selector: 'search-page',
            templateUrl: 'app/search-page.html',
        }), 
        __metadata('design:paramtypes', [api_service_1.ApiService, local_service_1.LocalService])
    ], SearchPageComponent);
    return SearchPageComponent;
}());
exports.SearchPageComponent = SearchPageComponent;
//# sourceMappingURL=search-page.component.js.map