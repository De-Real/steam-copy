import React, { useEffect, useState } from 'react';

import './Pagination.scss'

import leftArrowIcon from '../../assets/icon-pagination-arrow-left.svg'
import rightArrowIcon from '../../assets/icon-pagination-arrow-right.svg'

interface PaginationPropsInterface { postsPerPage: number, totalPosts: number, currentPage: number, paginate: (pageNumber: number) => void }


const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }: PaginationPropsInterface) => {

	const [current, setCurrent] = useState(0);

	const pageNumbers: number[] = [];

	for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
		pageNumbers.push(i);
	}

	useEffect(() => {
		paginate(current + 1);
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