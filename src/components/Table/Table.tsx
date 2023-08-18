import { DataGrid, GridToolbarQuickFilter } from '@mui/x-data-grid';
import { Box, Typography } from '@mui/material';
import { columns, columnsCatalog, rows, rowsCatalog } from './const';

const QuickSearchToolbar = () => {
    return (
        <Box className='flex items-center justify-end space-x-5 mb-5'>
            <Typography component='p'>Buscar</Typography>
            <GridToolbarQuickFilter className='' />
        </Box>
    );
}

const Table = () => {
    return (
        <div className='w-[100%] bg-white px-5 py-5 m-auto rounded-sm'>
            <DataGrid
                rows={rows}
                columns={columns}
                slots={{
                    toolbar: QuickSearchToolbar
                }}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
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

const TableCatalog = () => {
    return (
        <div className='h-[88.5%] bg-white m-auto rounded-sm px-10 py-7 shadow-lg'>
            <DataGrid
                rows={rowsCatalog}
                columns={columnsCatalog}
                slots={{
                    toolbar: QuickSearchToolbar
                }}
                initialState={{
                    pagination: {
                        paginationModel: { pageSize: 7 },
                    },
                }}
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
    )
}

export { Table, TableCatalog }