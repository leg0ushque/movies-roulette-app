import './styles.css';

import React from 'react';

export interface IDialogProps {
  logo: JSX.Element
  title: JSX.Element
  body: JSX.Element
  isNotification: boolean
  onClose: () => void
}

const logo = (content: JSX.Element | null): JSX.Element | null => {
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

const Dialog: React.FC<IDialogProps> = (props) => {
  return (
    <div>
        <div className="dialog-overlay" />
        <div className={'dialog' + (props.isNotification ? ' notification ' : '')}>
            <div className="dialog-header">
                <button className="dialog-close-button" onClick={props.onClose}>&#10005;</button>
            </div>
            {logo(props.logo)}
            <div className="dialog-title">
                <p>{props.title}</p>
            </div>
            <div className="dialog-body">
                <p>{props.body}</p>
            </div>
        </div>
    </div>
  );
}

export default Dialog;
