"use client"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const newProductsApi = createApi({
    reducerPath: "newProductsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/new" }),
    endpoints: (builder) => ({
        getAllNewProducts: builder.query({
            query : ()=> "/products"
        }),
        getNewProduct : builder.query({
            query: (_id)=>`/products/${_id}`
        })
    })
})

export const { useGetAllNewProductsQuery, useGetNewProductQuery } = newProductsApi;