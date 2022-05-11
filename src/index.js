import App from './App'
import ReactDOM from 'react-dom'
import React, { lazy, Suspense } from 'react'
import regeneratorRuntime from 'regenerator-runtime'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// const App = lazy(() => import('./App'))

ReactDOM.render(
	<React.StrictMode>
		{/* <BrowserRouter> */}
		{/* <Suspense fallback={<div>Loading...</div>}> */}
		<App />
		{/* </Suspense> */}
		{/* </BrowserRouter> */}
	</React.StrictMode>,
	document.getElementById('root')
)
