import { FC, useState, useEffect } from 'react'
import { queryUserAPI, deviceApi } from '../../services/RtkService'
import style from './PostContainer.module.css'
import UserItem from '../UserItem/UserItem'
import Loader from '../loader/Loader'
import CustomButton from '../button/CustomButton'
import FormTokens from '../formTokens/FormTokens'

const PostContainer: FC = () => {
	const [limit, setLimit] = useState<number>(1)
	const {
		data: users,
		error,
		isLoading,
		refetch,
	} = queryUserAPI.useFetchAllQueryUsersQuery(limit, {
		pollingInterval: 5000, //Интервал запросов на сервер
	})
	const { data: player } = queryUserAPI.useFetchOneUserQuery(2) // получение по ID
	const { data: device } = deviceApi.useFetchAllDeviceQuery(1) //запрос получения девайсов

	// useEffect(() => {
	// 	setTimeout(() => {
	// 		setLimit(prev => prev + 1)
	// 	}, 2000)
	// }, [])

	return (
		<div className={style.post__list}>
			{isLoading && <Loader />}
			{error && <h1>Wow I'ts Error!</h1>}
			{users?.map(user => (
				<UserItem key={user.id} user={user} refetch={refetch}></UserItem>
			))}
			{/* <div className={style.post__solo}>{player?.name}</div> */}
			<FormTokens></FormTokens>
			<CustomButton className={style.fixedBtn} onClick={() => refetch()}>
				update
			</CustomButton>
		</div>
	)
}

export default PostContainer
