import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideosComponent } from './component/videos/videos.component';
import { ErrorComponent } from './component/error/error.component';
import { VideoDetailComponent } from './component/video-detail/video-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'videos', pathMatch: 'full' },
  { path: 'videos', component: VideosComponent },
  { path: 'video/:id', component: VideoDetailComponent },
  { path: '**', component: ErrorComponent }	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
