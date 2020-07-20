import React from 'react';
import '../../css/products.css';
// import Map from '../map/map';
import GoogleMapReact from 'google-map-react';


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
                        <img className = "product-image"
                            src = {`${product.pictureURL}`}>
                            </img>
                        <div className="product-text"><p className="product-text-2">{product.name} | {product.description}</p></div>
                    </li>
                )

        })
        return (
            <div>
            <div className="products">
                <ul className="products-list">
                    {products_arr}
                </ul>
                
            </div>
            <div style={{ height: '400px', width: '700px' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{
                            key: "AIzaSyD08v3gCxdxpJfPbyVumLtw5qwPg2gPDTs",
                            language: 'en'
                        }}
                        defaultCenter={{
                            lat: 37.77,
                            lng: -122.43
                        }}
                        defaultZoom={12}
                        />
            </div>
            </div>
        )
    }
}





export default LeftModuleIndex;