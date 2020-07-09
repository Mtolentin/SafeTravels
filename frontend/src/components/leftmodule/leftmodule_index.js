import React from 'react';
import '../../css/products.css';

class LeftModuleIndex extends React.Component{
    constructor(props) { super(props); }

    componentDidMount() {
        this.props.fetchProducts();
    }

    render() {

        const {products} = this.props;

        if (products[0] === undefined) {
            return null;
        }

        let products_arr = products[0].map((product) => {

                return (
                    <li className="product" key={product._id}>
                        <img className = "IProd1"
                            src = {`${product.pictureURL}`}>
                            </img>
                        {product.name} | {product.description}
                    </li>
                )

        })
        return (
            <div className="products">
                <ul className="products-list">
                    {products_arr}
                </ul>
            </div>
        )
    }
}





export default LeftModuleIndex;