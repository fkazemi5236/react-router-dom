import { Link, useParams } from "react-router-dom"
import { FakeData } from "./data"

const SingleProductScreen = () => {
	const { productId } = useParams()

	const dynamicItem = FakeData.find(x=> x.id === Number(productId))

	return <>
		<div>
			<h2>single Product</h2>
			<img src={dynamicItem?.img} />
			<h4>{dynamicItem?.name}</h4>
			<h4>{dynamicItem?.price}</h4>
			<h4>some text for testing is in here</h4>
			<Link to="/products">back to list</Link>
		</div>
	</>
}
export default SingleProductScreen