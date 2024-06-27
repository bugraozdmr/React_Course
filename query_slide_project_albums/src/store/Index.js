import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { usersApi } from "./apis/UsersApi";
import { albumsApi } from "./apis/AlbumsApi";
import { photosApi } from "./apis/PhotosApi";


export const store = configureStore({
    reducer:{
        [usersApi.reducerPath]:usersApi.reducer,
        [albumsApi.reducerPath]:albumsApi.reducer,
        [photosApi.reducerPath]:photosApi.reducer,
    },
    middleware:((getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(usersApi.middleware).concat(albumsApi.middleware).concat(photosApi.middleware);
    })
})

setupListeners(store.dispatch);

export {
    useAddPhotoMutation,
    useFetchPhotosQuery,
    useRemovePhotoMutation
} from './apis/PhotosApi'

export {
    useFetchAlbumsQuery,
    useAddAlbumMutation,
    useRemoveAlbumMutation
} from './apis/AlbumsApi'


export {
    useFetchUsersQuery,
    useAddUserMutation,
    useRemoveUserMutation
} from './apis/UsersApi'