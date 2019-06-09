import { createStore } from 'redux';
//import ProductService from "../ProductService";

/* const handleFilterChange = filters => {
    const filteredProducts = ProductService.getProductsByFilter({
        name: filters.text,
        manufacture: filters.manufacture === "All" ? null : filters.manufacture
    });
    return filteredProducts;
}; */

const reducer = (state, action) => {
    switch (action.type) {
        case 'MANUFACTURER_TEXT':
            return { ...state, manufacturer: action.manufacturer };
        case 'MANUFACTURER_HOMEPAGE':
            return { ...state, category: action.category };
        default:
            return state;
    }
};

export const store = createStore(reducer, { manufacturer: "All" });

