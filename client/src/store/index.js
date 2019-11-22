import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/index";
import { forbiddenWordsMiddleware } from "../middleware/index"

const Store = createStore(
    rootReducer,
    applyMiddleware(forbiddenWordsMiddleware)
);

export default Store;