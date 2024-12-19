import './styles.css';

import React from 'react';
import FocusLock from 'react-focus-lock';
import { Portal } from 'react-portal';

import DialogLogo, { Logo } from '../DialogLogo';

export interface IDialogProps {
  logo?: Logo
  title: JSX.Element | string
  isWide?: boolean
  isCentered?: boolean
  hasScrollableBody?: boolean
  onClose: () => void
}

const Dialog: React.FC<React.PropsWithChildren<IDialogProps>> = ({ logo, title, isWide, isCentered, hasScrollableBody, onClose, children }) => {
  return (
    <Portal>
        <FocusLock>
          <div className="dialog-overlay" />
          <div className={`dialog${isWide ? ' wide' : ''}${(isCentered ? ' centered' : '')}`} role="dialog">
            <div className="dialog-header">
                <button className="dialog-close-button" role="dialog-close-button" onClick={onClose}>&#10005;</button>
            </div>
            <DialogLogo char={logo}/>
            <div className="dialog-title" role="dialog-title">
              {title}
              </div>
            <div className={`dialog-body${hasScrollableBody ? ' scrollable' : ''}`} role="dialog-body">
              {children}
            </div>
          </div>
      </FocusLock>
    </Portal>
  );
}

export default Dialog;
