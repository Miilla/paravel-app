import * as React from 'react';
import './App.css';
import { connect } from 'react-redux';
import Header from './header/Header';
import PromotionPanel from './promotionPanel/promotionPanel';
import FiltersPanel from './main/filters/filtersPanel';
import ProductsList from './main/products';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Header />
        <PromotionPanel />
        <FiltersPanel/>
        <ProductsList />
      </div>
    );
  }
}

export default connect()(App);
