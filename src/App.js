import React, { lazy, Suspense } from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

const About = lazy(() => import('./components/About'))
const Contact = lazy(() => import('./components/Contact'))
const Home = lazy(() => import('./components/Home'))
const Navbar = lazy(() => import('./components/Navbar'))

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<Suspense fallback={<p>Loading...</p>}>
					<Navbar />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/about' element={<About />} />
						<Route path='/contact' element={<Contact />} />
					</Routes>
				</Suspense>
			</BrowserRouter>
		</div>
	)
}

export default App
