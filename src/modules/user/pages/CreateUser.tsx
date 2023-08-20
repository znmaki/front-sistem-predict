import { Grid, Typography } from '@mui/material';
import Logo from '../../../assets/logoHeader.svg'
import SVG from '../../../assets/create-user.svg'
import { Link } from 'react-router-dom';
import { useValidation } from '../../../hooks';
import { FormUser, inputCreateAccount } from '../../../shared';

const CreateUser = () => {
    const validationSchema = useValidation(inputCreateAccount);

    const initialValues = {
        name: '',
        secondName: '',
        user: '',
        password: '',
    };

    const handleSubmit = (values: unknown) => {
        console.log(values);
    };

    return (
        <Grid container className='h-screen'>
            <Grid item xs={6}>
                <div className='flex flex-col items-center mt-[-50px]'>
                    <div className='w-[50%] space-y-4'>
                        <img src={Logo} alt="Logo" />
                        <Typography variant="h5">
                            Crear cuenta
                        </Typography>
                        <div>
                            <FormUser
                                inputConfigs={inputCreateAccount}
                                initialValues={initialValues}
                                onSubmit={handleSubmit}
                                validationSchema={validationSchema}
                                txtBtn='Crear Cuenta'
                            />
                        </div>
                        <Typography component="p" className='text-center'>
                            Ya tienes una cuenta?{' '}
                            <Link to='/login' className='text-[#FFB347]'>Iniciar Sesión</Link>
                        </Typography>
                    </div>
                </div>
            </Grid>
            <Grid item xs={6} className='bg-[#FFB347] flex'>
                <img src={SVG} alt="Logo" className='m-auto' />
            </Grid>
        </Grid>
    )
}

export default CreateUser