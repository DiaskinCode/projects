import { configureStore } from '@reduxjs/toolkit'
import riteReducer from './reducers/riteReducer'; // Путь к вашему первому редюсеру
import { apiSlice } from './api/apiSlice';
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, riteReducer)

const store = configureStore({
  reducer: {
    rite: persistedReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({serializableCheck: false,}).concat(apiSlice.middleware),
})

const persistor = persistStore(store)
persistor.persist();

export { store, persistor };