import { Formik, Form } from 'formik';
import { Fragment } from 'react';
import { InputFormChild, InputForm, Buttom, InputFormLogin } from '..';
import { Typography } from '@mui/material';


export const FormularioPrueba = ({ inputConfigs, initialValues, onSubmit, validationSchema }: any) => {
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
                        <Buttom>
                            Registrar Venta
                        </Buttom>
                    </div>
                </Form>
            </>
        </Formik>
    );
};

export const FormLogin = ({ inputConfigs, initialValues, onSubmit, validationSchema, txtBtn }: any) => {
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
                    <Buttom style='w-full'>{txtBtn}</Buttom>
                </Form>
            </>
        </Formik>
    )
}

export const FormNewUser = () => {
    return (
        <p></p>
    )
}