import { configureStore,combineReducers } from "@reduxjs/toolkit";
import  favReducer  from "../features/FavouriteSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist"

const persistConfig={
  key:root,
  version:1,
  storage
}
const reducer=combineReducers({
  favourite:favReducer,
  
})

const persistedReducer=persistReducer(persistConfig,reducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
     
    }),
});