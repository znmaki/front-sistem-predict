import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
//import jsonPrueba from '../data/ejm.json'

const handleDelete = (productId: unknown) => {
    // Aquí puedes implementar la lógica para eliminar el producto con el ID proporcionado
    console.log(`Eliminar producto con ID: ${productId}`);
    // Por ejemplo, podrías llamar a una función para realizar la eliminación en tu backend
};

const handleEdit = (productId: unknown) => {
    // Aquí puedes implementar la lógica para eliminar el producto con el ID proporcionado
    console.log(`Editar producto con ID: ${productId}`);
    // Por ejemplo, podrías llamar a una función para realizar la edicion en tu backend
};

/* const columnsSoldProduct: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 150 },
    { field: 'nameProduct', headerName: 'Producto', width: 300 },
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
    {
        field: 'actions',
        headerName: 'Acciones',
        width: 220,
        renderCell: (params) => (
            <div>
                <button onClick={() => handleDelete(params.row.id)}>Eliminar</button>
                <button onClick={() => handleEdit(params.row.id)}>Editar</button>
            </div>
        ),
    },
];

const columnsRecievedProduct: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 150 },
    { field: 'nameProduct', headerName: 'Producto', width: 300 },
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
    {
        field: 'actions',
        headerName: 'Acciones',
        width: 220,
        renderCell: (params) => (
            <div>
                <button onClick={() => handleDelete(params.row.id)}>Eliminar</button>
                <button onClick={() => handleEdit(params.row.id)}>Editar</button>
            </div>
        ),
    },
];

const columnsNewProduc: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 150 },
    { field: 'nameProduct', headerName: 'Producto', width: 300 },
    {
        field: 'actions',
        headerName: 'Acciones',
        width: 220,
        renderCell: (params) => (
            <div>
                <button onClick={() => handleDelete(params.row.id)}>Eliminar</button>
                <button onClick={() => handleEdit(params.row.id)}>Editar</button>
            </div>
        ),
    },
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
] */

// Función reutilizable para la columna de acciones
const actionsColumn = (width: number) => ({
    field: 'actions',
    headerName: 'Acciones',
    width: width,
    renderCell: (params: { row: { id: unknown; }; }) => (
        <div>
            <button onClick={() => handleDelete(params.row.id)}>Eliminar</button>
            <button onClick={() => handleEdit(params.row.id)}>Editar</button>
        </div>
    ),
});

// Función reutilizable para la columna de acciones de Catalogo
const actionsColumnCatalog = (width: number) => ({
    field: 'actions',
    headerName: 'Acciones',
    width: width,
    renderCell: (params: { row: { id: unknown; }; }) => (
        <div>
            <Link to={`/tablero-productos/${params.row.id}`}>S</Link>
        </div>
    ),
});

// Columnas comunes
const commonColumns = [
    { field: 'id', headerName: 'ID', width: 150 },
    { field: 'nameProduct', headerName: 'Producto', width: 300 },
];

// Columnas específicas para cada conjunto de datos
const columnsSoldProduct: GridColDef[] = [
    ...commonColumns,
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
    actionsColumn(220), // Ancho específico para este conjunto
];

const columnsRecievedProduct: GridColDef[] = [
    ...commonColumns,
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
    actionsColumn(220), // Ancho específico para este conjunto
];

const columnsNewProduct: GridColDef[] = [
    ...commonColumns,
    actionsColumn(150), // Ancho específico para este conjunto
];

const columnsCatalog: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'nameProduct', headerName: 'Producto', width: 400 },
    actionsColumnCatalog(210), // Ancho específico para este conjunto
];


const rows = [
    { id: 1, nameProduct: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, nameProduct: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, nameProduct: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, nameProduct: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, nameProduct: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, nameProduct: 'Melisandre', firstName: null, age: 150 },
    { id: 7, nameProduct: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, nameProduct: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, nameProduct: 'Roxie', firstName: 'Harvey', age: 65 },
];

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

export { columnsSoldProduct, rows, columnsCatalog, rowsCatalog, columnsNewProduct, columnsRecievedProduct }
