import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const topProductsApi = createApi({
    reducerPath : "topProductsApi",
    baseQuery : fetchBaseQuery({baseUrl : "https://rafcart-server-side.vercel.app/api"}),
    endpoints : (builder)=>({
        getAllProducts : builder.query({
            query:()=> "/products"
        }),
        getProduct : builder.query({
            query: (_id)=>`/products/${_id}`
        }),
        createProduct: builder.mutation({
            query: (newProduct) => ({
                url: "products",
                method: "POST",
                body: newProduct
            })
        }),
    })
})

export const {useGetAllProductsQuery, useGetProductQuery, useCreateProductMutation} = topProductsApi;