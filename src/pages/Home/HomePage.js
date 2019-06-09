import React from "react";

import HeaderBig from "components/Header/HeaderBig";
import HeaderSmall from "components/Header/HeaderSmall";
import { store } from '../../services/store/store'
import { ProductsList2, ProductsList3 } from "../../services/store/state";
import { Provider } from 'react-redux';


const ProductsSection1 = ({ title }) => (
  <>
    <HeaderSmall>{title}</HeaderSmall>
    <Provider store={store}>
      <ProductsList2 />
    </Provider>
  </>
);

const ProductsSection2 = ({ title }) => (
  <>
    <HeaderSmall>{title}</HeaderSmall>
    <Provider store={store}>
      <ProductsList3 />
    </Provider>
  </>
);


const HomePage = () => (
  <>
    <HeaderBig>Welcome to our store</HeaderBig>
    <ProductsSection1 title="Desktops" />
    <ProductsSection2 title="Tablets" />
  </>
);

export default HomePage;
