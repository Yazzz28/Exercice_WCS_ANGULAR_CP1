import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-video-search',
  templateUrl: './video-search.component.html',
  styleUrls: ['./video-search.component.scss']
})
export class VideoSearchComponent {
  searchTerm: string = '';  // Variable pour lier avec l'input de recherche

  // @Output pour émettre l'événement vers le parent (video-page)
  @Output() searchTermChange = new EventEmitter<string>();

  // Méthode appelée à chaque changement de la valeur dans l'input
  onSearchChange(): void {
    this.searchTermChange.emit(this.searchTerm);
  }
}
