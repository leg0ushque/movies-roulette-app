import React, { useEffect, useState } from 'react';

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

  useEffect(() => {
    props.onChange(selectedSortId);
  }, [selectedSortId])

  const handleDropdownChange = (newValue: string): void => {
    setSelectedSortId(newValue);
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
          {props.sortWays.find((item) => item.id === selectedSortId)?.name }
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
