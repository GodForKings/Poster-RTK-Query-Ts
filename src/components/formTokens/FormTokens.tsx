import React from 'react'
import style from './FormTokens.module.css'
import CustomButton from '../button/CustomButton'
import { monetApi } from '../../services/RtkService'
import { IPost } from '../../models/IPost'

const FormTokens = () => {
	const [createPost, {}] = monetApi.useCreatePostMutation()
	const [deletePost, {}] = monetApi.useDeletePostMutation()
	const [updatePost, {}] = monetApi.useUpdatePostMutation()
	const { data: tokens } = monetApi.useFetchAllPostsQuery(100)
	const handleCreate = async () => {
		const title = prompt()
		await createPost({ title, body: title } as IPost)
	}
	const destroyPost = async (token: IPost) => {
		await deletePost(token)
	}
	const updateInfoInPost = async () => {
		await updatePost({} as IPost)
	}

	return (
		<div className={style.view}>
			{tokens?.map(token => (
				<div key={token.id} className={style.view__post}>
					<span>{token.title}</span>
					<span>{token.body}</span>
					<CustomButton>change info</CustomButton>
					<CustomButton onClick={() => destroyPost(token)}>delete</CustomButton>
				</div>
			))}
			<CustomButton onClick={handleCreate}>add token</CustomButton>
		</div>
	)
}

export default FormTokens
