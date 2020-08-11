import React from 'react';
import '../../css/sideNav.css';

class SideNav extends React.Component {
    //constructor(props) { super(props); }

    componentDidMount() {
        // this.props.fetchHotels();
        this.props.fetchRestaurants();
        // this.props.fetchActivities();
    }

    render() {
        return (
            <div className="wrapper">
                <nav id="sidebar">
                    <div className="sidebar-header">


                        
                        <button type="button" id="sidebarCollapse" 
                        className="btn btn-info">
                            <span>Toggle Sidebar</span>
                        </button>
                        <button className="btn btn-dark d-inline-block d-lg-none ml-auto" 
                            type="button" data-toggle="collapse" 
                            data-target="#navbarSupportedContent" 
                            aria-controls="navbarSupportedContent" 
                            aria-expanded="false" 
                            aria-label="Toggle navigation">
                        </button>

                        
                    </div>
                    <ul className="list-unstyled components">
                        <li>
                            <a href="#pageSubmenu1" data-toggle="collapse" 
                            aria-expanded="false" className="dropdown-toggle">
                                Hotels
                            </a>
                            <ul className="collapse list-unstyled" 
                                id="pageSubmenu1">
                                <li>
                                    <a href="/">Test 1</a>
                                </li>
                                <li>
                                    <a href="/">Test 2</a>
                                </li>
                                <li>
                                    <a href="/">Test 3</a>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <a href="#pageSubmenu2" data-toggle="collapse" 
                                aria-expanded="false" className="dropdown-toggle">
                                    Restaurants
                            </a>
                            <ul className="collapse list-unstyled" 
                                id="pageSubmenu2">
                                <li>
                                    <a href="/">Test 1</a>
                                </li>
                                <li>
                                    <a href="/">Test 2</a>
                                </li>
                                <li>
                                    <a href="/">Test 3</a>
                                </li>
                            </ul>
                        </li>

                        <li>
                        <a href="#pageSubmenu3" data-toggle="collapse" 
                                aria-expanded="false" className="dropdown-toggle">
                                    Activities
                            </a>
                            <ul className="collapse list-unstyled" 
                                id="pageSubmenu3">
                                <li>
                                    <a href="/">Test 1</a>
                                </li>
                                <li>
                                    <a href="/">Test 2</a>
                                </li>
                                <li>
                                    <a href="/">Test 3</a>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <a href="/">
                                The Team
                            </a>
                        </li>

                    </ul>
                </nav>
            </div>
        )

        // const {products} = this.props;

        // if (products[0] === undefined) {
        //     return null;
        // }

        // let products_arr = products[0].map((product) => {

        //         return (
        //             <li classNameNameName="product" key={product._id}>
        //                 <img classNameNameName = "product-image"
        //                     src = {`${product.pictureURL}`}>
        //                     </img>
        //                 <div classNameNameName="product-text"><p classNameNameName="product-text-2">{product.name} | {product.description}</p></div>
        //             </li>
        //         )

        // })
        // return (
        //     <div classNameNameName="products">
        //         <ul classNameNameName="products-list">
        //             {products_arr}
        //         </ul>
        //     </div>
        // )




    }
}





export default SideNav;