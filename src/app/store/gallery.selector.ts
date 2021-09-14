import { createSelector } from '@ngrx/store';
import { GalleryModel } from '../gallery/gallery.model';
 
import { AppState } from './app.state';
 
export const gallerySelector =(state: AppState) => state.gallery;
/*
Los selectores son funciones puras que se 
utilizan para obtener las partes o cortes del store state
El 'createSelector' se puede utilizar para seleccionar algunos
 datos del estado basándose en varios segmentos del mismo estado.


'CreateFeatureSelector' es un método para devolver al top-level feature
 state (estado de característica de nivel superior. )
 Devuelve un tipo de función de selector
 para un segmento de características del estado.
 observableInstance.pipe(operator()) 
  These include, filter(...), and mergeMap(...).
   they return a new Observable
   A Pipeable Operator is a function that takes an Observable 
   as its input and returns another Observable. 
   It is a pure operation: the previous Observable stays unmodified.
   const fileObservable = urlObservable.pipe(map((url) => http.get(url)));
   http.get() returns an Observable (of string or string arrays probably) for each individual URL.
    Now you have an Observable of Observables, a higher-order Observable.
    https://rxjs.dev/guide/operators
*/
//  This selector's job is to return the unique 'albumId' collection.
 // Use to remove duplicate elements from the array 
 // const numbers = [2,3,4,4,2,3,3,4,4,5,5,6,6,7,5,32,3,4,5]
//spreading numbers of the object into an array using the new operator
// console.log([...new Set(numbers)]) 
export const uniqueAlbumIds = createSelector(
    gallerySelector,
    (state: GalleryModel[]) => {
      return [...new Set(state.map((_) => _.albumId))];
    }
  );
  // createSelector and createFeatureSelector :
// keeps track of the latest arguments
// in which your selector function was invoked.
/*
 as memoization.
el último resultado puede devolverse cuando los argumentos 
coinciden sin volver a invocar su función de selector. 
*/
  export const albumCollectionByAlbumId = (albumId:number) => 
  createSelector(
    gallerySelector,
    (gallery:GalleryModel[]) => {
        if(albumId == -1){
            return gallery;
        }
        return gallery.filter(_ => _.albumId == albumId);
    }
)