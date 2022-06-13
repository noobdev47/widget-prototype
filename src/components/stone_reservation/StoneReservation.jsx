import React from 'react'
import { connect, useDispatch } from 'react-redux'
import { changeRoute } from '../../store/actions/route.actions'

const StoneReservation = ({ Stone }) => {
	const dispatch = useDispatch()

	if (Stone !== undefined)
		return Object.keys(Stone.stoneDetail).length !== 0 ? (
			<div className='flex flex-row border-b border-slate-300 justify-between pb-4'>
				<div className='flex flex-col justify-center items-center'>
					<img
						width='100'
						height='100'
						src={Stone.stoneDetail.image}
						className='border border-slate-300 mb-2 p-2 rounded'
					/>
					<img
						width='100'
						height='100'
						className='border border-slate-300 p-2 rounded'
						src='https://gemsource.riogrande.com/public/images/site/360-transparent.png'
					/>
				</div>
				<div className='flex flex-col'>
					<img src={Stone.stoneDetail.image} width='300' height='300' />
					<p className='text-xs text-center'>Actual gemstone image</p>
				</div>
				<div className='flex flex-col justify-center items-stretch'>
					<div className='flex flex-row text-2xl font-normal mb-1'>
						<p className='mr-1'>{Stone.stoneDetail.carat} Carat</p>
						<p className='mr-1'>{Stone.stoneDetail.shape}</p>
						<p>{Stone.stoneDetail.type}</p>
					</div>
					<div className='flex flex-row text-base font-normal mb-1'>
						<p className='mr-1'>Color: Blue |</p>
						<p className='mr-1'>Clarity: {Stone.stoneDetail.clarity} |</p>
						<p>Treatment: Heated</p>
					</div>
					<div className='flex flex-row text-sm font-normal mb-16'>
						<p className='mr-1'>ICL</p>
						<p className='underline'>View Report {'>>'}</p>
					</div>
					<div className='flex flex-row text-2xl font-normal mb-1'>
						<p>{Stone.stoneDetail.price}</p>
					</div>
					<div className='flex flex-row text-base font-normal mb-1'>
						<p>Price is for the Zircon only.</p>
					</div>
					<div className='flex flex-row'>
						<button
							onClick={() => {
								dispatch(
									changeRoute({
										previousRoute: 'stone-detail',
										currentRoute: 'main',
									})
								)
							}}
							className='py-2 mr-2 w-1/2 hover:shadow-lg hover:shadow-blue-600/50 transition ease-in-out duration-300 font-medium text-lg rounded font-sans border border-blue-600 bg-white text-blue-600 hover:bg-blue-600 hover:text-white'
						>
							Back
						</button>
						<button className='py-2 w-1/2 hover:shadow-lg hover:shadow-blue-900/50 transition ease-in-out duration-300 font-medium text-lg rounded font-sans border border-blue-600 hover:border-blue-900 bg-blue-600 text-white hover:bg-blue-900 hover:text-white'>
							Reserve
						</button>
					</div>
				</div>
			</div>
		) : (
			<div>Loading</div>
		)
	else return <div>Loading</div>
}

const mapStateToProps = state => {
	return {
		Stone: state.Stone,
	}
}

export default connect(mapStateToProps, null)(StoneReservation)
