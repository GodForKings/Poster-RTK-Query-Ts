import React, { FC } from 'react'
import { IUser } from '../../models/IUser'
import style from './UserItem.module.css'
import CustomButton from '../button/CustomButton'

interface UserItemProps {
	user: IUser
	refetch: () => void
}

const UserItem: FC<UserItemProps> = ({ user, refetch }) => {
	return (
		<div className={style.item}>
			{user.name} {user.email}
			<CustomButton
				onClick={() => {
					refetch()
				}}
			>
				Destroy
			</CustomButton>
		</div>
	)
}

export default UserItem
