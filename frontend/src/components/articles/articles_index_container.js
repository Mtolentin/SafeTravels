import { connect } from 'react-redux';
import ArticlesIndex from './articles_index';
import { fetchArticles } from '../../actions/article_actions';

const mapStateToProps = (state) => {

    return {
        articles: Object.values(state.entities.articles),
        errors: state.errors.article     
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
        fetchArticles: () => dispatch(fetchArticles())
    }
  }


export default connect(
    mapStateToProps,
    mapDispatchToProps

  )(ArticlesIndex);
