import React, { useContext } from "react";
import { Button } from "../componentsindex";
import { EvidanceContext } from "../../Context/EvidanceContext";

export const OrderBox = (order) => {
	const { acceptOrder } = useContext(EvidanceContext);
	console.log(order);
	return (
		<div
			className=" bg-white rounded-lg shadow-lg p-6 mb-6 lg:ml-4 lg:mr-0"
			key={order.order.id}
		>
			<div className="flex justify-center">
				<h2 className="text-2xl text-black font-semibold mb-4">
					{order.order.details}
				</h2>
			</div>

			<div className="mb-4">
				<p className="text-black flex text-sm">
					Creator: {order.order.creator}
				</p>
				<p className="text-black flex text-sm">
					{order.order.buyer !==
					"0x0000000000000000000000000000000000000000" ? (
						<p>Buyer: {order.order.buyer}</p>
					) : (
						<></>
					)}
				</p>
				<p className="text-black flex text-sm">
					Price: {Number(order.order.price)} ComplyCoin
				</p>
				<p className="text-black text-sm">
					{order.order.sold ? <p>Sold: Yes</p> : <p>Sold: No</p>}
				</p>

				<div className="text-black text-sm flex justify-center">
					{order.order.sold ? (
						<p className="italic mt-10 text-green-600">
							Sold for {Number(order.order.price)} ComplyCoin
						</p>
					) : (
						<Button
							btnName="Buy"
							handleClick={() => acceptOrder(order.order.id, order.order.price)}
						/>
					)}
				</div>
			</div>
		</div>
	);
};

export default OrderBox;
