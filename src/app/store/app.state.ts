import { GalleryModel } from '../gallery/gallery.model';
//import { AppState } from './app.state';
   //  este es el estado del modelo de la aplicacion
export interface AppState {
  gallery: GalleryModel[];
}
export interface State {
  featureNameplace:AppState;
}

export function selectArray(state: State) {
  return state.featureNameplace.gallery;
}
/*
FeatureState
export interface GalleryModel {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
    }
export interface FeatureState {
  array: string[];
}
......................
 AppState 
 export interface AppState {
  gallery: GalleryModel[];
}
export interface State {
  featureNameplace: FeatureState;
}
.............
export const gallerySelector =(state: AppState) => state.gallery;
export const uniqueAlbumIds = createSelector(
    gallerySelector,
    (state: GalleryModel[]) => {
      return [...new Set(state.map((_) => _.albumId))];
    }
  );

export function selectArray(state: State) {
  return state.featureNameplace.array;
}

export function selectArray(state: AppState ) {
  return state.featureNameplace.array;
}

*/