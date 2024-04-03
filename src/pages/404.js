import { Link } from "react-router-dom"

const ErrorScreen = () => {
	return <>
		<h1>
			Sorry..! page not found!
		</h1>
		<Link to="/">back to home</Link>
	</>
}
export default ErrorScreen