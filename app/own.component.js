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
var OwnComponent = (function () {
    function OwnComponent(localService, apiService) {
        this.localService = localService;
        this.apiService = apiService;
    }
    OwnComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.localService.setTabHide(true);
        this.localService.setTitle("我的文件");
        this.apiService.getUploaded().then(function (articles) { return _this.uploadedArticles = articles; });
    };
    OwnComponent.prototype.ngOnDestroy = function () {
        this.localService.setTabHide(false);
    };
    OwnComponent = __decorate([
        core_1.Component({
            selector: "own",
            templateUrl: 'app/own.html'
        }), 
        __metadata('design:paramtypes', [local_service_1.LocalService, api_service_1.ApiService])
    ], OwnComponent);
    return OwnComponent;
}());
exports.OwnComponent = OwnComponent;
//# sourceMappingURL=own.component.js.map