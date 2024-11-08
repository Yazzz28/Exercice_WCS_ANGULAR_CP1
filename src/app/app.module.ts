import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideosComponent } from './component/videos/videos.component';
import { ErrorComponent } from './component/error/error.component';
import { VideoSearchComponent } from './component/video-search/video-search.component';
import { VideoListComponent } from './component/video-list/video-list.component';

@NgModule({
  declarations: [
    AppComponent,
    VideosComponent,
    ErrorComponent,
    VideoSearchComponent,
    VideoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
