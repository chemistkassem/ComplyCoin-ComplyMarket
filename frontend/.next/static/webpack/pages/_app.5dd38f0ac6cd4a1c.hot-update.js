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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"EvidanceContext\": function() { return /* binding */ EvidanceContext; },\n/* harmony export */   \"EvidanceProvider\": function() { return /* binding */ EvidanceProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! web3modal */ \"./node_modules/web3modal/dist/index.js\");\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ \"./Context/constants.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n//INTERNAL  IMPORT\n\n//---FETCHING SMART CONTRACT\nconst fetchContract = async (signerOrProvider, type)=>{\n    if (type === \"coin\") return new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.Contract(_constants__WEBPACK_IMPORTED_MODULE_3__.CoinAddress, _constants__WEBPACK_IMPORTED_MODULE_3__.coinABI, signerOrProvider);\n    if (type === \"market\") return new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.Contract(_constants__WEBPACK_IMPORTED_MODULE_3__.MarketAddress, _constants__WEBPACK_IMPORTED_MODULE_3__.marketABI, signerOrProvider);\n};\n//---CONNECTING WITH SMART CONTRACT\nconst connectingWithSmartContract = async (type)=>{\n    try {\n        const web3Modal = new (web3modal__WEBPACK_IMPORTED_MODULE_2___default())();\n        const connection = await web3Modal.connect();\n        const provider = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.providers.Web3Provider(connection);\n        const signer = provider.getSigner();\n        const contract = await fetchContract(signer, type);\n        return contract;\n    } catch (error) {\n        console.log(\"Something went wrong while connecting with contract\", error);\n    }\n};\nconst EvidanceContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext();\nconst EvidanceProvider = (param)=>{\n    let { children  } = param;\n    _s();\n    const titleData = \"Future of Shopping with our AI NFT Marketplace\";\n    //------USESTAT\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [currentAccount, setCurrentAccount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [accountBalance, setAccountBalance] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    //---CHECK IF WALLET IS CONNECTD\n    const checkIfWalletConnected = async ()=>{\n        try {\n            if (!window.ethereum) return setError(\"Install MetaMask\");\n            const accounts = await window.ethereum.request({\n                method: \"eth_accounts\"\n            });\n            if (accounts.length) {\n                setCurrentAccount(accounts[0].toLowerCase());\n                // const provider = new ethers.providers.Web3Provider(window.ethereum);\n                const contract = await connectingWithSmartContract(\"coin\");\n                const getBalance = await contract.balanceOf(accounts[0]);\n                setAccountBalance(getBalance);\n            } else {\n                setError(\"No Account Found\");\n            }\n        } catch (error) {\n            setError(\"Something wrong while connecting to wallet\");\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        checkIfWalletConnected();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!currentAccount) return;\n    }, [\n        currentAccount\n    ]);\n    //---CONNET WALLET FUNCTION\n    const connectWallet = async ()=>{\n        try {\n            if (!window.ethereum) return setError(\"Install MetaMask\");\n            const accounts = await window.ethereum.request({\n                method: \"eth_requestAccounts\"\n            });\n            setCurrentAccount(accounts[0].toLowerCase());\n        } catch (error) {\n            setError(\"Error while connecting to wallet\");\n        }\n    };\n    // ---- Create Compilance\n    const createEvidence = async ()=>{\n        try {\n            if (currentAccount) {\n                let OwnerNonce = await owner.getNonce();\n                console.log(OwnerNonce);\n                const contract = await connectingWithSmartContract(\"market\");\n                const createEvidence = await contract.createEvidence();\n                console.log(createEvidence);\n            }\n        } catch (error) {\n            setError(\"Error while creating evidence\");\n        }\n    };\n    const getAllEvidence = async ()=>{\n        try {\n            if (currentAccount) {\n                const contract = await connectingWithSmartContract(\"market\");\n                const getEvidence = await contract.getAllEvidence();\n                return getEvidence;\n            }\n        } catch (error) {\n            setError(\"Error while creating evidence\");\n        }\n    };\n    const approveEvidence = async (id)=>{\n        try {\n            if (currentAccount) {\n                const contract = await connectingWithSmartContract(\"market\");\n                const approveEvidence = await contract.approveEvidence(id);\n                await approveEvidence.wait();\n                console.log(approveEvidence);\n            }\n        } catch (error) {\n            setError(\"Error while creating evidence\");\n        }\n    };\n    const createOrder = async (price)=>{\n        try {\n            if (currentAccount) {\n                const contract = await connectingWithSmartContract(\"market\");\n                // const trx = await contractCoin.approve(MarketAddress, price);\n                // await trx.wait();\n                const createOrder = await contract.createOrder(price);\n                console.log(createOrder);\n            }\n        } catch (error) {\n            setError(\"Error while creating evidence\");\n        }\n    };\n    const getAllOrders = async ()=>{\n        try {\n            if (currentAccount) {\n                const contract = await connectingWithSmartContract(\"market\");\n                const getOrders = await contract.getAllOrders();\n                return getOrders;\n            }\n        } catch (error) {\n            setError(\"Error while creating evidence\");\n        }\n    };\n    const acceptOrder = async (id, price)=>{\n        try {\n            if (currentAccount) {\n                const contract = await connectingWithSmartContract(\"market\");\n                const contractCoin = await connectingWithSmartContract(\"coin\");\n                const trx = await contractCoin.approve(_constants__WEBPACK_IMPORTED_MODULE_3__.MarketAddress, price);\n                await trx.wait();\n                const acceptOrder = await contract.acceptOrder(id);\n                await acceptOrder.wait();\n                console.log(acceptOrder);\n            }\n        } catch (error) {\n            setError(\"Error while creating evidence\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(EvidanceContext.Provider, {\n        value: {\n            checkIfWalletConnected,\n            connectWallet,\n            currentAccount,\n            titleData,\n            error,\n            loading,\n            accountBalance,\n            createEvidence,\n            getAllEvidence,\n            approveEvidence,\n            createOrder,\n            getAllOrders,\n            acceptOrder\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/usamalatif/Desktop/Upwork/kaseem/ComplyCoin2023/frontend/Context/EvidanceContext.js\",\n        lineNumber: 191,\n        columnNumber: 3\n    }, undefined);\n};\n_s(EvidanceProvider, \"qQtFuIaue6uCliA/o3S/iHl1ASo=\");\n_c = EvidanceProvider;\nvar _c;\n$RefreshReg$(_c, \"EvidanceProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWU7Z0JBQ2pCLE1BQU1WLFdBQVcsTUFBTVQsNEJBQTRCO2dCQUNuRCxNQUFNZ0QsWUFBWSxNQUFNdkMsU0FBU3NDLFlBQVk7Z0JBQzdDLE9BQU9DO1lBQ1IsQ0FBQztRQUNGLEVBQUMsT0FBTXRDLE9BQU07WUFDWlEsU0FBUztRQUNWO0lBQ0Q7SUFFQSxNQUFNK0IsY0FBYyxPQUFNTixJQUFJRyxRQUFTO1FBQ3RDLElBQUc7WUFDRixJQUFHM0IsZ0JBQWU7Z0JBQ2pCLE1BQU1WLFdBQVcsTUFBTVQsNEJBQTRCO2dCQUNuRCxNQUFNa0QsZUFBZSxNQUFNbEQsNEJBQTRCO2dCQUV2RCxNQUFNbUQsTUFBTSxNQUFNRCxhQUFhRSxPQUFPLENBQUN6RCxxREFBYUEsRUFBRW1EO2dCQUN0RCxNQUFNSyxJQUFJUCxJQUFJO2dCQUVkLE1BQU1LLGNBQWMsTUFBTXhDLFNBQVN3QyxXQUFXLENBQUNOO2dCQUMvQyxNQUFNTSxZQUFZTCxJQUFJO2dCQUN0QmpDLFFBQVFDLEdBQUcsQ0FBQ3FDO1lBQ2IsQ0FBQztRQUNGLEVBQUMsT0FBTXZDLE9BQU07WUFDWlEsU0FBUztRQUNWO0lBQ0Q7SUFLQSxxQkFDQyw4REFBQ0wsZ0JBQWdCd0MsUUFBUTtRQUN4QkMsT0FBTztZQUNON0I7WUFDQVU7WUFDQWhCO1lBQ0FGO1lBQ0FQO1lBQ0FhO1lBQ0FGO1lBQ0FlO1lBQ0FJO1lBQ0FFO1lBQ0FHO1lBQ0FFO1lBQ0FFO1FBQ0Q7a0JBRUNqQzs7Ozs7O0FBR0osRUFBRTtHQXpLV0Q7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29udGV4dC9FdmlkYW5jZUNvbnRleHQuanM/MDA3NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFdlYjNNb2RhbCBmcm9tIFwid2ViM21vZGFsXCI7XG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCI7XG5cbi8vSU5URVJOQUwgIElNUE9SVFxuaW1wb3J0IHtcblx0Y29pbkFCSSxcblx0Q29pbkFkZHJlc3MsXG5cdG1hcmtldEFCSSxcblx0TWFya2V0QWRkcmVzc1xufSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuLy8tLS1GRVRDSElORyBTTUFSVCBDT05UUkFDVFxuY29uc3QgZmV0Y2hDb250cmFjdCA9IGFzeW5jIChzaWduZXJPclByb3ZpZGVyLCB0eXBlKSA9PiB7XG5cdGlmKHR5cGUgPT09IFwiY29pblwiKSByZXR1cm4gbmV3IGV0aGVycy5Db250cmFjdChDb2luQWRkcmVzcyxcblx0XHRjb2luQUJJLFxuXHRcdHNpZ25lck9yUHJvdmlkZXJcblx0KTtcblx0aWYodHlwZSA9PT0gXCJtYXJrZXRcIikgcmV0dXJuIG5ldyBldGhlcnMuQ29udHJhY3QoTWFya2V0QWRkcmVzcyxcblx0XHRtYXJrZXRBQkksXG5cdFx0c2lnbmVyT3JQcm92aWRlclxuXHQpO1xufTtcblxuLy8tLS1DT05ORUNUSU5HIFdJVEggU01BUlQgQ09OVFJBQ1RcbmNvbnN0IGNvbm5lY3RpbmdXaXRoU21hcnRDb250cmFjdCA9IGFzeW5jICh0eXBlKSA9PiB7XG5cdHRyeSB7XG5cdFx0Y29uc3Qgd2ViM01vZGFsID0gbmV3IFdlYjNNb2RhbCgpO1xuXHRcdGNvbnN0IGNvbm5lY3Rpb24gPSBhd2FpdCB3ZWIzTW9kYWwuY29ubmVjdCgpO1xuXHRcdGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKGNvbm5lY3Rpb24pO1xuXHRcdGNvbnN0IHNpZ25lciA9IHByb3ZpZGVyLmdldFNpZ25lcigpO1xuXHRcdGNvbnN0IGNvbnRyYWN0ID0gYXdhaXQgZmV0Y2hDb250cmFjdChzaWduZXIsIHR5cGUpO1xuXHRcblx0XHRyZXR1cm4gY29udHJhY3Q7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Y29uc29sZS5sb2coXCJTb21ldGhpbmcgd2VudCB3cm9uZyB3aGlsZSBjb25uZWN0aW5nIHdpdGggY29udHJhY3RcIiwgZXJyb3IpO1xuXHR9XG59O1xuXG5leHBvcnQgY29uc3QgRXZpZGFuY2VDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xuXG5leHBvcnQgY29uc3QgRXZpZGFuY2VQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcblx0Y29uc3QgdGl0bGVEYXRhID0gXCJGdXR1cmUgb2YgU2hvcHBpbmcgd2l0aCBvdXIgQUkgTkZUIE1hcmtldHBsYWNlXCI7XG5cblx0Ly8tLS0tLS1VU0VTVEFUXG5cdGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XG5cdGNvbnN0IFtjdXJyZW50QWNjb3VudCwgc2V0Q3VycmVudEFjY291bnRdID0gdXNlU3RhdGUoXCJcIik7XG5cdGNvbnN0IFthY2NvdW50QmFsYW5jZSwgc2V0QWNjb3VudEJhbGFuY2VdID0gdXNlU3RhdGUoXCJcIik7XG5cblx0Y29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG5cdC8vLS0tQ0hFQ0sgSUYgV0FMTEVUIElTIENPTk5FQ1REXG5cdGNvbnN0IGNoZWNrSWZXYWxsZXRDb25uZWN0ZWQgPSBhc3luYyAoKSA9PiB7XG5cdFx0dHJ5IHtcblx0XHRcdGlmICghd2luZG93LmV0aGVyZXVtKSByZXR1cm4gc2V0RXJyb3IoXCJJbnN0YWxsIE1ldGFNYXNrXCIpO1xuXG5cdFx0XHRjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5yZXF1ZXN0KHtcblx0XHRcdFx0bWV0aG9kOiBcImV0aF9hY2NvdW50c1wiLFxuXHRcdFx0fSk7XG5cblx0XHRcdGlmIChhY2NvdW50cy5sZW5ndGgpIHtcblx0XHRcdFx0c2V0Q3VycmVudEFjY291bnQoYWNjb3VudHNbMF0udG9Mb3dlckNhc2UoKSk7XG5cdFx0XHRcdC8vIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKHdpbmRvdy5ldGhlcmV1bSk7XG5cdFx0XHRcdFxuXHRcdFx0XHRjb25zdCBjb250cmFjdCA9IGF3YWl0IGNvbm5lY3RpbmdXaXRoU21hcnRDb250cmFjdChcImNvaW5cIik7XG5cblx0XHRcdFx0Y29uc3QgZ2V0QmFsYW5jZSA9IGF3YWl0IGNvbnRyYWN0LmJhbGFuY2VPZihhY2NvdW50c1swXSk7XG5cdFx0XHRcdHNldEFjY291bnRCYWxhbmNlKGdldEJhbGFuY2UpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0c2V0RXJyb3IoXCJObyBBY2NvdW50IEZvdW5kXCIpO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRzZXRFcnJvcihcIlNvbWV0aGluZyB3cm9uZyB3aGlsZSBjb25uZWN0aW5nIHRvIHdhbGxldFwiKTtcblx0XHR9XG5cdH07XG5cdFxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGNoZWNrSWZXYWxsZXRDb25uZWN0ZWQoKTtcblx0fSwgW10pO1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0aWYgKCFjdXJyZW50QWNjb3VudCkgcmV0dXJuO1xuXHR9LCBbY3VycmVudEFjY291bnRdKTtcblxuXHQvLy0tLUNPTk5FVCBXQUxMRVQgRlVOQ1RJT05cblx0Y29uc3QgY29ubmVjdFdhbGxldCA9IGFzeW5jICgpID0+IHtcblx0XHR0cnkge1xuXHRcdFx0aWYgKCF3aW5kb3cuZXRoZXJldW0pIHJldHVybiBzZXRFcnJvcihcIkluc3RhbGwgTWV0YU1hc2tcIik7XG5cblx0XHRcdGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2luZG93LmV0aGVyZXVtLnJlcXVlc3Qoe1xuXHRcdFx0XHRtZXRob2Q6IFwiZXRoX3JlcXVlc3RBY2NvdW50c1wiLFxuXHRcdFx0fSk7XG5cdFx0XHRzZXRDdXJyZW50QWNjb3VudChhY2NvdW50c1swXS50b0xvd2VyQ2FzZSgpKTtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0c2V0RXJyb3IoXCJFcnJvciB3aGlsZSBjb25uZWN0aW5nIHRvIHdhbGxldFwiKTtcblx0XHR9XG5cdH07XG5cblxuXHQvLyAtLS0tIENyZWF0ZSBDb21waWxhbmNlXG5cblx0Y29uc3QgY3JlYXRlRXZpZGVuY2UgPSBhc3luYygpID0+e1xuXHRcdHRyeXtcblx0XHRcdGlmKGN1cnJlbnRBY2NvdW50KXtcblx0XHRcdFx0bGV0IE93bmVyTm9uY2UgPSBhd2FpdCBvd25lci5nZXROb25jZSgpO1xuXHRcdFx0XHRjb25zb2xlLmxvZyhPd25lck5vbmNlKTtcblx0XHRcdFx0Y29uc3QgY29udHJhY3QgPSBhd2FpdCBjb25uZWN0aW5nV2l0aFNtYXJ0Q29udHJhY3QoXCJtYXJrZXRcIik7XG5cdFx0XHRcdGNvbnN0IGNyZWF0ZUV2aWRlbmNlID0gYXdhaXQgY29udHJhY3QuY3JlYXRlRXZpZGVuY2UoKTtcblx0XHRcdFx0Y29uc29sZS5sb2coY3JlYXRlRXZpZGVuY2UpO1xuXHRcdFx0fVxuXHRcdH1jYXRjaChlcnJvcil7XG5cdFx0XHRzZXRFcnJvcihcIkVycm9yIHdoaWxlIGNyZWF0aW5nIGV2aWRlbmNlXCIpO1xuXHRcdH1cblx0fVxuXG5cdGNvbnN0IGdldEFsbEV2aWRlbmNlID0gYXN5bmMoKSA9Pntcblx0XHR0cnl7XG5cdFx0XHRpZihjdXJyZW50QWNjb3VudCl7XG5cdFx0XHRcdGNvbnN0IGNvbnRyYWN0ID0gYXdhaXQgY29ubmVjdGluZ1dpdGhTbWFydENvbnRyYWN0KFwibWFya2V0XCIpO1xuXHRcdFx0XHRjb25zdCBnZXRFdmlkZW5jZSA9IGF3YWl0IGNvbnRyYWN0LmdldEFsbEV2aWRlbmNlKCk7XG5cdFx0XHRcdHJldHVybiBnZXRFdmlkZW5jZTtcblx0XHRcdH1cblx0XHR9Y2F0Y2goZXJyb3Ipe1xuXHRcdFx0c2V0RXJyb3IoXCJFcnJvciB3aGlsZSBjcmVhdGluZyBldmlkZW5jZVwiKTtcblx0XHR9XG5cdH1cblx0XG5cdGNvbnN0IGFwcHJvdmVFdmlkZW5jZSA9IGFzeW5jKGlkKSA9Pntcblx0XHR0cnl7XG5cdFx0XHRpZihjdXJyZW50QWNjb3VudCl7XG5cdFx0XHRcdGNvbnN0IGNvbnRyYWN0ID0gYXdhaXQgY29ubmVjdGluZ1dpdGhTbWFydENvbnRyYWN0KFwibWFya2V0XCIpO1xuXHRcdFx0XHRjb25zdCBhcHByb3ZlRXZpZGVuY2UgPSBhd2FpdCBjb250cmFjdC5hcHByb3ZlRXZpZGVuY2UoaWQpO1xuXHRcdFx0XHRhd2FpdCBhcHByb3ZlRXZpZGVuY2Uud2FpdCgpO1xuXHRcdFx0XHRjb25zb2xlLmxvZyhhcHByb3ZlRXZpZGVuY2UpO1xuXHRcdFx0fVxuXHRcdH1jYXRjaChlcnJvcil7XG5cdFx0XHRzZXRFcnJvcihcIkVycm9yIHdoaWxlIGNyZWF0aW5nIGV2aWRlbmNlXCIpO1xuXHRcdH1cblx0fVxuXG5cdGNvbnN0IGNyZWF0ZU9yZGVyID0gYXN5bmMocHJpY2UpID0+e1xuXHRcdHRyeXtcblx0XHRcdGlmKGN1cnJlbnRBY2NvdW50KXtcblx0XHRcdFx0Y29uc3QgY29udHJhY3QgPSBhd2FpdCBjb25uZWN0aW5nV2l0aFNtYXJ0Q29udHJhY3QoXCJtYXJrZXRcIik7XG5cdFx0XHRcdFxuXHRcdFx0XHQvLyBjb25zdCB0cnggPSBhd2FpdCBjb250cmFjdENvaW4uYXBwcm92ZShNYXJrZXRBZGRyZXNzLCBwcmljZSk7XG5cdFx0XHRcdC8vIGF3YWl0IHRyeC53YWl0KCk7XG5cblx0XHRcdFx0Y29uc3QgY3JlYXRlT3JkZXIgPSBhd2FpdCBjb250cmFjdC5jcmVhdGVPcmRlcihwcmljZSk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGNyZWF0ZU9yZGVyKTtcblx0XHRcdH1cblx0XHR9Y2F0Y2goZXJyb3Ipe1xuXHRcdFx0c2V0RXJyb3IoXCJFcnJvciB3aGlsZSBjcmVhdGluZyBldmlkZW5jZVwiKTtcblx0XHR9XG5cdH1cblxuXHRjb25zdCBnZXRBbGxPcmRlcnMgPSBhc3luYygpID0+e1xuXHRcdHRyeXtcblx0XHRcdGlmKGN1cnJlbnRBY2NvdW50KXtcblx0XHRcdFx0Y29uc3QgY29udHJhY3QgPSBhd2FpdCBjb25uZWN0aW5nV2l0aFNtYXJ0Q29udHJhY3QoXCJtYXJrZXRcIik7XG5cdFx0XHRcdGNvbnN0IGdldE9yZGVycyA9IGF3YWl0IGNvbnRyYWN0LmdldEFsbE9yZGVycygpO1xuXHRcdFx0XHRyZXR1cm4gZ2V0T3JkZXJzO1xuXHRcdFx0fVxuXHRcdH1jYXRjaChlcnJvcil7XG5cdFx0XHRzZXRFcnJvcihcIkVycm9yIHdoaWxlIGNyZWF0aW5nIGV2aWRlbmNlXCIpO1xuXHRcdH1cblx0fVxuXG5cdGNvbnN0IGFjY2VwdE9yZGVyID0gYXN5bmMoaWQsIHByaWNlKSA9Pntcblx0XHR0cnl7XG5cdFx0XHRpZihjdXJyZW50QWNjb3VudCl7XG5cdFx0XHRcdGNvbnN0IGNvbnRyYWN0ID0gYXdhaXQgY29ubmVjdGluZ1dpdGhTbWFydENvbnRyYWN0KFwibWFya2V0XCIpO1xuXHRcdFx0XHRjb25zdCBjb250cmFjdENvaW4gPSBhd2FpdCBjb25uZWN0aW5nV2l0aFNtYXJ0Q29udHJhY3QoXCJjb2luXCIpO1xuXG5cdFx0XHRcdGNvbnN0IHRyeCA9IGF3YWl0IGNvbnRyYWN0Q29pbi5hcHByb3ZlKE1hcmtldEFkZHJlc3MsIHByaWNlKTtcblx0XHRcdFx0YXdhaXQgdHJ4LndhaXQoKTtcblxuXHRcdFx0XHRjb25zdCBhY2NlcHRPcmRlciA9IGF3YWl0IGNvbnRyYWN0LmFjY2VwdE9yZGVyKGlkKTtcblx0XHRcdFx0YXdhaXQgYWNjZXB0T3JkZXIud2FpdCgpO1xuXHRcdFx0XHRjb25zb2xlLmxvZyhhY2NlcHRPcmRlcik7XG5cdFx0XHR9XG5cdFx0fWNhdGNoKGVycm9yKXtcblx0XHRcdHNldEVycm9yKFwiRXJyb3Igd2hpbGUgY3JlYXRpbmcgZXZpZGVuY2VcIik7XG5cdFx0fVxuXHR9XG5cblxuXHRcblxuXHRyZXR1cm4gKFxuXHRcdDxFdmlkYW5jZUNvbnRleHQuUHJvdmlkZXJcblx0XHRcdHZhbHVlPXt7XG5cdFx0XHRcdGNoZWNrSWZXYWxsZXRDb25uZWN0ZWQsXG5cdFx0XHRcdGNvbm5lY3RXYWxsZXQsXG5cdFx0XHRcdGN1cnJlbnRBY2NvdW50LFxuXHRcdFx0XHR0aXRsZURhdGEsXG5cdFx0XHRcdGVycm9yLFxuXHRcdFx0XHRsb2FkaW5nLFxuXHRcdFx0XHRhY2NvdW50QmFsYW5jZSxcblx0XHRcdFx0Y3JlYXRlRXZpZGVuY2UsXG5cdFx0XHRcdGdldEFsbEV2aWRlbmNlLFxuXHRcdFx0XHRhcHByb3ZlRXZpZGVuY2UsXG5cdFx0XHRcdGNyZWF0ZU9yZGVyLFxuXHRcdFx0XHRnZXRBbGxPcmRlcnMsXG5cdFx0XHRcdGFjY2VwdE9yZGVyXG5cdFx0XHR9fVxuXHRcdD5cblx0XHRcdHtjaGlsZHJlbn1cblx0XHQ8L0V2aWRhbmNlQ29udGV4dC5Qcm92aWRlcj5cblx0KTtcbn07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUNvbnRleHQiLCJXZWIzTW9kYWwiLCJldGhlcnMiLCJjb2luQUJJIiwiQ29pbkFkZHJlc3MiLCJtYXJrZXRBQkkiLCJNYXJrZXRBZGRyZXNzIiwiZmV0Y2hDb250cmFjdCIsInNpZ25lck9yUHJvdmlkZXIiLCJ0eXBlIiwiQ29udHJhY3QiLCJjb25uZWN0aW5nV2l0aFNtYXJ0Q29udHJhY3QiLCJ3ZWIzTW9kYWwiLCJjb25uZWN0aW9uIiwiY29ubmVjdCIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiV2ViM1Byb3ZpZGVyIiwic2lnbmVyIiwiZ2V0U2lnbmVyIiwiY29udHJhY3QiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJFdmlkYW5jZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiRXZpZGFuY2VQcm92aWRlciIsImNoaWxkcmVuIiwidGl0bGVEYXRhIiwic2V0RXJyb3IiLCJjdXJyZW50QWNjb3VudCIsInNldEN1cnJlbnRBY2NvdW50IiwiYWNjb3VudEJhbGFuY2UiLCJzZXRBY2NvdW50QmFsYW5jZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiY2hlY2tJZldhbGxldENvbm5lY3RlZCIsIndpbmRvdyIsImV0aGVyZXVtIiwiYWNjb3VudHMiLCJyZXF1ZXN0IiwibWV0aG9kIiwibGVuZ3RoIiwidG9Mb3dlckNhc2UiLCJnZXRCYWxhbmNlIiwiYmFsYW5jZU9mIiwiY29ubmVjdFdhbGxldCIsImNyZWF0ZUV2aWRlbmNlIiwiT3duZXJOb25jZSIsIm93bmVyIiwiZ2V0Tm9uY2UiLCJnZXRBbGxFdmlkZW5jZSIsImdldEV2aWRlbmNlIiwiYXBwcm92ZUV2aWRlbmNlIiwiaWQiLCJ3YWl0IiwiY3JlYXRlT3JkZXIiLCJwcmljZSIsImdldEFsbE9yZGVycyIsImdldE9yZGVycyIsImFjY2VwdE9yZGVyIiwiY29udHJhY3RDb2luIiwidHJ4IiwiYXBwcm92ZSIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Context/EvidanceContext.js\n"));

/***/ })

});