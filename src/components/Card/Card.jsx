import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button/Button";
import PropTypes from "prop-types";
import formatToIDRCurrency from "../../utils/formatToIDRCurrency";
import { Link } from "react-router-dom";

export default function Card({ product }) {
	return (
		<Link
			to={`/products/${product.slug}`}
			className="rounded-lg shadow-lg flex flex-col max-w-[370px] flex-wrap p-[16px] bg-[#081116] hover:ring-opacity-40 active:ring-5 hover:ring-[#FFFFFF] active:ring-[#3D0000] hover:ring-4 active:ring-3 active:ring-opacity-90"
		>
			<div className="flex flex-col max-w-[370px] flex-wrap p-[16px] bg-[#081116]">
				<img
					src={product.imageUrl ?? ""}
					alt={product.name ?? "No name"}
					className="rounded-lg shadow-lg block max-h-[300px] mb-4 object-cover"
				/>
				<div className="flex flex-col gap-2">
					<h4 className="font-medium text-[20px] text-white">{product.name ?? "No Name"}</h4>
					<span className="block font-medium text-[14px] text-white">{product.category ?? "Uncatagorized"}</span>
					<span className="block font-medium text-[20px] text-white">
						{formatToIDRCurrency(product.price) ?? "Not for sale"}
					</span>
					<div className="relative w-full h-full">
						{product.stock <= 0 ? (
							<p className="text-xl font-semibold text-center text-red-500">Out of Stock</p>
						) : product.stock <= 25 && product.stock !== 0 ? (
							<>
								<p className="text-xl font-semibold text-center text-yellow-500">Almost Sold Out</p>
								<Button
									type="button"
									className="rounded-lg shadow-lg inline-flex items-center justify-center gap-2 p-4 bg-[#950101] text-center hover:bg-[#3D0000] text-white active:bg-[#FF0000]"
								>
									<FontAwesomeIcon icon={faCartShopping} className="mb-0" />
									<span>Add to cart</span>
								</Button>
							</>
						) : (
							<Button
								type="button"
								className="rounded-lg shadow-lg bottom-0 left-0 inline-flex items-center justify-center gap-2 p-4 bg-[#950101] text-center hover:bg-[#3D0000] text-white active:bg-[#FF0000]"
							>
								<FontAwesomeIcon icon={faCartShopping} className="mb-0" />
								<span>Add to cart</span>
							</Button>
						)}
					</div>
				</div>
			</div>
		</Link>
	);
}

Card.propTypes = {
	product: PropTypes.object
};
