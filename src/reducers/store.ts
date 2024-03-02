import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './userReducer';


export function configureStore(initialState?: RootState) {
    const middleware = [thunk];
    let win: any = window as any;

    const composeEnhancers = typeof window === 'object' && win.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? win.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;;
    const store = createStore(rootReducer, initialState,  composeEnhancers(applyMiddleware(...middleware)));

    return store;
}


export type RootState = ReturnType<typeof rootReducer>;
