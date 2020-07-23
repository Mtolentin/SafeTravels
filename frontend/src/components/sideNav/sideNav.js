import React from 'react';
//import '../../css/products.css';

class SideNav extends React.Component{
    //constructor(props) { super(props); }

    componentDidMount() {
        this.props.fetchRestaurants();
    }

    render() {
        return null;

        // const {products} = this.props;

        // if (products[0] === undefined) {
        //     return null;
        // }

        // let products_arr = products[0].map((product) => {

        //         return (
        //             <li className="product" key={product._id}>
        //                 <img className = "product-image"
        //                     src = {`${product.pictureURL}`}>
        //                     </img>
        //                 <div className="product-text"><p className="product-text-2">{product.name} | {product.description}</p></div>
        //             </li>
        //         )

        // })
        // return (
        //     <div className="products">
        //         <ul className="products-list">
        //             {products_arr}
        //         </ul>
        //     </div>
        // )
    }
}





export default SideNav;