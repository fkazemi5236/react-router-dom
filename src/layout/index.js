import { Link,NavLink, Outlet } from "react-router-dom"
import Navbar from "./navbar"

const SiteSharedLayout = () => {
	return <>
		<Navbar />

		<div className="page_content">
			<Outlet />
		</div>

    <footer>
      <p>copyright @2024 by Fatima kazemi</p>
    </footer>
	</>
}
export default SiteSharedLayout