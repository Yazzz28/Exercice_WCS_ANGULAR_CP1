import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { VideosComponent } from './component/videos/videos.component';
import { ErrorComponent } from './component/error/error.component';
import { VideoSearchComponent } from './component/video-search/video-search.component';
import { VideoListComponent } from './component/video-list/video-list.component';
import { VideoCardComponent } from './component/video-card/video-card.component';
import { VideoDetailComponent } from './component/video-detail/video-detail.component';

@NgModule({
  declarations: [
    AppComponent,

    VideosComponent,
    ErrorComponent,
    VideoSearchComponent,
    VideoListComponent,
    VideoCardComponent,
    VideoDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
