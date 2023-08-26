import { useLocation, useNavigate } from 'react-router-dom';
import Logo from '../../../assets/logoHeader.svg'
import { getLoginUser, removeAccessToken, removeLoginUser, removeRefreshToken } from '../../../shared';

const Header = () => {
	const { pathname } = useLocation();
	const { firstName } = getLoginUser();
	
	const navigate = useNavigate();

	const handleLogout = () => {
		removeAccessToken()
		removeRefreshToken()
		removeLoginUser()
		navigate('/login')
	}

	return (
		<>
			{pathname === '/login' || pathname === '/create-account' ? null : (
				<div className='flex fixed w-full z-10 border-b border-[#ECECEC]'>
					<div className="bg-[#3F3D56] basis-[20%] py-2 flex justify-center">
						<img src={Logo} alt="Logo" />
					</div>
					<div className='bg-white grow py-2 flex items-center justify-around'>
						{/* <p className='rotate-scale-up '>pipipi</p> */}
						<p>{firstName}</p>
						<button type='button' onClick={handleLogout}>Logout</button>
					</div>
				</div>
			)}
		</>
	)
}

export default Header