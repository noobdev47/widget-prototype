import React, { useState } from 'react'
import CustomSelect from '../custom_select/CustomSelect'

const Filter = () => {
	const [filter, setFilter] = useState({
		type: [],
		shape: [],
		stoneCut: [],
		clarity: [],
		intensity: [],
		dimensionsTo: { length: 0, width: 0 },
		dimensionsFrom: { length: 0, width: 0 },
		// carats: {},
	})

	const handleOnChange = e => {}

	return (
		<div className='akits-pkteam-filter-div'>
			<div className='akits-pkteam-filter-div-header'>
				<h1 className='akits-pkteam-filter-div-header-text'>
					Search by Filter:
				</h1>
			</div>
			<div className='akits-pkteam-filter-div-content'>
				<CustomSelect
					options={[
						{ value: 1, label: '1' },
						{ value: 2, label: '2' },
					]}
					label={'Type'}
				/>
				<CustomSelect
					options={[
						{ value: 1, label: '1' },
						{ value: 2, label: '2' },
					]}
					label={'Shape'}
				/>
				<CustomSelect
					options={[
						{ value: 1, label: '1' },
						{ value: 2, label: '2' },
					]}
					label={'Stone Cut'}
				/>
				<CustomSelect
					options={[
						{ value: 1, label: '1' },
						{ value: 2, label: '2' },
					]}
					label={'Clarity'}
				/>
				<CustomSelect
					options={[
						{ value: 1, label: '1' },
						{ value: 2, label: '2' },
					]}
					label={'Intensity'}
				/>
				<CustomSelect
					options={[
						{ value: 1, label: '1' },
						{ value: 2, label: '2' },
					]}
					label={'Color'}
				/>
				<div className='akits-pkteam-filter-dimensions-container'>
					<div className='akits-pkteam-filter-input'>
						<h3 className='akits-pkteam-filter-div-header-text'>
							Dimensions Range From:
						</h3>
						<div className='akits-pkteam-filter-input-subgroup'>
							<input
								type='number'
								placeholder='Length'
								onChange={handleOnChange}
								style={{ marginRight: '5px', width: '50%' }}
								value={filter.dimensionsFrom.length}
							/>
							<input
								type='number'
								placeholder='Width'
								style={{ marginRight: '10px', width: '50%' }}
								onChange={handleOnChange}
								value={filter.dimensionsFrom.width}
							/>
						</div>
					</div>
					<div className='akits-pkteam-filter-input'>
						<h3 className='akits-pkteam-filter-div-header-text'>
							Dimensions Range To:
						</h3>
						<div className='akits-pkteam-filter-input-subgroup'>
							<input
								type='number'
								placeholder='Length'
								onChange={handleOnChange}
								style={{ marginRight: '5px', width: '50%' }}
								value={filter.dimensionsTo.length}
							/>
							<input
								type='number'
								placeholder='Width'
								style={{ width: '50%' }}
								onChange={handleOnChange}
								value={filter.dimensionsTo.width}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Filter
