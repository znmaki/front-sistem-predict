import { Typography } from '@mui/material';
import jsonData from '../data/data.json'
import CardProduct from '../components/CardProduct';
import Title from '../../../shared/components/Title';
import { TableCatalog } from '../components/ProductTable';
import MonthlyDemandChart from '../components/MonthlyDemandChart';

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
          <Title title='Información de Inventario' infoHover={jsonData.infoTitle.inventoryData} style='basis-[55%]' />

          <div className='grid grid-cols-2 gap-10'>
            <CardProduct quantity='15' title={jsonData.titleCard[0]} />
            <CardProduct quantity='25' title={jsonData.titleCard[1]} />
            <CardProduct quantity='7500.00' title={jsonData.titleCard[2]} />
            <CardProduct quantity='1500.00' title={jsonData.titleCard[3]} />
          </div>
          {/* MODIFICAR */}
          <Title title='Optimización del inventario' infoHover={jsonData.infoTitle.inventoryOptimized} style='basis-[61%]' />
          <CardProduct size='12' quantity='1500.00' title='Cantidad económica de pedido' />
        </div>

        <div className='row-span-2'>
          <Title title='Catálogo de Productos' infoHover={jsonData.infoTitle.productCatalog} />
          <TableCatalog />
        </div>
      </div>

      <div>
        <Title
          title='Predicción de demanda'
          infoHover={jsonData.infoTitle.predictedDemand}
          styleLine='basis-[72.4%]'
        />

        <MonthlyDemandChart />
      </div>
    </div>
  )
}

export default ProductPanel