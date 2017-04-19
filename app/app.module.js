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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var nav_component_1 = require('./nav.component');
var about_component_1 = require('./about.component');
var upload_component_1 = require('./upload.component');
var favourite_component_1 = require('./favourite.component');
var own_component_1 = require('./own.component');
var article_detail_component_1 = require('./article-detail.component');
var api_service_1 = require("./api.service");
var app_component_1 = require("./app.component");
var common_1 = require('@angular/common');
var ng2_file_upload_1 = require('ng2-file-upload');
var ng2_pdf_viewer_1 = require('ng2-pdf-viewer');
var routes = [
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'upload', component: upload_component_1.UploadComponent },
    { path: 'favourite', component: favourite_component_1.FavouriteComponent },
    { path: 'own', component: own_component_1.OwnComponent },
    { path: 'article-detail/:fid', component: article_detail_component_1.ArticleDetailComponent },
    { path: '', redirectTo: 'nav', pathMatch: 'full' },
    { path: 'nav', component: nav_component_1.NavComponent },
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                router_1.RouterModule.forRoot(routes),
                common_1.CommonModule,
                ng2_file_upload_1.FileUploadModule,
            ],
            declarations: [
                ng2_pdf_viewer_1.PdfViewerComponent,
                nav_component_1.NavComponent,
                about_component_1.AboutComponent,
                upload_component_1.UploadComponent,
                favourite_component_1.FavouriteComponent,
                own_component_1.OwnComponent,
                article_detail_component_1.ArticleDetailComponent,
                app_component_1.AppComponent,
            ],
            bootstrap: [
                app_component_1.AppComponent,
            ],
            providers: [
                api_service_1.ApiService,
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map