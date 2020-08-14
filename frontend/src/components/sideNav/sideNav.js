import React from 'react';
import '../../css/sideNav.css';

class SideNav extends React.Component {

    componentDidMount() {
        this.props.fetchHotels();
        this.props.fetchRestaurants();
        this.props.fetchActivities();
    }

    render() {

        //     if (this.props.articles[0] === undefined || !Array.isArray(this.props.articles[0])) {
        //         return null;
        //     }

        //     let articles_arr = this.props.articles[0].map((article) => {

        //         let revealComments = (this.state.activeID === article._id) ? 'open' : 'closed';

        //         return (
        //             <li className="article" key={article._id}>
        //                 <h3>{article.title}</h3>
        //                 <p>{article.body}</p>
        //                 <a href={`${article.link}`}>{article.link}</a>
        //                 <br />
        //                 <button className={`show-comments ${revealComments}`} onClick={() => this.showComments(article._id)}>Show Comments</button>

        //                 <div className={`comments-section ${revealComments}`}>
        //                     <button className="show-comments" onClick={() => this.showComments('')}>Hide Comments</button>
        //                     <h4>Comments</h4>
        //                     <PostIndexContainer
        //                         articleID={article._id}
        //                         rerenderParentCallback={this.rerenderParentCallback}
        //                     />
        //                 </div>

        //             </li>
        //         )
        //     });

        // <img className="IProd1"
        //     src={`${product.pictureURL}`}>
        // </img>

        if (this.props.hotels[0] === undefined || 
            !Array.isArray(this.props.hotels[0])) {return null;}
        
        let hotels_arr = this.props.hotels[0].map( (hotel) => {
            return (
                <a href={`${hotel.link1}`} target="_blank"
                    className="oneItem" key={hotel._id}>
                        <img className="anItemPic"
                            src={`${hotel.pictureURL}`}>
                        </img>
                        <h3 className="anItemName">{hotel.name}</h3>
                        <p className="anItemDescription">{hotel.description}</p>
                </a>
            )
        })

        if (this.props.restaurants[0] === undefined ||
            !Array.isArray(this.props.restaurants[0])) { return null; }

        let restaurants_arr = this.props.restaurants[0].map((restaurant) => {
            return (
                <a href={`${restaurant.link1}`} target="_blank"
                    className="oneItem" key={restaurant._id}>
                    <img className="anItemPic"
                        src={`${restaurant.pictureURL}`}>
                    </img>
                    <h3 className="anItemName">{restaurant.name}</h3>
                    <p className="anItemDescription">{restaurant.description}</p>
                </a>
            )
        })

        if (this.props.activities[0] === undefined ||
            !Array.isArray(this.props.activities[0])) { return null; }

        let activities_arr = this.props.activities[0].map((activity) => {
            return (
                <a href={`${activity.link1}`} target="_blank"
                    className="oneItem" key={activity._id}>
                    <img className="anItemPic"
                        src={`${activity.pictureURL}`}>
                    </img>
                    <h3 classname="anItemName">{activity.name}</h3>
                    <p classname="anItemDescription">{activity.description}</p>
                </a>
            )
        })
        //     return (
        //         <div className="articles-main">
        //             <div className="articles-form">
        //                 <form id="article-body" onSubmit={this.handleSubmit}>
        //                     <h3 id="article-form-title">Submit an Article</h3>
        //                     <div className="article-form-content">
        //                         <label>Title
        //                         <input className="article-input" type="text" value={this.state.newArticle.title} onChange={this.update('title')} />
        //                         </label>
        //                         <label>Body
        //                         <textarea id="article-body-submit" type="text" value={this.state.newArticle.body} onChange={this.update('body')} />
        //                         </label>
        //                         <label>Link
        //                         <input className="article-input" type="text" value={this.state.newArticle.link} onChange={this.update('link')} />
        //                         </label>
        //                     </div>
        //                     <input className="article-submit-btn" type="submit" value="Submit Article" />
        //                 </form>
        //             </div>

        //             <div className="articles">
        //                 <ul className="articles-list">
        //                     {articles_arr}
        //                 </ul>
        //             </div>
        //         </div>
        //     )
        // }



        return (
            <div className="theLeft">
                <nav id="sidebar">
                    <ul className="list-unstyled components">
                        <li>
                            <a href="#pageSubmenu1" data-toggle="collapse" 
                            aria-expanded="false" className="dropdown-toggle">
                                Hotels
                            </a>
                            <ul className="collapse list-unstyled" 
                                id="pageSubmenu1">
                                    {hotels_arr}
                            </ul>
                        </li>

                        <li>
                            <a href="#pageSubmenu2" data-toggle="collapse" 
                                aria-expanded="false" className="dropdown-toggle">
                                    Restaurants
                            </a>
                            <ul className="collapse list-unstyled" 
                                id="pageSubmenu2">
                                    {restaurants_arr}
                            </ul>
                        </li>

                        <li>
                        <a href="#pageSubmenu3" data-toggle="collapse" 
                                aria-expanded="false" className="dropdown-toggle">
                                    Activities
                            </a>
                            <ul className="collapse list-unstyled" 
                                id="pageSubmenu3">
                                    {activities_arr}
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
    }
}





export default SideNav;