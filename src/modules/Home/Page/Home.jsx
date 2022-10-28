import React from 'react'
import LocationPagination from '../components/LocationPagination'
import SolidData from '../components/SolidData'

import "./HomeStyle.scss"

const Home = () => {
	return (
		<div className='container'>
			<LocationPagination/>
			<SolidData/>
		</div>
	)
}

export default Home