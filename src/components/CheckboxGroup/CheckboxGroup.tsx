import { useField } from 'formik';
import React, { type ReactNode } from 'react';

import Item from './CheckboxGroupItem';
import { CheckboxProvider } from './useCheckboxContext';

interface ICheckboxGroupProps {
  children: ReactNode
  name: string
  label?: string
}

const CheckboxGroup: React.FC<ICheckboxGroupProps> = ({ name, label, children }) => {
  const [field, meta, helpers] = useField<string[]>(name);
  return (
    <CheckboxProvider value={{ field, helpers, meta }}>
      <fieldset>
        {label && <legend>{label}</legend>}
        {children}
      </fieldset>
    </CheckboxProvider>
  );
}

export default Object.assign(CheckboxGroup, { Item });
