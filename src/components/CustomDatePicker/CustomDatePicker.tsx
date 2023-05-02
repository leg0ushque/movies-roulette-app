import 'react-datepicker/dist/react-datepicker.css';

import { useField } from 'formik';
import React from 'react';
import DatePicker from 'react-datepicker';

interface ICustomDatePickerProps {
  name: string
}

const CustomDatePicker: React.FC<ICustomDatePickerProps> = ({ name = '' }) => {
  const [field, meta, helpers] = useField(name);

  const { value } = meta;
  const { setValue } = helpers;

  return (
    <DatePicker
      showIcon
      {...field}
      selected={value}
      onChange={(date) => { setValue(date); }}
    />
  );
};

export default CustomDatePicker;
