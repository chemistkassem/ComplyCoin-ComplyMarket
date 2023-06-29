import React, { useState, useEffect, useContext } from "react";

//INTERNAL IMPORT
import Style from "../styles/index.module.css";
import {
  Button
} from "../components/componentsindex";

//IMPORTING CONTRCT DATA
import { EvidanceContext } from "../Context/EvidanceContext";

const Home = () => {
  const { currentAccount, createEvidence, createOrder } = useContext(
    EvidanceContext
  );
  const [price, setPrice] = useState(0);
  const [details, setDetails] = useState("");
  

  const handleTitleChange = (e) => {
		setPrice(e.target.value);
	};

  const handleDetailsChange = (e) => {
		setDetails(e.target.value);
	};

  useEffect(() => {
    if (currentAccount) {
    }
  },[currentAccount]);
  
;

  return (
    <div className={Style.homePage}>
      <div className="grid grid-cols-2 g:px-10 lg:grid-cols-2">

      <div className="flex justify-center">
        <div className="grid grid-cols-1 g:px-10 lg:grid-cols-1">
          <p className="text-2xl text-white font-semibold mb-4"> Create Evidance </p>
          <Button btnName="Create" handleClick={() => createEvidence()} />
        </div>
       
      </div>
      
      <div className="flex justify-center">
        <div className="grid grid-cols-1 g:px-10 lg:grid-cols-1">
          <p className="text-2xl text-white font-semibold mb-4"> Create Order </p>
          
          <div className="mb-4 px-4 lg:px-0">
						<label
							htmlFor="title"
							className="block text-lg font-medium text-white"
						>
							Price
						</label>
						<input
							type="number"
							id="title"
							value={price}
							onChange={handleTitleChange}
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							required
						/>
					</div>
          <div className="mb-4 px-4 lg:px-0">
						<label
							htmlFor="details"
							className="block text-lg font-medium text-white"
						>
							Details
						</label>
						<input
							type="text"
							id="details"
							value={details}
							onChange={handleDetailsChange}
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							required
						/>
					</div>

          <Button btnName="Create Order" handleClick={() => createOrder(price,details)} />
        </div>
        
      </div>
      
      

      </div>


    </div>
  );
};

export default Home;
