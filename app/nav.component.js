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
var NavComponent = (function () {
    function NavComponent(apiService) {
        this.apiService = apiService;
        this.titles = [
            "悦学首页",
            "悦学文库",
            "我的设置",
        ];
        this.title = "";
    }
    NavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.module = 0;
        this.title = this.titles[this.module];
        new Swiper('.swiper-container', {
            direction: 'horizontal',
            loop: true,
            autoplay: 2000,
            autoplayDisableOnInteraction: false,
            pagination: '.swiper-pagination',
            paginationClickable: true,
            observer: true,
        });
        this.apiService.getList().then(function (list) {
            _this.schools = list;
            _this.curSchool = _this.schools[0];
            _this.curCollege = _this.curSchool.colleges[0];
            _this.curCourse = _this.curCollege.courses[0];
        });
        this.updateUser();
    };
    NavComponent.prototype.onSelect = function (num) {
        this.module = num;
        this.title = this.titles[this.module];
    };
    NavComponent.prototype.onSearch = function () {
        var _this = this;
        this.apiService.getArticles(this.curSchool.name, this.curCollege.name, this.curCourse.name).then(function (articles) {
            _this.articles = articles;
        });
    };
    NavComponent.prototype.onSchoolChange = function (schoolName) {
        this.curSchool = this.schools.find(function (op) { return op.name == schoolName; });
    };
    NavComponent.prototype.onCollegeChange = function (collegeName) {
        this.curCollege = this.curSchool.colleges.find(function (op) { return op.name == collegeName; });
    };
    NavComponent.prototype.onCourseChange = function (courseName) {
        this.curCourse = this.curCollege.courses.find(function (op) { return op.name == courseName; });
    };
    NavComponent.prototype.updateUser = function () {
        var _this = this;
        this.apiService.getUser().then(function (user) {
            _this.user = user;
        });
    };
    NavComponent = __decorate([
        core_1.Component({
            selector: 'nav',
            templateUrl: 'app/nav.html',
        }), 
        __metadata('design:paramtypes', [api_service_1.ApiService])
    ], NavComponent);
    return NavComponent;
}());
exports.NavComponent = NavComponent;
//# sourceMappingURL=nav.component.js.map