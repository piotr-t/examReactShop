import React, { Component } from "react";
import HeaderBig from "components/Header/HeaderBig";
import styles from "./CatalogPage.module.css";

import { ProductsList1, Filters1 } from "../../services/store/state";
import { store } from '../../services/store/store'
import { Provider } from 'react-redux';

class CatalogPage extends Component {

  render() {

    return (
      <>
        <HeaderBig>Catalog</HeaderBig>
        <div className={styles.Catalog}>
          <Provider store={store}>
            <div className={styles.ColumnLeft}>
              <Filters1 />
            </div>
            <div className={styles.ColumnRight}>
              <ProductsList1 />
            </div>
          </Provider>
        </div>
      </>
    );
  }
}


export default CatalogPage;
