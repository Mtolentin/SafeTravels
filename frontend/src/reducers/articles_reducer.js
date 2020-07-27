import {
    RECEIVE_ARTICLES
} from '../actions/article_actions';

export default function (state = {}, action) {
    Object.freeze(state);
    // let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_ARTICLES:
            return action.articles;
        default:
            return state;
    }
}