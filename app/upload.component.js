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
var ng2_file_upload_1 = require('ng2-file-upload');
var UploadComponent = (function () {
    function UploadComponent(apiService, localService) {
        this.apiService = apiService;
        this.localService = localService;
        this.uploader = new ng2_file_upload_1.FileUploader({
            url: "http://localhost:7777/upload",
            method: "POST",
        });
    }
    UploadComponent.prototype.upload = function () {
        this.uploader.queue[0].onSuccess = function (response, status, headers) {
            console.log("uploaded.");
            // 上传文件成功
            if (status == 200) {
                // 上传文件后获取服务器返回的数据
                var tempRes = JSON.parse(response);
            }
            else {
            }
        };
        this.uploader.queue[0].upload(); // 开始上传
    };
    UploadComponent.prototype.selectedFileOnChanged = function (event) {
        // 这里是文件选择完成后的操作处理
        console.log(event.target.value);
    };
    UploadComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.getList().then(function (list) {
            _this.schools = list;
            _this.curSchool = _this.schools[0];
            _this.curCollege = _this.curSchool.colleges[0];
            _this.curCourse = _this.curCollege.courses[0];
        });
        this.localService.setTabHide(true);
        this.localService.setTitle("我要上传");
    };
    UploadComponent.prototype.ngOnDestroy = function () {
        this.localService.setTabHide(false);
    };
    UploadComponent.prototype.onSchoolChange = function (schoolName) {
        this.curSchool = this.schools.find(function (op) { return op.name == schoolName; });
    };
    UploadComponent.prototype.onCollegeChange = function (collegeName) {
        this.curCollege = this.curSchool.colleges.find(function (op) { return op.name == collegeName; });
    };
    UploadComponent.prototype.onCourseChange = function (courseName) {
        this.curCourse = this.curCollege.courses.find(function (op) { return op.name == courseName; });
    };
    UploadComponent = __decorate([
        core_1.Component({
            selector: "upload",
            templateUrl: 'app/upload.html',
        }), 
        __metadata('design:paramtypes', [api_service_1.ApiService, local_service_1.LocalService])
    ], UploadComponent);
    return UploadComponent;
}());
exports.UploadComponent = UploadComponent;
//# sourceMappingURL=upload.component.js.map