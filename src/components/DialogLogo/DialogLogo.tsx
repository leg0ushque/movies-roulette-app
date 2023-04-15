import './styles.css';

import React from 'react';

import type Logo from './logo.enum';

interface IDialogLogoProps {
  char?: Logo
}

const DialogLogo: React.FunctionComponent<IDialogLogoProps> = ({ char }) => {
  if (!char) {
    return null
  }

  return (
    <div className="dialog-logo prevent-select" role="dialog-logo">
      { char }
    </div>
  )
}

export default DialogLogo;
