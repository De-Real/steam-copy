import React, { useEffect, useState } from 'react';

import './Pagination.scss'

import leftArrowIcon from '../../assets/icon-pagination-arrow-left.svg'
import rightArrowIcon from '../../assets/icon-pagination-arrow-right.svg'
import { useParams } from 'react-router-dom';

interface PaginationPropsInterface { postsPerPage: number, totalPosts: number, currentPage: number, paginate: (pageNumber: number) => void }


const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }: PaginationPropsInterface) => {

	console.log('CP', currentPage);

	const { pageNumber } = useParams();

	const [current, setCurrent] = useState(4);
	const [isForced, setIsForced] = useState(true);

	useEffect(() => {
		if (isForced && pageNumber) {
			setCurrent(+pageNumber - 1);
			setIsForced(false);
		}

	}, [pageNumber]);

	useEffect(() => {
		console.log('CURRENT', `${current}`);
	}, [current]);

	// useEffect(() => {
	// 	if (isForced) {
	// 		console.log('FORCEEEEEEEEEED!!!!', currentPage)
	// 		setCurrent(currentPage - 1);
	// 		setIsForced(false);
	// 	}
	// }, [currentPage, current, isForced]);

	const pageNumbers: number[] = [];

	for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
		pageNumbers.push(i);
	}

	useEffect(() => {
		if (isForced) {

		} else {
			paginate(current + 1);
			setIsForced(false);
		}

	}, [current, paginate])

	const previousPage = () => {
		setCurrent((curState) => {
			const min = curState - 3;
			return min < 0 ? 0 : min;
		})
	};

	const nextPage = () => {
		setCurrent((curState) => {
			const min = curState + 3;
			const maxArrayLenght = pageNumbers.length - 3;
			return min > maxArrayLenght ? maxArrayLenght : min;
		})
	};

	console.log(current, current + 3);

	const slicedPageNumbers = pageNumbers.slice(current, current + 3)

	return (
		<div className="pagination-container">
			<ul className="pagination">

				<li onClick={previousPage} className="pagination__page-arrow">
					<img src={leftArrowIcon} alt='Left arrow'></img>
				</li>

				{slicedPageNumbers.map((number) => {
					const clssName = `pagination__page-number ${currentPage === number ? 'choosen' : ''}`

					return <li
						key={number}
						onClick={() => paginate(number)}
						className={clssName}
					>
						{number}
					</li>

				})}

				<li onClick={nextPage} className="pagination__page-arrow">
					<img src={rightArrowIcon} alt='Right arrow'></img>
				</li>

			</ul>
		</div>
	);
};

export default React.memo(Pagination);