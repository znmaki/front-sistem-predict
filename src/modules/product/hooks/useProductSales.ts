import { formatoFecha } from "..";
import { apiService, getLoginUser } from "../../../shared";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const getMovement = async () => {
    const { id } = getLoginUser()
    const movement = await apiService.get(`users/${id}/movements`);
    return movement.body.data;
}

const getProducts = async () => {
    const { id } = getLoginUser()
    const products = await apiService.get(`/users/${id}/products`);
    return products;
}

export const useProductSales = () => {
    const queryClient = useQueryClient();

    const products: any = useQuery(
        ['products'],
        () => getProducts(),
        {
            refetchOnWindowFocus: false,
            select: (data) => {
                const idList = data.body.data.map((item) => ({
                    id: item.id,
                    name: item.name
                }))
                queryClient.setQueryData(['infoProducts'], idList);
            },
        }
    )

    const { isLoading, data } = useQuery(
        ['productsSold'],
        getMovement,
        {
            refetchOnWindowFocus: false,
            select: (data) => {
                // Filtrar los elementos cuyo type.name sea igual a 'Entrada'
                const filteredData = data.filter((item) => item.type.name === 'Salida');

                // Mapear y limpiar los objetos filtrados
                return filteredData.map((item) => ({
                    id: item.id,
                    name: item.product.name,
                    cantidad_vendida: Math.abs(item.quantity),
                    costo_venta: parseFloat(item.unitPrice),
                    fecha: formatoFecha(item.date)
                }));
            },
        }
    )

    const handleSubmit = async (values: unknown) => {
        const stockProduct: number | undefined = queryClient.getQueryData(['stock']);
        const nuevaCopia = {
            "quantity": values.cantidad_vendida,
            "unitPrice": values.costo_venta,
            "date": values.fecha,
        };

        if (nuevaCopia.quantity > stockProduct[0].stock) {
            console.log('muy alto');
            //COLOCAR ALERTA
        } else {
            await apiService.post(`/products/${values.nameProduct}/withdraw`, nuevaCopia)
        }

        //await apiService.post(`/products/${values.nameProduct}/withdraw`, nuevaCopia)


        queryClient.invalidateQueries(['productsSold']);
    }

    const handleDelete = async (productId: number) => {
        await apiService.delete(`http://localhost:3001/sold_products/${productId}`)
        queryClient.invalidateQueries(['productsSold']);
    }

    return {
        //Properties
        data,
        isLoading,
        //Methods
        handleSubmit,
        handleDelete,
        //Getters

        //Mutations
    }
}