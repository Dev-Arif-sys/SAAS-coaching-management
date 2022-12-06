// third-party

import { combineReducers } from 'redux';

// project import
import menuSlice from 'features/menu/menuSlice';

// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({ menu: menuSlice });

export default reducers;
