import Select from 'react-select'
import Filter from '../filter/Filter'
import { connect } from 'react-redux'
import ChatHeader from '../ChatHeader'
import ChatToggler from '../ChatToggler'
import ScrollToTop from '../ScrollToTop'
import ListItem from '../list_item/ListItem'
import React, { useEffect, useRef, useState } from 'react'
import StoneReservation from '../stone_reservation/StoneReservation'
import StoneDetail from '../stone_detail/StoneDetail'

const MainContainer = ({ Auth, Route, Stone }) => {
	const [toggle, setToggle] = useState(false)
	const [loading, setLoading] = useState(false)
	const [Fullscreen, setFullscreen] = useState(false)
	const [hideFilter, setHideFilter] = useState(false)
	const [scrolledToTop, setScrolledToTop] = useState(false)
	const [data, setData] = useState([
		{
			shape: 'Oval',
			type: 'Zircon',
			clarity: 'VI1',
			price: '$425.7',
			carat: '4.90 ct',
			origin: 'Unknown',
			sku: '1234-1234512',
			intensity: 'Medium Intensity',
			image:
				'https://d124iipltzue9v.cloudfront.net/uploads/310/148454/lab/stone-images/45b1cd38e74b0de32f261fc9a04c23b4.jpeg',
		},
		{
			shape: 'Oval',
			type: 'Zircon',
			clarity: 'VI1',
			price: '$425.7',
			carat: '4.90 ct',
			origin: 'Unknown',
			sku: '1234-1234512',
			intensity: 'Medium Intensity',
			image:
				'https://d124iipltzue9v.cloudfront.net/uploads/310/148454/lab/stone-images/45b1cd38e74b0de32f261fc9a04c23b4.jpeg',
		},
		{
			shape: 'Oval',
			type: 'Zircon',
			clarity: 'VI1',
			price: '$425.7',
			carat: '4.90 ct',
			origin: 'Unknown',
			sku: '1234-1234512',
			intensity: 'Medium Intensity',
			image:
				'https://d124iipltzue9v.cloudfront.net/uploads/310/148454/lab/stone-images/45b1cd38e74b0de32f261fc9a04c23b4.jpeg',
		},
		{
			shape: 'Oval',
			clarity: 'VI1',
			type: 'Zircon',
			price: '$425.7',
			carat: '4.90 ct',
			origin: 'Unknown',
			sku: '1234-1234512',
			intensity: 'Medium Intensity',
			image:
				'https://d124iipltzue9v.cloudfront.net/uploads/310/148454/lab/stone-images/45b1cd38e74b0de32f261fc9a04c23b4.jpeg',
		},
		{
			shape: 'Oval',
			type: 'Zircon',
			clarity: 'VI1',
			price: '$425.7',
			carat: '4.90 ct',
			origin: 'Unknown',
			sku: '1234-1234512',
			intensity: 'Medium Intensity',
			image:
				'https://d124iipltzue9v.cloudfront.net/uploads/310/148454/lab/stone-images/45b1cd38e74b0de32f261fc9a04c23b4.jpeg',
		},
	])
	let scrollBody = ''

	const scrollToTop = () => {
		let scrollBody = document.querySelector('#scroll-body')

		scrollBody.scrollTop = 0
		setScrolledToTop(true)
	}

	useEffect(() => {
		scrollBody = document.querySelector('#scroll-body')
	}, [])

	useEffect(() => {
		if (scrollBody !== '')
			scrollBody.addEventListener('scroll', event => {
				if (scrollBody.scrollTop <= 100) setScrolledToTop(false)
				else setScrolledToTop(true)
			})
	}, [scrollBody])

	return (
		<>
			<div className='akits-pkteam-fabs'>
				<div
					className={`akits-pkteam-chat ${
						toggle ? 'akits-pkteam-is-visible' : ''
					} ${Fullscreen ? 'akits-pkteam-chat_fullscreen' : ''}`}
				>
					<ChatHeader
						toggle={toggle}
						setToggle={setToggle}
						fullscreen={Fullscreen}
						setFullscreen={setFullscreen}
					/>
					<div style={{ height: '95%' }}>
						<div
							id='scroll-body'
							className='flex flex-col h-full overflow-y-scroll scroll-smooth items-stretch m-2 p-2 '
						>
							{Route.currentRoute === 'main' ? (
								<>
									<Filter
										hideFilter={hideFilter}
										setHideFilter={setHideFilter}
									/>
									<div className='flex flex-row items-stretch m-2 mt-2 p-2 pb-5 border-b'>
										<p className='m-0 font-sans place-self-center text-lg sm:text-xl md:text-2xl lg:text-2xl'>
											Sort by Price:{' '}
										</p>
										<Select
											isClearable
											name='sort_price'
											closeMenuOnSelect={false}
											className='font-sans text-sm w-60 ml-3'
											options={[
												{ value: 'lowest', label: 'Lowest' },
												{ value: 'highest', label: 'Highest' },
												{ value: 'noSort', label: 'No Sorting' },
											]}
										/>
									</div>
									<div className='inline-flex m-2 mt-2 p-2 flex-wrap content-center items-center justify-center'>
										{data.map((singleInstance, i) => (
											<ListItem key={i} data={singleInstance} />
										))}
									</div>
								</>
							) : Stone !== undefined ? (
								<>
									<StoneReservation />
									<StoneDetail />
								</>
							) : (
								<div>Loading</div>
							)}
						</div>
					</div>
				</div>

				{!Fullscreen ? (
					<>
						<ScrollToTop
							toggle={toggle}
							scrollToTop={scrollToTop}
							scrolledToTop={scrolledToTop}
						/>
						<ChatToggler
							toggle={toggle}
							setToggle={setToggle}
							fullscreen={Fullscreen}
						/>
					</>
				) : (
					<></>
				)}
			</div>
		</>
	)
}

const mapStateToProps = state => {
	return {
		Auth: state.Auth,
		Route: state.Route,
		Stone: state.Stone,
	}
}

export default connect(mapStateToProps, null)(MainContainer)
