
import { useQuery } from "@tanstack/react-query";
import { apiService, getLoginUser } from "..";

const getCatalog = async (productId: any) => {
    const { id } = getLoginUser()
    const products = await apiService.get(`http://localhost:4000/users/${id}/products`);
    return products;
}

export const useNavbar = () => {

    const productSIds = useQuery(
        ['listCatalog'],
        getCatalog,
        {
            select: (data: any) => {
                const catalogList = data.body.data.map((item: { id: any; name: any; }) => ({
                    id: item.id
                }))
                return catalogList
            },
            refetchOnWindowFocus: false, // default: true
        }
    )

    return {
        //Properties
        /* data: productSelect.data,
        isLoading: productSelect.isLoading, */
        data: productSIds.data,
        isLoadingIds: productSIds.isLoading,
        //Methods

        //Getters

        //Mutations
    }
}