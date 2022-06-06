import Filter from '../filter/Filter'
import { connect } from 'react-redux'
import ChatHeader from '../ChatHeader'
import ChatToggler from '../ChatToggler'
import React, { useRef, useState } from 'react'

const MainContainer = ({ Auth }) => {
	const chatWindowRef = useRef(null)
	const scrollToBottomRef = useRef(null)
	const [Toggle, setToggle] = useState(false)
	const [loading, setLoading] = useState(false)
	const [Fullscreen, setFullscreen] = useState(false)

	return (
		<>
			<link rel='stylesheet' href='/assets/css/style.css' />

			{/* <!-- Main Wrapper --> */}
			<div className='akits-pkteam-fabs'>
				{/* <!-- Chat Window --> */}
				<div
					className={`akits-pkteam-chat ${
						Toggle ? 'akits-pkteam-is-visible' : ''
					} ${Fullscreen ? 'akits-pkteam-chat_fullscreen' : ''}`}
				>
					{/* Chat Header */}
					<ChatHeader
						toggle={Toggle}
						setToggle={setToggle}
						fullscreen={Fullscreen}
						setFullscreen={setFullscreen}
					/>
					<div className='akits-pkteam-subcontainer'>
						<Filter />
					</div>
				</div>

				{!Fullscreen ? (
					<ChatToggler
						toggle={Toggle}
						setToggle={setToggle}
						fullscreen={Fullscreen}
					/>
				) : (
					<></>
				)}
			</div>
		</>
	)
}

const mapStateToProps = state => {
	return {
		Auth: state.Auth,
	}
}

export default connect(mapStateToProps, null)(MainContainer)
