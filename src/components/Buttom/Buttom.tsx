import './Buttom.css';

export const Buttom = ({ children, click, style }: any) => {
	return (
		<button onClick={click} className={`bg-[#FF954A] text-xl px-4 pt-3 pb-4 rounded-md text-white font-bold ${style}`}>
			{children}
		</button>
	)
}

export const ButtomHeader = ({ children, text }: any) => {
	return (
		<div className="w-full flex bg-[#F8F7FA] py-4 px-7 rounded-md">
			<p className="min-w-[56px]">Icon</p>
			<p>{text}</p>
			{children}
		</div>
	)
}