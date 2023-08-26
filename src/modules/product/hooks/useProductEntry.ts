import { useState } from "react"
import { apiService } from "../../../shared";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const getRecivedProducts = async () => {
    const products = await apiService.get('http://localhost:3001/received_products');
    return products;
}

const getProducts = async () => {
    const products = await apiService.get('http://localhost:3001/products');
    return products;
}

export const useProductEntry = (handleOpen: () => void) => {
    const queryClient = useQueryClient();

    const products: any = useQuery(
        ['products'],
        () => getProducts(),
    )

    const { isLoading, data } = useQuery(
        ['productsRecived'],
        () => getRecivedProducts(),
    )

    if (products.data) {
        const aea = products.data.map((item: { nameProduct: string; }) => item.nameProduct)
        queryClient.setQueryData(['nameProducts'], aea);
    }

    const handleSubmit = async (values: unknown) => {
        const productId = queryClient.getQueryData(['productId']);

        if (productId !== undefined) {
            console.log(values);
            await apiService.put(`http://localhost:3001/received_products/${productId}`, values)
            queryClient.invalidateQueries(['productsRecived']);
        } else {
            console.log(values);
            await apiService.post('http://localhost:3001/received_products', values)
            queryClient.invalidateQueries(['productsRecived']);
        }
        
    };

    const handleDelete = async (productId: number) => {
        await apiService.delete(`http://localhost:3001/received_products/${productId}`)
        queryClient.invalidateQueries(['productsRecived']);
    };

    const handleEdit = (productId: number) => {
        queryClient.setQueryData(['productId'], productId);

        const productsQuery: [] | undefined = queryClient.getQueryData(['productsRecived']);

        if (productsQuery) {
            const filteredProducts = productsQuery.filter((product: { id: number; }) => product.id === productId);
            console.log(filteredProducts);

            queryClient.setQueryData(['productSelect'], filteredProducts[0]);
        }

        handleOpen()
    };

    return {
        //Properties
        data,
        isLoading,
        //Methods
        handleSubmit,
        handleDelete,
        handleEdit
        //Getters

        //Mutations
    }
}