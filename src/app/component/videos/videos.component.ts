import { Component } from '@angular/core';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.scss'
})
export class VideosComponent {
  // Initialiser la propriété searchTerm
  searchTerm: string = '';

  // Recevoir le terme de recherche de video-search
  onSearchTermChange(term: string) {
    this.searchTerm = term;
  }
}
