import { DataGrid, GridToolbarQuickFilter } from '@mui/x-data-grid';
import { Box, Typography } from '@mui/material';
import { columnsCatalog, rowsCatalog, columnsSoldProduct, columnsNewProduct, columnsRecievedProduct } from './TableConfigurator';
import { useProduct } from '../hooks/useProduct';
import { useProductEntry } from '../hooks/useProductEntry';
import { useProductSales } from '../hooks/useProductSales';

const QuickSearchToolbar = () => {
    return (
        <Box className='flex items-center justify-end space-x-5 mb-5'>
            <Typography component='p'>Buscar</Typography>
            <GridToolbarQuickFilter className='' />
        </Box>
    );
}

//const ProductTable = ({ rows, columns }: Props) => {
const ProductTable = ({ rowData, handleOpen }: any) => {
    const { handleDelete, handleEdit } = useProduct(handleOpen)
    return (
        <div className='w-[100%] bg-white px-5 py-5 m-auto rounded-sm'><DataGrid
            rows={rowData}
            columns={columnsNewProduct(handleDelete, handleEdit)}
            slots={{
                toolbar: QuickSearchToolbar
            }}
            initialState={{
                pagination: {
                    paginationModel: { page: 0, pageSize: 5 },
                },
            }}
            pageSizeOptions={[5, 10, 25]}
            sx={{
                '& .MuiDataGrid-columnHeader': {
                    backgroundColor: '#3F3D56',
                    fontWeight: 'bold',
                    fontSize: '1.25rem',
                    color: '#FFFFFF',
                    padding: '8px',
                    paddingLeft: '2rem'
                },
                '& .MuiDataGrid-cell': {
                    color: '#3F3D56',
                    paddingLeft: '2rem',
                    /* fontWeight: 'bold', */
                    fontSize: '1.25rem',
                },
                border: 'none',
            }}
        />
        </div>
    );
}

const ProductRecievedTable = ({ rowData, handleOpen }: any) => {
    const { handleDelete, handleEdit } = useProductEntry(handleOpen)
    return (
        <div className='w-[100%] bg-white px-5 py-5 m-auto rounded-sm'>
            {!rowData ? (<p>no hay</p>) : (
                <DataGrid
                    rows={rowData}
                    columns={columnsRecievedProduct}
                    slots={{
                        toolbar: QuickSearchToolbar
                    }}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                    }}
                    pageSizeOptions={[5, 10, 25]}
                    sx={{
                        '& .MuiDataGrid-columnHeader': {
                            backgroundColor: '#3F3D56',
                            fontWeight: 'bold',
                            fontSize: '1.25rem',
                            color: '#FFFFFF',
                            padding: '8px',
                            paddingLeft: '2rem'
                        },
                        '& .MuiDataGrid-cell': {
                            color: '#3F3D56',
                            paddingLeft: '2rem',
                            /* fontWeight: 'bold', */
                            fontSize: '1.25rem',
                        },
                        border: 'none',
                        '& .MuiDataGrid-cell:focus-within, & .MuiDataGrid-cell:focus': {
                            outline: 'none',
                        },
                        '& .Mui-selected': {
                            backgroundColor: 'rgba(0, 0, 0, .15) !important',
                            transition: 'background-color 500ms',
                        },
                    }}
                    disableRowSelectionOnClick
                />
            )}
        </div>
    );
}

const ProductSoldTable = ({ rowData }: any) => {
    return (
        <div className='w-[100%] bg-white px-5 py-5 m-auto rounded-sm'>
            {!rowData ? (<p>no hay</p>) : (
                <DataGrid
                    rows={rowData}
                    columns={columnsSoldProduct}
                    slots={{
                        toolbar: QuickSearchToolbar
                    }}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                    }}
                    pageSizeOptions={[5, 10, 25]}
                    sx={{
                        '& .MuiDataGrid-columnHeader': {
                            backgroundColor: '#3F3D56',
                            fontWeight: 'bold',
                            fontSize: '1.25rem',
                            color: '#FFFFFF',
                            padding: '8px',
                            paddingLeft: '2rem'
                        },
                        '& .MuiDataGrid-cell': {
                            color: '#3F3D56',
                            paddingLeft: '2rem',
                            /* fontWeight: 'bold', */
                            fontSize: '1.25rem',
                        },
                        border: 'none',
                        '& .MuiDataGrid-cell:focus-within, & .MuiDataGrid-cell:focus': {
                            outline: 'none',
                        },
                        '& .Mui-selected': {
                            backgroundColor: 'rgba(0, 0, 0, .15) !important',
                            transition: 'background-color 500ms',
                        },
                    }}
                    disableRowSelectionOnClick
                />
            )}
        </div>
    );
}

const TableCatalog = ({ rowData }: any) => {

    return (
        <div className='h-[88.5%] bg-white m-auto rounded-sm px-10 py-7 shadow-lg'>
            {!rowData ? (<p>no hay</p>) : (
                <DataGrid
                    rows={rowData}
                    columns={columnsCatalog}
                    slots={{
                        toolbar: QuickSearchToolbar
                    }}
                    initialState={{
                        pagination: {
                            paginationModel: { pageSize: 7 },
                        },
                    }}
                    pageSizeOptions={[7]}
                    sx={{
                        '& .MuiDataGrid-columnHeader': {
                            backgroundColor: '#3F3D56',
                            fontWeight: 'bold',
                            fontSize: '1.25rem',
                            color: '#FFFFFF',
                            padding: '8px',
                            paddingLeft: '2rem'
                        },
                        '& .MuiDataGrid-cell': {
                            color: '#3F3D56',
                            paddingLeft: '2rem',
                            /* fontWeight: 'bold', */
                            fontSize: '1.25rem',
                        },
                        border: 'none',
                    }}
                />
            )}
        </div>
    )
}

export { ProductTable, TableCatalog, ProductRecievedTable, ProductSoldTable }
