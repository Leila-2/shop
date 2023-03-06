import React from 'react';
import FilterItem from './FilterItem';

export default function Filter({ curFilter, updateFilter }) {
  const onFiltersChange = (event) => {
    const newFilter = event.target.value;
    updateFilter(newFilter);
  };
  return (
    <form className={'filters-panel'}>
      <h2>Select filter</h2>
      <FilterItem
        checked={curFilter === 'all'}
        name={'all'}
        onChange={onFiltersChange}
      />
      <FilterItem
        checked={curFilter === 'highest'}
        name={'highest'}
        onChange={onFiltersChange}
      />
      <FilterItem
        checked={curFilter === 'lowest'}
        name={'lowest'}
        onChange={onFiltersChange}
      />
    </form>
  );
}
