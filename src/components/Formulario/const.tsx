import { ReactNode } from "react";
import * as Yup from 'yup';
import { Typography } from '@mui/material';

interface IConstInpuForm {
    id: string;
    title: string;
    type: 'normal' | 'child';
    typeInput?: string;
    additionalComponent?: ReactNode;
    validation?: Yup.Schema<any>;
}

const inputForm: IConstInpuForm[] = [
    {
        id: 'productName',
        title: 'Producto:',
        type: 'normal',
        validation: Yup.string().required('El nombre del producto es obligatorio'),
    },
    {
        id: 'quantity',
        title: 'Salida:',
        type: 'child',
        typeInput: 'number',
        additionalComponent: (
            <Typography component='p' className='text-[#FF954A] !text-xl'>Stock Actual 40 Unid.</Typography>
        ),
        validation: Yup.number()
            .typeError('La cantidad debe ser un número')
            .positive('La cantidad debe ser un número positivo')
            .required('La cantidad es obligatoria'),
    },
    {
        id: 'price',
        title: 'Precio de venta por unidad (Soles):',
        type: 'child',
        typeInput: 'number',
        additionalComponent: (
            <Typography component='p' className='text-[#FF954A] !text-xl'>Soles (S/.)</Typography>
        ),
        validation: Yup.number()
            .typeError('La cantidad debe ser un número')
            .positive('La cantidad debe ser un número positivo')
            .required('La cantidad es obligatoria'),
    },
    {
        id: 'date',
        title: 'Fecha:',
        type: 'normal',
        typeInput: 'date',
        validation: Yup.string().required('La fecha es obligatoria'),
    },
];

const inputFormNewProduct: IConstInpuForm[] = [
    {
        id: 'productName',
        title: 'Producto:',
        type: 'normal',
        validation: Yup.string().required('El nombre del producto es obligatorio'),
    },
    {
        id: 'quantity',
        title: 'Entrada:',
        type: 'child',
        typeInput: 'number',
        additionalComponent: (
            <Typography component='p' className='text-[#FF954A] !text-xl'>Unidades</Typography>
        ),
        validation: Yup.number()
            .typeError('La cantidad debe ser un número')
            .positive('La cantidad debe ser un número positivo')
            .required('La cantidad es obligatoria'),
    },
    {
        id: 'price',
        title: 'Costo por unidad (Soles):',
        type: 'child',
        typeInput: 'number',
        additionalComponent: (
            <Typography component='p' className='text-[#FF954A] !text-xl'>Soles (S/.)</Typography>
        ),
        validation: Yup.number()
            .typeError('La cantidad debe ser un número')
            .positive('La cantidad debe ser un número positivo')
            .required('La cantidad es obligatoria'),
    },
    {
        id: 'date',
        title: 'Fecha:',
        type: 'normal',
        typeInput: 'date',
        validation: Yup.string().required('El nombre del producto es obligatorio'),
    },
];

const inputFormLogin = [
    {
        id: 'user',
        title: 'Usuario',
        type: 'normal',
        validation: Yup.string().required('asddsdsasd')
    },
    {
        id: 'password',
        title: 'Contraseña',
        type: 'normal',
        typeInput: 'password',
        validation: Yup.string().required('asddsasd'),
    },
]

const inputCreateAccount = [
    {
        id: 'name',
        title: 'Nombre',
        type: 'normal',
        validation: Yup.string().required('asddsdsasd')
    },
    {
        id: 'secondName',
        title: 'Apellido',
        type: 'normal',
        validation: Yup.string().required('asddsdsasd')
    },
    {
        id: 'user',
        title: 'Usuario',
        type: 'normal',
        validation: Yup.string().required('asddsdsasd')
    },
    {
        id: 'password',
        title: 'Contraseña',
        type: 'normal',
        typeInput: 'password',
        validation: Yup.string().required('asddsdsasd')
    },
]

export { inputForm, inputFormNewProduct, inputFormLogin, inputCreateAccount };
export type { IConstInpuForm };
