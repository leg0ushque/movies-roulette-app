import './styles.css';

import React from 'react';

interface IAppNameProps {
  onClick: () => void
}

const AppName: React.FunctionComponent<IAppNameProps> = ({ onClick }) => {
  return (
    <span className='app-name prevent-select' onClick={onClick}><b>movies</b>roulette</span>
  )
};

export default AppName;
