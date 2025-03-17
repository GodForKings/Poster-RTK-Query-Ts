import React, { FC } from 'react'
import style from './Footer.module.css'

const footer: FC = () => {
	return (
		<div className={style.footerContainer}>
			<ul className={style.footerList}>
				<li>something link</li>
				<li>something link two</li>
			</ul>
		</div>
	)
}

export default footer
