import {NgModule}            from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}     from '@angular/forms';
import {HttpModule}    from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import {NavComponent} from './nav.component';
import {AboutComponent} from './about.component';
import {UploadComponent} from './upload.component';
import {FavouriteComponent} from './favourite.component';
import {OwnComponent} from './own.component';
import {ArticleDetailComponent} from './article-detail.component';
import {ApiService} from "./api.service";

import { CommonModule }     from '@angular/common';
import { FileUploadModule } from 'ng2-file-upload';
import { PdfViewerComponent } from 'ng2-pdf-viewer';

const routes: Routes = [
    {path: 'about', component: AboutComponent},
    {path: 'upload', component: UploadComponent},
    {path: 'favourite', component: FavouriteComponent},
    {path: 'own', component: OwnComponent},
    {path: 'article-detail/:fid', component: ArticleDetailComponent},
];

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(routes),
        CommonModule,
        FileUploadModule,

    ],
    declarations: [
        PdfViewerComponent,
        NavComponent,
        AboutComponent,
        UploadComponent,
        FavouriteComponent,
        OwnComponent,
        ArticleDetailComponent,
    ],
    bootstrap: [
        NavComponent,
    ],
    providers: [
        ApiService,
    ]
})
export class AppModule {
}

