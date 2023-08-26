import { useState } from "react"
import { apiService } from "../../../shared";
import { useQuery } from "@tanstack/react-query";

const getProduct = async (productId: any) => {
    const products = await apiService.get(`http://localhost:3001/product_general/${productId}`);
    return [products];
}

const getProducts = async () => {
    const products = await apiService.get(`http://localhost:3001/product_general`);
    return products;
}

/* const getRecivedProducts = async () => {
    const products = await apiService.get('http://localhost:3001/received_products');
    return products;
}

const getSoldProducts = async () => {
    const products = await apiService.get('http://localhost:3001/sold_products');
    return products;
} */

export const useDashboard = (productId: any) => {

    const productSelect = useQuery(
        ['productInfo', productId],
        () => getProduct(productId),
    )

    const listProducts = useQuery(
        ['productInfo'],
        () => getProducts(),
    )

    /* const productRecived = useQuery(
        ['productsRecived'],
        () => getRecivedProducts(),
    )

    const productSold = useQuery(
        ['productsSold'],
        () => getSoldProducts(),
    ) */



    return {
        //Properties
        data: productSelect.data,
        isLoading: productSelect.isLoading,
        dataList: listProducts.data,
        isLoadingList: listProducts.isLoading
        //Methods

        //Getters

        //Mutations
    }
}