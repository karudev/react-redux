import PropTypes from 'prop-types';

// Action-types
import { ADD_STATE } from "../constants/ActionConfig";

const initialState = {
    data: []
};

export default function rootReducer(state = initialState, action = {}) {

    if (action.type === ADD_STATE) {

        // That breaks the main Redux principle: immutability.
        /* state.data.push(action.payload); */

        // This way we keep the original state unaltered.
        // We can use Array.prototype.concat in place of Array.prototype.push for keeping the original array
        return Object.assign({}, state, { // Used to copy the values
           data: state.data.concat(action.payload) // Used to merge action.payload to the copy of the state into state.data
        });

    } else return state; // === return initialState
};

rootReducer.propTypes = {
    state: PropTypes.element.isRequired,
    action: PropTypes.element.isRequired
};
