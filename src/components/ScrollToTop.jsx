import React from 'react'
import ChevronUpIcon from './assets/icons/chevron-up-icon.svg'

const ScrollToTop = ({ scrolledToTop, toggle, scrollToTop }) => {
	return (
		<a
			onClick={scrollToTop}
			id='akits-pkteam-prime'
			className={`akits-pkteam-fab shadow-lg hover:shadow-lg hover:shadow-sky-600/50 ${
				scrolledToTop ? '' : 'animate-bounce'
			} ${scrolledToTop && toggle ? ' akits-pkteam-is-visible is-float' : ''}`}
		>
			<img src={ChevronUpIcon} />
		</a>
	)
}

export default ScrollToTop
