import React, { useState, useEffect, useContext } from "react";

//IMPORTING CONTRCT DATA
import { EvidanceContext } from "../Context/EvidanceContext";
import { OrderBox } from "../components/componentsindex";

const orders = () => {
	const { currentAccount, getAllOrders } = useContext(EvidanceContext);
	const [orders, setOrders] = useState([]);

	useEffect(() => {
		if (currentAccount) {
			const data = getAllOrders().then((items) => {
				setOrders(items);
			});
		}
	}, [currentAccount]);
    
	return (
		<div className="flex justify-center">
			<div className="grid grid-cols-1 lg:px-10 lg:grid-cols-3">
				{orders?.length !== 0 ? (
					orders?.map((item, index) => <OrderBox order={item} />)
				) : (
					<></>
				)}
			</div>
		</div>
	);
};

export default orders;
