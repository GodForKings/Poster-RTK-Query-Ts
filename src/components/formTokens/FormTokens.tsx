import { useState, FC } from 'react'
import style from './FormTokens.module.css'
import CustomButton from '../button/CustomButton'
import { monetApi } from '../../services/RtkService'
import { IPost, Trigger } from '../../models/IPost'
import ModalForm from './modal/ModalForm'
import Loader from '../loader/Loader'

const FormTokens: FC = () => {
	const [deletePost, {}] = monetApi.useDeletePostMutation()
	const { data: tokens, isLoading } = monetApi.useFetchAllPostsQuery(100)
	const [show, setShow] = useState<boolean>(false)
	const [trigger, setTrigger] = useState<Trigger>(Trigger.change)
	const [tokenId, setTokenId] = useState<number | string | undefined>(0)
	// Удаление поста
	const destroyPost = async (token: IPost) => {
		await deletePost(token)
	}
	return (
		<div className={style.view}>
			{isLoading && <Loader />}
			{tokens?.map(token => (
				<div key={token.id} className={style.view__post}>
					<div className={style.view__post__info}>
						<span>{token.title}</span>
						<span>{token.body}</span>
					</div>
					<CustomButton
						onClick={() => {
							setShow(true)
							setTrigger(Trigger.change)
							setTokenId(token.id)
						}}
					>
						change info
					</CustomButton>
					<CustomButton onClick={() => destroyPost(token)}>delete</CustomButton>
				</div>
			))}
			<CustomButton
				onClick={() => {
					setShow(true)
					setTrigger(Trigger.create)
				}}
			>
				add token
			</CustomButton>
			<ModalForm
				show={show}
				setShow={() => setShow(false)}
				trigger={trigger}
				postId={tokenId}
			/>
		</div>
	)
}

export default FormTokens
