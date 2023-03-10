import React, { useState, useCallback, useEffect, useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks/storeHook';
import Pagination from '../UI/Pagination';
import MainItem from './MainItem/MainItem'

import { filterArray } from '../../util/filterArray';
import { scrollTop } from '../../util/scrollTop';
import { FetchingData } from '../../types/fetchingDataInterface';
import loadingGif from '../../assets/loading.gif'

import './MainItems.scss'
import { options } from '../../api/steam-search-options';

const postsPerPage = 25;

const MainItems = () => {

	const [initialPosts, setInitialPosts] = useState<FetchingData[]>([]);
	const [blogPosts, setBlogPosts] = useState<FetchingData[]>([]);
	const [currentPage, setCurrentPage] = useState(1);

	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState('');

	const { searchingValue, orderFilterValue, droppableFilterValue } = useAppSelector((state) => state.filterParams)

	const navigate = useNavigate();
	const { pageNumber } = useParams()

	useEffect(() => {

		const fetchData = async () => {
			setError('');
			setIsLoading(true);
			const response = await fetch(`https://steam2.p.rapidapi.com/search/${searchingValue}/page/${currentPage}`, options);

			if (!response.ok) {
				setIsLoading(false);
				setError(`Can't fetch data. Reason: ${response.statusText}`);
				return;
			}

			const results = await response.json();

			setInitialPosts(results);

			if (results.length === 0) {
				setError('No info found!');
			}

			setIsLoading(false);
		}

		fetchData();

	}, [currentPage, searchingValue])

	useEffect(() => {
		let filteredArray = filterArray([...initialPosts], orderFilterValue, droppableFilterValue);
		setBlogPosts(filteredArray);
	}, [droppableFilterValue, orderFilterValue, initialPosts])

	useEffect(() => {
		if (pageNumber) {
			setCurrentPage(+pageNumber);
		}
	}, [pageNumber])

	const paginate = useCallback((pageNumber: number) => {
		setCurrentPage(pageNumber)
		navigate(`/main/pages/${pageNumber}`)
		scrollTop();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const memoizedItems = useMemo(() => blogPosts.map((item) => {
		return <MainItem key={Math.random()} product={item} />
	}), [blogPosts])

	return (
		<section className='main-items'>
			<div>
				{isLoading && <img src={loadingGif} alt='Loading gif' />}
				{error.length > 0 && <p>{error}</p>}
				{!isLoading && error.length === 0 && <ul className='main-items__items'>
					{memoizedItems}
				</ul>}
			</div>

			<Pagination postsPerPage={postsPerPage} totalPosts={blogPosts.length} paginate={paginate} currentPage={currentPage} />
		</section>
	)
}

export default MainItems