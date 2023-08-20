import { Tooltip, Typography } from '@mui/material';

const Title = ({ title, infoHover, style, styleLine = 'basis-[40%]' }: any) => {
	return (
		<div className='flex items-center'>
			<Typography variant="h4" component='h1' className={`!font-bold !text-[30px] ${style}`}>
				{title}
			</Typography>
			<Tooltip
				title={infoHover}
				placement="bottom-start"
				componentsProps={{
					tooltip: {
						style: { backgroundColor: '#FFFFFF', color: '#FF954A' },
					},
				}}
			>
				<p className='px-5'>Icon</p>
			</Tooltip>
			<hr className={`border border-red-700 ${styleLine}`} />
		</div>
	)
}

export default Title
