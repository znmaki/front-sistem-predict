import { useQueryClient } from '@tanstack/react-query';
import { ErrorMessage, Field, useField } from 'formik';
import { Fragment } from 'react';

export const InputForm = ({ content, type = 'text', id }: any) => {
	const [field, meta] = useField(id);

	const queryClient = useQueryClient();
	const productId: [] | undefined = queryClient.getQueryData(['nameProducts']);

	return (
		<div className='flex flex-row items-center justify-between'>
			<label htmlFor={id} className='text-xl basis-[30%]'>{content}</label>
			<div className='basis-[70%]'>
				{type === 'select' ? (
					<Field
						as="select"
						name={id}
						className='w-full text-xl border border-[#707070] bg-white px-2 rounded-md'
					>
						<option disabled value="">Lista de Productos</option>
						{productId && (
							productId.map(product => (
								<option value={product}>{product}</option>
							))
						)}
					</Field>
				) : (
					<Fragment>
						<Field
							{...field}
							type={type}
							id={id}
							name={id}
							className={`w-full text-xl border border-[#707070] px-2 rounded-md 
					${meta.touched && meta.error ? 'border-2 border-red-500' : ''}`
							}
							style={{ outline: 'none' }}
						/>
						<ErrorMessage
							name={id}
							component="div"
							className='absolute basis-[40%] text-red-500'
						/>
					</Fragment>
				)}
			</div>
		</div>
	)
}

export const InputFormChild = ({ children = null, content, type = 'text', id }: any) => {
	const [field, meta] = useField(id);
	return (
		<div className='flex flex-row items-center justify-between'>
			<label htmlFor={id} className='text-xl basis-[30%] pr-4'>{content}</label>
			<div className='basis-[35%]'>
				<Field
					{...field}
					type={type}
					id={id}
					name={id}
					className={`w-full text-xl border border-[#707070] px-2 rounded-md 
					${meta.touched && meta.error ? 'border-2 border-red-500' : ''}`
					}
					style={{ outline: 'none' }}
				/>
				<ErrorMessage
					name={id}
					component="div"
					className='absolute basis-[40%] text-red-500'
				/>
			</div>
			<div className='basis-[35%] text-right'>
				{children}
			</div>
		</div>
	)
}

export const InputFormLogin = ({ content, type = 'text', id }: any) => {
	const [field, meta] = useField(id);
	return (
		<div className='space-y-4'>
			<label htmlFor={id} className='text-xl'>{content}</label>
			<div>
				<Field
					{...field}
					type={type}
					id={id}
					name={id}
					className={`w-full text-xl border border-[#707070] px-2 rounded-md 
					${meta.touched && meta.error ? 'border-2 border-red-500' : ''}`
					}
					style={{ outline: 'none' }}
				/>
				<ErrorMessage
					name={id}
					component="div"
					className='absolute basis-[40%] text-red-500'
				/>
			</div>
		</div>
	)
}