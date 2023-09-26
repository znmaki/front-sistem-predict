import { useState } from "react";
import { apiService, getLoginUser } from "../../../shared"
import { useQuery, useQueryClient } from "@tanstack/react-query"

const getProducts = async () => {
    const { id } = getLoginUser()
    const products = await apiService.get(`/users/${id}/products`);
    return products;
}

export const useProduct = (handleOpen: () => void) => {

    const queryClient = useQueryClient();

    const { isLoading, data } = useQuery(
        ['products'],
        () => getProducts(),
    )

    const handleSubmit = async (values: unknown) => {
        const productId = queryClient.getQueryData(['productId']);
        if (productId !== undefined) {
            await apiService.put(`/products/${productId}`, values)
            queryClient.invalidateQueries(['products']);
        } else {
            await apiService.post('/products', values)
            queryClient.invalidateQueries(['products']);
        }

    };

    const handleDelete = async (productId: unknown) => {
        await apiService.delete(`http://localhost:3001/products/${productId}`)
        queryClient.invalidateQueries(['products']);
    };

    //lo uso para abrir el modal de edicion con los datos seleccionados (NO HACE LA ACCION DE EDICION, ESO LO HACE handleSubmit)
    const handleEdit = (productId: number) => {
        queryClient.setQueryData(['productId'], productId);

        const productsQuery: [] | undefined = queryClient.getQueryData(['products']);

        if (productsQuery) {
            const filteredProducts = productsQuery.body.data.filter((product: { id: number; }) => product.id === productId);
            queryClient.setQueryData(['productSelect'], filteredProducts[0]);
        }

        handleOpen();
    }

    return {
        //Properties
        isLoading,
        data,
        //Methods
        handleSubmit,
        handleDelete,
        handleEdit
        //Getters

        //Mutations
    }
}
