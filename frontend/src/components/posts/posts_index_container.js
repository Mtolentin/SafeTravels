import { connect } from 'react-redux';
import { fetchPosts, deletePost } from '../../actions/post_actions';
import PostIndex from './posts_index';

const mapStateToProps = (state) => {
  return {
      posts: Object.values(state.entities.posts),
      errors: state.errors.post
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
    deletePost: (postId) => dispatch(deletePost(postId))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostIndex);