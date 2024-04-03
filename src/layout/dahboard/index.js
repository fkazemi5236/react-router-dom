import { Link, Outlet } from "react-router-dom"

const DashboardSharedLayout = () => {
	return <>
		<div className="sidebar">
			<ul className="menu vertical">
				<li><Link to="/dashboard/profile">profile</Link></li>
				<li><Link to="/dashboard/setting">setting</Link></li>
				<li><Link to="">menu 1</Link></li>
				<li><Link to="/">back to home</Link></li>
			</ul>
		</div>
		<div className="page_content">
			<Outlet />
		</div>

	</>
}
export default DashboardSharedLayout