import React from 'react'

const ListItem = ({ data }) => {
	return (
		<div className='p-2 m-2 flex flex-col basis-2/3 md:basis-5/12 lg:basis-5/12 sm:basis-2/3 border border-slate-300 rounded'>
			<img src={data.image} className='border-b-2' />
			<p className='m-0 font-sans text-center text-base mt-2 text-slate-400'>
				SKU-{data.sku}
			</p>
			<div className='flex flex-row items-stretch'>
				<div className='flex flex-col flex-1 items-center justify-evenly'>
					<div className='flex flex-col items-center'>
						<p className='m-0 font-sans text-base font-light'>{data.type}</p>
						<p className='m-0 font-sans text-base'>Type</p>
					</div>
					<div className='flex flex-col items-center'>
						<p className='m-0 font-sans text-base font-light text-center'>
							{data.intensity}
						</p>
						<p className='m-0 font-sans text-base'>Intensity</p>
					</div>
				</div>
				<div className='flex flex-col flex-1 items-center justify-evenly'>
					<div className='flex flex-col items-center'>
						<p className='m-0 font-sans text-base font-light'>{data.shape}</p>
						<p className='m-0 font-sans text-base'>Shape</p>
					</div>
					<div className='flex flex-col items-center'>
						<p className='m-0 font-sans text-base font-light'>{data.clarity}</p>
						<p className='m-0 font-sans text-base'>Clarity</p>
					</div>
				</div>
				<div className='flex flex-col flex-1 items-center justify-evenly'>
					<div className='flex flex-col items-center'>
						<p className='m-0 font-sans text-base font-light'>{data.carat}</p>
						<p className='m-0 font-sans text-base'>Carat</p>
					</div>
					<div className='flex flex-col items-center'>
						<p className='m-0 font-sans text-base font-light'>{data.origin}</p>
						<p className='m-0 font-sans text-base'>Origin</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ListItem
