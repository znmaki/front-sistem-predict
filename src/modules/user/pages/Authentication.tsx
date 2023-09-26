import { useLocation, useParams } from "react-router-dom"
import { apiService } from "../../../shared";
import { useEffect } from "react";

const Authentication = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const token = searchParams.get('token');

    useEffect(() => {
        apiService.post(`auth/activate?token=${token}`, {});
    }, [token])

    return (
        <div>Authentication : {token}</div>
    )
}

export default Authentication