import {
    RECEIVE_ARTICLES,
    RECIEVE_ARTICLE
} from '../actions/article_actions';

export default function (state = {}, action) {
    Object.freeze(state);
    // let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_ARTICLES:
            return action.articles;
        case RECIEVE_ARTICLE:
            return action.article;
        default:
            return state;
    }
}