import { configureStore,combineReducers } from "@reduxjs/toolkit";
import  favReducer  from "../features/FavouriteSlice";
import detailReducer from "../features/DetailSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist"

const persistConfig={
  key:root,
  version:1,
  storage
}
const reducer=combineReducers({
  favourite:favReducer,
  detailslice:detailReducer
  
})

const persistedReducer=persistReducer(persistConfig,reducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
     
    }),
});