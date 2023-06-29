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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"EvidanceContext\": function() { return /* binding */ EvidanceContext; },\n/* harmony export */   \"EvidanceProvider\": function() { return /* binding */ EvidanceProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! web3modal */ \"./node_modules/web3modal/dist/index.js\");\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ \"./Context/constants.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n//INTERNAL  IMPORT\n\n//---FETCHING SMART CONTRACT\nconst fetchContract = async (signerOrProvider, type)=>{\n    if (type === \"coin\") return new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.Contract(_constants__WEBPACK_IMPORTED_MODULE_3__.CoinAddress, _constants__WEBPACK_IMPORTED_MODULE_3__.coinABI, signerOrProvider);\n    if (type === \"market\") return new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.Contract(_constants__WEBPACK_IMPORTED_MODULE_3__.MarketAddress, _constants__WEBPACK_IMPORTED_MODULE_3__.marketABI, signerOrProvider);\n};\n//---CONNECTING WITH SMART CONTRACT\nconst connectingWithSmartContract = async (type)=>{\n    try {\n        const web3Modal = new (web3modal__WEBPACK_IMPORTED_MODULE_2___default())();\n        const connection = await web3Modal.connect();\n        const provider = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.providers.Web3Provider(connection);\n        const signer = provider.getSigner();\n        const contract = await fetchContract(signer, type);\n        return [\n            contract,\n            signer\n        ];\n    } catch (error) {\n        console.log(\"Something went wrong while connecting with contract\", error);\n    }\n};\nconst EvidanceContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext();\nconst EvidanceProvider = (param)=>{\n    let { children  } = param;\n    _s();\n    const titleData = \"Future of Shopping with our AI NFT Marketplace\";\n    //------USESTAT\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [currentAccount, setCurrentAccount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [accountBalance, setAccountBalance] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    //---CHECK IF WALLET IS CONNECTD\n    const checkIfWalletConnected = async ()=>{\n        try {\n            if (!window.ethereum) return setError(\"Install MetaMask\");\n            const accounts = await window.ethereum.request({\n                method: \"eth_accounts\"\n            });\n            if (accounts.length) {\n                setCurrentAccount(accounts[0].toLowerCase());\n                // const provider = new ethers.providers.Web3Provider(window.ethereum);\n                const trx = await connectingWithSmartContract(\"coin\");\n                const contract = trx[0];\n                const signer = trx[1];\n                const getBalance = await contract.balanceOf(accounts[0]);\n                setAccountBalance(getBalance);\n            } else {\n                setError(\"No Account Found\");\n            }\n        } catch (error) {\n            setError(\"Something wrong while connecting to wallet\");\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        checkIfWalletConnected();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!currentAccount) return;\n    }, [\n        currentAccount\n    ]);\n    //---CONNET WALLET FUNCTION\n    const connectWallet = async ()=>{\n        try {\n            if (!window.ethereum) return setError(\"Install MetaMask\");\n            const accounts = await window.ethereum.request({\n                method: \"eth_requestAccounts\"\n            });\n            setCurrentAccount(accounts[0].toLowerCase());\n        } catch (error) {\n            setError(\"Error while connecting to wallet\");\n        }\n    };\n    // ---- Create Compilance\n    const createEvidence = async ()=>{\n        try {\n            console.log(\"create evidence\");\n            if (currentAccount) {\n                let OwnerNonce = await owner.getNonce();\n                const trx = await connectingWithSmartContract(\"market\");\n                const contract = trx[0];\n                const signer = trx[1];\n                const createEvidence = await contract.createEvidence({\n                    nonce: OwnerNonce\n                });\n                console.log(createEvidence);\n            }\n        } catch (error) {\n            console.log(error);\n            setError(\"Error while creating evidence\");\n        }\n    };\n    const getAllEvidence = async ()=>{\n        try {\n            if (currentAccount) {\n                const trx = await connectingWithSmartContract(\"market\");\n                const contract = trx[0];\n                const signer = trx[1];\n                const getEvidence = await contract.getAllEvidence();\n                return getEvidence;\n            }\n        } catch (error) {\n            setError(\"Error while creating evidence\");\n        }\n    };\n    const approveEvidence = async (id)=>{\n        try {\n            if (currentAccount) {\n                const trx = await connectingWithSmartContract(\"market\");\n                const contract = trx[0];\n                const signer = trx[1];\n                const approveEvidence = await contract.approveEvidence(id);\n                await approveEvidence.wait();\n                console.log(approveEvidence);\n            }\n        } catch (error) {\n            setError(\"Error while creating evidence\");\n        }\n    };\n    const createOrder = async (price)=>{\n        try {\n            if (currentAccount) {\n                const trx = await connectingWithSmartContract(\"market\");\n                const contract = trx[0];\n                const signer = trx[1];\n                // const trx = await contractCoin.approve(MarketAddress, price);\n                // await trx.wait();\n                const createOrder = await contract.createOrder(price);\n                console.log(createOrder);\n            }\n        } catch (error) {\n            setError(\"Error while creating evidence\");\n        }\n    };\n    const getAllOrders = async ()=>{\n        try {\n            if (currentAccount) {\n                const trx = await connectingWithSmartContract(\"market\");\n                const contract = trx[0];\n                const signer = trx[1];\n                const getOrders = await contract.getAllOrders();\n                return getOrders;\n            }\n        } catch (error) {\n            setError(\"Error while creating evidence\");\n        }\n    };\n    const acceptOrder = async (id, price)=>{\n        try {\n            if (currentAccount) {\n                const trx = await connectingWithSmartContract(\"market\");\n                const contract = trx[0];\n                const trx3 = await connectingWithSmartContract(\"coin\");\n                const contractCoin = trx3[0];\n                const trx1 = await contractCoin.approve(_constants__WEBPACK_IMPORTED_MODULE_3__.MarketAddress, price);\n                await trx1.wait();\n                const acceptOrder = await contract.acceptOrder(id);\n                await acceptOrder.wait();\n                console.log(acceptOrder);\n            }\n        } catch (error) {\n            setError(\"Error while creating evidence\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(EvidanceContext.Provider, {\n        value: {\n            checkIfWalletConnected,\n            connectWallet,\n            currentAccount,\n            titleData,\n            error,\n            loading,\n            accountBalance,\n            createEvidence,\n            getAllEvidence,\n            approveEvidence,\n            createOrder,\n            getAllOrders,\n            acceptOrder\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/usamalatif/Desktop/Upwork/kaseem/ComplyCoin2023/frontend/Context/EvidanceContext.js\",\n        lineNumber: 209,\n        columnNumber: 3\n    }, undefined);\n};\n_s(EvidanceProvider, \"qQtFuIaue6uCliA/o3S/iHl1ASo=\");\n_c = EvidanceProvider;\nvar _c;\n$RefreshReg$(_c, \"EvidanceProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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STtnQkFFZixNQUFNSyxjQUFjLE1BQU0xQyxTQUFTMEMsV0FBVyxDQUFDTjtnQkFDL0MsTUFBTU0sWUFBWUwsSUFBSTtnQkFDdEJuQyxRQUFRQyxHQUFHLENBQUN1QztZQUNiLENBQUM7UUFDRixFQUFDLE9BQU16QyxPQUFNO1lBQ1pRLFNBQVM7UUFDVjtJQUNEO0lBS0EscUJBQ0MsOERBQUNMLGdCQUFnQjJDLFFBQVE7UUFDeEJDLE9BQU87WUFDTmhDO1lBQ0FXO1lBQ0FqQjtZQUNBRjtZQUNBUDtZQUNBYTtZQUNBRjtZQUNBZ0I7WUFDQUs7WUFDQUU7WUFDQUc7WUFDQUU7WUFDQUU7UUFDRDtrQkFFQ25DOzs7Ozs7QUFHSixFQUFFO0dBM0xXRDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9Db250ZXh0L0V2aWRhbmNlQ29udGV4dC5qcz8wMDc3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgV2ViM01vZGFsIGZyb20gXCJ3ZWIzbW9kYWxcIjtcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcblxuLy9JTlRFUk5BTCAgSU1QT1JUXG5pbXBvcnQge1xuXHRjb2luQUJJLFxuXHRDb2luQWRkcmVzcyxcblx0bWFya2V0QUJJLFxuXHRNYXJrZXRBZGRyZXNzXG59IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG4vLy0tLUZFVENISU5HIFNNQVJUIENPTlRSQUNUXG5jb25zdCBmZXRjaENvbnRyYWN0ID0gYXN5bmMgKHNpZ25lck9yUHJvdmlkZXIsIHR5cGUpID0+IHtcblx0aWYodHlwZSA9PT0gXCJjb2luXCIpIHJldHVybiBuZXcgZXRoZXJzLkNvbnRyYWN0KENvaW5BZGRyZXNzLFxuXHRcdGNvaW5BQkksXG5cdFx0c2lnbmVyT3JQcm92aWRlclxuXHQpO1xuXHRpZih0eXBlID09PSBcIm1hcmtldFwiKSByZXR1cm4gbmV3IGV0aGVycy5Db250cmFjdChNYXJrZXRBZGRyZXNzLFxuXHRcdG1hcmtldEFCSSxcblx0XHRzaWduZXJPclByb3ZpZGVyXG5cdCk7XG59O1xuXG4vLy0tLUNPTk5FQ1RJTkcgV0lUSCBTTUFSVCBDT05UUkFDVFxuY29uc3QgY29ubmVjdGluZ1dpdGhTbWFydENvbnRyYWN0ID0gYXN5bmMgKHR5cGUpID0+IHtcblx0dHJ5IHtcblx0XHRjb25zdCB3ZWIzTW9kYWwgPSBuZXcgV2ViM01vZGFsKCk7XG5cdFx0Y29uc3QgY29ubmVjdGlvbiA9IGF3YWl0IHdlYjNNb2RhbC5jb25uZWN0KCk7XG5cdFx0Y29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIoY29ubmVjdGlvbik7XG5cdFx0Y29uc3Qgc2lnbmVyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKCk7XG5cdFx0Y29uc3QgY29udHJhY3QgPSBhd2FpdCBmZXRjaENvbnRyYWN0KHNpZ25lciwgdHlwZSk7XG5cdFxuXHRcdHJldHVybiBbY29udHJhY3Qsc2lnbmVyXTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRjb25zb2xlLmxvZyhcIlNvbWV0aGluZyB3ZW50IHdyb25nIHdoaWxlIGNvbm5lY3Rpbmcgd2l0aCBjb250cmFjdFwiLCBlcnJvcik7XG5cdH1cbn07XG5cbmV4cG9ydCBjb25zdCBFdmlkYW5jZUNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XG5cbmV4cG9ydCBjb25zdCBFdmlkYW5jZVByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuXHRjb25zdCB0aXRsZURhdGEgPSBcIkZ1dHVyZSBvZiBTaG9wcGluZyB3aXRoIG91ciBBSSBORlQgTWFya2V0cGxhY2VcIjtcblxuXHQvLy0tLS0tLVVTRVNUQVRcblx0Y29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShcIlwiKTtcblx0Y29uc3QgW2N1cnJlbnRBY2NvdW50LCBzZXRDdXJyZW50QWNjb3VudF0gPSB1c2VTdGF0ZShcIlwiKTtcblx0Y29uc3QgW2FjY291bnRCYWxhbmNlLCBzZXRBY2NvdW50QmFsYW5jZV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuXHRjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cblx0Ly8tLS1DSEVDSyBJRiBXQUxMRVQgSVMgQ09OTkVDVERcblx0Y29uc3QgY2hlY2tJZldhbGxldENvbm5lY3RlZCA9IGFzeW5jICgpID0+IHtcblx0XHR0cnkge1xuXHRcdFx0aWYgKCF3aW5kb3cuZXRoZXJldW0pIHJldHVybiBzZXRFcnJvcihcIkluc3RhbGwgTWV0YU1hc2tcIik7XG5cblx0XHRcdGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2luZG93LmV0aGVyZXVtLnJlcXVlc3Qoe1xuXHRcdFx0XHRtZXRob2Q6IFwiZXRoX2FjY291bnRzXCIsXG5cdFx0XHR9KTtcblxuXHRcdFx0aWYgKGFjY291bnRzLmxlbmd0aCkge1xuXHRcdFx0XHRzZXRDdXJyZW50QWNjb3VudChhY2NvdW50c1swXS50b0xvd2VyQ2FzZSgpKTtcblx0XHRcdFx0Ly8gY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIod2luZG93LmV0aGVyZXVtKTtcblx0XHRcdFx0XG5cdFx0XHRcdGNvbnN0IHRyeCA9IGF3YWl0IGNvbm5lY3RpbmdXaXRoU21hcnRDb250cmFjdChcImNvaW5cIik7XG5cdFx0XHRcdGNvbnN0IGNvbnRyYWN0ID0gdHJ4WzBdO1xuXHRcdFx0XHRjb25zdCBzaWduZXIgPSB0cnhbMV07XG5cdFx0XHRcdGNvbnN0IGdldEJhbGFuY2UgPSBhd2FpdCBjb250cmFjdC5iYWxhbmNlT2YoYWNjb3VudHNbMF0pO1xuXHRcdFx0XHRzZXRBY2NvdW50QmFsYW5jZShnZXRCYWxhbmNlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHNldEVycm9yKFwiTm8gQWNjb3VudCBGb3VuZFwiKTtcblx0XHRcdH1cblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0c2V0RXJyb3IoXCJTb21ldGhpbmcgd3Jvbmcgd2hpbGUgY29ubmVjdGluZyB0byB3YWxsZXRcIik7XG5cdFx0fVxuXHR9O1xuXHRcblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRjaGVja0lmV2FsbGV0Q29ubmVjdGVkKCk7XG5cdH0sIFtdKTtcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGlmICghY3VycmVudEFjY291bnQpIHJldHVybjtcblx0fSwgW2N1cnJlbnRBY2NvdW50XSk7XG5cblx0Ly8tLS1DT05ORVQgV0FMTEVUIEZVTkNUSU9OXG5cdGNvbnN0IGNvbm5lY3RXYWxsZXQgPSBhc3luYyAoKSA9PiB7XG5cdFx0dHJ5IHtcblx0XHRcdGlmICghd2luZG93LmV0aGVyZXVtKSByZXR1cm4gc2V0RXJyb3IoXCJJbnN0YWxsIE1ldGFNYXNrXCIpO1xuXG5cdFx0XHRjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5yZXF1ZXN0KHtcblx0XHRcdFx0bWV0aG9kOiBcImV0aF9yZXF1ZXN0QWNjb3VudHNcIixcblx0XHRcdH0pO1xuXHRcdFx0c2V0Q3VycmVudEFjY291bnQoYWNjb3VudHNbMF0udG9Mb3dlckNhc2UoKSk7XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdHNldEVycm9yKFwiRXJyb3Igd2hpbGUgY29ubmVjdGluZyB0byB3YWxsZXRcIik7XG5cdFx0fVxuXHR9O1xuXG5cblx0Ly8gLS0tLSBDcmVhdGUgQ29tcGlsYW5jZVxuXG5cdGNvbnN0IGNyZWF0ZUV2aWRlbmNlID0gYXN5bmMoKSA9Pntcblx0XHR0cnl7XG5cdFx0XHRjb25zb2xlLmxvZyhcImNyZWF0ZSBldmlkZW5jZVwiKVxuXHRcdFx0aWYoY3VycmVudEFjY291bnQpe1xuXHRcdFx0XHRsZXQgT3duZXJOb25jZSA9IGF3YWl0IG93bmVyLmdldE5vbmNlKCk7XG5cdFx0XHRcdFxuXHRcdFx0XHRcblx0XHRcdFx0Y29uc3QgdHJ4ID0gYXdhaXQgY29ubmVjdGluZ1dpdGhTbWFydENvbnRyYWN0KFwibWFya2V0XCIpO1xuXHRcdFx0XHRjb25zdCBjb250cmFjdCA9IHRyeFswXTtcblx0XHRcdFx0Y29uc3Qgc2lnbmVyID0gdHJ4WzFdO1xuXHRcdFx0XHRjb25zdCBjcmVhdGVFdmlkZW5jZSA9IGF3YWl0IGNvbnRyYWN0LmNyZWF0ZUV2aWRlbmNlKHtcblx0XHRcdFx0XHRub25jZTogT3duZXJOb25jZVxuXHRcdFx0XHR9KTtcblx0XHRcdFx0Y29uc29sZS5sb2coY3JlYXRlRXZpZGVuY2UpO1xuXHRcdFx0fVxuXHRcdH1jYXRjaChlcnJvcil7XG5cdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XG5cdFx0XHRzZXRFcnJvcihcIkVycm9yIHdoaWxlIGNyZWF0aW5nIGV2aWRlbmNlXCIpO1xuXHRcdH1cblx0fVxuXG5cdGNvbnN0IGdldEFsbEV2aWRlbmNlID0gYXN5bmMoKSA9Pntcblx0XHR0cnl7XG5cdFx0XHRpZihjdXJyZW50QWNjb3VudCl7XG5cdFx0XHRcdGNvbnN0IHRyeCA9IGF3YWl0IGNvbm5lY3RpbmdXaXRoU21hcnRDb250cmFjdChcIm1hcmtldFwiKTtcblx0XHRcdFx0Y29uc3QgY29udHJhY3QgPSB0cnhbMF07XG5cdFx0XHRcdGNvbnN0IHNpZ25lciA9IHRyeFsxXTtcblx0XHRcdFx0Y29uc3QgZ2V0RXZpZGVuY2UgPSBhd2FpdCBjb250cmFjdC5nZXRBbGxFdmlkZW5jZSgpO1xuXHRcdFx0XHRyZXR1cm4gZ2V0RXZpZGVuY2U7XG5cdFx0XHR9XG5cdFx0fWNhdGNoKGVycm9yKXtcblx0XHRcdHNldEVycm9yKFwiRXJyb3Igd2hpbGUgY3JlYXRpbmcgZXZpZGVuY2VcIik7XG5cdFx0fVxuXHR9XG5cdFxuXHRjb25zdCBhcHByb3ZlRXZpZGVuY2UgPSBhc3luYyhpZCkgPT57XG5cdFx0dHJ5e1xuXHRcdFx0aWYoY3VycmVudEFjY291bnQpe1xuXHRcdFx0XHRjb25zdCB0cnggPSBhd2FpdCBjb25uZWN0aW5nV2l0aFNtYXJ0Q29udHJhY3QoXCJtYXJrZXRcIik7XG5cdFx0XHRcdGNvbnN0IGNvbnRyYWN0ID0gdHJ4WzBdO1xuXHRcdFx0XHRjb25zdCBzaWduZXIgPSB0cnhbMV07XG5cdFx0XHRcdGNvbnN0IGFwcHJvdmVFdmlkZW5jZSA9IGF3YWl0IGNvbnRyYWN0LmFwcHJvdmVFdmlkZW5jZShpZCk7XG5cdFx0XHRcdGF3YWl0IGFwcHJvdmVFdmlkZW5jZS53YWl0KCk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGFwcHJvdmVFdmlkZW5jZSk7XG5cdFx0XHR9XG5cdFx0fWNhdGNoKGVycm9yKXtcblx0XHRcdHNldEVycm9yKFwiRXJyb3Igd2hpbGUgY3JlYXRpbmcgZXZpZGVuY2VcIik7XG5cdFx0fVxuXHR9XG5cblx0Y29uc3QgY3JlYXRlT3JkZXIgPSBhc3luYyhwcmljZSkgPT57XG5cdFx0dHJ5e1xuXHRcdFx0aWYoY3VycmVudEFjY291bnQpe1xuXHRcdFx0XHRjb25zdCB0cnggPSBhd2FpdCBjb25uZWN0aW5nV2l0aFNtYXJ0Q29udHJhY3QoXCJtYXJrZXRcIik7XG5cdFx0XHRcdGNvbnN0IGNvbnRyYWN0ID0gdHJ4WzBdO1xuXHRcdFx0XHRjb25zdCBzaWduZXIgPSB0cnhbMV07XG5cdFx0XHRcdFxuXHRcdFx0XHQvLyBjb25zdCB0cnggPSBhd2FpdCBjb250cmFjdENvaW4uYXBwcm92ZShNYXJrZXRBZGRyZXNzLCBwcmljZSk7XG5cdFx0XHRcdC8vIGF3YWl0IHRyeC53YWl0KCk7XG5cblx0XHRcdFx0Y29uc3QgY3JlYXRlT3JkZXIgPSBhd2FpdCBjb250cmFjdC5jcmVhdGVPcmRlcihwcmljZSk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGNyZWF0ZU9yZGVyKTtcblx0XHRcdH1cblx0XHR9Y2F0Y2goZXJyb3Ipe1xuXHRcdFx0c2V0RXJyb3IoXCJFcnJvciB3aGlsZSBjcmVhdGluZyBldmlkZW5jZVwiKTtcblx0XHR9XG5cdH1cblxuXHRjb25zdCBnZXRBbGxPcmRlcnMgPSBhc3luYygpID0+e1xuXHRcdHRyeXtcblx0XHRcdGlmKGN1cnJlbnRBY2NvdW50KXtcblx0XHRcdFx0Y29uc3QgdHJ4ID0gYXdhaXQgY29ubmVjdGluZ1dpdGhTbWFydENvbnRyYWN0KFwibWFya2V0XCIpO1xuXHRcdFx0XHRjb25zdCBjb250cmFjdCA9IHRyeFswXTtcblx0XHRcdFx0Y29uc3Qgc2lnbmVyID0gdHJ4WzFdO1xuXHRcdFx0XHRjb25zdCBnZXRPcmRlcnMgPSBhd2FpdCBjb250cmFjdC5nZXRBbGxPcmRlcnMoKTtcblx0XHRcdFx0cmV0dXJuIGdldE9yZGVycztcblx0XHRcdH1cblx0XHR9Y2F0Y2goZXJyb3Ipe1xuXHRcdFx0c2V0RXJyb3IoXCJFcnJvciB3aGlsZSBjcmVhdGluZyBldmlkZW5jZVwiKTtcblx0XHR9XG5cdH1cblxuXHRjb25zdCBhY2NlcHRPcmRlciA9IGFzeW5jKGlkLCBwcmljZSkgPT57XG5cdFx0dHJ5e1xuXHRcdFx0aWYoY3VycmVudEFjY291bnQpe1xuXHRcdFx0XHRjb25zdCB0cnggPSBhd2FpdCBjb25uZWN0aW5nV2l0aFNtYXJ0Q29udHJhY3QoXCJtYXJrZXRcIik7XG5cdFx0XHRcdGNvbnN0IGNvbnRyYWN0ID0gdHJ4WzBdO1xuXG5cdFx0XHRcdGNvbnN0IHRyeDMgPSBhd2FpdCBjb25uZWN0aW5nV2l0aFNtYXJ0Q29udHJhY3QoXCJjb2luXCIpO1xuXHRcdFx0XHRjb25zdCBjb250cmFjdENvaW4gPSB0cngzWzBdO1xuXHRcdFx0XHRjb25zdCB0cngxID0gYXdhaXQgY29udHJhY3RDb2luLmFwcHJvdmUoTWFya2V0QWRkcmVzcywgcHJpY2UpO1xuXHRcdFx0XHRhd2FpdCB0cngxLndhaXQoKTtcblxuXHRcdFx0XHRjb25zdCBhY2NlcHRPcmRlciA9IGF3YWl0IGNvbnRyYWN0LmFjY2VwdE9yZGVyKGlkKTtcblx0XHRcdFx0YXdhaXQgYWNjZXB0T3JkZXIud2FpdCgpO1xuXHRcdFx0XHRjb25zb2xlLmxvZyhhY2NlcHRPcmRlcik7XG5cdFx0XHR9XG5cdFx0fWNhdGNoKGVycm9yKXtcblx0XHRcdHNldEVycm9yKFwiRXJyb3Igd2hpbGUgY3JlYXRpbmcgZXZpZGVuY2VcIik7XG5cdFx0fVxuXHR9XG5cblxuXHRcblxuXHRyZXR1cm4gKFxuXHRcdDxFdmlkYW5jZUNvbnRleHQuUHJvdmlkZXJcblx0XHRcdHZhbHVlPXt7XG5cdFx0XHRcdGNoZWNrSWZXYWxsZXRDb25uZWN0ZWQsXG5cdFx0XHRcdGNvbm5lY3RXYWxsZXQsXG5cdFx0XHRcdGN1cnJlbnRBY2NvdW50LFxuXHRcdFx0XHR0aXRsZURhdGEsXG5cdFx0XHRcdGVycm9yLFxuXHRcdFx0XHRsb2FkaW5nLFxuXHRcdFx0XHRhY2NvdW50QmFsYW5jZSxcblx0XHRcdFx0Y3JlYXRlRXZpZGVuY2UsXG5cdFx0XHRcdGdldEFsbEV2aWRlbmNlLFxuXHRcdFx0XHRhcHByb3ZlRXZpZGVuY2UsXG5cdFx0XHRcdGNyZWF0ZU9yZGVyLFxuXHRcdFx0XHRnZXRBbGxPcmRlcnMsXG5cdFx0XHRcdGFjY2VwdE9yZGVyXG5cdFx0XHR9fVxuXHRcdD5cblx0XHRcdHtjaGlsZHJlbn1cblx0XHQ8L0V2aWRhbmNlQ29udGV4dC5Qcm92aWRlcj5cblx0KTtcbn07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUNvbnRleHQiLCJXZWIzTW9kYWwiLCJldGhlcnMiLCJjb2luQUJJIiwiQ29pbkFkZHJlc3MiLCJtYXJrZXRBQkkiLCJNYXJrZXRBZGRyZXNzIiwiZmV0Y2hDb250cmFjdCIsInNpZ25lck9yUHJvdmlkZXIiLCJ0eXBlIiwiQ29udHJhY3QiLCJjb25uZWN0aW5nV2l0aFNtYXJ0Q29udHJhY3QiLCJ3ZWIzTW9kYWwiLCJjb25uZWN0aW9uIiwiY29ubmVjdCIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiV2ViM1Byb3ZpZGVyIiwic2lnbmVyIiwiZ2V0U2lnbmVyIiwiY29udHJhY3QiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJFdmlkYW5jZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiRXZpZGFuY2VQcm92aWRlciIsImNoaWxkcmVuIiwidGl0bGVEYXRhIiwic2V0RXJyb3IiLCJjdXJyZW50QWNjb3VudCIsInNldEN1cnJlbnRBY2NvdW50IiwiYWNjb3VudEJhbGFuY2UiLCJzZXRBY2NvdW50QmFsYW5jZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiY2hlY2tJZldhbGxldENvbm5lY3RlZCIsIndpbmRvdyIsImV0aGVyZXVtIiwiYWNjb3VudHMiLCJyZXF1ZXN0IiwibWV0aG9kIiwibGVuZ3RoIiwidG9Mb3dlckNhc2UiLCJ0cngiLCJnZXRCYWxhbmNlIiwiYmFsYW5jZU9mIiwiY29ubmVjdFdhbGxldCIsImNyZWF0ZUV2aWRlbmNlIiwiT3duZXJOb25jZSIsIm93bmVyIiwiZ2V0Tm9uY2UiLCJub25jZSIsImdldEFsbEV2aWRlbmNlIiwiZ2V0RXZpZGVuY2UiLCJhcHByb3ZlRXZpZGVuY2UiLCJpZCIsIndhaXQiLCJjcmVhdGVPcmRlciIsInByaWNlIiwiZ2V0QWxsT3JkZXJzIiwiZ2V0T3JkZXJzIiwiYWNjZXB0T3JkZXIiLCJ0cngzIiwiY29udHJhY3RDb2luIiwidHJ4MSIsImFwcHJvdmUiLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Context/EvidanceContext.js\n"));

/***/ })

});