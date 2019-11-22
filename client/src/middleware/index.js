import { ADD_STATE } from "../constants/action-types";

// /**
//  *
//  * Advantages :
//  *   - Allowed access to getState() & dispatch()
//  *   - Most of logic can be live outside the UI library
//  *   - Middleware become reusable pieces of logic, easy to reason about
//  *   - Middleware can be tested in isolation
//  *
//  */
// function forbiddenWordsMiddleware({ getState, dispatch }) {
//     return function(next) {
//         return function(action) {
//             // Do your stuff
//             return next(action);
//         }
//     }
// }

const forbiddenWords = ['spam', 'money'];

export function forbiddenWordsMiddleware({ dispatch }) {
    return function(next) {
        return function(action) {

            if(action.type === ADD_STATE) {

                const foundWord = forbiddenWords.filter(word =>
                    action.payload.title.includes(word)
                );

                if(foundWord.length) { // if it contains a bad word
                    return dispatch({ type : "FOUND_BAD_WORD" }); // then dispatch an action of type "FOUND_BAD_WORD"
                }
            }

            return next(action); // You should always return next(action) in your middleware.
            // If you forget to return this the application will stop, and no other action will reach the reducer
        }
    }
}