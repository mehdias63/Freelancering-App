import { Route, Routes } from 'react-router-dom'
import Auth from './pages/Auth'
import {
	QueryClient,
	QueryClientProvider,
} from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'
import CompleteProfile from './pages/CompleteProfile'
import Home from './pages/Home'
import Owner from './pages/Owner'
import AppLayout from './ui/AppLayout'
import NotFound from './pages/NotFound'

const queryClient = new QueryClient()

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<div className="container xl:max-w-screen-xl">
				<Toaster />
				<Routes>
					<Route path="/auth" element={<Auth />} />
					<Route
						path="/complete-profile"
						element={<CompleteProfile />}
					/>
					<Route element={<AppLayout />}>
						<Route path="/owner" element={<Owner />} />
					</Route>
					<Route path="/" element={<Home />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</div>
		</QueryClientProvider>
	)
}

export default App
