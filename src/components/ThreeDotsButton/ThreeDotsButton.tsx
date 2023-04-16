import './styles.css';

import React from 'react';

export interface IThreeDotsButtonProps {
  onClick: () => void
}

const ThreeDotsButton: React.FC<IThreeDotsButtonProps> = ({ onClick }) => {
  const background = '#2A202D'
  const foreground = '#FFFFFF'

  return (
    <button className='three-dots' onClick={(event) => {
      event.stopPropagation();
      onClick()
    }} role="three-dots-button">
      <svg width="32px" height="32px" viewBox="-1.6 -1.6 19.20 19.20" xmlns="http://www.w3.org/2000/svg" fill={foreground} stroke={foreground} strokeWidth="0.8"><g id="SVGRepo_bgCarrier" strokeWidth="0" transform="translate(0,0), scale(1)"><rect x="-1.6" y="-1.6" width="19.20" height="19.20" rx="9.6" fill={background} strokeWidth="0"></rect></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.44800000000000006"></g><g id="SVGRepo_iconCarrier"><path fillRule="evenodd" clipRule="evenodd" d="M7.444 13.832a1 1 0 1 0 1.111-1.663 1 1 0 0 0-1.11 1.662zM8 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"></path></g></svg>
    </button>
  )
};

export default ThreeDotsButton;
