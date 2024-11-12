import { Component, Input } from '@angular/core';
import { Video } from '../../models/video.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss'],
  providers: [RouterLink],
})
export class VideoCardComponent {
  @Input() video?: Video;
}
