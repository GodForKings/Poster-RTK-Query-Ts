import React, { useState, useEffect } from 'react'
import './App.css'
import { useAppDispatch, useAppSelector } from './hooks/redux'
import { userSlice } from './store/reducers/UserSlice'
import { analogFetchUsers, fetchUsers } from './store/reducers/ActionCreators'
import PostContainer from './components/PostContainer/PostContainer'
import BackgroundMain from './components/Background/BackgroundMain'
import NavBar from './components/navbar/NavBar'

function App() {
	// const [title, setTitle] = useState<string>(`I'm work`)
	// const dispatch = useAppDispatch()
	// const { users, isLoading, error } = useAppSelector(state => state.userReducer)

	// useEffect(() => {
	// 	dispatch(analogFetchUsers())
	// }, [])
	console.log(process.env)
	return (
		<div className='App'>
			<NavBar></NavBar>
			<BackgroundMain></BackgroundMain>
			{/* <h1>{title}</h1>
			{isLoading && <h2>one sec, this is loading...</h2>}
			{error && <h2>{error}</h2>}
			{JSON.stringify(users, null, 2)}
			<button
				onClick={() => {
					setTitle(prev => `${prev} new `)
				}} 
			>
				lvl up
			</button> */}
			<PostContainer></PostContainer>
		</div>
	)
}

export default App
