"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./Context/EvidanceContext.js":
/*!************************************!*\
  !*** ./Context/EvidanceContext.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"EvidanceContext\": function() { return /* binding */ EvidanceContext; },\n/* harmony export */   \"EvidanceProvider\": function() { return /* binding */ EvidanceProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! web3modal */ \"./node_modules/web3modal/dist/index.js\");\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ \"./Context/constants.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n//INTERNAL  IMPORT\n\n//---FETCHING SMART CONTRACT\nconst fetchContract = async (signerOrProvider, type)=>{\n    if (type === \"coin\") return new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.Contract(_constants__WEBPACK_IMPORTED_MODULE_3__.CoinAddress, _constants__WEBPACK_IMPORTED_MODULE_3__.coinABI, signerOrProvider);\n    if (type === \"market\") return new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.Contract(_constants__WEBPACK_IMPORTED_MODULE_3__.MarketAddress, _constants__WEBPACK_IMPORTED_MODULE_3__.marketABI, signerOrProvider);\n};\n//---CONNECTING WITH SMART CONTRACT\nconst connectingWithSmartContract = async (type)=>{\n    try {\n        const web3Modal = new (web3modal__WEBPACK_IMPORTED_MODULE_2___default())();\n        const connection = await web3Modal.connect();\n        const provider = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.providers.Web3Provider(connection);\n        const signer = provider.getSigner();\n        const contract = await fetchContract(signer, type);\n        return [\n            contract,\n            signer\n        ];\n    } catch (error) {\n        console.log(\"Something went wrong while connecting with contract\", error);\n    }\n};\nconst EvidanceContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext();\nconst EvidanceProvider = (param)=>{\n    let { children  } = param;\n    _s();\n    const titleData = \"Future of Shopping with our AI NFT Marketplace\";\n    //------USESTAT\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [currentAccount, setCurrentAccount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [accountBalance, setAccountBalance] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    //---CHECK IF WALLET IS CONNECTD\n    const checkIfWalletConnected = async ()=>{\n        try {\n            if (!window.ethereum) return setError(\"Install MetaMask\");\n            const accounts = await window.ethereum.request({\n                method: \"eth_accounts\"\n            });\n            if (accounts.length) {\n                setCurrentAccount(accounts[0].toLowerCase());\n                // const provider = new ethers.providers.Web3Provider(window.ethereum);\n                const trx = await connectingWithSmartContract(\"coin\");\n                const contract = trx[0];\n                const signer = trx[1];\n                const getBalance = await contract.balanceOf(accounts[0]);\n                setAccountBalance(getBalance);\n            } else {\n                setError(\"No Account Found\");\n            }\n        } catch (error) {\n            setError(\"Something wrong while connecting to wallet\");\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        checkIfWalletConnected();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!currentAccount) return;\n    }, [\n        currentAccount\n    ]);\n    //---CONNET WALLET FUNCTION\n    const connectWallet = async ()=>{\n        try {\n            if (!window.ethereum) return setError(\"Install MetaMask\");\n            const accounts = await window.ethereum.request({\n                method: \"eth_requestAccounts\"\n            });\n            setCurrentAccount(accounts[0].toLowerCase());\n        } catch (error) {\n            setError(\"Error while connecting to wallet\");\n        }\n    };\n    // ---- Create Compilance\n    const createEvidence = async ()=>{\n        try {\n            console.log(\"create evidence\");\n            if (currentAccount) {\n                let OwnerNonce = await owner.getNonce();\n                const contract = await connectingWithSmartContract(\"market\");\n                const createEvidence = await contract.createEvidence({\n                    nonce: OwnerNonce\n                });\n                console.log(createEvidence);\n            }\n        } catch (error) {\n            console.log(error);\n            setError(\"Error while creating evidence\");\n        }\n    };\n    const getAllEvidence = async ()=>{\n        try {\n            if (currentAccount) {\n                const contract = await connectingWithSmartContract(\"market\");\n                const getEvidence = await contract.getAllEvidence();\n                return getEvidence;\n            }\n        } catch (error) {\n            setError(\"Error while creating evidence\");\n        }\n    };\n    const approveEvidence = async (id)=>{\n        try {\n            if (currentAccount) {\n                const contract = await connectingWithSmartContract(\"market\");\n                const approveEvidence = await contract.approveEvidence(id);\n                await approveEvidence.wait();\n                console.log(approveEvidence);\n            }\n        } catch (error) {\n            setError(\"Error while creating evidence\");\n        }\n    };\n    const createOrder = async (price)=>{\n        try {\n            if (currentAccount) {\n                const contract = await connectingWithSmartContract(\"market\");\n                // const trx = await contractCoin.approve(MarketAddress, price);\n                // await trx.wait();\n                const createOrder = await contract.createOrder(price);\n                console.log(createOrder);\n            }\n        } catch (error) {\n            setError(\"Error while creating evidence\");\n        }\n    };\n    const getAllOrders = async ()=>{\n        try {\n            if (currentAccount) {\n                const contract = await connectingWithSmartContract(\"market\");\n                const getOrders = await contract.getAllOrders();\n                return getOrders;\n            }\n        } catch (error) {\n            setError(\"Error while creating evidence\");\n        }\n    };\n    const acceptOrder = async (id, price)=>{\n        try {\n            if (currentAccount) {\n                const contract = await connectingWithSmartContract(\"market\");\n                const contractCoin = await connectingWithSmartContract(\"coin\");\n                const trx = await contractCoin.approve(_constants__WEBPACK_IMPORTED_MODULE_3__.MarketAddress, price);\n                await trx.wait();\n                const acceptOrder = await contract.acceptOrder(id);\n                await acceptOrder.wait();\n                console.log(acceptOrder);\n            }\n        } catch (error) {\n            setError(\"Error while creating evidence\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(EvidanceContext.Provider, {\n        value: {\n            checkIfWalletConnected,\n            connectWallet,\n            currentAccount,\n            titleData,\n            error,\n            loading,\n            accountBalance,\n            createEvidence,\n            getAllEvidence,\n            approveEvidence,\n            createOrder,\n            getAllOrders,\n            acceptOrder\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/usamalatif/Desktop/Upwork/kaseem/ComplyCoin2023/frontend/Context/EvidanceContext.js\",\n        lineNumber: 196,\n        columnNumber: 3\n    }, undefined);\n};\n_s(EvidanceProvider, \"qQtFuIaue6uCliA/o3S/iHl1ASo=\");\n_c = EvidanceProvider;\nvar _c;\n$RefreshReg$(_c, \"EvidanceProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0M7Z0JBQy9DckMsUUFBUUMsR0FBRyxDQUFDbUM7WUFDYixDQUFDO1FBQ0YsRUFBQyxPQUFNckMsT0FBTTtZQUNaUSxTQUFTO1FBQ1Y7SUFDRDtJQUVBLE1BQU0rQixlQUFlLFVBQVU7UUFDOUIsSUFBRztZQUNGLElBQUc5QixnQkFBZTtnQkFDakIsTUFBTVYsV0FBVyxNQUFNVCw0QkFBNEI7Z0JBQ25ELE1BQU1rRCxZQUFZLE1BQU16QyxTQUFTd0MsWUFBWTtnQkFDN0MsT0FBT0M7WUFDUixDQUFDO1FBQ0YsRUFBQyxPQUFNeEMsT0FBTTtZQUNaUSxTQUFTO1FBQ1Y7SUFDRDtJQUVBLE1BQU1pQyxjQUFjLE9BQU1OLElBQUlHLFFBQVM7UUFDdEMsSUFBRztZQUNGLElBQUc3QixnQkFBZTtnQkFDakIsTUFBTVYsV0FBVyxNQUFNVCw0QkFBNEI7Z0JBQ25ELE1BQU1vRCxlQUFlLE1BQU1wRCw0QkFBNEI7Z0JBRXZELE1BQU1pQyxNQUFNLE1BQU1tQixhQUFhQyxPQUFPLENBQUMxRCxxREFBYUEsRUFBRXFEO2dCQUN0RCxNQUFNZixJQUFJYSxJQUFJO2dCQUVkLE1BQU1LLGNBQWMsTUFBTTFDLFNBQVMwQyxXQUFXLENBQUNOO2dCQUMvQyxNQUFNTSxZQUFZTCxJQUFJO2dCQUN0Qm5DLFFBQVFDLEdBQUcsQ0FBQ3VDO1lBQ2IsQ0FBQztRQUNGLEVBQUMsT0FBTXpDLE9BQU07WUFDWlEsU0FBUztRQUNWO0lBQ0Q7SUFLQSxxQkFDQyw4REFBQ0wsZ0JBQWdCeUMsUUFBUTtRQUN4QkMsT0FBTztZQUNOOUI7WUFDQVc7WUFDQWpCO1lBQ0FGO1lBQ0FQO1lBQ0FhO1lBQ0FGO1lBQ0FnQjtZQUNBSztZQUNBRTtZQUNBRztZQUNBRTtZQUNBRTtRQUNEO2tCQUVDbkM7Ozs7OztBQUdKLEVBQUU7R0E5S1dEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL0NvbnRleHQvRXZpZGFuY2VDb250ZXh0LmpzPzAwNzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBXZWIzTW9kYWwgZnJvbSBcIndlYjNtb2RhbFwiO1xuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xuXG4vL0lOVEVSTkFMICBJTVBPUlRcbmltcG9ydCB7XG5cdGNvaW5BQkksXG5cdENvaW5BZGRyZXNzLFxuXHRtYXJrZXRBQkksXG5cdE1hcmtldEFkZHJlc3Ncbn0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbi8vLS0tRkVUQ0hJTkcgU01BUlQgQ09OVFJBQ1RcbmNvbnN0IGZldGNoQ29udHJhY3QgPSBhc3luYyAoc2lnbmVyT3JQcm92aWRlciwgdHlwZSkgPT4ge1xuXHRpZih0eXBlID09PSBcImNvaW5cIikgcmV0dXJuIG5ldyBldGhlcnMuQ29udHJhY3QoQ29pbkFkZHJlc3MsXG5cdFx0Y29pbkFCSSxcblx0XHRzaWduZXJPclByb3ZpZGVyXG5cdCk7XG5cdGlmKHR5cGUgPT09IFwibWFya2V0XCIpIHJldHVybiBuZXcgZXRoZXJzLkNvbnRyYWN0KE1hcmtldEFkZHJlc3MsXG5cdFx0bWFya2V0QUJJLFxuXHRcdHNpZ25lck9yUHJvdmlkZXJcblx0KTtcbn07XG5cbi8vLS0tQ09OTkVDVElORyBXSVRIIFNNQVJUIENPTlRSQUNUXG5jb25zdCBjb25uZWN0aW5nV2l0aFNtYXJ0Q29udHJhY3QgPSBhc3luYyAodHlwZSkgPT4ge1xuXHR0cnkge1xuXHRcdGNvbnN0IHdlYjNNb2RhbCA9IG5ldyBXZWIzTW9kYWwoKTtcblx0XHRjb25zdCBjb25uZWN0aW9uID0gYXdhaXQgd2ViM01vZGFsLmNvbm5lY3QoKTtcblx0XHRjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcihjb25uZWN0aW9uKTtcblx0XHRjb25zdCBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKTtcblx0XHRjb25zdCBjb250cmFjdCA9IGF3YWl0IGZldGNoQ29udHJhY3Qoc2lnbmVyLCB0eXBlKTtcblx0XG5cdFx0cmV0dXJuIFtjb250cmFjdCxzaWduZXJdO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGNvbnNvbGUubG9nKFwiU29tZXRoaW5nIHdlbnQgd3Jvbmcgd2hpbGUgY29ubmVjdGluZyB3aXRoIGNvbnRyYWN0XCIsIGVycm9yKTtcblx0fVxufTtcblxuZXhwb3J0IGNvbnN0IEV2aWRhbmNlQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKTtcblxuZXhwb3J0IGNvbnN0IEV2aWRhbmNlUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG5cdGNvbnN0IHRpdGxlRGF0YSA9IFwiRnV0dXJlIG9mIFNob3BwaW5nIHdpdGggb3VyIEFJIE5GVCBNYXJrZXRwbGFjZVwiO1xuXG5cdC8vLS0tLS0tVVNFU1RBVFxuXHRjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKFwiXCIpO1xuXHRjb25zdCBbY3VycmVudEFjY291bnQsIHNldEN1cnJlbnRBY2NvdW50XSA9IHVzZVN0YXRlKFwiXCIpO1xuXHRjb25zdCBbYWNjb3VudEJhbGFuY2UsIHNldEFjY291bnRCYWxhbmNlXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG5cdGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuXHQvLy0tLUNIRUNLIElGIFdBTExFVCBJUyBDT05ORUNURFxuXHRjb25zdCBjaGVja0lmV2FsbGV0Q29ubmVjdGVkID0gYXN5bmMgKCkgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHRpZiAoIXdpbmRvdy5ldGhlcmV1bSkgcmV0dXJuIHNldEVycm9yKFwiSW5zdGFsbCBNZXRhTWFza1wiKTtcblxuXHRcdFx0Y29uc3QgYWNjb3VudHMgPSBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7XG5cdFx0XHRcdG1ldGhvZDogXCJldGhfYWNjb3VudHNcIixcblx0XHRcdH0pO1xuXG5cdFx0XHRpZiAoYWNjb3VudHMubGVuZ3RoKSB7XG5cdFx0XHRcdHNldEN1cnJlbnRBY2NvdW50KGFjY291bnRzWzBdLnRvTG93ZXJDYXNlKCkpO1xuXHRcdFx0XHQvLyBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcih3aW5kb3cuZXRoZXJldW0pO1xuXHRcdFx0XHRcblx0XHRcdFx0Y29uc3QgdHJ4ID0gYXdhaXQgY29ubmVjdGluZ1dpdGhTbWFydENvbnRyYWN0KFwiY29pblwiKTtcblx0XHRcdFx0Y29uc3QgY29udHJhY3QgPSB0cnhbMF07XG5cdFx0XHRcdGNvbnN0IHNpZ25lciA9IHRyeFsxXTtcblx0XHRcdFx0Y29uc3QgZ2V0QmFsYW5jZSA9IGF3YWl0IGNvbnRyYWN0LmJhbGFuY2VPZihhY2NvdW50c1swXSk7XG5cdFx0XHRcdHNldEFjY291bnRCYWxhbmNlKGdldEJhbGFuY2UpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0c2V0RXJyb3IoXCJObyBBY2NvdW50IEZvdW5kXCIpO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRzZXRFcnJvcihcIlNvbWV0aGluZyB3cm9uZyB3aGlsZSBjb25uZWN0aW5nIHRvIHdhbGxldFwiKTtcblx0XHR9XG5cdH07XG5cdFxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGNoZWNrSWZXYWxsZXRDb25uZWN0ZWQoKTtcblx0fSwgW10pO1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0aWYgKCFjdXJyZW50QWNjb3VudCkgcmV0dXJuO1xuXHR9LCBbY3VycmVudEFjY291bnRdKTtcblxuXHQvLy0tLUNPTk5FVCBXQUxMRVQgRlVOQ1RJT05cblx0Y29uc3QgY29ubmVjdFdhbGxldCA9IGFzeW5jICgpID0+IHtcblx0XHR0cnkge1xuXHRcdFx0aWYgKCF3aW5kb3cuZXRoZXJldW0pIHJldHVybiBzZXRFcnJvcihcIkluc3RhbGwgTWV0YU1hc2tcIik7XG5cblx0XHRcdGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2luZG93LmV0aGVyZXVtLnJlcXVlc3Qoe1xuXHRcdFx0XHRtZXRob2Q6IFwiZXRoX3JlcXVlc3RBY2NvdW50c1wiLFxuXHRcdFx0fSk7XG5cdFx0XHRzZXRDdXJyZW50QWNjb3VudChhY2NvdW50c1swXS50b0xvd2VyQ2FzZSgpKTtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0c2V0RXJyb3IoXCJFcnJvciB3aGlsZSBjb25uZWN0aW5nIHRvIHdhbGxldFwiKTtcblx0XHR9XG5cdH07XG5cblxuXHQvLyAtLS0tIENyZWF0ZSBDb21waWxhbmNlXG5cblx0Y29uc3QgY3JlYXRlRXZpZGVuY2UgPSBhc3luYygpID0+e1xuXHRcdHRyeXtcblx0XHRcdGNvbnNvbGUubG9nKFwiY3JlYXRlIGV2aWRlbmNlXCIpXG5cdFx0XHRpZihjdXJyZW50QWNjb3VudCl7XG5cdFx0XHRcdGxldCBPd25lck5vbmNlID0gYXdhaXQgb3duZXIuZ2V0Tm9uY2UoKTtcblx0XHRcdFx0XG5cdFx0XHRcdGNvbnN0IGNvbnRyYWN0ID0gYXdhaXQgY29ubmVjdGluZ1dpdGhTbWFydENvbnRyYWN0KFwibWFya2V0XCIpO1xuXHRcdFx0XHRjb25zdCBjcmVhdGVFdmlkZW5jZSA9IGF3YWl0IGNvbnRyYWN0LmNyZWF0ZUV2aWRlbmNlKHtcblx0XHRcdFx0XHRub25jZTogT3duZXJOb25jZVxuXHRcdFx0XHR9KTtcblx0XHRcdFx0Y29uc29sZS5sb2coY3JlYXRlRXZpZGVuY2UpO1xuXHRcdFx0fVxuXHRcdH1jYXRjaChlcnJvcil7XG5cdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XG5cdFx0XHRzZXRFcnJvcihcIkVycm9yIHdoaWxlIGNyZWF0aW5nIGV2aWRlbmNlXCIpO1xuXHRcdH1cblx0fVxuXG5cdGNvbnN0IGdldEFsbEV2aWRlbmNlID0gYXN5bmMoKSA9Pntcblx0XHR0cnl7XG5cdFx0XHRpZihjdXJyZW50QWNjb3VudCl7XG5cdFx0XHRcdGNvbnN0IGNvbnRyYWN0ID0gYXdhaXQgY29ubmVjdGluZ1dpdGhTbWFydENvbnRyYWN0KFwibWFya2V0XCIpO1xuXHRcdFx0XHRjb25zdCBnZXRFdmlkZW5jZSA9IGF3YWl0IGNvbnRyYWN0LmdldEFsbEV2aWRlbmNlKCk7XG5cdFx0XHRcdHJldHVybiBnZXRFdmlkZW5jZTtcblx0XHRcdH1cblx0XHR9Y2F0Y2goZXJyb3Ipe1xuXHRcdFx0c2V0RXJyb3IoXCJFcnJvciB3aGlsZSBjcmVhdGluZyBldmlkZW5jZVwiKTtcblx0XHR9XG5cdH1cblx0XG5cdGNvbnN0IGFwcHJvdmVFdmlkZW5jZSA9IGFzeW5jKGlkKSA9Pntcblx0XHR0cnl7XG5cdFx0XHRpZihjdXJyZW50QWNjb3VudCl7XG5cdFx0XHRcdGNvbnN0IGNvbnRyYWN0ID0gYXdhaXQgY29ubmVjdGluZ1dpdGhTbWFydENvbnRyYWN0KFwibWFya2V0XCIpO1xuXHRcdFx0XHRjb25zdCBhcHByb3ZlRXZpZGVuY2UgPSBhd2FpdCBjb250cmFjdC5hcHByb3ZlRXZpZGVuY2UoaWQpO1xuXHRcdFx0XHRhd2FpdCBhcHByb3ZlRXZpZGVuY2Uud2FpdCgpO1xuXHRcdFx0XHRjb25zb2xlLmxvZyhhcHByb3ZlRXZpZGVuY2UpO1xuXHRcdFx0fVxuXHRcdH1jYXRjaChlcnJvcil7XG5cdFx0XHRzZXRFcnJvcihcIkVycm9yIHdoaWxlIGNyZWF0aW5nIGV2aWRlbmNlXCIpO1xuXHRcdH1cblx0fVxuXG5cdGNvbnN0IGNyZWF0ZU9yZGVyID0gYXN5bmMocHJpY2UpID0+e1xuXHRcdHRyeXtcblx0XHRcdGlmKGN1cnJlbnRBY2NvdW50KXtcblx0XHRcdFx0Y29uc3QgY29udHJhY3QgPSBhd2FpdCBjb25uZWN0aW5nV2l0aFNtYXJ0Q29udHJhY3QoXCJtYXJrZXRcIik7XG5cdFx0XHRcdFxuXHRcdFx0XHQvLyBjb25zdCB0cnggPSBhd2FpdCBjb250cmFjdENvaW4uYXBwcm92ZShNYXJrZXRBZGRyZXNzLCBwcmljZSk7XG5cdFx0XHRcdC8vIGF3YWl0IHRyeC53YWl0KCk7XG5cblx0XHRcdFx0Y29uc3QgY3JlYXRlT3JkZXIgPSBhd2FpdCBjb250cmFjdC5jcmVhdGVPcmRlcihwcmljZSk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGNyZWF0ZU9yZGVyKTtcblx0XHRcdH1cblx0XHR9Y2F0Y2goZXJyb3Ipe1xuXHRcdFx0c2V0RXJyb3IoXCJFcnJvciB3aGlsZSBjcmVhdGluZyBldmlkZW5jZVwiKTtcblx0XHR9XG5cdH1cblxuXHRjb25zdCBnZXRBbGxPcmRlcnMgPSBhc3luYygpID0+e1xuXHRcdHRyeXtcblx0XHRcdGlmKGN1cnJlbnRBY2NvdW50KXtcblx0XHRcdFx0Y29uc3QgY29udHJhY3QgPSBhd2FpdCBjb25uZWN0aW5nV2l0aFNtYXJ0Q29udHJhY3QoXCJtYXJrZXRcIik7XG5cdFx0XHRcdGNvbnN0IGdldE9yZGVycyA9IGF3YWl0IGNvbnRyYWN0LmdldEFsbE9yZGVycygpO1xuXHRcdFx0XHRyZXR1cm4gZ2V0T3JkZXJzO1xuXHRcdFx0fVxuXHRcdH1jYXRjaChlcnJvcil7XG5cdFx0XHRzZXRFcnJvcihcIkVycm9yIHdoaWxlIGNyZWF0aW5nIGV2aWRlbmNlXCIpO1xuXHRcdH1cblx0fVxuXG5cdGNvbnN0IGFjY2VwdE9yZGVyID0gYXN5bmMoaWQsIHByaWNlKSA9Pntcblx0XHR0cnl7XG5cdFx0XHRpZihjdXJyZW50QWNjb3VudCl7XG5cdFx0XHRcdGNvbnN0IGNvbnRyYWN0ID0gYXdhaXQgY29ubmVjdGluZ1dpdGhTbWFydENvbnRyYWN0KFwibWFya2V0XCIpO1xuXHRcdFx0XHRjb25zdCBjb250cmFjdENvaW4gPSBhd2FpdCBjb25uZWN0aW5nV2l0aFNtYXJ0Q29udHJhY3QoXCJjb2luXCIpO1xuXG5cdFx0XHRcdGNvbnN0IHRyeCA9IGF3YWl0IGNvbnRyYWN0Q29pbi5hcHByb3ZlKE1hcmtldEFkZHJlc3MsIHByaWNlKTtcblx0XHRcdFx0YXdhaXQgdHJ4LndhaXQoKTtcblxuXHRcdFx0XHRjb25zdCBhY2NlcHRPcmRlciA9IGF3YWl0IGNvbnRyYWN0LmFjY2VwdE9yZGVyKGlkKTtcblx0XHRcdFx0YXdhaXQgYWNjZXB0T3JkZXIud2FpdCgpO1xuXHRcdFx0XHRjb25zb2xlLmxvZyhhY2NlcHRPcmRlcik7XG5cdFx0XHR9XG5cdFx0fWNhdGNoKGVycm9yKXtcblx0XHRcdHNldEVycm9yKFwiRXJyb3Igd2hpbGUgY3JlYXRpbmcgZXZpZGVuY2VcIik7XG5cdFx0fVxuXHR9XG5cblxuXHRcblxuXHRyZXR1cm4gKFxuXHRcdDxFdmlkYW5jZUNvbnRleHQuUHJvdmlkZXJcblx0XHRcdHZhbHVlPXt7XG5cdFx0XHRcdGNoZWNrSWZXYWxsZXRDb25uZWN0ZWQsXG5cdFx0XHRcdGNvbm5lY3RXYWxsZXQsXG5cdFx0XHRcdGN1cnJlbnRBY2NvdW50LFxuXHRcdFx0XHR0aXRsZURhdGEsXG5cdFx0XHRcdGVycm9yLFxuXHRcdFx0XHRsb2FkaW5nLFxuXHRcdFx0XHRhY2NvdW50QmFsYW5jZSxcblx0XHRcdFx0Y3JlYXRlRXZpZGVuY2UsXG5cdFx0XHRcdGdldEFsbEV2aWRlbmNlLFxuXHRcdFx0XHRhcHByb3ZlRXZpZGVuY2UsXG5cdFx0XHRcdGNyZWF0ZU9yZGVyLFxuXHRcdFx0XHRnZXRBbGxPcmRlcnMsXG5cdFx0XHRcdGFjY2VwdE9yZGVyXG5cdFx0XHR9fVxuXHRcdD5cblx0XHRcdHtjaGlsZHJlbn1cblx0XHQ8L0V2aWRhbmNlQ29udGV4dC5Qcm92aWRlcj5cblx0KTtcbn07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUNvbnRleHQiLCJXZWIzTW9kYWwiLCJldGhlcnMiLCJjb2luQUJJIiwiQ29pbkFkZHJlc3MiLCJtYXJrZXRBQkkiLCJNYXJrZXRBZGRyZXNzIiwiZmV0Y2hDb250cmFjdCIsInNpZ25lck9yUHJvdmlkZXIiLCJ0eXBlIiwiQ29udHJhY3QiLCJjb25uZWN0aW5nV2l0aFNtYXJ0Q29udHJhY3QiLCJ3ZWIzTW9kYWwiLCJjb25uZWN0aW9uIiwiY29ubmVjdCIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiV2ViM1Byb3ZpZGVyIiwic2lnbmVyIiwiZ2V0U2lnbmVyIiwiY29udHJhY3QiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJFdmlkYW5jZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiRXZpZGFuY2VQcm92aWRlciIsImNoaWxkcmVuIiwidGl0bGVEYXRhIiwic2V0RXJyb3IiLCJjdXJyZW50QWNjb3VudCIsInNldEN1cnJlbnRBY2NvdW50IiwiYWNjb3VudEJhbGFuY2UiLCJzZXRBY2NvdW50QmFsYW5jZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiY2hlY2tJZldhbGxldENvbm5lY3RlZCIsIndpbmRvdyIsImV0aGVyZXVtIiwiYWNjb3VudHMiLCJyZXF1ZXN0IiwibWV0aG9kIiwibGVuZ3RoIiwidG9Mb3dlckNhc2UiLCJ0cngiLCJnZXRCYWxhbmNlIiwiYmFsYW5jZU9mIiwiY29ubmVjdFdhbGxldCIsImNyZWF0ZUV2aWRlbmNlIiwiT3duZXJOb25jZSIsIm93bmVyIiwiZ2V0Tm9uY2UiLCJub25jZSIsImdldEFsbEV2aWRlbmNlIiwiZ2V0RXZpZGVuY2UiLCJhcHByb3ZlRXZpZGVuY2UiLCJpZCIsIndhaXQiLCJjcmVhdGVPcmRlciIsInByaWNlIiwiZ2V0QWxsT3JkZXJzIiwiZ2V0T3JkZXJzIiwiYWNjZXB0T3JkZXIiLCJjb250cmFjdENvaW4iLCJhcHByb3ZlIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Context/EvidanceContext.js\n"));

/***/ })

});