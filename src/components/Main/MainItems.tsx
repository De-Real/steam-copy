import React, { useState, useCallback } from 'react'
import { useAppSelector } from '../../hooks/storeHook';
import Pagination from '../UI/Pagination';
import MainItem from './MainItem/MainItem'

import './MainItems.scss'

const DUMMY_ARRAY = [
	{ id: Math.random(), title: 'Counter Strike: Global Offensive1', price: 9.99, date: '25 Aug, 2016' },
	{ id: Math.random(), title: 'Counter Strike: Global Offensive2', price: 9.99, date: '25 Aug, 2016' },
	{ id: Math.random(), title: 'Counter Strike: Global Offensive3', price: 9.99, date: '25 Aug, 2016' },
	{ id: Math.random(), title: 'Counter Strike: Global Offensive4', price: 9.99, date: '25 Aug, 2016' },
	{ id: Math.random(), title: 'Counter Strike: Global Offensive5', price: 9.99, date: '25 Aug, 2016' },
	{ id: Math.random(), title: 'Counter Strike: Global Offensive6', price: 9.99, date: '25 Aug, 2016' },
	{ id: Math.random(), title: 'Counter Strike: Global Offensive7', price: 9.99, date: '25 Aug, 2016' },
	{ id: Math.random(), title: 'Counter Strike: Global Offensive8', price: 9.99, date: '25 Aug, 2016' },
	{ id: Math.random(), title: 'Counter Strike: Global Offensive9', price: 9.99, date: '25 Aug, 2016' },
	{ id: Math.random(), title: 'Counter Strike: Global Offensive10', price: 9.99, date: '25 Aug, 2016' },
	{ id: Math.random(), title: 'Counter Strike: Global Offensive11', price: 9.99, date: '25 Aug, 2016' },
	{ id: Math.random(), title: 'Counter Strike: Global Offensive12', price: 9.99, date: '25 Aug, 2016' },
	{ id: Math.random(), title: 'Counter Strike: Global Offensive13', price: 9.99, date: '25 Aug, 2016' },
	{ id: Math.random(), title: 'Counter Strike: Global Offensive14', price: 9.99, date: '25 Aug, 2016' },
	{ id: Math.random(), title: 'Counter Strike: Global Offensive15', price: 9.99, date: '25 Aug, 2016' },
	{ id: Math.random(), title: 'Counter Strike: Global Offensive16', price: 9.99, date: '25 Aug, 2016' },
	{ id: Math.random(), title: 'Counter Strike: Global Offensive17', price: 9.99, date: '25 Aug, 2016' },
	{ id: Math.random(), title: 'Counter Strike: Global Offensive18', price: 9.99, date: '25 Aug, 2016' },
	{ id: Math.random(), title: 'Counter Strike: Global Offensive19', price: 9.99, date: '25 Aug, 2016' },
	{ id: Math.random(), title: 'Counter Strike: Global Offensive20', price: 9.99, date: '25 Aug, 2016' },
	{ id: Math.random(), title: 'Counter Strike: Global Offensive21', price: 9.99, date: '25 Aug, 2016' },
	{ id: Math.random(), title: 'Counter Strike: Global Offensive22', price: 9.99, date: '25 Aug, 2016' },
	{ id: Math.random(), title: 'Counter Strike: Global Offensive23', price: 9.99, date: '25 Aug, 2016' },
	{ id: Math.random(), title: 'Counter Strike: Global Offensive24', price: 9.99, date: '25 Aug, 2016' },
	{ id: Math.random(), title: 'Counter Strike: Global Offensive25', price: 9.99, date: '25 Aug, 2016' },
	{ id: Math.random(), title: 'Counter Strike: Global Offensive26', price: 9.99, date: '25 Aug, 2016' },
	{ id: Math.random(), title: 'Counter Strike: Global Offensive27', price: 9.99, date: '25 Aug, 2016' },
	{ id: Math.random(), title: 'Counter Strike: Global Offensive28', price: 9.99, date: '25 Aug, 2016' },
]

const MainItems = () => {

	const [blogPosts, setBlogPosts] = useState<{ id: number, title: string, price: number, date: string }[]>(DUMMY_ARRAY);
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(6);

	const { searchingValue, orderFilterValue, droppableFilterValue } = useAppSelector((state) => state.filterParams)

	console.log(searchingValue, orderFilterValue, droppableFilterValue);


	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		const response = await fetch('https://jsonplaceholder.typicode.com/todos')
	// 		if (!response.ok) {
	// 			console.log(response.statusText)
	// 		}

	// 		const results = await response.json();
	// 		console.log(results);
	// 		setBlogPosts(results)

	// 	}

	// 	fetchData();
	// }, [])

	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

	const paginate = useCallback((pageNumber: number) => {
		setCurrentPage(pageNumber)
	}, []);


	return (
		<section className='main-items'>
			<div>
				<ul className='main-items__items'>
					{currentPosts.map((item) => {
						return <MainItem key={item.id} id={item.id} title={item.title} date={item.date} price={item.price} />

					})}
				</ul>
			</div>
			<Pagination postsPerPage={postsPerPage} totalPosts={blogPosts.length} paginate={paginate} currentPage={currentPage} />
		</section>
	)

}

export default MainItems