import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const topProductsApi = createApi({
    reducerPath : "topProductsApi",
    baseQuery : fetchBaseQuery({baseUrl : "http://localhost:5000/api"}),
    endpoints : (builder)=>({
        getAllProducts : builder.query({
            query:()=> "/products"
        }),
        getProduct : builder.query({
            query: (_id)=>`/products/${_id}`
        })
    })
})

export const {useGetAllProductsQuery, useGetProductQuery} = topProductsApi;