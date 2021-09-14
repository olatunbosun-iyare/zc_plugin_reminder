import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import CompletedPage from './pages/Completed/index'
import OverduePage from './pages/Overdue'
import UpcomingPage from './pages/Upcoming'
import Tabs from './components/nav/__compat__/nav_index.jsx'

const App = () => {
	return (
		<BrowserRouter>
			<Tabs />

			<Switch>
				<Route path="/" exact>
					<UpcomingPage />
				</Route>
				<Route path="/completed">
					<CompletedPage />
				</Route>
				<Route path="/overdue">
					<OverduePage />
				</Route>
			</Switch>
		</BrowserRouter>
	)
}

export default App
