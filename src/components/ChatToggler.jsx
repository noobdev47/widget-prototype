import React from 'react'
import GemIcon from './assets/icons/gem-icon.svg'
import CloseIcon from './assets/icons/close-icon.svg'

const ChatToggler = ({ toggle, setToggle, fullscreen }) => {
	function toggleFab() {
		setToggle(!toggle)
	}

	return (
		<>
			<a
				onClick={toggleFab}
				id='akits-pkteam-prime'
				className={`akits-pkteam-fab ${
					toggle ? ' akits-pkteam-is-visible is-float' : ''
				} ${fullscreen ? ' akits-pkteam-is-hide' : ''}`}
			>
				{toggle ? (
					<div style={{ marginTop: '15px' }}>
						<img src={CloseIcon} />
					</div>
				) : (
					<div style={{ marginTop: '13px' }}>
						<img src={GemIcon} />
					</div>
				)}
			</a>
		</>
	)
}

export default ChatToggler
