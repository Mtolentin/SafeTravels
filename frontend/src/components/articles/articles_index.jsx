import React from 'react';
import PostIndexContainer from '../posts/posts_index_container';
import '../../css/articles.css';

class ArticlesIndex extends React.Component{
    constructor(props){
        super(props); 
    }

    componentDidMount(){
        this.props.fetchArticles();
    }

    render(){
        if(this.props.articles[0] === undefined){
            return null;
        }

        let articles_arr = this.props.articles[0].map((article) => {

            return (            
                <li className="article" key={article._id}>
                    <h3>{article.title}</h3>
                    <p>{article.body}</p>
                    <a href={`${article.link}`}>{article.link}</a>
                    <h4>Comments</h4>
                        <PostIndexContainer articleID={article._id} />
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