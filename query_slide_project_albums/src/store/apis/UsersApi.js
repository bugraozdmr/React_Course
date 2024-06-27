import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { faker} from '@faker-js/faker'

const pause = (duration) => {
    return new Promise((resolve) => setTimeout(resolve, duration));
}

// tag'i iptal edince oto yeniler invalidatetag -- tag get'te

// bir sey cekildiginde query -- bir sey duzenleneceginde mutation
// bir saniye bekleme basildi
const usersApi = createApi({
    reducerPath:'users',
    baseQuery:fetchBaseQuery({
        baseUrl:'http://localhost:3000/',
        fetchFn:async (...args) => {
            await pause(500);
            return fetch(...args);
        }
    }),
    endpoints(builder){
        return{
            fetchUsers:builder.query({
                providesTags:['User'],
                query:()=>{
                    return {
                        url:'/users',
                        method:'GET',
                    }
                }
            }),
            addUser:builder.mutation({
                invalidatesTags:()=> {
                    return [{type:'User'}]
                },
                query:()=>{
                    return {
                        url:'/users',
                        method:'POST',
                        body:{
                            name: faker.name.fullName(),
                            email: faker.internet.email()
                        }
                    }
                }
            }),
            removeUser:builder.mutation({
                invalidatesTags:()=> {
                    return [{type:'User'}]
                },
                query:(user)=>{
                    return {
                        url:`/users/${user.id}`,
                        method:'DELETE',
                    }
                }
            }),
        }
    }
});

export const {useFetchUsersQuery,useAddUserMutation,useRemoveUserMutation} = usersApi;
export {usersApi};