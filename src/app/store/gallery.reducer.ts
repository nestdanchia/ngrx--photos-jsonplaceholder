import { createReducer, on } from '@ngrx/store';
import { GalleryModel } from '../gallery/gallery.model';
import { retrievedGalleryList } from './gallery.acttion';

export const initialState: ReadonlyArray<GalleryModel> = [];
/*
Cada función de reductora toma la última acción enviada, el estado actual, 
y determina
 si devolver un estado recién modificado o el estado original.
*/
const _galleryReducer = createReducer(
    initialState,
    // The 'state' variable value is injected by the store automatically.
    // The 'javascript object literal' 
    //contains action method variables(eg: allGallery).
    on(retrievedGalleryList, (state, { allGallery }) => {
      return [...allGallery];
    })
  );
   
  export function galleryReducer(state: any, action: any) {
    return _galleryReducer(state, action);
  }