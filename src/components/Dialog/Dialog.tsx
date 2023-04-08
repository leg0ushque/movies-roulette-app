import './styles.css';

import React from 'react';

export interface IDialogProps {
  logo: string
  title: JSX.Element | string
  isNotification: boolean
  onClose: () => void
}

const logo = (content: string | null): JSX.Element | null => {
  if (content !== null) {
    return (
      <div className="dialog-logo">
        {content}
      </div>
    )
  } else {
    return null
  }
}

const Dialog: React.FC<React.PropsWithChildren<IDialogProps>> = (props) => {
  return (
    <div>
        <div className="dialog-overlay" />
        <div className={'dialog' + (props.isNotification ? ' notification ' : '')}>
          <div className="dialog-header">
              <button className="dialog-close-button" onClick={props.onClose}>&#10005;</button>
          </div>
          {logo(props.logo)}
          <div className="dialog-title">
            {props.title}
            </div>
          <div className="dialog-body">
            {props.children}
          </div>
        </div>
    </div>
  );
}

export default Dialog;
