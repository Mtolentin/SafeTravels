import { connect } from 'react-redux';
import ArticlesIndex from './articles_index';
import { fetchArticles, composeArticle } from '../../actions/article_actions';

const mapStateToProps = (state) => {

  const newArticle = {
    title: '',
    body: '',
    link: '',
  }

    return {
        newArticle: newArticle,
        articles: Object.values(state.entities.articles),
        errors: state.errors.article     
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
        fetchArticles: () => dispatch(fetchArticles()),
        composeArticle: data => dispatch(composeArticle(data))
    }
  }


export default connect(
    mapStateToProps,
    mapDispatchToProps

  )(ArticlesIndex);
