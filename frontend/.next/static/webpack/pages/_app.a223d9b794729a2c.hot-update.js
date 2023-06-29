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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"EvidanceContext\": function() { return /* binding */ EvidanceContext; },\n/* harmony export */   \"EvidanceProvider\": function() { return /* binding */ EvidanceProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! web3modal */ \"./node_modules/web3modal/dist/index.js\");\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ \"./Context/constants.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n//INTERNAL  IMPORT\n\n//---FETCHING SMART CONTRACT\nconst fetchContract = async (signerOrProvider, type)=>{\n    if (type === \"coin\") return new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.Contract(_constants__WEBPACK_IMPORTED_MODULE_3__.CoinAddress, _constants__WEBPACK_IMPORTED_MODULE_3__.coinABI, signerOrProvider);\n    if (type === \"market\") return new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.Contract(_constants__WEBPACK_IMPORTED_MODULE_3__.MarketAddress, _constants__WEBPACK_IMPORTED_MODULE_3__.marketABI, signerOrProvider);\n};\n//---CONNECTING WITH SMART CONTRACT\nconst connectingWithSmartContract = async (type)=>{\n    try {\n        const web3Modal = new (web3modal__WEBPACK_IMPORTED_MODULE_2___default())();\n        const connection = await web3Modal.connect();\n        const provider = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.providers.Web3Provider(connection);\n        const signer = provider.getSigner();\n        const contract = await fetchContract(signer, type);\n        return contract;\n    } catch (error) {\n        console.log(\"Something went wrong while connecting with contract\", error);\n    }\n};\nconst EvidanceContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext();\nconst EvidanceProvider = (param)=>{\n    let { children  } = param;\n    _s();\n    const titleData = \"Future of Shopping with our AI NFT Marketplace\";\n    //------USESTAT\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [currentAccount, setCurrentAccount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [accountBalance, setAccountBalance] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    //---CHECK IF WALLET IS CONNECTD\n    const checkIfWalletConnected = async ()=>{\n        try {\n            if (!window.ethereum) return setError(\"Install MetaMask\");\n            const accounts = await window.ethereum.request({\n                method: \"eth_accounts\"\n            });\n            if (accounts.length) {\n                setCurrentAccount(accounts[0].toLowerCase());\n                // const provider = new ethers.providers.Web3Provider(window.ethereum);\n                const contract = await connectingWithSmartContract(\"coin\");\n                const getBalance = await contract.balanceOf(accounts[0]);\n                setAccountBalance(getBalance);\n            } else {\n                setError(\"No Account Found\");\n            }\n        } catch (error) {\n            setError(\"Something wrong while connecting to wallet\");\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        checkIfWalletConnected();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!currentAccount) return;\n    }, [\n        currentAccount\n    ]);\n    //---CONNET WALLET FUNCTION\n    const connectWallet = async ()=>{\n        try {\n            if (!window.ethereum) return setError(\"Install MetaMask\");\n            const accounts = await window.ethereum.request({\n                method: \"eth_requestAccounts\"\n            });\n            setCurrentAccount(accounts[0].toLowerCase());\n        } catch (error) {\n            setError(\"Error while connecting to wallet\");\n        }\n    };\n    // ---- Create Compilance\n    const createEvidence = async ()=>{\n        try {\n            if (currentAccount) {\n                console.log(\"Evidence\");\n                const contract = await connectingWithSmartContract(\"market\");\n                const createEvidence = await contract.createEvidence();\n                console.log(createEvidence);\n            }\n        } catch (error) {\n            setError(\"Error while creating evidence\");\n        }\n    };\n    const getAllEvidence = async ()=>{\n        try {\n            if (currentAccount) {\n                const contract = await connectingWithSmartContract(\"market\");\n                const getEvidence = await contract.getAllEvidence();\n                return getEvidence;\n            }\n        } catch (error) {\n            setError(\"Error while creating evidence\");\n        }\n    };\n    const approveEvidence = async (id)=>{\n        try {\n            if (currentAccount) {\n                const contract = await connectingWithSmartContract(\"market\");\n                const approveEvidence = await contract.approveEvidence(id);\n                await approveEvidence.wait();\n                console.log(approveEvidence);\n            }\n        } catch (error) {\n            setError(\"Error while creating evidence\");\n        }\n    };\n    const createOrder = async (price)=>{\n        try {\n            if (currentAccount) {\n                const contract = await connectingWithSmartContract(\"market\");\n                // const trx = await contractCoin.approve(MarketAddress, price);\n                // await trx.wait();\n                const createOrder = await contract.createOrder(price);\n                console.log(createOrder);\n            }\n        } catch (error) {\n            setError(\"Error while creating evidence\");\n        }\n    };\n    const getAllOrders = async ()=>{\n        try {\n            if (currentAccount) {\n                const contract = await connectingWithSmartContract(\"market\");\n                const getOrders = await contract.getAllOrders();\n                return getOrders;\n            }\n        } catch (error) {\n            setError(\"Error while creating evidence\");\n        }\n    };\n    const acceptOrder = async (id, price)=>{\n        try {\n            if (currentAccount) {\n                const contract = await connectingWithSmartContract(\"market\");\n                const contractCoin = await connectingWithSmartContract(\"coin\");\n                const trx = await contractCoin.approve(_constants__WEBPACK_IMPORTED_MODULE_3__.MarketAddress, price);\n                await trx.wait();\n                const acceptOrder = await contract.acceptOrder(id);\n                await acceptOrder.wait();\n                console.log(acceptOrder);\n            }\n        } catch (error) {\n            setError(\"Error while creating evidence\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(EvidanceContext.Provider, {\n        value: {\n            checkIfWalletConnected,\n            connectWallet,\n            currentAccount,\n            titleData,\n            error,\n            loading,\n            accountBalance,\n            createEvidence,\n            getAllEvidence,\n            approveEvidence,\n            createOrder,\n            getAllOrders,\n            acceptOrder\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/usamalatif/Desktop/Upwork/kaseem/ComplyCoin2023/frontend/Context/EvidanceContext.js\",\n        lineNumber: 190,\n        columnNumber: 3\n    }, undefined);\n};\n_s(EvidanceProvider, \"qQtFuIaue6uCliA/o3S/iHl1ASo=\");\n_c = EvidanceProvider;\nvar _c;\n$RefreshReg$(_c, \"EvidanceProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE1BQU02QyxZQUFZLE1BQU1wQyxTQUFTbUMsWUFBWTtnQkFDN0MsT0FBT0M7WUFDUixDQUFDO1FBQ0YsRUFBQyxPQUFNbkMsT0FBTTtZQUNaUSxTQUFTO1FBQ1Y7SUFDRDtJQUVBLE1BQU00QixjQUFjLE9BQU1OLElBQUlHLFFBQVM7UUFDdEMsSUFBRztZQUNGLElBQUd4QixnQkFBZTtnQkFDakIsTUFBTVYsV0FBVyxNQUFNVCw0QkFBNEI7Z0JBQ25ELE1BQU0rQyxlQUFlLE1BQU0vQyw0QkFBNEI7Z0JBRXZELE1BQU1nRCxNQUFNLE1BQU1ELGFBQWFFLE9BQU8sQ0FBQ3RELHFEQUFhQSxFQUFFZ0Q7Z0JBQ3RELE1BQU1LLElBQUlQLElBQUk7Z0JBRWQsTUFBTUssY0FBYyxNQUFNckMsU0FBU3FDLFdBQVcsQ0FBQ047Z0JBQy9DLE1BQU1NLFlBQVlMLElBQUk7Z0JBQ3RCOUIsUUFBUUMsR0FBRyxDQUFDa0M7WUFDYixDQUFDO1FBQ0YsRUFBQyxPQUFNcEMsT0FBTTtZQUNaUSxTQUFTO1FBQ1Y7SUFDRDtJQUtBLHFCQUNDLDhEQUFDTCxnQkFBZ0JxQyxRQUFRO1FBQ3hCQyxPQUFPO1lBQ04xQjtZQUNBVTtZQUNBaEI7WUFDQUY7WUFDQVA7WUFDQWE7WUFDQUY7WUFDQWU7WUFDQUM7WUFDQUU7WUFDQUc7WUFDQUU7WUFDQUU7UUFDRDtrQkFFQzlCOzs7Ozs7QUFHSixFQUFFO0dBeEtXRDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9Db250ZXh0L0V2aWRhbmNlQ29udGV4dC5qcz8wMDc3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgV2ViM01vZGFsIGZyb20gXCJ3ZWIzbW9kYWxcIjtcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcblxuLy9JTlRFUk5BTCAgSU1QT1JUXG5pbXBvcnQge1xuXHRjb2luQUJJLFxuXHRDb2luQWRkcmVzcyxcblx0bWFya2V0QUJJLFxuXHRNYXJrZXRBZGRyZXNzXG59IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG4vLy0tLUZFVENISU5HIFNNQVJUIENPTlRSQUNUXG5jb25zdCBmZXRjaENvbnRyYWN0ID0gYXN5bmMgKHNpZ25lck9yUHJvdmlkZXIsIHR5cGUpID0+IHtcblx0aWYodHlwZSA9PT0gXCJjb2luXCIpIHJldHVybiBuZXcgZXRoZXJzLkNvbnRyYWN0KENvaW5BZGRyZXNzLFxuXHRcdGNvaW5BQkksXG5cdFx0c2lnbmVyT3JQcm92aWRlclxuXHQpO1xuXHRpZih0eXBlID09PSBcIm1hcmtldFwiKSByZXR1cm4gbmV3IGV0aGVycy5Db250cmFjdChNYXJrZXRBZGRyZXNzLFxuXHRcdG1hcmtldEFCSSxcblx0XHRzaWduZXJPclByb3ZpZGVyXG5cdCk7XG59O1xuXG4vLy0tLUNPTk5FQ1RJTkcgV0lUSCBTTUFSVCBDT05UUkFDVFxuY29uc3QgY29ubmVjdGluZ1dpdGhTbWFydENvbnRyYWN0ID0gYXN5bmMgKHR5cGUpID0+IHtcblx0dHJ5IHtcblx0XHRjb25zdCB3ZWIzTW9kYWwgPSBuZXcgV2ViM01vZGFsKCk7XG5cdFx0Y29uc3QgY29ubmVjdGlvbiA9IGF3YWl0IHdlYjNNb2RhbC5jb25uZWN0KCk7XG5cdFx0Y29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIoY29ubmVjdGlvbik7XG5cdFx0Y29uc3Qgc2lnbmVyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKCk7XG5cdFx0Y29uc3QgY29udHJhY3QgPSBhd2FpdCBmZXRjaENvbnRyYWN0KHNpZ25lciwgdHlwZSk7XG5cdFxuXHRcdHJldHVybiBjb250cmFjdDtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRjb25zb2xlLmxvZyhcIlNvbWV0aGluZyB3ZW50IHdyb25nIHdoaWxlIGNvbm5lY3Rpbmcgd2l0aCBjb250cmFjdFwiLCBlcnJvcik7XG5cdH1cbn07XG5cbmV4cG9ydCBjb25zdCBFdmlkYW5jZUNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XG5cbmV4cG9ydCBjb25zdCBFdmlkYW5jZVByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuXHRjb25zdCB0aXRsZURhdGEgPSBcIkZ1dHVyZSBvZiBTaG9wcGluZyB3aXRoIG91ciBBSSBORlQgTWFya2V0cGxhY2VcIjtcblxuXHQvLy0tLS0tLVVTRVNUQVRcblx0Y29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShcIlwiKTtcblx0Y29uc3QgW2N1cnJlbnRBY2NvdW50LCBzZXRDdXJyZW50QWNjb3VudF0gPSB1c2VTdGF0ZShcIlwiKTtcblx0Y29uc3QgW2FjY291bnRCYWxhbmNlLCBzZXRBY2NvdW50QmFsYW5jZV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuXHRjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cblx0Ly8tLS1DSEVDSyBJRiBXQUxMRVQgSVMgQ09OTkVDVERcblx0Y29uc3QgY2hlY2tJZldhbGxldENvbm5lY3RlZCA9IGFzeW5jICgpID0+IHtcblx0XHR0cnkge1xuXHRcdFx0aWYgKCF3aW5kb3cuZXRoZXJldW0pIHJldHVybiBzZXRFcnJvcihcIkluc3RhbGwgTWV0YU1hc2tcIik7XG5cblx0XHRcdGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2luZG93LmV0aGVyZXVtLnJlcXVlc3Qoe1xuXHRcdFx0XHRtZXRob2Q6IFwiZXRoX2FjY291bnRzXCIsXG5cdFx0XHR9KTtcblxuXHRcdFx0aWYgKGFjY291bnRzLmxlbmd0aCkge1xuXHRcdFx0XHRzZXRDdXJyZW50QWNjb3VudChhY2NvdW50c1swXS50b0xvd2VyQ2FzZSgpKTtcblx0XHRcdFx0Ly8gY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIod2luZG93LmV0aGVyZXVtKTtcblx0XHRcdFx0XG5cdFx0XHRcdGNvbnN0IGNvbnRyYWN0ID0gYXdhaXQgY29ubmVjdGluZ1dpdGhTbWFydENvbnRyYWN0KFwiY29pblwiKTtcblxuXHRcdFx0XHRjb25zdCBnZXRCYWxhbmNlID0gYXdhaXQgY29udHJhY3QuYmFsYW5jZU9mKGFjY291bnRzWzBdKTtcblx0XHRcdFx0c2V0QWNjb3VudEJhbGFuY2UoZ2V0QmFsYW5jZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzZXRFcnJvcihcIk5vIEFjY291bnQgRm91bmRcIik7XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdHNldEVycm9yKFwiU29tZXRoaW5nIHdyb25nIHdoaWxlIGNvbm5lY3RpbmcgdG8gd2FsbGV0XCIpO1xuXHRcdH1cblx0fTtcblx0XG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Y2hlY2tJZldhbGxldENvbm5lY3RlZCgpO1xuXHR9LCBbXSk7XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRpZiAoIWN1cnJlbnRBY2NvdW50KSByZXR1cm47XG5cdH0sIFtjdXJyZW50QWNjb3VudF0pO1xuXG5cdC8vLS0tQ09OTkVUIFdBTExFVCBGVU5DVElPTlxuXHRjb25zdCBjb25uZWN0V2FsbGV0ID0gYXN5bmMgKCkgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHRpZiAoIXdpbmRvdy5ldGhlcmV1bSkgcmV0dXJuIHNldEVycm9yKFwiSW5zdGFsbCBNZXRhTWFza1wiKTtcblxuXHRcdFx0Y29uc3QgYWNjb3VudHMgPSBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7XG5cdFx0XHRcdG1ldGhvZDogXCJldGhfcmVxdWVzdEFjY291bnRzXCIsXG5cdFx0XHR9KTtcblx0XHRcdHNldEN1cnJlbnRBY2NvdW50KGFjY291bnRzWzBdLnRvTG93ZXJDYXNlKCkpO1xuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRzZXRFcnJvcihcIkVycm9yIHdoaWxlIGNvbm5lY3RpbmcgdG8gd2FsbGV0XCIpO1xuXHRcdH1cblx0fTtcblxuXG5cdC8vIC0tLS0gQ3JlYXRlIENvbXBpbGFuY2VcblxuXHRjb25zdCBjcmVhdGVFdmlkZW5jZSA9IGFzeW5jKCkgPT57XG5cdFx0dHJ5e1xuXHRcdFx0aWYoY3VycmVudEFjY291bnQpe1xuXHRcdFx0XHRjb25zb2xlLmxvZyhcIkV2aWRlbmNlXCIpXG5cdFx0XHRcdGNvbnN0IGNvbnRyYWN0ID0gYXdhaXQgY29ubmVjdGluZ1dpdGhTbWFydENvbnRyYWN0KFwibWFya2V0XCIpO1xuXHRcdFx0XHRjb25zdCBjcmVhdGVFdmlkZW5jZSA9IGF3YWl0IGNvbnRyYWN0LmNyZWF0ZUV2aWRlbmNlKCk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGNyZWF0ZUV2aWRlbmNlKTtcblx0XHRcdH1cblx0XHR9Y2F0Y2goZXJyb3Ipe1xuXHRcdFx0c2V0RXJyb3IoXCJFcnJvciB3aGlsZSBjcmVhdGluZyBldmlkZW5jZVwiKTtcblx0XHR9XG5cdH1cblxuXHRjb25zdCBnZXRBbGxFdmlkZW5jZSA9IGFzeW5jKCkgPT57XG5cdFx0dHJ5e1xuXHRcdFx0aWYoY3VycmVudEFjY291bnQpe1xuXHRcdFx0XHRjb25zdCBjb250cmFjdCA9IGF3YWl0IGNvbm5lY3RpbmdXaXRoU21hcnRDb250cmFjdChcIm1hcmtldFwiKTtcblx0XHRcdFx0Y29uc3QgZ2V0RXZpZGVuY2UgPSBhd2FpdCBjb250cmFjdC5nZXRBbGxFdmlkZW5jZSgpO1xuXHRcdFx0XHRyZXR1cm4gZ2V0RXZpZGVuY2U7XG5cdFx0XHR9XG5cdFx0fWNhdGNoKGVycm9yKXtcblx0XHRcdHNldEVycm9yKFwiRXJyb3Igd2hpbGUgY3JlYXRpbmcgZXZpZGVuY2VcIik7XG5cdFx0fVxuXHR9XG5cdFxuXHRjb25zdCBhcHByb3ZlRXZpZGVuY2UgPSBhc3luYyhpZCkgPT57XG5cdFx0dHJ5e1xuXHRcdFx0aWYoY3VycmVudEFjY291bnQpe1xuXHRcdFx0XHRjb25zdCBjb250cmFjdCA9IGF3YWl0IGNvbm5lY3RpbmdXaXRoU21hcnRDb250cmFjdChcIm1hcmtldFwiKTtcblx0XHRcdFx0Y29uc3QgYXBwcm92ZUV2aWRlbmNlID0gYXdhaXQgY29udHJhY3QuYXBwcm92ZUV2aWRlbmNlKGlkKTtcblx0XHRcdFx0YXdhaXQgYXBwcm92ZUV2aWRlbmNlLndhaXQoKTtcblx0XHRcdFx0Y29uc29sZS5sb2coYXBwcm92ZUV2aWRlbmNlKTtcblx0XHRcdH1cblx0XHR9Y2F0Y2goZXJyb3Ipe1xuXHRcdFx0c2V0RXJyb3IoXCJFcnJvciB3aGlsZSBjcmVhdGluZyBldmlkZW5jZVwiKTtcblx0XHR9XG5cdH1cblxuXHRjb25zdCBjcmVhdGVPcmRlciA9IGFzeW5jKHByaWNlKSA9Pntcblx0XHR0cnl7XG5cdFx0XHRpZihjdXJyZW50QWNjb3VudCl7XG5cdFx0XHRcdGNvbnN0IGNvbnRyYWN0ID0gYXdhaXQgY29ubmVjdGluZ1dpdGhTbWFydENvbnRyYWN0KFwibWFya2V0XCIpO1xuXHRcdFx0XHRcblx0XHRcdFx0Ly8gY29uc3QgdHJ4ID0gYXdhaXQgY29udHJhY3RDb2luLmFwcHJvdmUoTWFya2V0QWRkcmVzcywgcHJpY2UpO1xuXHRcdFx0XHQvLyBhd2FpdCB0cngud2FpdCgpO1xuXG5cdFx0XHRcdGNvbnN0IGNyZWF0ZU9yZGVyID0gYXdhaXQgY29udHJhY3QuY3JlYXRlT3JkZXIocHJpY2UpO1xuXHRcdFx0XHRjb25zb2xlLmxvZyhjcmVhdGVPcmRlcik7XG5cdFx0XHR9XG5cdFx0fWNhdGNoKGVycm9yKXtcblx0XHRcdHNldEVycm9yKFwiRXJyb3Igd2hpbGUgY3JlYXRpbmcgZXZpZGVuY2VcIik7XG5cdFx0fVxuXHR9XG5cblx0Y29uc3QgZ2V0QWxsT3JkZXJzID0gYXN5bmMoKSA9Pntcblx0XHR0cnl7XG5cdFx0XHRpZihjdXJyZW50QWNjb3VudCl7XG5cdFx0XHRcdGNvbnN0IGNvbnRyYWN0ID0gYXdhaXQgY29ubmVjdGluZ1dpdGhTbWFydENvbnRyYWN0KFwibWFya2V0XCIpO1xuXHRcdFx0XHRjb25zdCBnZXRPcmRlcnMgPSBhd2FpdCBjb250cmFjdC5nZXRBbGxPcmRlcnMoKTtcblx0XHRcdFx0cmV0dXJuIGdldE9yZGVycztcblx0XHRcdH1cblx0XHR9Y2F0Y2goZXJyb3Ipe1xuXHRcdFx0c2V0RXJyb3IoXCJFcnJvciB3aGlsZSBjcmVhdGluZyBldmlkZW5jZVwiKTtcblx0XHR9XG5cdH1cblxuXHRjb25zdCBhY2NlcHRPcmRlciA9IGFzeW5jKGlkLCBwcmljZSkgPT57XG5cdFx0dHJ5e1xuXHRcdFx0aWYoY3VycmVudEFjY291bnQpe1xuXHRcdFx0XHRjb25zdCBjb250cmFjdCA9IGF3YWl0IGNvbm5lY3RpbmdXaXRoU21hcnRDb250cmFjdChcIm1hcmtldFwiKTtcblx0XHRcdFx0Y29uc3QgY29udHJhY3RDb2luID0gYXdhaXQgY29ubmVjdGluZ1dpdGhTbWFydENvbnRyYWN0KFwiY29pblwiKTtcblxuXHRcdFx0XHRjb25zdCB0cnggPSBhd2FpdCBjb250cmFjdENvaW4uYXBwcm92ZShNYXJrZXRBZGRyZXNzLCBwcmljZSk7XG5cdFx0XHRcdGF3YWl0IHRyeC53YWl0KCk7XG5cblx0XHRcdFx0Y29uc3QgYWNjZXB0T3JkZXIgPSBhd2FpdCBjb250cmFjdC5hY2NlcHRPcmRlcihpZCk7XG5cdFx0XHRcdGF3YWl0IGFjY2VwdE9yZGVyLndhaXQoKTtcblx0XHRcdFx0Y29uc29sZS5sb2coYWNjZXB0T3JkZXIpO1xuXHRcdFx0fVxuXHRcdH1jYXRjaChlcnJvcil7XG5cdFx0XHRzZXRFcnJvcihcIkVycm9yIHdoaWxlIGNyZWF0aW5nIGV2aWRlbmNlXCIpO1xuXHRcdH1cblx0fVxuXG5cblx0XG5cblx0cmV0dXJuIChcblx0XHQ8RXZpZGFuY2VDb250ZXh0LlByb3ZpZGVyXG5cdFx0XHR2YWx1ZT17e1xuXHRcdFx0XHRjaGVja0lmV2FsbGV0Q29ubmVjdGVkLFxuXHRcdFx0XHRjb25uZWN0V2FsbGV0LFxuXHRcdFx0XHRjdXJyZW50QWNjb3VudCxcblx0XHRcdFx0dGl0bGVEYXRhLFxuXHRcdFx0XHRlcnJvcixcblx0XHRcdFx0bG9hZGluZyxcblx0XHRcdFx0YWNjb3VudEJhbGFuY2UsXG5cdFx0XHRcdGNyZWF0ZUV2aWRlbmNlLFxuXHRcdFx0XHRnZXRBbGxFdmlkZW5jZSxcblx0XHRcdFx0YXBwcm92ZUV2aWRlbmNlLFxuXHRcdFx0XHRjcmVhdGVPcmRlcixcblx0XHRcdFx0Z2V0QWxsT3JkZXJzLFxuXHRcdFx0XHRhY2NlcHRPcmRlclxuXHRcdFx0fX1cblx0XHQ+XG5cdFx0XHR7Y2hpbGRyZW59XG5cdFx0PC9FdmlkYW5jZUNvbnRleHQuUHJvdmlkZXI+XG5cdCk7XG59O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VDb250ZXh0IiwiV2ViM01vZGFsIiwiZXRoZXJzIiwiY29pbkFCSSIsIkNvaW5BZGRyZXNzIiwibWFya2V0QUJJIiwiTWFya2V0QWRkcmVzcyIsImZldGNoQ29udHJhY3QiLCJzaWduZXJPclByb3ZpZGVyIiwidHlwZSIsIkNvbnRyYWN0IiwiY29ubmVjdGluZ1dpdGhTbWFydENvbnRyYWN0Iiwid2ViM01vZGFsIiwiY29ubmVjdGlvbiIsImNvbm5lY3QiLCJwcm92aWRlciIsInByb3ZpZGVycyIsIldlYjNQcm92aWRlciIsInNpZ25lciIsImdldFNpZ25lciIsImNvbnRyYWN0IiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiRXZpZGFuY2VDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkV2aWRhbmNlUHJvdmlkZXIiLCJjaGlsZHJlbiIsInRpdGxlRGF0YSIsInNldEVycm9yIiwiY3VycmVudEFjY291bnQiLCJzZXRDdXJyZW50QWNjb3VudCIsImFjY291bnRCYWxhbmNlIiwic2V0QWNjb3VudEJhbGFuY2UiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImNoZWNrSWZXYWxsZXRDb25uZWN0ZWQiLCJ3aW5kb3ciLCJldGhlcmV1bSIsImFjY291bnRzIiwicmVxdWVzdCIsIm1ldGhvZCIsImxlbmd0aCIsInRvTG93ZXJDYXNlIiwiZ2V0QmFsYW5jZSIsImJhbGFuY2VPZiIsImNvbm5lY3RXYWxsZXQiLCJjcmVhdGVFdmlkZW5jZSIsImdldEFsbEV2aWRlbmNlIiwiZ2V0RXZpZGVuY2UiLCJhcHByb3ZlRXZpZGVuY2UiLCJpZCIsIndhaXQiLCJjcmVhdGVPcmRlciIsInByaWNlIiwiZ2V0QWxsT3JkZXJzIiwiZ2V0T3JkZXJzIiwiYWNjZXB0T3JkZXIiLCJjb250cmFjdENvaW4iLCJ0cngiLCJhcHByb3ZlIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Context/EvidanceContext.js\n"));

/***/ })

});