import { Typography, Modal, Box } from "@mui/material"
import { ProductTable } from ".."
import { Buttom, FormProduct, inputFormProduct } from "../../../shared"
import { useModal, useValidation } from "../../../hooks";

const RegisterProduct = () => {
    const { open, handleOpen, handleClose, style } = useModal();
    const validationSchema = useValidation(inputFormProduct);

    const handleSubmit = (values: unknown) => {
        console.log(values);
    };

    const initialValues = {
        productName: '',
        quantity: 0,
        price: 0,
        date: '',
    };
    return (
        <div className='h-screen px-10 space-y-10 pt-16'>
            <Typography variant="h4" component='h1' className='!font-bold !text-[3.125rem]'>
                Registro de productos
            </Typography>
            <Buttom click={handleOpen}>Ingresar Producto</Buttom>
            <ProductTable />
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={style}>
                    <FormProduct
                        inputConfigs={inputFormProduct}
                        initialValues={initialValues}
                        onSubmit={handleSubmit}
                        validationSchema={validationSchema}
                    />
                </Box>
            </Modal>
        </div>
    )
}

export default RegisterProduct
