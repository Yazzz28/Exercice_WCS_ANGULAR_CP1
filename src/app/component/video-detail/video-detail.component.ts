import { Component, OnInit } from '@angular/core';
import { Video } from '../../models/video.model';
import { VideoService } from '../../service/video.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.scss'],
})
export class VideoDetailComponent implements OnInit {
  video?: Video;

  constructor(
    private readonly videoService: VideoService,
    private readonly route: ActivatedRoute // To access the route parameters (ID)
  ) {}

  ngOnInit(): void {
    // Extract the 'id' parameter from the URL
    const videoId = this.route.snapshot.paramMap.get('id');

    console.log('Video ID from URL:', videoId);  // Debugging log

    if (videoId) {
      const parsedId = Number(videoId);
      if (!isNaN(parsedId)) {
        // Fetch the video by ID if it's a valid number
        this.videoService.getVideoById$(parsedId).subscribe(video => {
          if (video) {
            this.video = video;  // Assign the fetched video to the component property
          } else {
            console.error('Video not found with ID:', parsedId);
            // You could redirect or show an error message here
          }
        });
      } else {
        console.error('Invalid video ID:', videoId);
      }
    } else {
      console.error('Video ID is missing from the URL');
      // Handle the case where the ID is missing
    }
  }
}
