import React from 'react'
import { connect } from 'react-redux'
import { RiCloseLine } from 'react-icons/ri'
import { GoScreenFull } from 'react-icons/go'
import { GoScreenNormal } from 'react-icons/go'

const ChatHeader = ({ Auth, toggle, setToggle, fullscreen, setFullscreen }) => {
	function toggleFullScreen() {
		setFullscreen(!fullscreen)
	}

	function toggleFullScreenAndClose() {
		setToggle(!toggle)
		setFullscreen(!fullscreen)
	}

	return (
		<div
			className={
				fullscreen
					? 'akits-pkteam-chat_header akits-pkteam-chat_header2'
					: 'akits-pkteam-chat_header'
			}
		>
			<>
				{/* <h2
					style={{
						marginTop: '10px',
						color: 'white',
						textAlign: 'center',
						fontWeight: 'lighter',
					}}
				>
				</h2> */}
				{/* <span
					className='akits-pkteam-chat_fullscreen_loader'
					style={{
						display: 'block',
						marginTop: '-2px',
						marginRight: '50px',
					}}
				>
					{fullscreen ? (
						<GoScreenNormal
							size='1.5em'
							style={{ marginRight: '-5px' }}
							onClick={toggleFullScreen}
						/>
					) : (
						<GoScreenFull
							size='1.5em'
							style={{ marginRight: '-30px' }}
							onClick={toggleFullScreen}
						/>
					)}
				</span> */}

				<span
					className='akits-pkteam-chat_fullscreen_loader'
					style={{
						marginTop: '-4px',
						marginRight: '15px',
						display: fullscreen ? 'block' : 'none',
					}}
				>
					{fullscreen ? (
						<RiCloseLine
							size='1.5em'
							style={{ marginRight: '-10px' }}
							onClick={toggleFullScreenAndClose}
						/>
					) : (
						<></>
					)}
				</span>
			</>
		</div>
	)
}

const mapStateToProps = state => {
	return {
		Auth: state.Auth,
	}
}

export default connect(mapStateToProps, null)(ChatHeader)
