import React, { useState } from 'react';

export interface ISortWay {
  id: string
  name: string
}

export interface ISortControlProps {
  selectedSortId: string
  sortWays: ISortWay[]
  onChange: (sort: string) => void
}

const SortControl: React.FunctionComponent<ISortControlProps> = (props) => {
  const [selectedSortId, setSelectedSortId] = useState(props.selectedSortId)

  const handleDropdownChange = (newValue: string): void => {
    setSelectedSortId(newValue);
    props.onChange(newValue);
  }

  const dropdownItems = props.sortWays.map((item) => (
    (item.id === selectedSortId)
      ? <li className='selected' key={item.name}>{item.name}</li>
      : <li key={item.name} onClick={() => { handleDropdownChange(item.id); }}>{item.name}</li>
  ));

  return (
    <div className="sortControl prevent-select">
      <div className='sortBtn textHalfOpacity'>Sort by</div>
      <div className="dropdown">
        <div className="sortBtn">
          {props.sortWays.find((item) => item.id === selectedSortId)?.name }
          &nbsp;<span className='dropdown-triangle'>&#9660;</span>
        </div>
        <ul className="dropdown-content">
          {dropdownItems}
        </ul>
      </div>
    </div>
  );
};

export default SortControl;
