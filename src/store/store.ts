import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/UserSlice'
import { queryUserAPI, deviceApi, monetApi } from '../services/RtkService'

const rootReducer = combineReducers({
	userReducer,
	[queryUserAPI.reducerPath]: queryUserAPI.reducer,
	[deviceApi.reducerPath]: deviceApi.reducer,
	[monetApi.reducerPath]: monetApi.reducer,
})

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
		middleware: getDefaultMiddleware =>
			getDefaultMiddleware().concat(
				queryUserAPI.middleware,
				deviceApi.middleware,
				monetApi.middleware
			),
	})
}

export type RootState = ReturnType<typeof rootReducer> // тип для всего состояния приложения
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch'] // тип для функции отправки действия
