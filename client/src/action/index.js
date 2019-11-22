import PropTypes from "prop-types";

// Action-types
import { ADD_STATE } from "../constants/action-types";

export function addState(payload) {
    return {
        type: ADD_STATE,
        payload
    }
}

addState.propTypes = {
    payload: PropTypes.element.isRequired
};