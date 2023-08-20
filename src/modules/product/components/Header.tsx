import { useLocation } from 'react-router-dom';
import Logo from '../../../assets/logoHeader.svg'

const Header = () => {
	const { pathname } = useLocation();

	return (
		<>
			{pathname === '/login' || pathname === '/create-account' ? null : (
				<div className='flex fixed w-full z-10 border-b border-[#ECECEC]'>
					<div className="bg-[#3F3D56] basis-[20%] py-2 flex justify-center">
						<img src={Logo} alt="Logo"/>
					</div>
					<div className='bg-white grow py-2'>
						aea
					</div>
				</div>
			)}
		</>
	)
}

export default Header