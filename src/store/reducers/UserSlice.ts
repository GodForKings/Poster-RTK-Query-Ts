import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUser } from '../../models/IUser'
import { analogFetchUsers, fetchUsers } from './ActionCreators'

interface UserState {
	users: IUser[]
	isLoading: boolean
	error?: string | undefined
}

const initialState: UserState = {
	users: [],
	isLoading: false,
	error: ``,
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		userFetching(state) {
			state.isLoading = true
		},
		userFetchingSuccess(state, action: PayloadAction<IUser[]>) {
			state.isLoading = false
			state.error = ''
			state.users = action.payload
		},
		userFetchingError(state, action: PayloadAction<string>) {
			state.isLoading = false
			state.error = action.payload
		},
	},
	extraReducers(builder) {
		builder
			.addCase(
				analogFetchUsers.fulfilled.type,
				(state, action: PayloadAction<IUser[]>) => {
					state.isLoading = false
					state.error = ''
					state.users = action.payload
				}
			)
			.addCase(analogFetchUsers.pending.type, state => {
				state.isLoading = true
			})
			.addCase(
				analogFetchUsers.rejected.type,
				(state, action: PayloadAction<string | undefined>) => {
					state.isLoading = false
					state.error = action.payload
				}
			)
	},
})

export default userSlice.reducer
