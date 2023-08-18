import { useEffect, useState } from 'react';
import * as Yup from 'yup';

const useValidation = (inputs: any[]) => {
  const [validationSchema, setValidationSchema] = useState<Yup.ObjectSchema<any> | null>(null);

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

  return validationSchema;
};

export default useValidation;
