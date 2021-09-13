import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { concatAll, filter, map } from 'rxjs/operators';
import { GalleryModel } from './gallery.model';
import { Observable } from 'rxjs';
 
@Injectable()
export class GalleryService {
  constructor(private http: HttpClient) {}
 
  loadGallery():Observable<GalleryModel[]> {
    return this.http
      .get<GalleryModel[]>('https://jsonplaceholder.typicode.com/photos')
      .pipe(
        map((albums) => albums.filter(i=>i.id <6) || [])
        
      
        );

  }
}