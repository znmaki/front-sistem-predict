import { Typography } from '@mui/material';
import './ProductPanel.css';
import { Card, Chart, TableCatalog, Title } from '../../components';
import { infoHover } from '.';

const ProductPanel = () => {
  return (
    <div className='h-full px-10 space-y-10 overflow-scroll overflow-x-hidden pt-16'>
      <Typography variant="h4" component='h1' className='!font-bold !text-[3.125rem]'>
        Estimación de la demanda futura
        <Typography variant="h4" component='p' className='!font-bold !text-[3.125rem] text-[#FF954A]'>
          Pantalla OLED Xiaomi Redmi K60 Pro
        </Typography>
      </Typography>
      <div className='grid grid-cols-2 gap-10'>
        <div>
          <Title title='Información de Inventario' infoHover={infoHover.inventoryData} style='basis-[55%]' />

          <div className='grid grid-cols-2 gap-10'>
            <Card quantity='15' title='Unidades disponibles' />
            <Card quantity='25' title='Unidades vendidas' />
            <Card quantity='7500.00' title='Ingreso total en Soles' />
            <Card quantity='1500.00' title='Ganancia total en Soles' />
          </div>
          {/* MODIFICAR */}
          <Title title='Optimización del inventario' infoHover={infoHover.inventoryOptimized} style='basis-[61%]' />
          <Card size='12' quantity='1500.00' title='Cantidad económica de pedido' />
        </div>

        <div className='row-span-2'>
          <Title title='Catálogo de Productos' infoHover={infoHover.productCatalog} />
          <TableCatalog />
        </div>
      </div>

      <div>
        <Title
          title='Predicción de demanda'
          infoHover={infoHover.predictedDemand}
          styleLine='basis-[72.4%]'
        />

        <Chart />
      </div>
    </div>
  )
}

export default ProductPanel