"use client"
import React, { useState } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { imageUpload } from '@/utils/ImageUpload';
import { useCreateProductMutation } from '@/redux/features/topProducts/topProductsApi';

interface IFormInput {
    title: string;
    description: string;
    image: string;
    price: number;
    category: string;
    brand: string;
    rating: number;
    stock: number;
}

const TopCreateProduct = () => {
    const [file, setFile] = useState("");
    const [createProduct] = useCreateProductMutation();
    const { register, handleSubmit, reset } = useForm<IFormInput>();
    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        const imageURL = await imageUpload(file[0]);

        const payload = {
            title: data?.title,
            image: imageURL,
            category: data?.category,
            price: data?.price,
            description: data?.description,
            brand: data?.brand,
            rating: data?.rating,
            stock: data?.stock,
        };
        console.log(payload);

        try {
            if (imageURL) {
                const result = await createProduct(payload).unwrap();
                console.log("Product created:", result);
            }
            reset();
        } catch (error) {
            console.error("Failed to create product:", error);
        }
    }

    return (
        <div>
            <h2 className='text-center my-4 text-2xl font-bold'>Top Create Product </h2>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-1/2 mx-auto border p-8 rounded-lg shadow-lg"
            >
                <div className="flex gap-6 mb-4">
                    <div className="w-1/2">
                        <label className="text-md font-bold" htmlFor="title">
                            Title :
                        </label>
                        <input
                            className="border-2 py-1 px-2 rounded-lg w-full"
                            placeholder="Enter product title..."
                            type="text"
                            {...register("title")}
                        />
                    </div>
                    <div className="w-1/2">
                        <label className="text-md font-bold" htmlFor="category">
                            Category :
                        </label>
                        <input
                            className="border-2 py-1 px-2 rounded-lg w-full"
                            placeholder="Enter product category..."
                            type="text"
                            {...register("category")}
                        />
                    </div>
                </div>

                <div className="flex gap-6 mb-4">
                    <div className="w-full">
                        <label className="text-md font-bold" htmlFor="image">
                            Image :
                        </label>
                        <input
                            className="border-2 py-1 px-2 rounded-lg w-full"
                            placeholder="Enter product image..."
                            type="file"
                            onChange={(e:any) => setFile(e.target.files)}
                        />
                    </div>
                </div>

                <div className="flex gap-6 mb-4">
                    <div className="w-full">
                        <label className="text-md font-bold" htmlFor="description">
                            Description :
                        </label>
                        <textarea
                            className="border-2 py-1 px-2 rounded-lg w-full"
                            placeholder="Enter product description..."
                            {...register("description")}
                        ></textarea>
                    </div>
                </div>

                <div className="flex gap-6 mb-4">
                    <div className="w-1/2">
                        <label className="text-md font-bold" htmlFor="price">
                            Price :
                        </label>
                        <input
                            className="border-2 py-1 px-2 rounded-lg w-full"
                            placeholder="Enter product price..."
                            type="number"
                            {...register("price")}
                        />
                    </div>
                    <div className="w-1/2">
                        <label className="text-md font-bold" htmlFor="rating">
                            Rating :
                        </label>
                        <input
                            className="border-2 py-1 px-2 rounded-lg w-full"
                            placeholder="Enter product rating..."
                            type="number"
                            {...register("rating")}
                        />
                    </div>
                </div>

                <div className="flex gap-6 mb-4">
                    <div className="w-1/2">
                        <label className="text-md font-bold" htmlFor="brand">
                            Brand :
                        </label>
                        <input
                            className="border-2 py-1 px-2 rounded-lg w-full"
                            placeholder="Enter product brand..."
                            type="text"
                            {...register("brand")}
                        />
                    </div>
                    <div className="w-1/2">
                        <label className="text-md font-bold" htmlFor="stock">
                            Stock :
                        </label>
                        <input
                            className="border-2 py-1 px-2 rounded-lg w-full"
                            placeholder="Enter product stock..."
                            type="number"
                            {...register("stock")}
                        />
                    </div>
                </div>

                <div className="flex justify-center items-center ">
                    <input
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold text-xl py-1 px-4 rounded-lg cursor-pointer transition ease-in-out duration-300"
                        type="submit"
                        value="Create Product"
                    />
                </div>
            </form>
        </div>
    );
};

export default TopCreateProduct;