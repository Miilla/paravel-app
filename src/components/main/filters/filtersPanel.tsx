import * as React from 'react';
import './filtersPanel.css';
import DropDownList from '../../utils/DropDownList';
import { colors } from '../../../mockup/colors';

class FiltersPanel extends React.Component {
  public render() {
    return (
      <div className="app-filters-panel">
        <div className="filters-panel">
          <span>Filter:</span>
          <DropDownList items={colors} title={'Color'} toggleItem={(value, name) => { alert(1) }} />
        </div>
        <div className="filters-sort">
          SORT BY
            </div>
      </div>
    );
  }
}

export default FiltersPanel;
