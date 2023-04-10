
import FocusTrap from 'focus-trap-react';
import React, { useState } from 'react';

import Dialog from '../components/Dialog';

export interface IDialogWrapperProps {
  logo: string
  title: JSX.Element | string
  isNotification: boolean
  isCentered: boolean
  onClose: () => void
}

const DialogWrapper: React.FC<React.PropsWithChildren<IDialogWrapperProps>> = (props) => {
  const [dialogIsOpened, setDialogIsOpened] = useState(false);

  const openDialog = (): void => { setDialogIsOpened(true) }
  const closeDialog = (): void => { setDialogIsOpened(false) }

  return (
    <>
    <button className="redFocusedButton" onClick={openDialog} >Open dialog</button>
    { dialogIsOpened &&
      <FocusTrap active={dialogIsOpened}>
        <Dialog
          logo={props.logo}
          title={props.title}
          isNotification={props.isNotification}
          isCentered={props.isCentered}
          onClose={() => {
            closeDialog();
            props.onClose();
          }}
        >
          {props.children}
        </Dialog>
      </FocusTrap>
    }
    </>
  );
}

export default DialogWrapper;
