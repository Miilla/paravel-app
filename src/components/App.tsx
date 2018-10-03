import * as React from 'react';
import './App.css';
import { connect } from 'react-redux';
import Header from './header/Header';
import PromotionPanel from './promotionPanel/promotionPanel';
import FiltersPanel from './main/filters/filtersPanel';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Header />
        <PromotionPanel />
        <FiltersPanel/>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default connect()(App);
