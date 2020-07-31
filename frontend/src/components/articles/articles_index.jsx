import React from 'react';
import PostIndexContainer from '../posts/posts_index_container';
import '../../css/articles.css';

class ArticlesIndex extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            newArticle: this.props.newArticle,
            toggleComments: false
        };
        this.update = this.update.bind(this);
        this.showComments = this.showComments.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);        
    }

    componentDidMount(){
        this.props.fetchArticles();
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

    showComments(){
        if(this.state.toggleComments === false){
            this.setState({toggleComments: true});
        }else{
            this.setState({toggleComments: false})
        }
    }

    handleSubmit(e){
        e.preventDefault();
        debugger;
        this.props.composeArticle(this.state.newArticle)
            .then(() => {
                debugger;
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

        debugger;

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
            <div className="articles-main">
                <div className="articles-form">
                    <form id="article-body" onSubmit={this.handleSubmit}>
                        <label>Title
                            <input className="article-input" type="text" value={this.state.newArticle.title} onChange={this.update('title')}/>
                        </label>
                        <label>Body
                            <textarea id="article-body-submit" type="text" value={this.state.newArticle.body} onChange={this.update('body')}/>
                        </label>
                        <label>Link
                            <input className="article-input" type="text" value={this.state.newArticle.link} onChange={this.update('link')}/>
                        </label>
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