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

export const useProductSales = (handleOpen: () => void) => {
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
        const productId = queryClient.getQueryData(['productId']);

        if (productId !== undefined) {
            console.log('hay producto', values);
            const editProdut = {
                "quantity": values.costo_venta * -1,
                "unitPrice": values.cantidad_vendida,
            };
            /* await apiService.put(`http://localhost:3001/sold_products/${productId}`, values)
            queryClient.invalidateQueries(['productsSold']); */
            console.log(editProdut);
            await apiService.put(`/movements/${productId}`, editProdut)
            
            queryClient.invalidateQueries(['productsSold']);
        } else {
            const nuevaCopia = {
                "quantity": values.cantidad_vendida,
                "unitPrice": values.costo_venta,
                "date": values.fecha,
            };

            await apiService.post(`/products/${values.nameProduct}/withdraw`, nuevaCopia)
            queryClient.invalidateQueries(['productsSold']);
        }
    }

    const handleDelete = async (productId: number) => {
        await apiService.delete(`http://localhost:3001/sold_products/${productId}`)
        queryClient.invalidateQueries(['productsSold']);
    }

    //lo uso para abrir el modal de edicion con los datos seleccionados (NO HACE LA ACCION DE EDICION, ESO LO HACE handleSubmit)
    const handleEdit = (productId: number) => {
        queryClient.setQueryData(['productId'], productId);

        const productsQuery: [] | undefined = queryClient.getQueryData(['productsSold']);

        if (productsQuery) {
            const filteredProducts = productsQuery.filter((product: { id: number; }) => product.id === productId);
            console.log(filteredProducts[0]);

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