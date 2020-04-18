import {applyMiddleware, combineReducers, createStore, compose} from "redux";
import thunk from 'redux-thunk';
import appReducer from "./reducers/appReducer";
// import billboardsReducer from "./reducers/billboardsReducer";
// import {reducer as formReducer} from "redux-form";
// import appReducer from "./reducers/appReducer";
//
// import userReducer from "./reducers/userReducer";
// import noteReducer from "./reducers/noteReducer";





const RootState  = {
    // form: formReducer,
    app: appReducer,
    // billboards: billboardsReducer,
    // user:userReducer,
    // notesPage:noteReducer,
};


const reducers = combineReducers(RootState);
export type RootState = ReturnType<typeof reducers>


declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
        __PRELOADED_STATE__?: any;
    }
}

const middleware = [thunk];


const composeEnhancers = (process.env.NODE_ENV !== 'production' && typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)|| compose;



let state;

if (typeof window !== 'undefined') {
    state = window.__PRELOADED_STATE__;
    delete window.__PRELOADED_STATE__;
}




export default createStore(
    reducers,
    state,
    composeEnhancers(applyMiddleware(...middleware))
);

