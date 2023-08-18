import { ErrorMessage, Field, useField } from 'formik';
import './InputForm.css';

export const InputForm = ({ content, type = 'text', id }: any) => {
	const [field, meta] = useField(id);
	return (
		<div className='flex flex-row items-center justify-between'>
			<label htmlFor={id} className='text-xl basis-[30%]'>{content}</label>
			<div className='basis-[70%]'>
				<Field
					{...field}
					type={type}
					id={id}
					name={id}
					className={`w-full text-xl border border-[#707070] px-2 rounded-md 
					${meta.touched && meta.error ? 'border-red-500' : ''}`
					}
				/>
				<ErrorMessage
					name={id}
					component="div"
					className='absolute basis-[40%]'
				/>
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
					${meta.touched && meta.error ? 'border-red-500' : ''}`
					}
				/>
				<ErrorMessage
					name={id}
					component="div"
					className='absolute basis-[40%]'
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
					${meta.touched && meta.error ? 'border-red-500' : ''}`
					}
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