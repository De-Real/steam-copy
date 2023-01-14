import React, { useState, useCallback, useEffect, useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks/storeHook';
import Pagination from '../UI/Pagination';
import MainItem from './MainItem/MainItem'

import { filterArray } from '../../util/filterArray';

import './MainItems.scss'
import { FetchingData } from '../../types/fetchingDataInterface';

const scrollTop = () => {
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: 'smooth',
	})
}

const MainItems = () => {

	// const DUMMY_ARRAY = useAppSelector((state) => state.products.products);
	const [initialPosts, setInitialPosts] = useState<FetchingData[]>([]);
	const [blogPosts, setBlogPosts] = useState<FetchingData[]>([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(25);

	const { searchingValue, orderFilterValue, droppableFilterValue } = useAppSelector((state) => state.filterParams)

	useEffect(() => {

		const options = {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': '7c5ef87773msh1ba3465dbccadb6p1e9a59jsnbe646dae5f80',
				'X-RapidAPI-Host': 'steam2.p.rapidapi.com'
			}
		};

		const fetchData = async () => {
			const response = await fetch(`https://steam2.p.rapidapi.com/search/${searchingValue}/page/${currentPage}`, options);

			if (!response.ok) {
				throw new Error('Error!!!');
			}

			const results = await response.json(); 
			console.log(results);
			setInitialPosts(results);
		}
		fetchData();
	}, [currentPage, searchingValue])


	useEffect(() => {
		let temp = [...initialPosts];
		console.log(temp)
		temp = filterArray(temp, orderFilterValue, droppableFilterValue)
		console.log(temp)
		setBlogPosts(temp);
	}, [droppableFilterValue, orderFilterValue, initialPosts])

	const navigate = useNavigate();

	const { pageNumber } = useParams()

	useEffect(() => {
		if (pageNumber) {
			setCurrentPage(+pageNumber);
		}
	}, [pageNumber])

	// const indexOfLastPost = currentPage * postsPerPage;
	// const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = [...blogPosts]

	const paginate = useCallback((pageNumber: number) => {
		setCurrentPage(pageNumber)
		navigate(`/main/pages/${pageNumber}`)
		scrollTop();
	}, []);

	return (
		<section className='main-items'>


			<div>
				{Boolean(currentPosts.length) &&
					<ul className='main-items__items'>
						{currentPosts.map((item) => {
							return <MainItem key={item.appId} product={item} />
						})}
					</ul>
				}
				{!currentPosts.length && <p> No data found!</p>}

			</div>



			<Pagination postsPerPage={postsPerPage} totalPosts={blogPosts.length} paginate={paginate} currentPage={currentPage} />
		</section>
	)
}

export default MainItems