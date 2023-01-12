import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './layout/Header'
import NotFound from './layout/NotFound'
import DetailedItem from './pages/DetailedItem'
import Main from './pages/Main'

const RoutesNavigation = () => {
	return (
		<Routes>
			<Route path='/' element={<Header />}>
				<Route index element={<Navigate to='/main' />} />
				<Route path='/main/' element={<Main />} />
				<Route path='/main/detailed/:itemId' element={<DetailedItem />} />
				<Route path='*' element={<NotFound />} />
			</Route>
		</Routes>
	)
}

export default RoutesNavigation