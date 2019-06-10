import { connect } from 'react-redux';
import ProductsList from '../../components/ProductsList/ProductsList';
import Filters from '../../pages/Catalog/components/Filters/Filters'
import ProductService from "../ProductService";



const handleFilterChange = filters => {
    const filteredProducts = ProductService.getProductsByFilter({
        name: filters.text,
        manufacture: filters.manufacture === "All" ? null : filters.manufacture,
        category: filters.category,
        featured: filters.featured
    });
    return filteredProducts;
};


const mapStateToProps = (state) => {
    return {
        manufacturer: handleFilterChange(state.manufacturer),
        initFilters: { text: "", manufacture: "All" },
        manufacturers: ["All", ...ProductService.getManufactures()]
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onManufacturer: (val) => dispatch({ type: 'MANUFACTURER_TEXT', manufacturer: val }),
    }
};


const mapStateToProps2 = () => {
    return { manufacturer: handleFilterChange({ category: "desktop", featured: true }) };
};
const mapStateToProps3 = () => {
    return { manufacturer: handleFilterChange({ category: "tablet", featured: true }) };
};


export const ProductsList1 = connect(mapStateToProps, mapDispatchToProps)(ProductsList);
export const Filters1 = connect(mapStateToProps, mapDispatchToProps)(Filters);


export const ProductsList2 = connect(mapStateToProps2, null)(ProductsList);
export const ProductsList3 = connect(mapStateToProps3, null)(ProductsList);

