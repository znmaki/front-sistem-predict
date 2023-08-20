import { Formik, Form } from 'formik';
import { Fragment } from 'react';

import { Typography } from '@mui/material';
import { InputFormChild, InputForm, InputFormLogin } from './InputForm';
import { Buttom } from '../..';

export const FormProduct = ({ inputConfigs, initialValues, onSubmit, validationSchema }: any) => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            <>
                <Typography variant="h4" component='h1'>
                    Registrar Venta <Typography variant="h4" component='span' className='text-[#FF954A]'>Nro. 21</Typography>
                </Typography>
                <hr className='my-10' />
                <Form className='space-y-10'>
                    {/* Renderizar los inputs configurados */}
                    {inputConfigs.map((config: any) => (
                        <Fragment key={config.id}>
                            {config.type === 'child' ? (
                                <InputFormChild id={config.id} content={config.title} type={config.typeInput}>
                                    {config.additionalComponent}
                                </InputFormChild>
                            ) : (
                                <InputForm id={config.id} content={config.title} type={config.typeInput} />
                            )}
                        </Fragment>
                    ))}
                    <div className='flex justify-center'>
                        <Buttom click={() => { console.log('sa') }}>
                            Registrar Venta
                        </Buttom>
                    </div>
                </Form>
            </>
        </Formik>
    );
};

export const FormUser = ({ inputConfigs, initialValues, onSubmit, validationSchema, txtBtn }: any) => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            <>
                <Form className='space-y-8'>
                    {/* Renderizar los inputs configurados */}
                    {inputConfigs.map((config: any) => (
                        <Fragment key={config.id}>
                            <InputFormLogin id={config.id} content={config.title} />
                        </Fragment>
                    ))}
                    <Buttom style='w-full' click={() => { console.log('sa') }}>{txtBtn}</Buttom>
                </Form>
            </>
        </Formik>
    );
};