import { Component, OnInit } from '@angular/core';
import { VideoService } from '../../service/video.service';
import { Video } from '../../models/video.model';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {
  public videoList: Video[] = [];

  constructor(private readonly videoService: VideoService) { }

  ngOnInit(): void {
    this.videoService.getVideoList$().subscribe({
      next: videos => this.videoList = videos
    });
  }

  trackById(index: number, video: Video): number {
    video.id = video.id || index;
    return video.id;
  }
}
