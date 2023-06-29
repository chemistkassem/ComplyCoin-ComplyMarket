import React, { useContext } from "react";
import { Button } from "../componentsindex";
import { EvidanceContext } from "../../Context/EvidanceContext";

export const EvidanceBox = (evidence) => {
	const { approveEvidence } = useContext(EvidanceContext);
	return (
		<div
			className=" bg-white rounded-lg shadow-lg p-6 mb-6 lg:ml-4 lg:mr-0"
			key={evidence.evidence.id}
		>
			<div className="flex justify-center">
				<h2 className="text-2xl text-black font-semibold mb-4">
					Evidance #{Number(evidence.evidence.id) + 1}
				</h2>
			</div>

			<div className="mb-4">
				<p className="text-black flex text-sm">
					Creator: {evidence.evidence.creator}
				</p>
				<p className="text-black text-sm">
					{evidence.evidence.approved ? (
						<p>Approved: Yes</p>
					) : (
						<p>Approved: No</p>
					)}
				</p>

				<div className="text-black text-sm flex justify-center">
					{evidence.evidence.approved ? (
						<p className="italic mt-10 text-green-600">
							Evidance is approved by admin
						</p>
					) : (
						<Button
							btnName="Approve"
							handleClick={() => approveEvidence(evidence.evidence.id)}
						/>
					)}
				</div>
			</div>
		</div>
	);
};

export default EvidanceBox;
