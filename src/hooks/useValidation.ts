import { useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import * as Yup from 'yup';

const useValidation = (inputs: any[]) => {
  const queryClient = useQueryClient();

  const [validationSchema, setValidationSchema] = useState<Yup.ObjectSchema<any> | null>(null);
  const productSelect: any = queryClient.getQueryData(['productSelect']);

  const initialProduct = {
    name: productSelect?.name ?? '',
  };

  const initialReceived = {
    nameProduct: productSelect?.product.id ?? '',
    cantidad_comprada: productSelect?.quantity ?? 0,
    costo_compra: productSelect?.unitPrice ?? 0,
    fecha: productSelect?.fecha ?? '', //FALTA EL VALOR DE FECHA QUE DEVUELVA EL ELEMENTO
  };

  const initialSold = {
    nameProduct: productSelect?.product.id ?? '',
    cantidad_vendida: productSelect?.quantity ? Math.abs(productSelect?.quantity) : 0,
    costo_venta: productSelect?.unitPrice ?? 0,
    fecha: productSelect?.fecha ?? '', //FALTA EL VALOR DE FECHA QUE DEVUELVA EL ELEMENTO
  };

  const initialValues = {
    email: "",
    password: "",
  };

  const initialCreateUser = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  useEffect(() => {
    const generateSchema = () => {
      const validationSchemaObject = inputs.reduce((schema: any, input: any) => {
        if (input.validation) {
          schema[input.id] = input.validation;
        }
        return schema;
      }, {} as Record<string, Yup.Schema<any>>);
      setValidationSchema(Yup.object().shape(validationSchemaObject));
    };

    generateSchema();
  }, [inputs]);

  return {
    initialValues,
    initialCreateUser,
    initialProduct,
    initialReceived,
    initialSold,
    validationSchema
  };
};

export default useValidation;
