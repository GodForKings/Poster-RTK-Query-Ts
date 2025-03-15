import { FC, ReactNode } from 'react'
import style from './CustomButton.module.css'

interface ICustomButton {
	onClick?: () => void
	children?: ReactNode
	disabled?: boolean
	className?: string
}

const CustomButton: FC<ICustomButton> = ({
	onClick,
	children,
	disabled = false,
	className,
}) => {
	return (
		<div className={className ? `${style.newBtn} ${className}` : style.newBtn}>
			<button
				className={style.buttonNewBtn}
				onClick={onClick}
				disabled={disabled}
			>
				<span
					className={`${style.button__line} ${style.button__lineTop}`}
				></span>
				<span
					className={`${style.button__line} ${style.button__lineRight}`}
				></span>
				<span
					className={`${style.button__line} ${style.button__lineBottom}`}
				></span>
				<span
					className={`${style.button__line} ${style.button__lineLeft}`}
				></span>
				{children}
			</button>
		</div>
	)
}

export default CustomButton
