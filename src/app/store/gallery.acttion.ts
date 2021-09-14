import { createAction, props } from '@ngrx/store';
import { GalleryModel } from '../gallery/gallery.model';
 /*
 una acción que será invocada porel exito de nuestra API 
 para guardar los datos de respuesta en el store. 
 [Gallery API]-->fuente
 Gallery API Success-->evento
 */
export const retrievedGalleryList = createAction(
    "[Gallery API] Gallery API Success",
    props<{allGallery:GalleryModel[]}>()
);
// https://www.thisdot.co/blog/strong-typing-the-state-and-actions-in-ngrx
export const likePhoto = createAction(
    '[Photo List] Like Photo',
    props<{id: string}>()
  );
  
  export const dislikePhoto = createAction(
    '[Photo List] Dislike Photo',
    props<{id: string}>()
  );