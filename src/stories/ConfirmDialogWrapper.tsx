
import React, { useState } from 'react';
import ConfirmDialog from '../components/ConfirmDialog';

export interface IConfirmDialogWrapperProps {
  title: string
  text: string
  onConfirm: () => void
  onClose: () => void
}

const ConfirmDialogWrapper: React.FC<React.PropsWithChildren<IConfirmDialogWrapperProps>> = (props) => {
  const [dialogIsOpened, setDialogIsOpened] = useState(false);

  return (
    <>
    <button onClick={() => { setDialogIsOpened(true); }}>Open dialog</button>
    { dialogIsOpened &&
        <ConfirmDialog
          title={props.title}
          text={props.text}
          onConfirm={props.onConfirm}
          onClose={() => {
            setDialogIsOpened(false);
            props.onClose();
          }}
        >
        {props.children}
        </ConfirmDialog>
    }
    </>
  );
}

export default ConfirmDialogWrapper;
