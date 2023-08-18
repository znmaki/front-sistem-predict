import { useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
	const { pathname } = useLocation();

	return (
		<>
			{pathname === '/login' || pathname === '/create-account' ? null : (
				<div className='flex absolute w-full'>
					<div className="bg-[#3F3D56] basis-[16.8%] py-2">
						hola
					</div>
					<div className='bg-red-600 grow py-2'>
						aea
					</div>
				</div>
			)}
		</>
	)
}

export default Header