import * as ArticleUtil from '../util/articles_util';

export const RECEIVE_ARTICLES = "RECEIVE_ARTICLES";
export const RECEIVE_ARTICLE = "RECEIVE_ARTICLE";
export const RECEIVE_ARTICLE_ERRORS = "RECEIVE_ARTICLE_ERRORS";

export const receiveArticles = articles => ({
    type: RECEIVE_ARTICLES,
    articles
});

export const receiveArticle = article => ({
    type: RECEIVE_ARTICLE,
    article
});

export const receiveArticlerrors = errors => ({
    type: RECEIVE_ARTICLE_ERRORS,
    errors
});

export const fetchArticles = () => dispatch => (
    ArticleUtil.getArticles()
      .then(articles => dispatch(receiveArticles(articles)))
      .catch(err => dispatch(receiveArticleErrors(err.response.data)))
);
  
export const fetchComments = id => dispatch => (
    ArticleUtil.getComments(id)
        .then(articles => dispatch(receiveArticles(articles)))
        .catch(err => dispatch(receiveArticleErrors(err.response.data)))
);