import { useState } from "react"
import { apiService } from "../../../shared";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const getSoldProducts = async () => {
    const products = await apiService.get('http://localhost:3001/sold_products');
    return products;
}

const getProducts = async () => {
    const products = await apiService.get('http://localhost:3001/products');
    return products;
}

export const useProductSales = (handleOpen: () => void) => {
    const queryClient = useQueryClient();
    const [productSelect, setproductSelect] = useState()

    const products: any = useQuery(
        ['products'],
        () => getProducts(),
    )

    const { isLoading, data } = useQuery(
        ['productsSold'],
        () => getSoldProducts(),
    )

    if (products.data) {
        const aea = products.data.map((item: { nameProduct: string; }) => item.nameProduct)
        queryClient.setQueryData(['nameProducts'], aea);
    }

    const handleSubmit = async (values: unknown) => {
        const productId = queryClient.getQueryData(['productId']);

        if (productId !== undefined) {
            await apiService.put(`http://localhost:3001/sold_products/${productId}`, values)
            queryClient.invalidateQueries(['productsSold']);
        } else {
            await apiService.post('http://localhost:3001/sold_products', values)
            queryClient.invalidateQueries(['productsSold']);
        }
    }

    const handleDelete = async (productId: number) => {
        await apiService.delete(`http://localhost:3001/sold_products/${productId}`)
        queryClient.invalidateQueries(['productsSold']);
    }

    const handleEdit = (productId: number) => {
        queryClient.setQueryData(['productId'], productId);

        setproductSelect(queryClient.getQueryData(['productId']))

        const productsQuery: [] | undefined = queryClient.getQueryData(['productsSold']);

        if (productsQuery) {
            const filteredProducts = productsQuery.filter((product: { id: number; }) => product.id === productId);
            console.log(filteredProducts);

            queryClient.setQueryData(['productSelect'], filteredProducts[0]);
        }

        handleOpen()
    }

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