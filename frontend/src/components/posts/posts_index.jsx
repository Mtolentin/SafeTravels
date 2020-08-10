import React from 'react';
import '../../css/posts.css';

class PostsIndex extends React.Component{
    constructor(props){
        super(props);

        this.state = this.props.newPost;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        this.handleDelete = this.handleDelete.bind(this);        
    }

    componentDidMount(){
        this.props.fetchPosts();
        //console.log('mounting fetch');
    }
    
    update(field){
        return e => {
            this.setState({[field]: e.currentTarget.value});
        }
    }

    handleDelete = (post) => (e) => {
        e.preventDefault();
        this.props.deletePost(post._id);
        this.props.fetchPosts()
        this.forceUpdate();
    }

    handleSubmit(e){
        e.preventDefault();
        // debugger;
        
        this.setState({
            origin: this.props.articleID
        }, () => {
            this.props.composePost(this.state)
                .then(() => this.props.fetchPosts())
                .then(() => this.setState({text: ''}));
        });

    }    


    render(){

        if(this.props.posts[0] === undefined){
            return null;
        }

        let posts_arr = this.props.posts[0].map((post) => {
            // debugger;
            if(post.origin !== this.props.articleID){
                return null;
            }
            
            let buttons = this.state.author.user === post.author.user ?
                (<div className="comment-btn"> 
                    <button className="comment-btns edit-btn">Edit Comment</button>  
                    
                    <button className="comment-btns delete-btn" 
                        onClick={this.handleDelete(post)}>Delete Comment
                    </button>

                </div>) : (null);

            const options = {
                timeZone:"America/Los_Angeles",
                hour12 : true,
                hour:  "2-digit",
                minute: "2-digit"
            };
            
            let date = new Date(post.date).toLocaleDateString('en-US', options);


            return(
                <li className="post" key={post._id}>
                    <p className="comment-content">{post.author.username} ({date}) <br/> {post.text}</p> 
                    {buttons}
                </li>
                //Have a edit button as well. Only shows up if the current_user id matches with author id. 
                //Have a delete button. Only shows up if the current_user id matches with author id.
            )
        })

        return(
            // style="display:inline-block;"
            <div className="posts">
                <form id="comment-body" onSubmit={this.handleSubmit}>
                    <textarea id="comment-submit" type="text" value={this.state.text} onChange={this.update('text')}/>

                    <input className="comment-submit-btn" type="submit" value="Make a Comment!"/>   
                </form>
                <ul className="posts-list">
                    {posts_arr}
                </ul>
            </div>
        )
    }
}

export default PostsIndex;