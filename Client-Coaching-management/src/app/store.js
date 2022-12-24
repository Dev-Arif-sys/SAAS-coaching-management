// third-party
import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from 'features/apiSlice';

// project import
import reducers from './reducers';

// ==============================|| REDUX TOOLKIT - MAIN STORE ||============================== //

export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware)
});

// const { dispatch } = store;

// export { store, dispatch };
