// third-party

import { combineReducers } from 'redux';

// project import
import { apiSlice } from 'features/apiSlice';
import languageMenuSlice from 'features/menu/languageMenuSlice';
import menuSlice from 'features/menu/menuSlice';
import usersReducer from 'features/users/usersSlice';

// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({
    [apiSlice.reducerPath]: apiSlice.reducer,
    menu: menuSlice,
    user: usersReducer,
    language: languageMenuSlice
});

export default reducers;
