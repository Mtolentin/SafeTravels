import { connect } from 'react-redux';
import { fetchPosts, deletePost, composePost } from '../../actions/post_actions';
import PostIndex from './posts_index';

const mapStateToProps = (state) => {
  debugger
  const newPost = {
    text: '',
    username: state.session.user.username
  }


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
    deletePost: (postId) => dispatch(deletePost(postId))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostIndex);