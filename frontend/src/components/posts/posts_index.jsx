import React from 'react';

class PostsIndex extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchPosts();
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
                <ul className="posts-list">
                    {posts_arr}
                </ul>
            </div>
        )
    }
}

export default PostsIndex;