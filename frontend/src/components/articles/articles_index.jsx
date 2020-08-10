import React from 'react';
import PostIndexContainer from '../posts/posts_index_container';
import '../../css/articles.css';

class ArticlesIndex extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            newArticle: this.props.newArticle,
            activeID: ''
        };
        this.update = this.update.bind(this);
        this.showComments = this.showComments.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.rerenderParentCallback = this.rerenderParentCallback.bind(this);        
    }

    componentDidMount(){
        this.props.fetchArticles();
    }

    rerenderParentCallback() {
        this.forceUpdate();
        //debugger;
        console.log("Should be something");
    }

    update(field){
        return e => {
        let value = e.target.value
        this.setState(prevState => {
                prevState.newArticle[field] =  value;
                return {
                    newArticle: prevState.newArticle
                };
            });  
        }
    }    

    showComments(id){
        this.setState({
            activeID: id
        });
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.composeArticle(this.state.newArticle)
            .then(() => {
                this.props.fetchArticles()} );
        this.setState({
            newArticle: {           
                title: '',
                body: '',
                link: ''
            }
        });
    }     

    render(){
        if(this.props.articles[0] === undefined || !Array.isArray(this.props.articles[0])){
            return null;
        }

        let articles_arr = this.props.articles[0].map((article) => {

            let revealComments = (this.state.activeID === article._id) ? 'open' : 'closed';

            return (            
                <li className="article" key={article._id}>
                    <h3>{article.title}</h3>
                    <p>{article.body}</p>
                    <a href={`${article.link}`}>{article.link}</a>
                    <br/>
                    <button className={`show-comments ${revealComments}`} onClick={() => this.showComments(article._id)}>Show Comments</button> 

                    <div className={`comments-section ${revealComments}`}>
                        <button className="show-comments" onClick={() => this.showComments('')}>Hide Comments</button> 
                        <h4>Comments</h4>
                        <PostIndexContainer 
                            articleID={article._id} 
                            rerenderParentCallback={this.rerenderParentCallback}
                        />
                    </div>
                    
                </li>
            )
        });

        return(
            <div className="articles-main">
                <div className="articles-form">
                    <form id="article-body" onSubmit={this.handleSubmit}>
                        <h3 id="article-form-title">Submit an Article</h3>
                        <div className="article-form-content">
                            <label>Title
                                <input className="article-input" type="text" value={this.state.newArticle.title} onChange={this.update('title')}/>
                            </label>
                            <label>Body
                                <textarea id="article-body-submit" type="text" value={this.state.newArticle.body} onChange={this.update('body')}/>
                            </label>
                            <label>Link
                                <input className="article-input" type="text" value={this.state.newArticle.link} onChange={this.update('link')}/>
                            </label>
                        </div>
                        <input className="article-submit-btn" type="submit" value="Submit Article"/>   
                    </form>
                </div>

                <div className="articles">
                    <ul className="articles-list">
                        {articles_arr}
                    </ul>
                </div>
            </div>
        )
    }


}

export default ArticlesIndex;