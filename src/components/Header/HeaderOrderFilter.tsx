import React from 'react'

import './HeaderOrderFilter.scss'

const HeaderOrderFilter = () => {
	return (
		<div className='header__order-filter'>
			<select className='header__order-select'>
				<option>Price</option>
				<option>Publish date</option>
			</select>
		</div>
	)
}

export default HeaderOrderFilter