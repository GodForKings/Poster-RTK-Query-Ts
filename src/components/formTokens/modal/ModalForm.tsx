import React, { FC, useState } from 'react'
import style from './ModalForm.module.css'
import { IPost, Trigger } from '../../../models/IPost'
import { monetApi } from '../../../services/RtkService'
import CustomButton from '../../button/CustomButton'

interface IProps {
	show: boolean
	setShow: () => void
	trigger: Trigger
	postId: number | string | undefined
}

const ModalForm: FC<IProps> = ({ show = false, setShow, trigger, postId }) => {
	const [updatePost, {}] = monetApi.useUpdatePostMutation()
	const [createPost, {}] = monetApi.useCreatePostMutation()
	const [title, setTitle] = useState<string>('')
	const [body, setBody] = useState<string>('')

	const clearInputs = () => {
		setTitle('')
		setBody('')
		setShow()
	}
	const handlerFunction = async () => {
		if (title || body) {
			try {
				if (trigger === Trigger.change) {
					updatePost({ id: postId, title: title, body: body } as IPost)
				}
				if (trigger === Trigger.create) {
					createPost({ title: title, body: body } as IPost)
				}
			} catch (error) {
				console.log(error)
			}
			clearInputs()
		}
	}

	return (
		<div
			className={
				show
					? `${style.modalContainer} ${style.activeModal}`
					: style.modalContainer
			}
			onClick={clearInputs}
		>
			<div className={style.modalForm} onClick={e => e.stopPropagation()}>
				<div className={style.inputBox}>
					<input
						name='titlePost'
						placeholder='write title'
						type='text'
						value={title}
						onChange={e => {
							setTitle(e.target.value)
						}}
					/>
				</div>
				<div className={style.inputBox}>
					<textarea
						name='descriptionPost'
						placeholder='write description'
						value={body}
						onChange={e => {
							setBody(e.target.value)
						}}
					/>
				</div>
				<CustomButton onClick={handlerFunction}>Выполнить</CustomButton>
			</div>
		</div>
	)
}

export default ModalForm
