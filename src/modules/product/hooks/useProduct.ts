import { useState } from "react";
import { apiService } from "../../../shared"
import { useQuery, useQueryClient } from "@tanstack/react-query"

const getProducts = async () => {
    const products = await apiService.get('http://localhost:3001/products');
    return products;
}

export const useProduct = (handleOpen: () => void) => {
    const queryClient = useQueryClient();
    const [productSelect, setproductSelect] = useState()

    const { isLoading, data } = useQuery(
        ['products'],
        () => getProducts(),
    )

    const handleSubmit = async (values: unknown) => {

        const productId = queryClient.getQueryData(['productId']);

        if (productId !== undefined) {
            await apiService.put(`http://localhost:3001/products/${productId}`, values)
            queryClient.invalidateQueries(['products']);
        } else {
            await apiService.post('http://localhost:3001/products', values)
            queryClient.invalidateQueries(['products']);
        }

    };

    const handleDelete = async (productId: unknown) => {
        await apiService.delete(`http://localhost:3001/products/${productId}`)
        queryClient.invalidateQueries(['products']);
    };

    const handleEdit = (productId: number) => {
        queryClient.setQueryData(['productId'], productId);

        setproductSelect(queryClient.getQueryData(['productId']))

        const productsQuery: [] | undefined = queryClient.getQueryData(['products']);

        if (productsQuery) {
            const filteredProducts = productsQuery.filter((product: { id: number; }) => product.id === productId);
            queryClient.setQueryData(['productSelect'], filteredProducts[0]);
        }

        handleOpen();
    }

    return {
        //Properties
        isLoading,
        data,
        productSelect,
        //Methods
        handleSubmit,
        handleDelete,
        handleEdit
        //Getters

        //Mutations
    }
}
