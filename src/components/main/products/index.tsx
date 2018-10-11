import * as React from 'react';
import './index.css';
import products from '../../../mockup/products';
import { Product } from '../../../models/Product';

interface IStateType {
  data: Product[],
}

class ProductsList extends React.Component<any, IStateType> {

  constructor(props: any) {
    super(props);
    this.state = {
      data: products,
    }
  }

  public render() {
    return (
      <div className="product-list">
        {this.state.data.map((product, index) => {
          return <ProductPanel key={index} product={product} />
        })}
      </div>
    );
  }
}

const path = 'images/';

class ProductPanel extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      product: this.props.product,
      colorIndex: 0
    }
  }

  public _onColorChange(index: number) {
    this.setState({ colorIndex: index })
  }

  public render() {
    return (
      <div className="product-item">
        <div className="product-image-cont">
          <img src={path + this.state.product.color[this.state.colorIndex] + '-' + this.state.product.src} className='product-image' />
        </div>
        <div className="product-name">
          {this.state.product.name}
        </div>
        <div className="product-desc">
          {this.state.product.description}
        </div>
        <div className="product-price">
          ${this.state.product.price}
        </div>
        <div className="product-colors">
          {this.state.product.color.map((color: any, index: number) => <Color key={index} color={color} isSelected={(index === this.state.colorIndex)} onColorChange={() => this._onColorChange(index)} />
          )}
        </div>
      </div>
    )
  }

}

const colors = new Map([
  ["BLACK_WHITE", "data:image/png;base64,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"],
  ["YELLOW_WHITE", "data:image/png;base64,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"],
  ["RED_WHITE", "data:image/png;base64,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"],
  ["BLUE_WHITE", "data:image/png;base64,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"]
]);

class Color extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      color: this.props.color,
    }
  }

  public _getImg(color: any) {
    return colors.get(color);
  }
  public render() {
    return (
      <div className={(this.props.isSelected) ? "product-colors-cont-selected" : "product-colors-cont"}>
        <img src={this._getImg(this.state.color)} className="product-colors-img" onClick={() => { this.props.onColorChange() }} />
      </div>
    )
  }
}

export default ProductsList;
