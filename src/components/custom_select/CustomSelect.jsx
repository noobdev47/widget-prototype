import React from 'react'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'

const animatedComponents = makeAnimated()

const CustomSelect = ({ options, label, name }) => {
	return (
		<div className='flex basis-2/4 p-2 items-stretch flex-col'>
			<p className='m-0 font-sans text-base'>{label}</p>
			<Select
				isMulti
				name={name}
				isSearchable
				options={options}
				closeMenuOnSelect={false}
				className='mt-2 font-sans text-sm'
				components={animatedComponents}
			/>
		</div>
	)
}

export default CustomSelect
