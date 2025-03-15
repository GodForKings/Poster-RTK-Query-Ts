import React, { FC } from 'react'
import style from './BackgroundMain.module.css'
import video from '../../assets/videos/bg-main.mp4'

const BackgroundMain: FC = () => {
	return (
		<div className={style.container}>
			<video src={video} muted autoPlay loop></video>
		</div>
	)
}

export default BackgroundMain
