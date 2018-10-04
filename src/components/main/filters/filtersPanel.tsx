import * as React from 'react';
import './filtersPanel.css';
import DropDownList from '../../utils/DropDownList';
import { colors } from '../../../mockup/colors';
import { categories } from '../../../mockup/categories';

class FiltersPanel extends React.Component {
  public render() {
    return (
      <div className="app-filters-panel">
        <div className="filters-panel">
          <span>Filter:</span>
          <DropDownList items={categories} title={'CATEGORY'} toggleItem={(value: string, name: string) => { alert(name + value) }} />
          <DropDownList items={colors} title={'COLOR'} toggleItem={(value: string, name: string) => { alert(name + value) }} />
        </div>
        <div className="filters-sort">
          SORT BY
        </div>
      </div>
    );
  }
}

export default FiltersPanel;
