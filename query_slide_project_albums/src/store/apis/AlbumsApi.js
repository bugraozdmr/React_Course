import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {faker} from '@faker-js/faker'

const pause = (duration) => {
    return new Promise((resolve) => setTimeout(resolve, duration));
}

// tag'i iptal edince oto yeniler invalidatetag -- tag get'te

// bir sey cekildiginde query -- bir sey duzenleneceginde mutation
// bir saniye bekleme basildi
const albumsApi = createApi({
    reducerPath:'albums',
    baseQuery:fetchBaseQuery({
        baseUrl:'http://localhost:3000/',
        fetchFn:async (...args) => {
            await pause(500);
            return fetch(...args);
        }
    }),
    endpoints(builder){
        return{
            fetchAlbums:builder.query({
                providesTags:(result,error,user) => {
                    const tags = result.map((album) => {
                        return {type:'Album',id:album.id}
                    });
                    tags.push({type:'UsersAlbum',id:user.id});

                    return tags;
                },
                query:(user)=>{
                    return {
                        url:'/albums',
                        method:'GET',
                        params:{
                            userId:user.id
                        }
                    }
                }
            }),
            addAlbum:builder.mutation({
                invalidatesTags:(result,error,user) => {
                    return [{type:'UsersAlbum',id:user.id}]
                },
                query:(user)=>{
                    
                    return {
                        url:'/albums',
                        method:'POST',
                        body:{
                            userid: user.id,
                            title: faker.commerce.productName()
                        }
                    }
                }
            }),
            removeAlbum:builder.mutation({
                invalidatesTags:(result,error,album) => {
                    return [{type:'Album',id:album.id}]
                },
                query:(album)=>{
                    return {
                        url:`/albums/${album.id}`,
                        method:'DELETE',
                    }
                }
            }),
        }
    }
});

export const {useFetchAlbumsQuery,useAddAlbumMutation,useRemoveAlbumMutation} = albumsApi;
export {albumsApi};