import { Box, Modal, Typography } from '@mui/material';
import './NewProductEntry.css';
import { Buttom, FormularioPrueba, Table, inputFormNewProduct} from '../../components';
import { useModal, useValidation } from '../../hooks';

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

const NewProductEntry = () => {
  const { open, handleOpen, handleClose } = useModal();
  const validationSchema = useValidation(inputFormNewProduct);
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
        Registro de nuevos productos recibidos
      </Typography>
      <Buttom click={handleOpen}>Ingresar nuevo producto</Buttom>
      <Table />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <FormularioPrueba
            inputConfigs={inputFormNewProduct}
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
