import { Box, Modal, Typography } from '@mui/material';
import { Buttom, FormularioPrueba, Table, inputForm } from '../../components';
import { useModal, useValidation } from '../../hooks';
import './SaleProductEntry.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '35%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const SaleProductEntry = () => {
  const { open, handleOpen, handleClose } = useModal();
  const validationSchema = useValidation(inputForm);

  const handleSubmit = (values: any) => {
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
        Registro de productos vendidos
      </Typography>
      <Buttom click={handleOpen}>Ingresar venta</Buttom>
      <Table />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <FormularioPrueba
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

export default SaleProductEntry