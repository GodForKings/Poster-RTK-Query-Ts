import axios from 'axios'
import { AppDispatch } from '../store'
import { IUser } from '../../models/IUser'
import { userSlice } from './UserSlice'
import { createAsyncThunk } from '@reduxjs/toolkit'

//Отрабатывает базовый сценарий запроса через обычные reducers
export const fetchUsers = () => async (dispatch: AppDispatch) => {
	try {
		dispatch(userSlice.actions.userFetching())
		const response = await axios.get<IUser[]>(
			process.env.REACT_APP_JSONPLACEHOLDER
		)
		dispatch(userSlice.actions.userFetchingSuccess(response.data))
	} catch (e) {
		if (axios.isAxiosError(e)) {
			dispatch(userSlice.actions.userFetchingError(e.message))
		}
	}
}
//Запрос с помощью createAsyncThunk и работа с extraReducers
export const analogFetchUsers = createAsyncThunk(
	`user/fetchAll`,
	async (_, thunkAPI) => {
		try {
			const response = await axios.get<IUser[]>(
				`https://jsonplaceholder.typicode.com/users`
			)
			return response.data
		} catch (error: any) {
			return thunkAPI.rejectWithValue(error?.message)
		}
	}
)
