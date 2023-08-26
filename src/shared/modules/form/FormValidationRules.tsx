/* eslint-disable react-refresh/only-export-components */
import { ReactNode } from "react";
import * as Yup from "yup";
import { Typography } from "@mui/material";

interface IConstInpuForm {
  id: string;
  title: string;
  type: "normal" | "child";
  typeInput?: string;
  additionalComponent?: ReactNode;
  validation?: Yup.Schema<unknown>;
}

export const inputFormSold: IConstInpuForm[] = [
  {
    id: "nameProduct",
    title: "Producto:",
    type: "normal",
    typeInput: 'select',
    validation: Yup.string().required("El nombre del producto es obligatorio"),
  },
  {
    id: "cantidad_vendida",
    title: "Salida:",
    type: "child",
    typeInput: "number",
    additionalComponent: (
      <Typography component="p" className="text-[#FF954A] !text-xl">
        Stock Actual 40 Unid.
      </Typography>
    ),
    validation: Yup.number()
      .typeError("La cantidad debe ser un número")
      .positive("La cantidad debe ser un número positivo")
      .required("La cantidad es obligatoria"),
  },
  {
    id: "costo_venta",
    title: "Precio de venta por unidad (Soles):",
    type: "child",
    typeInput: "number",
    additionalComponent: (
      <Typography component="p" className="text-[#FF954A] !text-xl">
        Soles (S/.)
      </Typography>
    ),
    validation: Yup.number()
      .typeError("La cantidad debe ser un número")
      .positive("La cantidad debe ser un número positivo")
      .required("La cantidad es obligatoria"),
  },
  {
    id: "fecha",
    title: "Fecha:",
    type: "normal",
    typeInput: "date",
    validation: Yup.string().required("La fecha es obligatoria"),
  },
];

export const inputFormProduct = [
  {
    id: "nameProduct",
    title: "Producto:",
    type: "normal",
    validation: Yup.string().required("El nombre del producto es obligatorio"),
  },
];

export const inputFormRecieved: IConstInpuForm[] = [
  {
    id: "nameProduct",
    title: "Producto:",
    type: "normal",
    typeInput: 'select',
    validation: Yup.string().required("El nombre del producto es obligatorio"),
  },
  {
    id: "cantidad_comprada",
    title: "Salida:",
    type: "child",
    typeInput: "number",
    additionalComponent: (
      <Typography component="p" className="text-[#FF954A] !text-xl">
        Stock Actual 40 Unid.
      </Typography>
    ),
    validation: Yup.number()
      .typeError("La cantidad debe ser un número")
      .positive("La cantidad debe ser un número positivo")
      .required("La cantidad es obligatoria"),
  },
  {
    id: "costo_compra",
    title: "Precio de venta por unidad (Soles):",
    type: "child",
    typeInput: "number",
    additionalComponent: (
      <Typography component="p" className="text-[#FF954A] !text-xl">
        Soles (S/.)
      </Typography>
    ),
    validation: Yup.number()
      .typeError("La cantidad debe ser un número")
      .positive("La cantidad debe ser un número positivo")
      .required("La cantidad es obligatoria"),
  },
  {
    id: "fecha",
    title: "Fecha:",
    type: "normal",
    typeInput: "date",
    validation: Yup.string().required("La fecha es obligatoria"),
  },
];

export const inputFormLogin = [
  {
    id: "email",
    title: "Usuario",
    type: "normal",
    validation: Yup.string().required("asddsdsasd"),
  },
  {
    id: "password",
    title: "Contraseña",
    type: "normal",
    typeInput: "password",
    validation: Yup.string().required("asddsasd"),
  },
];

export const inputCreateAccount = [
  {
    id: "firstName",
    title: "Nombre",
    type: "normal",
    validation: Yup.string().required("asddsdsasd"),
  },
  {
    id: "lastName",
    title: "Apellido",
    type: "normal",
    validation: Yup.string().required("asddsdsasd"),
  },
  {
    id: "email",
    title: "Email",
    type: "normal",
    validation: Yup.string().required("asddsdsasd"),
  },
  {
    id: "password",
    title: "Contraseña",
    type: "normal",
    typeInput: "password",
    validation: Yup.string().required("asddsdsasd"),
  },
];

export type { IConstInpuForm };
