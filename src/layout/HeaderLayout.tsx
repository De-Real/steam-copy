import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'


const HeaderLayout = () => {
	return (
		<>
			<Header />
			<Outlet />
		</>
	)
}

export default HeaderLayout