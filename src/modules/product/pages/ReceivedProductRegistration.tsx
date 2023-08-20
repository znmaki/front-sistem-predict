import { Box, Modal, Typography } from '@mui/material';
import { useModal, useValidation } from '../../../hooks';
import { Buttom, FormProduct, inputForm } from '../../../shared';
import { ProductRecievedTable } from '../components/ProductTable';

const NewProductEntry = () => {
  const { open, handleOpen, handleClose, style } = useModal();
  const validationSchema = useValidation(inputForm);
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
        Registro de nuevos productos recibidos
      </Typography>
      <Buttom click={handleOpen}>Ingresar nuevo producto</Buttom>
      <ProductRecievedTable />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <FormProduct
            inputConfigs={inputForm}
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          />
        </Box>
      </Modal>
    </div>
  )
}

export default NewProductEntry
