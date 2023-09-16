import {configureStore} from 'redux';
import rootReducers from "./reducers/index";

const store = configureStore(rootReducers);

export default store;
