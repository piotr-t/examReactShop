import React, { Component } from "react";
import HeaderBig from "components/Header/HeaderBig";
import { ProductsList1, Filters1 } from "../../services/store/state";

import ProductService from "services/ProductService";

import styles from "./CatalogPage.module.css";


import { store } from '../../services/store/store'
import { Provider } from 'react-redux';

class CatalogPage extends Component {
  manufacturers = ["All", ...ProductService.getManufactures()];
  initFilters = { text: "", manufacture: "All" };

  state = {
    products: ProductService.getProducts(),

  };







  /*   handleFilterChange = filters => {
      const filteredProducts = ProductService.getProductsByFilter({
        name: filters.text,
        manufacture: filters.manufacture === "All" ? null : filters.manufacture
      });
  
      this.setState({ products: filteredProducts });
    }; */

  render() {
    const {
      state: { products },
      manufacturers,
      initFilters
    } = this;

    return (
      <>
        <HeaderBig>Catalog</HeaderBig>

        <div className={styles.Catalog}>
          <Provider store={store}>
            <div className={styles.ColumnLeft}>
              <Filters1
                initValue={initFilters}
                onChange={this.handleFilterChange}
                manufacturers={manufacturers}
              />
            </div>
            <div className={styles.ColumnRight}>
              <ProductsList1 products={products} />
            </div>
          </Provider>
        </div>
      </>
    );
  }
}


export default CatalogPage;
