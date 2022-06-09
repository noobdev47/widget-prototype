import React from 'react'
import GemIcon from './assets/icons/gem-icon.svg'
import CloseIcon from './assets/icons/close-icon.svg'

const ChatToggler = ({ toggle, setToggle, fullscreen }) => {
	const toggleFab = () => {
		setToggle(!toggle)
	}

	return (
		<a
			onClick={toggleFab}
			id='akits-pkteam-prime'
			className={`akits-pkteam-fab shadow-lg hover:shadow-lg hover:shadow-sky-600/50 ${
				toggle ? ' akits-pkteam-is-visible is-float' : ''
			} ${fullscreen ? ' akits-pkteam-is-hide' : ''}`}
		>
			<img
				className={`${toggle ? '' : ''}`}
				src={toggle ? CloseIcon : GemIcon}
			/>
		</a>
	)
}

export default ChatToggler
