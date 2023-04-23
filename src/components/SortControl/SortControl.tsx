import './styles.css';

import React, { useState } from 'react';

export interface ISortWay {
  id: string
  name: string
}

export interface ISortControlProps {
  isSortDesc: boolean
  toggleSortOrder: () => void
  selectedSortId?: string
  sortWays: ISortWay[]
  onChange: (sort: string) => void
}

const SortControl: React.FunctionComponent<ISortControlProps> = (props) => {
  const [selectedSortId, setSelectedSortId] = useState(props.selectedSortId ?? props.sortWays[0].id)

  const handleDropdownChange = (newValue: string): void => {
    if (selectedSortId === newValue) {
      props.toggleSortOrder()
    } else {
      setSelectedSortId(newValue);
      props.onChange(newValue)
    }
  }

  const dropdownItems = props.sortWays.map((item) => (
    <li
      key={item.name}
      className={item.id === selectedSortId ? 'selected' : ''}
      onClick={() => { handleDropdownChange(item.id); }}
    >
    {item.name}
    </li>
  ));

  return (
    <div className="sortControl prevent-select">
      <div className='sortBtn textHalfOpacity'>Sort by</div>
      <div className="dropdown">
        <div className="sortBtn">
          {props.sortWays.find((item) => item.id === selectedSortId)?.name } &nbsp;
          {props.isSortDesc
            ? <svg width="20px" height="20px" viewBox="0 0 24 24" fill="#ffffff" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Edit / Sort_Ascending"> <path id="Vector" d="M4 17H10M4 12H13M18 11V19M18 19L21 16M18 19L15 16M4 7H16" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g> </g></svg>
            : <svg width="20px" height="20px" viewBox="0 0 24 24" fill="#ffffff" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Edit / Sort_Descending"> <path id="Vector" d="M4 17H16M4 12H13M4 7H10M18 13V5M18 5L21 8M18 5L15 8" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g> </g></svg>
          }
          &nbsp;<span className='dropdown-triangle'>&#9660;</span>
        </div>
        <ul className="dropdown-content" role="sortList">
          {dropdownItems}
        </ul>
      </div>
    </div>
  );
};

export default SortControl;
