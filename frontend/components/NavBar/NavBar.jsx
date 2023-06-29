import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";

//INTERNAL IMPORT
import Style from "./NavBar.module.css";
import { Button } from "../componentsindex";

//IMPORT FROM SMART CONTRACT
import { EvidanceContext } from "../../Context/EvidanceContext";

const NavBar = () => {
	//SMART CONTRACT SECTION
	const { currentAccount, connectWallet, accountBalance } = useContext(
		EvidanceContext
	);

	return (
		<div>
			<div className={Style.navbar}>
				<div className={Style.navbar_container}>
					<div className={Style.navbar_container_left}>
						<div className={Style.logo}>
							<Link href="/">POC</Link>
						</div>
					</div>

					<div className={Style.navbar_container_right}>
						<div className={Style.navbar_container_right_discover}>
							<p className="text-green-500">Coins: {Number(accountBalance)}</p>
						</div>
						<div className={Style.navbar_container_right_discover}>
							<Link href="/admin" className="headerLink text-white">
								Admin
							</Link>
						</div>

						<div className={Style.navbar_container_right_help}>
							<Link href="/orders" className="headerLink text-white">
								Orders
							</Link>
						</div>

						{/* CREATE BUTTON SECTION */}
						<div className={Style.navbar_container_right_button}>
							{currentAccount == "" ? (
								<Button btnName="Connect" handleClick={() => connectWallet()} />
							) : (
								<p>{currentAccount.substring(0, 10) + "..."}</p>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
