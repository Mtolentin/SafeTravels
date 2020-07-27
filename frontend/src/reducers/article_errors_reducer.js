import {
    RECEIVE_ARTICLE_ERRORS,
} from '../actions/article_actions';

const ArticleErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ARTICLE_ERRORS:
            return Object.assign([], action.errors);
        default:
            return state;
    }
};

export default ArticleErrorsReducer;