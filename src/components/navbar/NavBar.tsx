import React from 'react'
import classes from './NavBar.module.css'

const NavBar = () => {
	return (
		<nav className={classes.navigation}>
			<ul className={classes.navBar}>
				<li>link one</li>
				<li>link two</li>
				<li>link three</li>
				<li>link FOUR</li>
			</ul>
		</nav>
	)
}

export default NavBar
