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
var common_1 = require('@angular/common');
var NavComponent = (function () {
    function NavComponent(localService, location, apiService) {
        this.localService = localService;
        this.location = location;
        this.apiService = apiService;
        this.titles = [
            "悦学首页",
            "悦学文库",
            "我的设置",
        ];
    }
    NavComponent.prototype.ngOnInit = function () {
        this.module = 0;
        this.localService.setTitle(this.titles[0]);
        this.localService.setTabHide(false);
    };
    NavComponent.prototype.onSelect = function (num) {
        this.module = num;
        this.localService.setTitle(this.titles[num]);
    };
    NavComponent.prototype.getTitle = function () {
        if (this.localService.getTabHide()) {
            return this.localService.getTitle();
        }
        else {
            return this.titles[this.module];
        }
    };
    NavComponent = __decorate([
        core_1.Component({
            selector: 'nav',
            templateUrl: 'app/nav.html',
        }), 
        __metadata('design:paramtypes', [local_service_1.LocalService, common_1.Location, api_service_1.ApiService])
    ], NavComponent);
    return NavComponent;
}());
exports.NavComponent = NavComponent;
//# sourceMappingURL=nav.component.js.map