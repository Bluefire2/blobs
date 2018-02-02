import {combineReducers} from 'redux';

import fieldSquaresReducer from './field_squares_reducer';

const rootReducer = combineReducers({
    fieldSquares: fieldSquaresReducer
});

export default rootReducer;