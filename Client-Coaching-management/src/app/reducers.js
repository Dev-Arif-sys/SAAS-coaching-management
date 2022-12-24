// third-party

import { combineReducers } from 'redux';

// project import
import { apiSlice } from 'features/apiSlice';
import languageMenuSlice from 'features/menu/languageMenuSlice';
import menuSlice from 'features/menu/menuSlice';

// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({
    [apiSlice.reducerPath]: apiSlice.reducer,
    menu: menuSlice,
    language: languageMenuSlice
});

export default reducers;
