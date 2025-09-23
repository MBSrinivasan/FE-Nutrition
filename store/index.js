import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // localStorage for web
import { api } from "../api/index.js";
import appSlice from "./slices/userSlice.js";

// Example slices
import themeConfigSlice from "./slices/themeConfigSlice.js";

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  themeConfig: themeConfigSlice,
  app: appSlice,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["themeConfig", "user"], // slices to persist
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          "persist/PERSIST",
          "persist/REHYDRATE",
          "persist/REGISTER",
          "persist/PURGE",
          "persist/FLUSH",
          "persist/PAUSE",
        ],
      },
    }).concat(api.middleware),
  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);

export default store;

