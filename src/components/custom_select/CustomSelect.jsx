import React from 'react'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'

const animatedComponents = makeAnimated()

const CustomSelect = ({ options, label }) => {
	return (
		<div className='akits-pkteam-custom-select'>
			<h3 className='akits-pkteam-filter-div-header-text'>{label}</h3>
			<Select
				isMulti
				isSearchable
				options={options}
				closeMenuOnSelect={false}
				className='akits-pkteam-select'
				components={animatedComponents}
			/>
		</div>
	)
}

export default CustomSelect
