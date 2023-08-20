import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Typography } from '@mui/material';

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

const labels = [
	'2022-1', '2022-2', '2022-3', '2022-4', '2022-5', '2022-6', '2022-7', '2022-8', '2022-9',
	'2022-10', '2022-11', '2022-12', '2023-1', '2023-2', '2023-3', 'Siguiente Mes'
];

const data = {
	labels: labels,
	datasets: [{
		data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55, 40, 65, 59],
		backgroundColor: [
			'#7A779F',
			'#7A779F',
			'#7A779F',
			'#7A779F',
			'#7A779F',
			'#7A779F',
			'#7A779F',
			'#7A779F',
			'#7A779F',
			'#7A779F',
			'#7A779F',
			'#7A779F',
			'#7A779F',
			'#7A779F',
			'#7A779F',
			'#FF954A'
		]
	}]
};

// eslint-disable-next-line react-refresh/only-export-components
export const options = {
	responsive: true,
	aspectRatio: 2,
	plugins: {
		legend: {
			display: false,
		}
	},
};

const MonthlyDemandChart = () => {
	return (
		<div className='bg-white px-10 py-10 space-y-10 shadow-lg mb-10'>
			<Typography component='h2'>Unidades vendidas por mes</Typography>
			<div className='flex justify-evenly'>
				<div className='flex'>
					<p className='bg-[#7A779F] w-10 h-full'></p>
					<p>unidades por mes</p>
				</div>
				<div className='flex items-center'>
					<p className='bg-[#FF954A] w-10 h-full'></p>
					<p>unidades estimadas</p>
				</div>				
			</div>
			<div className='flex justify-center '>
				<div className='w-[70%]'>
					<Bar options={options} data={data} />
				</div>
			</div>
		</div>
	)
}

export default MonthlyDemandChart
