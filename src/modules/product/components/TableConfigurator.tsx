import { GridColDef } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

// Función reutilizable para la columna de acciones
const actionsColumn = (width: number, handleDelete: (productId: number) => void, handleEdit: (productId: number) => void) => ({
    field: 'actions',
    headerName: 'Acciones',
    width: width,
    renderCell: (params: { row: { id: number; }; }) => (
        <div>
            <button onClick={() => handleDelete(params.row.id)}>Eliminar</button>
            <button onClick={() => handleEdit(params.row.id)}>Editar</button>
        </div >
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
    { field: 'name', headerName: 'Producto', width: 440 },
];

// Columnas específicas para cada conjunto de datos
const columnsSoldProduct = [
    ...commonColumns,
    { field: 'cantidad_vendida', headerName: 'Salida', width: 150 },
    { field: 'costo_venta', headerName: 'Precio por Unidad', width: 220 },
    { field: 'fecha', headerName: 'Fecha', width: 220 }
];

const columnsRecievedProduct = [
    ...commonColumns,
    { field: 'cantidad_comprada', headerName: 'Entrada', width: 150 },
    { field: 'costo_compra', headerName: 'Costo Por Unidad', width: 220 },
    { field: 'fecha', headerName: 'Fecha', width: 220 },
];

const columnsNewProduct = (handleDelete: (productId: number) => void, handleEdit: (productId: number) => void) => [
    ...commonColumns,
    actionsColumn(150, handleDelete, handleEdit), // Pasa handleDelete como argumento
];

const columnsCatalog: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Producto', width: 400 },
    actionsColumnCatalog(210), // Ancho específico para este conjunto
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

export { columnsSoldProduct, columnsCatalog, rowsCatalog, columnsNewProduct, columnsRecievedProduct }
