import React, { Component } from "react";
import styles from "./ProductsList.module.css";
import Product from "components/Product/Product";


class ProductsList extends Component {

  render() {

    return (<div className={styles.Products}>
      <div>{this.props.manufacturer.manufacturer}</div>
      {this.props.manufacturer.map(product => (
        <Product key={product.id} {...product} />
      ))}
    </div>);
  }
}



export default ProductsList;
