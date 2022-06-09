import React from 'react'

const ListItem = ({ data }) => {
	return (
		<div className='p-2 m-2 flex flex-col basis-2/3 sm:basis-5/12 md:basis-5/12 lg:basis-5/12  border border-slate-300 rounded'>
			<img
				src={data.image}
				className='border-b transition ease-in-out duration-300 hover:scale-105'
			/>
			<p className='m-0 font-sans text-center text-xl my-2 text-slate-400'>
				SKU-{data.sku}
			</p>
			<div className='flex flex-row items-stretch pb-2 border-b'>
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
			<p className='font-sans py-2 text-2xl text-sky-500 text-center'>
				{data.price}
			</p>
			<button className='py-3 hover:shadow-lg hover:shadow-sky-500/50 transition ease-in-out duration-300 font-medium text-lg rounded font-sans border border-sky-500 bg-white text-sky-500 hover:bg-sky-500 hover:text-white'>
				MORE INFO
			</button>
		</div>
	)
}

export default ListItem
