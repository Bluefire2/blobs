import {combineReducers} from 'redux';

import fieldSquaresReducer from './field_squares_reducer';
import movesReducer from './moves_reducer';

const rootReducer = combineReducers({
    fieldSquares: fieldSquaresReducer,
    moves: movesReducer
});

export default rootReducer;