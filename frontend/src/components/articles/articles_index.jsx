import React from 'react';
import PostIndexContainer from '../posts/posts_index_container';
import '../../css/articles.css';

class ArticlesIndex extends React.Component{
    constructor(props){
        super(props);
        this.state = {toggleComments: false};
        this.showComments = this.showComments.bind(this);
    }

    componentDidMount(){
        this.props.fetchArticles();
    }

    showComments(){
        if(this.state.toggleComments === false){
            this.setState({toggleComments: true});
        }else{
            this.setState({toggleComments: false})
        }
    }

    render(){
        if(this.props.articles[0] === undefined){
            return null;
        }

        let articles_arr = this.props.articles[0].map((article) => {

            let revealComments = this.state.toggleComments ? 'open' : 'closed';

            return (            
                <li className="article" key={article._id}>
                    <h3>{article.title}</h3>
                    <p>{article.body}</p>
                    <a href={`${article.link}`}>{article.link}</a>
                    <br/>
                    <button className={`show-comments ${revealComments}`} onClick={this.showComments}>Show Comments</button> 

                    <div className={`comments-section ${revealComments}`}>
                        <button className="show-comments" onClick={this.showComments}>Hide Comments</button> 
                        <h4>Comments</h4>
                        <PostIndexContainer articleID={article._id} />
                    </div>
                    
                </li>
            )
        });

        return(
            <div className="articles">
                <ul className="articles-list">
                    {articles_arr}
                </ul>
            </div>
        )
    }


}

export default ArticlesIndex;