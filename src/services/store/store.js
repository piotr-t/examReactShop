import { createStore } from 'redux';
import ProductService from "../ProductService";

const reducer = (state, action) => {
    switch (action.type) {
        case 'MANUFACTURER_TEXT':
            return { ...state, manufacturer: action.manufacturer };
        default:
            return state;
    }
};

export const store = createStore(reducer, {

    manufacturer: {

        manufacture: "All",
        text: "",
        initFilters: { text: "", manufacture: "All" },
        manufacturers: ["All", ...ProductService.getManufactures()]
    },
});

