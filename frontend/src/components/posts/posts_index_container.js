import { connect } from 'react-redux';
import { fetchPosts, deletePost, composePost, updatePost } from '../../actions/post_actions';
import PostIndex from './posts_index';

const mapStateToProps = (state) => {
  const newPost = {
    text: '',
    origin: '',
    author: {user: state.session.user.id}
  }

  // debugger;

  return {
      newPost: newPost,
      posts: Object.values(state.entities.posts),
      errors: state.errors.post
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
    composePost: (data) => dispatch(composePost(data)),
    updatePost: (data, post) => dispatch(updatePost(data, post)),
    deletePost: (postId) => dispatch(deletePost(postId))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostIndex);