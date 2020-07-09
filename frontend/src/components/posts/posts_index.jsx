import React from 'react';

class PostsIndex extends React.Component{
    constructor(props){
        super(props);

        this.state = this.props.newPost;

        this.handleSubmit = this.handleSubmit.bind(this);        
    }

    componentDidMount(){
        this.props.fetchPosts();
    }

    // componentDidUpdate(){
    //     this.props.fetchPosts();
    // }

    update(field){
        return e => {
            this.setState({[field]: e.currentTarget.value});
        }
    }

    handleSubmit(e){
        debugger;
        e.preventDefault();
        this.props.composePost(this.state);
    }    


    render(){

        if(this.props.posts[0] === undefined){
            return null;
        }

        let posts_arr = this.props.posts[0].map((post) => {
            return(
                <li className="post" key={post._id}>{post.username} | {post.date} | {post.text}</li>
            )
        })

        return(
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