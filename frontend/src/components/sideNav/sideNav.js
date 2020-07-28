import React from 'react';
import ListIcon from '@material-ui/icons/List';
import '../../css/sideNav.css';

class SideNav extends React.Component{
    //constructor(props) { super(props); }

    componentDidMount() {
        this.props.fetchRestaurants();
    }

    render() {
        return (
            <div className="wrapper">
            <nav id="sidebar">
                <div className="sidebar-header">
                <button type="button" id="sidebarCollapse" className="loggedin-btn">
                            <i className="fas fa-align-left"></i>
                            <span> <ListIcon /></span>
                        </button>
                        <button className="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fas fa-align-justify"></i>
                        </button>
                </div>
    
                <ul className="list-unstyled components">
                    <li className="active">
                        <b href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                            <i className="fas fa-home"></i>
                            Home
                        </b>
                        <ul className="collapse list-unstyled" id="homeSubmenu">
                            <li>
                                <p >Home 1</p>
                            </li>
                            <li>
                                <p >Home 2</p>
                            </li>
                            <li>
                                <p >Home 3</p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <b>
                            <i className="fas fa-briefcase"></i>
                            About
                        </b>
                        <br></br>
                        <b href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                            <i className="fas fa-copy"></i>
                            Pages
                        </b>
                        <ul className="collapse list-unstyled" id="pageSubmenu">
                            <li>
                                <p>Page 1</p>
                            </li>
                            <li>
                                <p>Page 2</p>
                            </li>
                            <li>
                                <p>Page 3</p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <b>
                            <i className="fas fa-image"></i>
                            Portfolio
                        </b>
                    </li>
                    <li>
                        <b>
                            <i className="fas fa-question"></i>
                            FAQ
                        </b>
                    </li>
                    <li>
                        <b>
                            <i className="fas fa-paper-plane"></i>
                            Contact
                        </b>
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
        //             <li classNameName="product" key={product._id}>
        //                 <img classNameName = "product-image"
        //                     src = {`${product.pictureURL}`}>
        //                     </img>
        //                 <div classNameName="product-text"><p classNameName="product-text-2">{product.name} | {product.description}</p></div>
        //             </li>
        //         )

        // })
        // return (
        //     <div classNameName="products">
        //         <ul classNameName="products-list">
        //             {products_arr}
        //         </ul>
        //     </div>
        // )
    }
}





export default SideNav;