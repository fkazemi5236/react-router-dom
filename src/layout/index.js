import { Link, Outlet } from "react-router-dom"

const SiteSharedLayout = () => {
	return <>
		<header>
			<ul className='menu '>
				<li>
					<Link to="/">home</Link>
				</li>
				<li>
					<Link to="/about">about</Link>
				</li>
				<li>
					<Link to="/product">product</Link>
				</li>
			</ul>
		</header>

		<div className="page_content">
			<Outlet />
		</div>

    <footer>
      <p>copyright @2024 by Fatima kazemi</p>
    </footer>
	</>
}
export default SiteSharedLayout