import React from 'react'
import ChatIcon from './assets/icons/chat-icon.svg'
import CloseIcon from './assets/icons/close-icon.svg'

const ChatToggler = ({ toggle, setToggle, fullscreen }) => {
  
	function toggleFab() {
		setToggle(!toggle)
	}

	return (
		<>
			<a
				id='akits-pkteam-prime'
				className={`akits-pkteam-fab ${
					toggle ? ' akits-pkteam-is-visible is-float' : ''
				} ${fullscreen ? ' akits-pkteam-is-hide' : ''}`}
				onClick={toggleFab}
			>
				{toggle ? (
					<div style={{ marginTop: '15px' }}>
						<img src={CloseIcon} />
					</div>
				) : (
					<div style={{ marginTop: '13px' }}>
						<img src={ChatIcon} />
					</div>
				)}
			</a>
		</>
	)
}

export default ChatToggler
