import { Navigate, Route, Routes } from 'react-router-dom'
import Auth from './pages/Auth'
import {
	QueryClient,
	QueryClientProvider,
} from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'
import CompleteProfile from './pages/CompleteProfile'
import Home from './pages/Home'
import OwnerDashboard from './pages/OwnerDashboard'
import OwnerLayout from './features/owner/OwnerLayout'
import NotFound from './pages/NotFound'
import Projects from './pages/Projects'
import Project from './pages/Project'
import { DarkModeProvider } from './context/DarkModeContext'

const queryClient = new QueryClient()

function App() {
	return (
		<DarkModeProvider>
			<QueryClientProvider client={queryClient}>
				<div className="container xl:max-w-screen-xl">
					<Toaster />
					<Routes>
						<Route path="/auth" element={<Auth />} />
						<Route
							path="/complete-profile"
							element={<CompleteProfile />}
						/>
						<Route path="/owner" element={<OwnerLayout />}>
							<Route
								index
								element={<Navigate to="dashboard" replace />}
							/>
							<Route path="dashboard" element={<OwnerDashboard />} />
							<Route path="projects" element={<Projects />} />
							<Route path="projects/:id" element={<Project />} />
						</Route>
						<Route path="/" element={<Home />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</div>
			</QueryClientProvider>
		</DarkModeProvider>
	)
}

export default App
