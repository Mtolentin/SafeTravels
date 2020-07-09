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
    }

    update(field){
        return e => {
            this.setState({[field]: e.currentTarget.value});
        }
    }

    handleDelete = (post) => (e) => {
        e.preventDefault();
        this.props.deletePost(post._id)
            .then(() => this.props.fetchPosts() );
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.composePost(this.state)
            .then(() => this.props.fetchPosts() );
        this.setState({text: ''});
    }    


    render(){

        if(this.props.posts[0] === undefined){
            return null;
        }

        let posts_arr = this.props.posts[0].map((post) => {
            
            let buttons = this.state.author.user === post.author.user ?
                (<div className="comment-btn"> <br/> <button>Edit Comment</button> <br/> <button onClick={this.handleDelete(post)}>Delete Comment</button></div>) : (null);

            return(
                <li className="post" key={post._id}>
                    {post.author.username} <br/> {post.date} <br/> {post.text} {buttons}
                </li>
                //Have a edit button as well. Only shows up if the current_user id matches with author id. 
                //Have a delete button. Only shows up if the current_user id matches with author id.
            )
        })

        return(
            // style="display:inline-block;"
            <div className="posts">
                <form onSubmit={this.handleSubmit}>
                    <textarea type="text" value={this.state.text} onChange={this.update('text')}/>

                    <input type="submit" value="Make a Comment!"/>   
                </form>
                <ul className="posts-list">
                    {posts_arr}
                </ul>
            </div>
        )
    }
}

export default PostsIndex;