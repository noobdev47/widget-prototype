import Select from 'react-select'
import Filter from '../filter/Filter'
import { connect } from 'react-redux'
import ChatHeader from '../ChatHeader'
import ChatToggler from '../ChatToggler'
import React, { useRef, useState } from 'react'
import ListItem from '../list_item/ListItem'

const MainContainer = ({ Auth }) => {
	const [Toggle, setToggle] = useState(false)
	const [loading, setLoading] = useState(false)
	const [Fullscreen, setFullscreen] = useState(false)
	const [hideFilter, setHideFilter] = useState(false)

	const [data, setData] = useState([
		{
			type: 'Zircon',
			shape: 'Oval',
			carat: '4.90 ct',
			sku: '1234-1234512',
			intensity: 'Medium Intensity',
			clarity: 'VI1',
			origin: 'Unknown',
			image:
				'https://d124iipltzue9v.cloudfront.net/uploads/310/148454/lab/stone-images/45b1cd38e74b0de32f261fc9a04c23b4.jpeg',
		},
		{
			type: 'Zircon',
			shape: 'Oval',
			carat: '4.90 ct',
			sku: '1234-1234512',
			intensity: 'Medium Intensity',
			clarity: 'VI1',
			origin: 'Unknown',
			image:
				'https://d124iipltzue9v.cloudfront.net/uploads/310/148454/lab/stone-images/45b1cd38e74b0de32f261fc9a04c23b4.jpeg',
		},
		{
			type: 'Zircon',
			shape: 'Oval',
			carat: '4.90 ct',
			sku: '1234-1234512',
			intensity: 'Medium Intensity',
			clarity: 'VI1',
			origin: 'Unknown',
			image:
				'https://d124iipltzue9v.cloudfront.net/uploads/310/148454/lab/stone-images/45b1cd38e74b0de32f261fc9a04c23b4.jpeg',
		},
		{
			type: 'Zircon',
			shape: 'Oval',
			carat: '4.90 ct',
			sku: '1234-1234512',
			intensity: 'Medium Intensity',
			clarity: 'VI1',
			origin: 'Unknown',
			image:
				'https://d124iipltzue9v.cloudfront.net/uploads/310/148454/lab/stone-images/45b1cd38e74b0de32f261fc9a04c23b4.jpeg',
		},
		{
			type: 'Zircon',
			shape: 'Oval',
			carat: '4.90 ct',
			sku: '1234-1234512',
			intensity: 'Medium Intensity',
			clarity: 'VI1',
			origin: 'Unknown',
			image:
				'https://d124iipltzue9v.cloudfront.net/uploads/310/148454/lab/stone-images/45b1cd38e74b0de32f261fc9a04c23b4.jpeg',
		},
	])

	return (
		<>
			<div className='akits-pkteam-fabs'>
				<div
					className={`akits-pkteam-chat ${
						Toggle ? 'akits-pkteam-is-visible' : ''
					} ${Fullscreen ? 'akits-pkteam-chat_fullscreen' : ''}`}
				>
					<ChatHeader
						toggle={Toggle}
						setToggle={setToggle}
						fullscreen={Fullscreen}
						setFullscreen={setFullscreen}
					/>
					<div style={{ height: '95%' }}>
						<div className='flex flex-col h-full overflow-y-scroll items-stretch m-2 p-2 '>
							<Filter hideFilter={hideFilter} setHideFilter={setHideFilter} />
							<div className='flex flex-row items-stretch m-2 mt-2 p-2 pb-5 border-b-2'>
								<p className='m-0 font-sans place-self-center text-2xl'>
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
							<div className='flex m-2 mt-2 p-2 flex-wrap content-evenly items-center justify-center'>
								{data.map((singleInstance, i) => (
									<ListItem data={singleInstance} />
								))}
							</div>
						</div>
					</div>
				</div>

				{!Fullscreen ? (
					<ChatToggler
						toggle={Toggle}
						setToggle={setToggle}
						fullscreen={Fullscreen}
					/>
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
	}
}

export default connect(mapStateToProps, null)(MainContainer)
