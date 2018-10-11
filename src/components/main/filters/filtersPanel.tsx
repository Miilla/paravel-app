import * as React from 'react';
import './filtersPanel.css';
import DropDownList from '../../utils/DropDownList';
import { colors } from '../../../mockup/colors';
import { connect } from 'react-redux';
import { categories } from '../../../mockup/categories';
import { changeCategory, changeProductColor } from '../../../actions';

interface IStateType {
  onCategoryChange: (categoriesS: string[]) => void;
  onColorChange: (colorS: string[]) => void;
  categoriesS: []
}

const mapStateToProps = (state: any) => {
  return {
    filters: state.filters
  }
}

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
  onCategoryChange: (categoriesS: string[]) => dispatch(changeCategory(categoriesS)),
  onColorChange: (colorS: string[]) => dispatch(changeProductColor(colorS)),
})

class FiltersPanel extends React.Component<any, IStateType> {
  constructor(props: any) {
    super(props);
  }

  public changeCategories = (categoriesS: string[]) => {
    const cate: string[] = [];
    categoriesS.forEach((element: any) => {
      cate.push(element.value)
    });
    this.props.onCategoryChange(cate);
  };

  public changeColor = (colorS: string[]) => {
    const colo: string[]=[];
    colorS.forEach((element: any) => {
      colo.push(element.value)
    });
    this.props.onColorChange(colo);
  };

  public render() {
    return (
      <div className="app-filters-panel">
        <div className="filters-panel">
          <span>Filter:</span>
          <DropDownList items={categories} title={'CATEGORY'} toggleItem={(items: any) => { this.changeCategories(items); }} />
          <DropDownList items={colors} title={'COLOR'} toggleItem={(items: any) => { this.changeColor(items) }} />
        </div>
        <div className="filters-sort">
          SORT BY
        </div>
      </div>
    );
  }
}

export default connect(

  mapStateToProps,
  mapDispatchToProps
)(FiltersPanel);
