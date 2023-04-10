import './styles.css';

import React, { type FormEvent } from 'react';

import Dialog from '../Dialog';

const INPUT_SUBMIT_TEXT = 'Confirm'

export interface IConfirmDialogProps {
  title: string
  text: string
  onConfirm: () => void
  onClose: () => void
}

const ConfirmDialog: React.FC<React.PropsWithChildren<IConfirmDialogProps>> = (props) => {
  return (
    <Dialog
      logo={''}
      title={props.title}
      isNotification={true}
      isCentered={false}
      onClose={props.onClose}>
      <form className="confirmDialogForm"
        onSubmit={(event: FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          props.onConfirm()
        }} >
          <span role="confirm-dialog-message">{props.text}</span>
          <div className='align-right'>
            <input className="button button-red" type="submit" value={INPUT_SUBMIT_TEXT} role="confirm-dialog-button" />
          </div>
      </form>
    </Dialog>
  )
};

export default ConfirmDialog;
