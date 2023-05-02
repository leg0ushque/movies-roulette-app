import { type FieldHelperProps, type FieldInputProps, type FieldMetaProps } from 'formik';
import { createContext, useContext } from 'react';

interface Context {
  field: FieldInputProps<string[]>
  helpers: FieldHelperProps<string[]>
  meta: FieldMetaProps<string[]>
}

const CheckboxContext = createContext<Context | null>(null);
export const CheckboxProvider = CheckboxContext.Provider;

const useCheckboxContext = (): Context => {
  const context = useContext(CheckboxContext);
  if (!context) {
    throw new Error('Must be used in scope of a CheckboxProvider');
  }

  return context;
}

export default useCheckboxContext;
