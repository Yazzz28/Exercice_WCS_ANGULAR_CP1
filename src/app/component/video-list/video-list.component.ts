import { Component, OnChanges, OnInit, SimpleChanges, Input } from '@angular/core';
import { VideoService } from '../../service/video.service';
import { Video } from '../../models/video.model';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss'],
  providers: [  ]
})
export class VideoListComponent implements OnInit, OnChanges {
  public videoList: Video[] = [];
  @Input() searchTerm: string = '';

  constructor(private readonly videoService: VideoService) { }

  ngOnInit(): void {
    this.videoService.getVideoList$().subscribe({
      next: videos => this.videoList = videos
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    // Appel de la méthode pour filtrer les vidéos à chaque changement de searchTerm
    if (changes['searchTerm']) {
      this.videoService.filteredVideoList$( this.searchTerm ).subscribe({
        next: videos => this.videoList = videos
        });
    }
  }

  trackById(index: number, video: Video): number {
    video.id = video.id || index;
    return video.id;
  }
}
