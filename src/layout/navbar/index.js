import { NavLink } from "react-router-dom"
import './style.css'

const Navbar = () => {
	return <>
	<header>
			<ul className='menu '>
				<li>
					<NavLink to="/" 
					style={({isActive})=> {
						return {color: isActive ? '#009875' : '#444'}
					}}
					className={({isActive})=>{
						return isActive ? 'link active' : 'link'
					}}
					>home</NavLink>
				</li>
				<li>
					<NavLink to="/about" style={({isActive})=> {
						return {color: isActive ? '#009875' : '#444'}
					}}
					className={({isActive})=>{
						return isActive ? 'link active' : 'link'
					}}
					>about</NavLink>
				</li>
				<li>
					<NavLink to="/product" style={({isActive})=> {
						return {color: isActive ? '#009875' : '#444'}
					}}
					className={({isActive})=>{
						return isActive ? 'link active' : 'link'
					}}
					>product</NavLink>
				</li>
			</ul>
		</header>
	</>
}
export default Navbar