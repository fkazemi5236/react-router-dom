import { Link } from "react-router-dom"
import { FakeData } from "./data"

const ProductListScreen = () => {

	const ProductCard = ({ item }) => {
		return <>
			<div className="callout">
				<img src={item.img} />
				<Link to={`/products/single-product/${item.id}`}>{item.name}</Link>
				<div>
					<span>Price: {item.price}</span>
				</div>
				<Link to={`/products/single-product/${item.id}`} className="button expanded">Order</Link>
			</div>
		</>
	}
	return <>
		<div className="row">
			{FakeData.map((item, key) =>
				<div className="small-6 medium-4 large-3 columns">
					<ProductCard item={item} />
				</div>
			)}

		</div>
	</>
}
export default ProductListScreen