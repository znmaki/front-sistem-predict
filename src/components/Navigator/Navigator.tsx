import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { CreateUser, Inicio, Login, NewProductEntry, ProductPanel, SaleProductEntry } from "../../pages"
import ListNavi from "../ListNavi"
import { Header, Layout } from ".."

const Navigator = () => {
	return (
		<BrowserRouter>
			{/* <Header /> */}
			<ListNavi />
			<Header />
			<Routes>
				<Route path='/' element={<Navigate to='/login' replace />} />

				<Route path='/login' element={<Login />} />
				<Route path='/create-account' element={<CreateUser />} />

				<Route path="/" element={<Layout />}>
					<Route path="/inicio" element={<Inicio />} />
					<Route path="/registro-productos" element={<NewProductEntry />} />
					<Route path="/registro-ventas" element={<SaleProductEntry />} />
					<Route path="/panel-productos" element={<ProductPanel />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default Navigator