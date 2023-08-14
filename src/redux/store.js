import { configureStore } from "@reduxjs/toolkit";
import userSlices from "./reducers/userSlices";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, userSlices);

const store = configureStore({
  reducer: {
    users: persistedReducer,
  },
});

const persistor = persistStore(store);

export { store, persistor };
