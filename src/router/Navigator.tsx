import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { LoginUser, CreateUser } from "../modules/user"
import { ProductDashboard, ProductsDashboard, ReceivedProductRegistration, SoldProductRegistration, Header, RegisterProduct } from "../modules/product"
import { Layout } from "../shared"
import ListNavi from "../ListNavi"
/* import { ListNavi, Header, Layout } from "../components"
import { Login, CreateUser, Inicio, NewProductEntry, SaleProductEntry, ProductPanel } from "../pages" */

const Navigator = () => {
	return (
		<BrowserRouter>
			{/* <Header /> */}
			<ListNavi />
			<Header />
			<Routes>
				<Route path='/' element={<Navigate to='/login' replace />} />

				<Route path='/login' element={<LoginUser />} />
				<Route path='/create-account' element={<CreateUser />} />

				<Route path="/" element={<Layout />}>
					<Route path="/inicio" element={<ProductsDashboard />} />
					<Route path="/registrar-producto" element={<RegisterProduct />} />
					<Route path="/productos-recibidos" element={<ReceivedProductRegistration />} />
					<Route path="/productos-vendidos" element={<SoldProductRegistration />} />
					<Route path="/tablero-productos/:id" element={<ProductDashboard />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default Navigator