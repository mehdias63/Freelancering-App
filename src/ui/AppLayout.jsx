import { Outlet } from 'react-router-dom'

function AppLayout({ children }) {
	return (
		<div className="">
			{children}
			<div className="bg-secondary-100 p-8 overflow-y-auto">
				<div className="mx-auto max-w-screen-lg flex flex-col gap-y-12">
					<Outlet />
				</div>
			</div>
		</div>
	)
}
export default AppLayout
