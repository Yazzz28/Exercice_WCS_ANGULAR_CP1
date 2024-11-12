import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Video } from '../models/video.model';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private readonly dataUrl = 'assets/jsons/data.json';
  private videoListCache: Video[] = [];  // Cache pour stocker les vidéos récupérées

  constructor(private readonly http: HttpClient) { }

  // Récupère la liste complète des vidéos et les met en cache
  public getVideoList$(): Observable<Video[]> {
    if (this.videoListCache.length > 0) {
      // Si la liste est déjà en cache, la retourner directement
      return of(this.videoListCache);
    }

    // Sinon, effectuer la requête HTTP
    return this.http.get<{ videos: Video[] }>(this.dataUrl).pipe(
      map(response => {
        this.videoListCache = response.videos;  // Stocker les vidéos en cache
        return this.videoListCache;
      })
    );
  }

  // Récupère une vidéo par ID
  public getVideoById$(id: number): Observable<Video | undefined> {
    return this.getVideoList$().pipe(
      map(videos => videos.find(video => video.id === id))
    );
  }

  // Filtre les vidéos en fonction d'un terme de recherche (exemple par titre)
  public filteredVideoList$(searchTerm: string): Observable<Video[]> {
    return this.getVideoList$().pipe(
      map(videos => {
        // Si aucun terme de recherche n'est fourni, retourner la liste complète
        if (!searchTerm) {
          return videos;
        }

        // Sinon, filtrer les vidéos par titre (ou toute autre propriété textuelle)
        return videos.filter(video => 
          video.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
          video.channelName.toLowerCase().includes(searchTerm.toLowerCase())
        );
      })
    );
  }
}
