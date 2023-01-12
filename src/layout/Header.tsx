import React from 'react'
import { Outlet } from 'react-router-dom'


const Header = () => {
	return (
		<div>
			<div> Header</div>
			<Outlet />
		</div>
	)
}

export default Header