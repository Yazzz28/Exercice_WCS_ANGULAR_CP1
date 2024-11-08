import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Video } from '../models/video.model';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private readonly dataUrl = 'assets/jsons/data.json';

  constructor(private readonly http: HttpClient) { }

  // Récupère la liste complète des vidéos
  public getVideoList$(): Observable<Video[]> {
    return this.http.get<Video[]>(this.dataUrl);
  }

  // Récupère une vidéo par ID
  public getVideoById$(id: number): Observable<Video | undefined> {
    return this.getVideoList$().pipe(
      map(videos => videos.find(video => video.id === id))
    );
  }

  // Filtre les vidéos en fonction d'un objet Video (exemple par titre)
  public filteredVideoList$(filter: Partial<Video>): Observable<Video[]> {
    return this.getVideoList$().pipe(
      map(videos => videos.filter(video => {
        return Object.keys(filter).every(key => {
          return video[key as keyof Video] === filter[key as keyof Video];
        });
      }))
    );
  }
}
