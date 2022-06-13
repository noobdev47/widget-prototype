import React from 'react'
import { connect, useDispatch } from 'react-redux'

const StoneDetail = ({ Stone }) => {
	const dispatch = useDispatch()

	return (
		<div className='flex flex-col mt-4'>
			<div className='text-2xl font-normal mb-1'>
				<p>Gemstone Details</p>
			</div>
			<div className='flex flex-col w-full items-center justify-center text-base font-normal'>
				<div className='flex flex-col pb-4 w-full'>
					<div className='flex flex-row justify-between p-2'>
						<p>Code</p>
						<p>{Stone.stoneDetail.sku}</p>
					</div>
					<div className='flex flex-row justify-between bg-stone-100 p-2'>
						<p>Type</p>
						<p>{Stone.stoneDetail.type}</p>
					</div>
					<div className='flex flex-row justify-between p-2'>
						<p>Shape</p>
						<p>{Stone.stoneDetail.shape}</p>
					</div>
					<div className='flex flex-row justify-between bg-stone-100 p-2'>
						<p>Carat</p>
						<p>{Stone.stoneDetail.carat}</p>
					</div>
					<div className='flex flex-row justify-between p-2'>
						<p>Intensity</p>
						<p>{Stone.stoneDetail.intensity}</p>
					</div>
					<div className='flex flex-row justify-between bg-stone-100 p-2'>
						<p>Clarity</p>
						<p>{Stone.stoneDetail.clarity}</p>
					</div>
					{/* </div> */}
					{/* <div className='flex flex-col mt-4 w-full'> */}
					<div className='flex flex-row justify-between p-2'>
						<p>Origin</p>
						<p>{Stone.stoneDetail.origin}</p>
					</div>
					<div className='flex flex-row justify-between bg-stone-100 p-2'>
						<p>Measurments</p>
						<p>10.98x7.53x5.28</p>
					</div>
					<div className='flex flex-row justify-between p-2'>
						<p>Color</p>
						<p>Blue</p>
					</div>
					<div className='flex flex-row justify-between bg-stone-100 p-2'>
						<p>Stone Cut</p>
						<p>Brilliant / Step cut</p>
					</div>
					<div className='flex flex-row justify-between p-2'>
						<p>Treatment</p>
						<p>Heated</p>
					</div>
					<div className='flex flex-row justify-between bg-stone-100 p-2'>
						<p>Certificate</p>
						<p className='mr-1'>
							ICL <p className='underline'>View Report {'>>'}</p>
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

const mapStateToProps = state => {
	return {
		Stone: state.Stone,
	}
}

export default connect(mapStateToProps, null)(StoneDetail)
