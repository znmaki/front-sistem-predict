import { Outlet } from "react-router-dom"
import { Navbar } from "../Navbar"

const Layout = () => {
	return (
		<div className="flex min-h-screen">
			<div className="bg-[#3F3D56] w-[20%]">
				<Navbar />
			</div>
			<div className="bg-[#F8F7FA] w-[80%] h-screen">
				<Outlet />
			</div>
		</div>
	)
}

export default Layout