import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './layout/HeaderLayout'
import NotFound from './layout/NotFound'
import DetailedItem from './pages/DetailedItem'
import Main from './pages/Main'

const RoutesNavigation = () => {
	return (
		<Routes>
			<Route path='/' element={<Header />}>
				<Route index element={<Navigate to='/main/pages/1' />} />
				<Route path='/main'>
					<Route index element={<Navigate to='/main/pages/1' />} />
					<Route path='pages/' element={<Navigate to='/main/pages/1' />} />
					<Route path='pages/:pageNumber' element={<Main />} />
					<Route path='detailed/:itemId' element={<DetailedItem />} />
				</Route>

				<Route path='*' element={<NotFound />} />
			</Route>
		</Routes>
	)
}

export default RoutesNavigation