import { Link } from "react-router-dom"

const HomeScreen = () => {
	return <>
	<div>Home page</div>
	<Link to="/about">go to about</Link>
	<br/>
	<Link to="/product">go to product</Link>
	</>
}
export default HomeScreen