
import React, { useState } from 'react';

import Dialog, { type IDialogProps } from '../components/Dialog';

export interface IDialogWrapperProps extends IDialogProps {
}

const DialogWrapper: React.FC<React.PropsWithChildren<IDialogWrapperProps>> = ({ logo, title, isWide, isCentered, hasScrollableBody, onClose, children }) => {
  const [dialogIsOpened, setDialogIsOpened] = useState(false);

  const openDialog = (): void => { setDialogIsOpened(true) }
  const closeDialog = (): void => { setDialogIsOpened(false) }

  return (
    <>
    <button className="redFocusedButton" onClick={openDialog} >Open dialog</button>
    { dialogIsOpened &&
      <Dialog
        logo={logo}
        title={title}
        isWide={isWide}
        hasScrollableBody={hasScrollableBody}
        isCentered={isCentered}
        onClose={() => {
          closeDialog();
          onClose();
        }}
      >
        {children}
      </Dialog>
    }
    </>
  );
}

export default DialogWrapper;
