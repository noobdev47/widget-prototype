import React, { useState } from 'react'
import CustomSelect from '../custom_select/CustomSelect'
import CaretUpIcon from '../assets/icons/caret-up-icon.svg'
import CaretDownIcon from '../assets/icons/caret-down-icon.svg'

const Filter = ({ hideFilter, setHideFilter }) => {
	const [filter, setFilter] = useState({
		shapes: [],
		colors: [],
		origins: [],
		width_to: 0,
		length_to: 0,
		width_from: 0,
		clarities: [],
		treatments: [],
		stone_cuts: [],
		weight_to: 150,
		length_from: 0,
		stone_types: [],
		price_from: 300,
		weight_from: 0.05,
		price_to: 1000000,
		color_intensities: [],
	})

	const handleOnChange = e => {
		const { name, value } = e.target

		setFilter({ ...filter, [name]: [value] })
	}

	return (
		<div className='p-2 border-2 rounded-md border-solid border-slate-200	bg-slate-50'>
			<div className='flex flex-row justify-between mb-2'>
				<p className='font-sans text-3xl'>Search by Filter:</p>
				<div
					className={`transition duration-500 ease-in-out transform ${
						hideFilter ? 'rotate-180' : 'rotate-0'
					}`}
				>
					<img
						src={CaretUpIcon}
						onClick={() => setHideFilter(!hideFilter)}
						className='h-9 w-9 cursor-pointer animate-bounce'
					/>
				</div>
			</div>
			<div
				className={`${
					hideFilter ? 'hidden' : 'flex'
				} flex-col md:flex-row sm:flex-col lg:flex-row justify-between flex-wrap transition duration-500 ease-in-out transform`}
			>
				<CustomSelect
					label={'Type'}
					name={'stone_types'}
					options={[
						{ value: 1, label: '1' },
						{ value: 2, label: '2' },
					]}
				/>
				<CustomSelect
					label={'Shape'}
					name={'shapes'}
					options={[
						{ value: 1, label: '1' },
						{ value: 2, label: '2' },
					]}
				/>
				<CustomSelect
					label={'Stone Cut'}
					name={'stone_cuts'}
					options={[
						{ value: 1, label: '1' },
						{ value: 2, label: '2' },
					]}
				/>
				<CustomSelect
					label={'Clarity'}
					name={'clarities'}
					options={[
						{ value: 1, label: '1' },
						{ value: 2, label: '2' },
					]}
				/>
				<CustomSelect
					label={'Intensity'}
					name={'color_intensities'}
					options={[
						{ value: 1, label: '1' },
						{ value: 2, label: '2' },
					]}
				/>
				<CustomSelect
					label={'Color'}
					name={'colors'}
					options={[
						{ value: 1, label: '1' },
						{ value: 2, label: '2' },
					]}
				/>
				<div className='p-1 flex flex-row justify-between'>
					<div className='flex p-1 items-stretch flex-col'>
						<p className='m-0 font-sans text-base'>Dimensions Range From:</p>
						<div className='flex mt-1 flex-row'>
							<input
								type='number'
								name='length_from'
								placeholder='Length'
								onChange={handleOnChange}
								value={filter.length_from}
								className='rounded py-0 h-9 px-1 border-gray-300 mr-2 w-3/4'
							/>
							<input
								type='number'
								name='width_from'
								placeholder='Width'
								onChange={handleOnChange}
								value={filter.width_from}
								className='rounded py-0 h-9 px-1 border-gray-300 w-3/4'
								style={{ marginRight: '10px' }}
							/>
						</div>
					</div>
					<div className='flex p-1 items-stretch flex-col'>
						<p className='m-0 font-sans text-base'>Dimensions Range To:</p>
						<div className='flex mt-1 flex-row'>
							<input
								type='number'
								name='length_to'
								placeholder='Length'
								value={filter.length_to}
								onChange={handleOnChange}
								className='rounded py-0 h-9 px-1 border-gray-300 mr-2 w-3/4'
							/>
							<input
								type='number'
								name='width_to'
								placeholder='Width'
								value={filter.width_to}
								onChange={handleOnChange}
								className='rounded py-0 h-9 px-1 border-gray-300 w-3/4'
							/>
						</div>
					</div>
				</div>

				<div className='p-1 flex flex-row items-stretch'>
					<div className='flex p-1 items-stretch flex-col w-100'>
						<h3 className='m-0 font-sans text-base'>Carats:</h3>
						<div className='flex mt-1 flex-row'></div>
					</div>

					<div className='flex p-1 items-stretch flex-col w-100'>
						<h3 className='m-0 font-sans text-base'>Price:</h3>
						<div className='flex mt-1 flex-row'></div>
					</div>
				</div>

				<CustomSelect
					label={'Treatment'}
					name={'treatments'}
					options={[
						{ value: 1, label: '1' },
						{ value: 2, label: '2' },
					]}
				/>
				<CustomSelect
					label={'Origin'}
					name={'origins'}
					options={[
						{ value: 1, label: '1' },
						{ value: 2, label: '2' },
					]}
				/>

				<div className='flex basis-2/4 p-2 items-stretch flex-col'>
					<h3 className='m-0 font-sans text-base'>Certificate ID</h3>
					<input
						type='number'
						name='certificates'
						placeholder='Length'
						value={filter.length_to}
						onChange={handleOnChange}
						className='rounded py-0 h-9 px-1 border-gray-300 mt-1'
					/>
				</div>
				<div className='flex basis-2/4 p-2 items-stretch flex-col'>
					<h3 className='m-0 font-sans text-base'>Stone SKU</h3>
					<input
						type='number'
						name='sku_codes'
						placeholder='Length'
						value={filter.length_to}
						onChange={handleOnChange}
						className='rounded py-0 h-9 px-1 border-gray-300 mt-1'
					/>
				</div>
			</div>
		</div>
	)
}

export default Filter
