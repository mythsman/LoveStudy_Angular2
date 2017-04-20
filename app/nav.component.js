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
var objects_1 = require('./objects');
var save_state_service_1 = require("./save-state.service");
var NavComponent = (function () {
    function NavComponent(apiService, saveStateService) {
        this.apiService = apiService;
        this.saveStateService = saveStateService;
        this.titles = [
            "悦学首页",
            "悦学文库",
            "我的设置",
        ];
    }
    NavComponent.prototype.ngOnInit = function () {
        var _this = this;
        var storedState = this.saveStateService.getState();
        if (!storedState) {
            this.state = new objects_1.State();
            this.saveStateService.setState(this.state);
            this.state.module = 0;
            var p1 = this.apiService.getList().then(function (list) {
                _this.state.schools = list;
                _this.state.curSchool = _this.state.schools[0];
                _this.state.curCollege = _this.state.curSchool.colleges[0];
                _this.state.curCourse = _this.state.curCollege.courses[0];
            });
            var p2 = this.apiService.getUser().then(function (user) {
                _this.state.user = user;
            });
            var pall = Promise.all([p1, p2]).then(function (success) {
                new Swiper('.swiper-container', {
                    direction: 'horizontal',
                    loop: true,
                    autoplay: 2000,
                    autoplayDisableOnInteraction: false,
                    pagination: '.swiper-pagination',
                    paginationClickable: true,
                    observer: true,
                });
            });
        }
        else {
            this.state = storedState;
        }
    };
    NavComponent.prototype.onSelect = function (num) {
        this.state.module = num;
    };
    NavComponent.prototype.onSearch = function () {
        var _this = this;
        this.apiService.getArticles(this.state.curSchool.name, this.state.curCollege.name, this.state.curCourse.name).then(function (articles) {
            _this.state.articles = articles;
        });
    };
    NavComponent.prototype.onSchoolChange = function (schoolName) {
        this.state.curSchool = this.state.schools.find(function (op) { return op.name == schoolName; });
    };
    NavComponent.prototype.onCollegeChange = function (collegeName) {
        this.state.curCollege = this.state.curSchool.colleges.find(function (op) { return op.name == collegeName; });
    };
    NavComponent.prototype.onCourseChange = function (courseName) {
        this.state.curCourse = this.state.curCollege.courses.find(function (op) { return op.name == courseName; });
    };
    NavComponent = __decorate([
        core_1.Component({
            selector: 'nav',
            templateUrl: 'app/nav.html',
        }), 
        __metadata('design:paramtypes', [api_service_1.ApiService, save_state_service_1.SaveStateService])
    ], NavComponent);
    return NavComponent;
}());
exports.NavComponent = NavComponent;
//# sourceMappingURL=nav.component.js.map