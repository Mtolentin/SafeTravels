import { connect } from 'react-redux';
import { fetchProducts } from '../../actions/product_actions';
import LeftModuleIndex from './leftmodule_index';

const mapStateToProps = (state) => {
    return {
        products: Object.values(state.entities.products),
        errors: state.errors.products
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProducts: () => dispatch(fetchProducts()),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LeftModuleIndex);