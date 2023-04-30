import React from 'react';

import useCheckboxContext from './useCheckboxContext';

interface ICheckboxGroupItemProps {
  value: string
  label: string
}

const CheckboxGroupItem: React.FC<ICheckboxGroupItemProps> = ({ value, label }) => {
  const { field, helpers } = useCheckboxContext();
  const checked = Boolean(field.value?.find((_: string) => _ === value));
  return (
    <label className='checkbox-label'>
      <input
        {...field}
        type="checkbox"
        checked={checked}
        onChange={() => {
          if (checked) {
            helpers.setValue(field.value.filter((_) => _ !== value));
          } else {
            helpers.setValue([...field.value, value]);
          }
        }}
      />
      {label}
    </label>
  );
}

export default CheckboxGroupItem
