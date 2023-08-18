import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 150 },
    { field: 'firstName', headerName: 'Producto', width: 300 },
    { field: 'lastName', headerName: 'Stock', width: 140 },
    { field: 'entrde', headerName: 'Entrada', width: 150 },
    {
        field: 'fullName',
        headerName: 'Costo por Unidad (Soles)',
        description: 'COSTO POR ALGO',
        width: 300,
        valueGetter: (params: GridValueGetterParams) =>
            `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    { field: 'fecha', headerName: 'Fecha', width: 220 },
    { field: 'actions', headerName: 'Acciones', width: 220 },
    /* {
        field: 'fullName',
        headerName: 'Costo por Unidad (Soles)',
        description: 'COSTO POR ALGO',
        sortable: false,
        width: 220,
        valueGetter: (params: GridValueGetterParams) =>
            `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    }, */
];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const columnsCatalog: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'nameProduct', headerName: 'Producto', width: 400 },
    {
        field: 'actions',
        headerName: 'Acciones',
        width: 210,
        renderCell: (params) => (
            <button>{params.value}</button>
        ),
    },
]

const rowsCatalog = [
    { id: 1, nameProduct: 'Pantalla OLED Xiaomi Redmi K60 Pro', actions: 'Select' },
    { id: 2, nameProduct: 'Pantalla OLED Oppo Find X6 Pro', actions: 'Select' },
    { id: 3, nameProduct: 'Pantalla OLED Honor Magic4 Pro', actions: 'Select' },
    { id: 4, nameProduct: 'Pantalla AMOLED Samsung Galaxy A33 5G', actions: 'Select' },
    { id: 5, nameProduct: 'Pantalla AMOLED Realme 10', actions: 'Select' },
    { id: 6, nameProduct: 'Pantalla AMOLED Realme 10', actions: 'Select' },
    { id: 7, nameProduct: 'Pantalla AMOLED Realme 10', actions: 'Select' },
    { id: 8, nameProduct: 'Pantalla AMOLED Realme 10', actions: 'Select' },
    { id: 9, nameProduct: 'Pantalla AMOLED Realme 10', actions: 'Select' },
    { id: 10, nameProduct: 'Pantalla AMOLED Realme 10', actions: 'Select' },
    { id: 11, nameProduct: 'Pantalla AMOLED Realme 10', actions: 'Select' },
    { id: 12, nameProduct: 'Pantalla AMOLED Realme 10', actions: 'Select' },
]

export { columns, rows, columnsCatalog, rowsCatalog }