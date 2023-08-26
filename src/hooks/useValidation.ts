import { useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import * as Yup from 'yup';

const useValidation = (inputs: any[]) => {
  const queryClient = useQueryClient();

  const [validationSchema, setValidationSchema] = useState<Yup.ObjectSchema<any> | null>(null);
  const productSelect: any = queryClient.getQueryData(['productSelect']);

  const initialProduct = {
    nameProduct: productSelect?.nameProduct ?? '',
  };

  const initialReceived = {
    nameProduct: productSelect?.nameProduct ?? '',
    cantidad_comprada: productSelect?.cantidad_comprada ?? 0,
    costo_compra: productSelect?.costo_compra ?? 0,
    fecha: productSelect?.fecha ?? '',
  };

  const initialSold = {
    nameProduct: productSelect?.nameProduct ?? '',
    cantidad_vendida: productSelect?.cantidad_vendida ?? 0,
    costo_venta: productSelect?.costo_venta ?? 0,
    fecha: productSelect?.fecha ?? '',
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
