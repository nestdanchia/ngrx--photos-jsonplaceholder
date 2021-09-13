import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { retrievedGalleryList } from '../store/gallery.acttion';
import { albumCollectionByAlbumId, uniqueAlbumIds } from '../store/gallery.selector';
import { GalleryModel } from './gallery.model';
import { GalleryService } from './gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  selectedAlbumId = -1;
  albumIds$ = this.store.pipe(select(uniqueAlbumIds));
  allGallery$ = this.store.pipe(
    select(albumCollectionByAlbumId(this.selectedAlbumId))
  );
  constructor(
   
    private store: Store<{ gallery: GalleryModel[] }>,
    private galleryService: GalleryService

  ) { }

  ngOnInit(): void {
    this.galleryService.loadGallery().subscribe((gallery) => {
      console.log(gallery);
      this.store.dispatch(
        retrievedGalleryList({ allGallery: gallery as GalleryModel[] })
      );
    });
  }

  albumChange(event:number) {
    this.allGallery$ = this.store.pipe(select(albumCollectionByAlbumId(event)));
  }

}
