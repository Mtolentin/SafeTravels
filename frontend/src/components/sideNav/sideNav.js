import React from 'react';
import '../../css/sideNav.css';

class SideNav extends React.Component{
    //constructor(props) { super(props); }

    componentDidMount() {
        this.props.fetchRestaurants();
    }

    render() {
        return (
        <div class="wrapper">
            <nav id="sidebar">
                <div class="sidebar-header">
                    <h3>Bootstrap Sidebar</h3>
                    <strong>BS</strong>
                </div>
                <ul class="list-unstyled components">
                    <li class="active">
                        <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                            <i class="fas fa-home"></i>
                            Home
                        </a>
                        <ul class="collapse list-unstyled" id="homeSubmenu">
                            <li>
                                <a href="#">Home 1</a>
                            </li>
                            <li>
                                <a href="#">Home 2</a>
                            </li>
                            <li>
                                <a href="#">Home 3</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fas fa-briefcase"></i>
                            About
                        </a>
                        <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                            <i class="fas fa-copy"></i>
                            Pages
                        </a>
                        <ul class="collapse list-unstyled" id="pageSubmenu">
                            <li>
                                <a href="#">Page 1</a>
                            </li>
                            <li>
                                <a href="#">Page 2</a>
                            </li>
                            <li>
                                <a href="#">Page 3</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fas fa-image"></i>
                            Portfolio
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fas fa-question"></i>
                            FAQ
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fas fa-paper-plane"></i>
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>

    <div id="content">

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">

                <button type="button" id="sidebarCollapse" class="btn btn-info">
                    <i class="fas fa-align-left"></i>
                    <span>Toggle Sidebar</span>
                </button>
                <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fas fa-align-justify"></i>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="nav navbar-nav ml-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Page</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Page</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Page</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Page</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <h2>Collapsible Sidebar Using Bootstrap 4</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

        <div class="line"></div>

        <h2>Lorem Ipsum Dolor</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

        <div class="line"></div>

        <h2>Lorem Ipsum Dolor</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

        <div class="line"></div>

        <h3>Lorem Ipsum Dolor</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        
        </div>

        
    </div>

        //     <div className="wrapper">
        //     <nav id="sidebar">
        //         <div className="sidebar-header">
        //         <button type="button" id="sidebarCollapse" className="loggedin-btn">
        //                     <i className="fas fa-align-left"></i>
        //                     <span> <ListIcon /></span>
        //                 </button>
        //                 <button className="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //                     <i className="fas fa-align-justify"></i>
        //                 </button>
        //         </div>
    
        //         <ul className="list-unstyled components">
        //             <li className="active">
        //                 <b href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
        //                     <i className="fas fa-home"></i>
        //                     Home
        //                 </b>
        //                 <ul className="collapse list-unstyled" id="homeSubmenu">
        //                     <li>
        //                         <p >Home 1</p>
        //                     </li>
        //                     <li>
        //                         <p >Home 2</p>
        //                     </li>
        //                     <li>
        //                         <p >Home 3</p>
        //                     </li>
        //                 </ul>
        //             </li>
        //             <li>
        //                 <b>
        //                     <i className="fas fa-briefcase"></i>
        //                     About
        //                 </b>
        //                 <br></br>
        //                 <b href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
        //                     <i className="fas fa-copy"></i>
        //                     Pages
        //                 </b>
        //                 <ul className="collapse list-unstyled" id="pageSubmenu">
        //                     <li>
        //                         <p>Page 1</p>
        //                     </li>
        //                     <li>
        //                         <p>Page 2</p>
        //                     </li>
        //                     <li>
        //                         <p>Page 3</p>
        //                     </li>
        //                 </ul>
        //             </li>
        //             <li>
        //                 <b>
        //                     <i className="fas fa-image"></i>
        //                     Portfolio
        //                 </b>
        //             </li>
        //             <li>
        //                 <b>
        //                     <i className="fas fa-question"></i>
        //                     FAQ
        //                 </b>
        //             </li>
        //             <li>
        //                 <b>
        //                     <i className="fas fa-paper-plane"></i>
        //                     Contact
        //                 </b>
        //             </li>
        //         </ul>
    
        //     </nav>

        // </div>




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