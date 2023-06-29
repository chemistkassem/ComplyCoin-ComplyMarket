import React, { useState, useEffect, useContext } from "react";

//IMPORTING CONTRCT DATA
import { EvidanceContext } from "../Context/EvidanceContext";
import { EvidanceBox } from "../components/componentsindex";

const admin = () => {
	const { currentAccount, getAllEvidence } = useContext(EvidanceContext);
	const [evidences, setEvidences] = useState([]);

	useEffect(() => {
		if (currentAccount) {
			const data = getAllEvidence().then((items) => {
				setEvidences(items);
			});
		}
	}, [currentAccount]);

	return (
		<div className="flex justify-center">
			<div className="grid grid-cols-1 lg:px-10 lg:grid-cols-3">
				{evidences?.length !== 0 ? (
					evidences?.map((item, index) => <EvidanceBox evidence={item} />)
				) : (
					<></>
				)}
			</div>
		</div>
	);
};

export default admin;
