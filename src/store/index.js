import { configureStore } from '@reduxjs/toolkit';
import filters from '../components/heroesFilters/filtersSlice';
import { apiSlice } from '../api/apiSlice';

const  stringMiddleWare = () => (next) => (action) => {
    if (typeof action === 'string') {
        return next({
            type: action
        })
    }
    return next(action)
} 



// const store = createStore( 
//             combineReducers({heroes, filters}),
//             compose(applyMiddleware(ReduxThunk, stringMiddleWare),
//                     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
//         );

const store = configureStore({
    reducer: {filters, 
                [apiSlice.reducerPath]: apiSlice.reducer},
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleWare, apiSlice.middleware),
    devTools: process.env.NODE_ENV !== 'production',
    
});

export default store;
