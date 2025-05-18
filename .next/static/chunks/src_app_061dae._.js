(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_app_061dae._.js", {

"[project]/src/app/_components/producList/productUI.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// import { notFound } from "next/navigation";
// export default async function ProductDetails({ product }: { product: any }) {
//   if (!product) return notFound();
//   return (
//     <div className="container mx-auto py-8 px-6 max-w-3xl">
//       <h1 className="text-4xl font-extrabold text-gray-900 mb-6">{product.name}</h1>
//       <div className="flex justify-center mb-6">
//         <img
//           src={product.imageUrl || undefined}
//           alt={product.name}
//           className="w-full max-w-lg rounded-lg shadow-xl"
//         />
//       </div>
//       <p className="text-lg text-gray-800 mb-4">{product.description}</p>
//       <div className="flex items-center justify-between mb-6">
//         <p className="text-2xl font-semibold text-blue-600">
//           {Number(product.price.toString()).toLocaleString("ru-RU", {
//             style: "currency",
//             currency: "RUB",
//           })}
//         </p>
//       </div>
//       <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-6">
//         <p className="text-sm text-gray-500 mb-1">
//           <strong>Категория:</strong> <span className="font-medium">{product.category.name}</span>
//         </p>
//         <p className="text-sm text-gray-500 mb-1">
//           <strong>На складе:</strong> <span className="font-medium">{product.stock}</span>
//         </p>
//         <p className="text-sm text-gray-500 mb-1">
//           <strong>Создано:</strong>{" "}
//           {new Date(product.createdAt).toLocaleDateString("ru-RU", {
//             day: "numeric",
//             month: "long",
//             year: "numeric",
//           })}
//         </p>
//         <p className="text-sm text-gray-500 mb-4">
//           <strong>Обновлено:</strong>{" "}
//           {new Date(product.updatedAt).toLocaleDateString("ru-RU", {
//             day: "numeric",
//             month: "long",
//             year: "numeric",
//           })}
//         </p>
//       </div>
//     </div>
//   );
// }
__turbopack_esm__({
    "default": (()=>ProductDetails)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
function ProductDetails({ product }) {
    _s();
    const [currentSlide, setCurrentSlide] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])(); // ✅ useRouter из next/navigation
    if (!product) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notFound"])();
    const images = product.images?.length ? product.images : [
        {
            url: product.imageUrl || "/placeholder-product.jpg"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container mx-auto py-8 px-6 max-w-3xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>router.back(),
                    className: "text-purple-600 hover:text-purple-800 transition-colors flex items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "h-5 w-5 mr-1",
                            viewBox: "0 0 20 20",
                            fill: "currentColor",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                fillRule: "evenodd",
                                d: "M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z",
                                clipRule: "evenodd"
                            }, void 0, false, {
                                fileName: "[project]/src/app/_components/producList/productUI.tsx",
                                lineNumber: 81,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/_components/producList/productUI.tsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this),
                        "Назад"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/_components/producList/productUI.tsx",
                    lineNumber: 76,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/_components/producList/productUI.tsx",
                lineNumber: 75,
                columnNumber: 11
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-4xl font-extrabold text-gray-900 mb-6",
                children: product.name
            }, void 0, false, {
                fileName: "[project]/src/app/_components/producList/productUI.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full overflow-hidden rounded-lg bg-gray-100 aspect-[4/3] mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex transition-transform duration-300 ease-in-out",
                        style: {
                            transform: `translateX(-${currentSlide * 100}%)`
                        },
                        children: images.map((img, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: img.url,
                                alt: product.name,
                                className: "w-full h-full object-cover shrink-0 grow-0 basis-full"
                            }, idx, false, {
                                fileName: "[project]/src/app/_components/producList/productUI.tsx",
                                lineNumber: 94,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/_components/producList/productUI.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this),
                    images.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setCurrentSlide((prev)=>(prev - 1 + images.length) % images.length),
                                className: "absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 px-2 py-1 rounded-full shadow",
                                children: "‹"
                            }, void 0, false, {
                                fileName: "[project]/src/app/_components/producList/productUI.tsx",
                                lineNumber: 105,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setCurrentSlide((prev)=>(prev + 1) % images.length),
                                className: "absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 px-2 py-1 rounded-full shadow",
                                children: "›"
                            }, void 0, false, {
                                fileName: "[project]/src/app/_components/producList/productUI.tsx",
                                lineNumber: 113,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/_components/producList/productUI.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-lg text-gray-800 mb-4",
                children: product.description
            }, void 0, false, {
                fileName: "[project]/src/app/_components/producList/productUI.tsx",
                lineNumber: 125,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-2xl font-semibold text-blue-600",
                    children: Number(product.price.toString()).toLocaleString("ru-RU", {
                        style: "currency",
                        currency: "RUB"
                    })
                }, void 0, false, {
                    fileName: "[project]/src/app/_components/producList/productUI.tsx",
                    lineNumber: 128,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/_components/producList/productUI.tsx",
                lineNumber: 127,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gray-100 p-4 rounded-lg shadow-md mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-500 mb-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "Категория:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/_components/producList/productUI.tsx",
                                lineNumber: 138,
                                columnNumber: 11
                            }, this),
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-medium",
                                children: product.category.name
                            }, void 0, false, {
                                fileName: "[project]/src/app/_components/producList/productUI.tsx",
                                lineNumber: 138,
                                columnNumber: 39
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/_components/producList/productUI.tsx",
                        lineNumber: 137,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-500 mb-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "На складе:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/_components/producList/productUI.tsx",
                                lineNumber: 141,
                                columnNumber: 11
                            }, this),
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-medium",
                                children: product.stock
                            }, void 0, false, {
                                fileName: "[project]/src/app/_components/producList/productUI.tsx",
                                lineNumber: 141,
                                columnNumber: 39
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/_components/producList/productUI.tsx",
                        lineNumber: 140,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-500 mb-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "Создано:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/_components/producList/productUI.tsx",
                                lineNumber: 144,
                                columnNumber: 11
                            }, this),
                            " ",
                            new Date(product.createdAt).toLocaleDateString("ru-RU", {
                                day: "numeric",
                                month: "long",
                                year: "numeric"
                            })
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/_components/producList/productUI.tsx",
                        lineNumber: 143,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-500 mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "Обновлено:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/_components/producList/productUI.tsx",
                                lineNumber: 152,
                                columnNumber: 11
                            }, this),
                            " ",
                            new Date(product.updatedAt).toLocaleDateString("ru-RU", {
                                day: "numeric",
                                month: "long",
                                year: "numeric"
                            })
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/_components/producList/productUI.tsx",
                        lineNumber: 151,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/_components/producList/productUI.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/_components/producList/productUI.tsx",
        lineNumber: 74,
        columnNumber: 5
    }, this);
}
_s(ProductDetails, "PkVDKyiqtXTfIRvPRsqnqSca2Fk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ProductDetails;
var _c;
__turbopack_refresh__.register(_c, "ProductDetails");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/api/action/product.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// "use server";
// import { revalidatePath } from "next/cache";
// import { redirect } from "next/navigation";
// import { z } from "zod";
// import { auth } from "~/server/auth";
// import { db } from "~/server/db";
// import { createClient } from '@supabase/supabase-js';
// export async function createProduct(formData: FormData) {
//   const fd = z
//     .object({
//       name: z.string(),
//       description: z.string(),
//       price: z.coerce.number().positive(),
//       imageUrl: z.string().url().optional().or(z.literal("")),
//       categoryId: z.string(),
//     })
//     .parse({
//       name: formData.get("name"),
//       description: formData.get("description"),
//       price: formData.get("price"),
//       imageUrl: formData.get("imageUrl"),
//       categoryId: formData.get("categoryId"),
//     });
//   await db.product.create({
//     data: {
//       name: fd.name,
//       description: fd.description,
//       price: fd.price,
//       imageUrl: fd.imageUrl || "",
//       categoryId: fd.categoryId,
//     },
//   });
//   revalidatePath("/product");
//   redirect("/product"); 
// }
// const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL!,
//   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
// );
// // export async function createProduct(formData: FormData) {
// //   const name = formData.get("name") as string;
// //   const description = formData.get("description") as string;
// //   const price = parseFloat(formData.get("price") as string);
// //   const categoryId = formData.get("categoryId") as string;
// //   const file = formData.get("image") as File;
// //   if (!file || file.size === 0) throw new Error("Файл изображения не выбран");
// //   const filePath = `products/${Date.now()}-${file.name}`;
// //   // Загрузка в Supabase Storage
// //   const { error: uploadError } = await supabase.storage
// //     .from('product-images')
// //     .upload(filePath, file, { upsert: true });
// //   if (uploadError) throw uploadError;
// //   const { data: imageData } = supabase
// //     .storage
// //     .from('product-images')
// //     .getPublicUrl(filePath);
// //   const imageUrl = imageData?.publicUrl;
// //   if (!imageUrl) throw new Error("Не удалось получить URL изображения");
// //   // Сохранение в PostgreSQL
// //   await db.product.create({
// //     data: {
// //       name,
// //       description,
// //       price,
// //       categoryId,
// //       imageUrl,
// //     },
// //   });
// //   redirect('/admin/products'); // или куда тебе нужно
// // }
// export async function updateProduct(formData: FormData) {
//   const data = z
//     .object({
//       id: z.string(),
//       name: z.string(),
//       description: z.string().optional(),
//       price: z.coerce.number().nonnegative(),
//       imageUrl: z.string().url().optional(),
//       categoryId: z.string().optional(),
//     })
//     .parse({
//       id: formData.get("id"),
//       name: formData.get("name"),
//       description: formData.get("description"),
//       price: formData.get("price"),
//       imageUrl: formData.get("imageUrl"),
//       categoryId: formData.get("categoryId"),
//     });
//   await db.product.update({
//     where: { id: data.id },
//     data: {
//       name: data.name,
//       description: data.description,
//       price: data.price,
//       imageUrl: data.imageUrl,
//       categoryId: data.categoryId,
//     },
//   });
//   revalidatePath(`/products/${data.id}`); 
// }
// export async function deleteProduct(formData: FormData) {
//     const fd = z
//       .object({
//         id: z.string(),
//       })
//       .parse({
//         id: formData.get("id"),
//       });
//     await db.product.delete({ where: { id: fd.id } });
//     redirect("/product");
//   }
// export async function addProductCart(formData: FormData) {
//   const session = await auth();
//   if (!session?.user?.id) {
//     throw new Error("Пользователь не авторизован");
//   }
//   const { productId } = z
//     .object({
//       productId: z.string(),
//     })
//     .parse({
//       productId: formData.get("productId"),
//     });
//   const existingCartItem = await db.cartItem.findFirst({
//     where: {
//       userId: session.user.id,
//       productId,
//     },
//   });
//   if (existingCartItem) {
//     await db.cartItem.update({
//       where: { id: existingCartItem.id },
//       data: { quantity: { increment: 1 } },
//     });
//   } else {
//     await db.cartItem.create({
//       data: {
//         userId: session.user.id,
//         productId,
//         quantity: 1,
//       },
//     });
//   }
//    redirect("/cart");
// }
/* __next_internal_action_entry_do_not_use__ {"40094cc3511c14df934dada66fa7bc341e45a3b94e":"deleteProduct","402a9d19ac85ddfe5e756ab967533a992e15f5f144":"createProduct","4059b511e7dba04158e5765d1d54f92b6110b921af":"updateProduct","406e64bc091614f2aa8ce965c56415d6e5f59e9fdd":"addProductCart"} */ __turbopack_esm__({
    "addProductCart": (()=>addProductCart),
    "createProduct": (()=>createProduct),
    "deleteProduct": (()=>deleteProduct),
    "updateProduct": (()=>updateProduct)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
;
var createProduct = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("402a9d19ac85ddfe5e756ab967533a992e15f5f144", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "createProduct");
var updateProduct = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("4059b511e7dba04158e5765d1d54f92b6110b921af", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "updateProduct");
var deleteProduct = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40094cc3511c14df934dada66fa7bc341e45a3b94e", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "deleteProduct");
var addProductCart = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("406e64bc091614f2aa8ce965c56415d6e5f59e9fdd", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "addProductCart");
}}),
"[project]/src/app/_components/producList/addToCartButton.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// //  "use client";
// // import { addProductCart } from "~/app/api/action/product";
// // export default function ProductPage({ productId }: { productId: string }) {
// //   return (
// //     <form action={addProductCart} className="mt-4 flex justify-center">
// //       <input type="hidden" name="productId" value={productId} />
// //       <button type="submit" className="btn btn-primary py-2 px-6 text-lg">
// //         Добавить в корзину
// //       </button>
// //     </form>
// //   );
// // }
// "use client";
// import { useState } from "react";
// import { addProductCart } from "~/app/api/action/product";
// export default function ProductPage({ productId, stock }: { productId: string, stock: num }) {
//   const [quantity, setQuantity] = useState(1);
//   const increase = () => setQuantity((q) => q + 1);
//   const decrease = () => setQuantity((q) => (q > 1 ? q - 1 : 1));
//   return (
//     <form
//       action={addProductCart}
//       className="mt-6 flex flex-col items-center gap-6 rounded-xl border p-6 shadow-md"
//     >
//       <input type="hidden" name="productId" value={productId} />
//       <input type="hidden" name="quantity" value={quantity} />
//       <div className="flex flex-col items-center gap-2">
//         <span className="text-lg font-medium text-gray-700">Количество</span>
//         <div className="flex items-center rounded-full border bg-white px-4 py-2 shadow-sm">
//           <button
//             type="button"
//             onClick={decrease}
//             className="text-xl font-bold text-gray-600 hover:text-black focus:outline-none"
//           >
//             −
//           </button>
//           <span className="mx-4 w-6 text-center text-lg font-medium">{quantity}</span>
//           <button
//             type="button"
//             onClick={increase}
//             className="text-xl font-bold text-gray-600 hover:text-black focus:outline-none"
//           >
//             +
//           </button>
//         </div>
//       </div>
//       <button
//         type="submit"
//         className="rounded-full bg-blue-600 px-6 py-3 text-lg font-semibold text-white transition hover:bg-blue-700"
//       >
//         Добавить в корзину
//       </button>
//     </form>
//   );
// }
//  "use client";
// import { addProductCart } from "~/app/api/action/product";
// export default function ProductPage({ productId }: { productId: string }) {
//   return (
//     <form action={addProductCart} className="mt-4 flex justify-center">
//       <input type="hidden" name="productId" value={productId} />
//       <button type="submit" className="btn btn-primary py-2 px-6 text-lg">
//         Добавить в корзину
//       </button>
//     </form>
//   );
// }
// "use client";
// import { useState, useTransition } from "react";
// import { addProductCart } from "~/app/api/action/product";
// export default function ProductPage({ productId, stock }: { productId: string, stock: number }) {
//   const [quantity, setQuantity] = useState(1);
//   const [isPending, startTransition] = useTransition();
//   const increase = () => setQuantity((q) => q + 1);
//   const decrease = () => setQuantity((q) => (q > 1 ? q - 1 : 1));
//   const handleChange = (delta: number) => {
//     const newQuantity = quantity + delta;
//     if (newQuantity < 1 || newQuantity > stock) 
//     return newQuantity;
//     // startTransition(() => {
//     //   return 
//     // });
//   };
//   return (
//     <form
//       action={addProductCart}
//       className="mt-6 flex flex-col items-center gap-6 rounded-xl border p-6 shadow-md"
//     >
//       <input type="hidden" name="productId" value={productId} />
//       <input type="hidden" name="quantity" value={quantity} />
//       <div className="flex flex-col items-center gap-2">
//         <span className="text-lg font-medium text-gray-700">Количество</span>
//         <div className="flex items-center rounded-full border bg-white px-4 py-2 shadow-sm">
//           <button
//             type="button"
//             disabled={quantity <= 1 || isPending}
//             onClick={(quantity)=>handleChange(-1)}
//             className="text-xl font-bold text-gray-600 hover:text-black focus:outline-none"
//           >
//             −
//           </button>
//           <span className="mx-4 w-6 text-center text-lg font-medium">{quantity}</span>
//           <button
//             type="button"
//             onClick={(quantity)=>handleChange(1)}
//             disabled={quantity >= stock || isPending}
//             className="text-xl font-bold text-gray-600 hover:text-black focus:outline-none"
//           >
//             +
//           </button>
//         </div>
//       </div>
//       <button
//         type="submit"
//         className="rounded-full bg-blue-600 px-6 py-3 text-lg font-semibold text-white transition hover:bg-blue-700"
//       >
//         Добавить в корзину
//       </button>
//     </form>
//   );
// }
__turbopack_esm__({
    "default": (()=>ProductPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$action$2f$product$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/api/action/product.ts [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
function ProductPage({ productId, stock }) {
    _s();
    const [quantity, setQuantity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const increase = ()=>{
        if (quantity < stock) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startTransition"])(()=>setQuantity((q)=>q + 1));
        }
    };
    const decrease = ()=>{
        if (quantity > 1) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startTransition"])(()=>setQuantity((q)=>q - 1));
        }
    };
    // const increase = () => setQuantity((q) => q + 1 );
    // const decrease = () => setQuantity((q) => (q > 1  ? q - 1 : 1));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        action: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$action$2f$product$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addProductCart"],
        className: "mt-6 flex flex-col items-center gap-6 rounded-xl border p-6 shadow-md",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "hidden",
                name: "productId",
                value: productId
            }, void 0, false, {
                fileName: "[project]/src/app/_components/producList/addToCartButton.tsx",
                lineNumber: 162,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "hidden",
                name: "quantity",
                value: quantity
            }, void 0, false, {
                fileName: "[project]/src/app/_components/producList/addToCartButton.tsx",
                lineNumber: 163,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-lg font-medium text-gray-700",
                        children: "Количество"
                    }, void 0, false, {
                        fileName: "[project]/src/app/_components/producList/addToCartButton.tsx",
                        lineNumber: 166,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center rounded-full border bg-white px-4 py-2 shadow-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: decrease,
                                className: "text-xl font-bold text-gray-600 hover:text-black focus:outline-none",
                                children: "−"
                            }, void 0, false, {
                                fileName: "[project]/src/app/_components/producList/addToCartButton.tsx",
                                lineNumber: 168,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mx-4 w-6 text-center text-lg font-medium",
                                children: quantity
                            }, void 0, false, {
                                fileName: "[project]/src/app/_components/producList/addToCartButton.tsx",
                                lineNumber: 175,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: increase,
                                className: "text-xl font-bold text-gray-600 hover:text-black focus:outline-none",
                                children: "+"
                            }, void 0, false, {
                                fileName: "[project]/src/app/_components/producList/addToCartButton.tsx",
                                lineNumber: 176,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/_components/producList/addToCartButton.tsx",
                        lineNumber: 167,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/_components/producList/addToCartButton.tsx",
                lineNumber: 165,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "submit",
                className: "rounded-full bg-blue-600 px-6 py-3 text-lg font-semibold text-white transition hover:bg-blue-700",
                children: "Добавить в корзину"
            }, void 0, false, {
                fileName: "[project]/src/app/_components/producList/addToCartButton.tsx",
                lineNumber: 186,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/_components/producList/addToCartButton.tsx",
        lineNumber: 158,
        columnNumber: 5
    }, this);
}
_s(ProductPage, "Qe09P1MkhcuxrUT+4C5s8y/Npkg=");
_c = ProductPage;
var _c;
__turbopack_refresh__.register(_c, "ProductPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/_components/rerwies/reviews.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// "use client";
// import { useState } from "react";
// import { api } from "~/trpc/react";
// import {
//   PencilSquareIcon,
//   TrashIcon,
//   FolderPlusIcon,
// } from "@heroicons/react/24/outline";
// import { useSession } from "next-auth/react";
// export default function Reviews({ productId }: { productId: string }) {
//   const { data: session } = useSession();
//   const currentUser = session?.user;
//   const { data: reviews, isLoading, refetch } = api.review.getByProduct.useQuery({ productId });
//   const deleteMutation = api.review.delete.useMutation({ onSuccess: () => refetch() });
//   const createReplyMutation = api.review.create.useMutation({ onSuccess: () => refetch() });
//   const updateMutation = api.review.update.useMutation({ onSuccess: () => refetch() });
//   const [replyingTo, setReplyingTo] = useState<string | null>(null);
//   const [replyText, setReplyText] = useState<string>("");
//   const [editingReviewId, setEditingReviewId] = useState<string | null>(null);
//   const [editText, setEditText] = useState<string>("");
//   if (isLoading) return <div className="text-center py-4">Загрузка отзывов...</div>;
//   if (!reviews || reviews.length === 0) return <div className="text-center py-4">Отзывов пока нет</div>;
//   return (
//     <div className="mt-8 space-y-6">
//       <h2 className="text-2xl font-bold">Отзывы</h2>
//       {reviews.map((review) => (
//         <div key={review.id} className="relative p-4 border rounded-lg">
//           {/* Кнопки редактирования и удаления */}
//           {currentUser?.id === review.userId && (
//             <div className="absolute top-2 right-2 flex gap-2">
//               <button
//                 onClick={() => {
//                   setEditingReviewId(review.id);
//                   setEditText(review.comment || "");
//                 }}
//                 className="text-blue-600 hover:text-blue-800"
//                 title="Редактировать"
//               >
//                 <PencilSquareIcon className="w-5 h-5" />
//               </button>
//               <button
//                 onClick={() => deleteMutation.mutate({ reviewId: review.id })}
//                 className="text-red-500 hover:text-red-700"
//                 title="Удалить"
//               >
//                 <TrashIcon className="w-5 h-5" />
//               </button>
//             </div>
//           )}
//           {/* Автор и рейтинг */}
//           <div className="flex items-center gap-4 mb-2">
//             <div>
//               <div className="font-semibold">
//                 {review.user.name || "Аноним"} {review.user.surname || ""}
//               </div>
//               <div className="text-yellow-500">
//                 {[...Array(5)].map((_, i) => (
//                   <span key={i}>{i < review.rating ? "★" : "☆"}</span>
//                 ))}
//               </div>
//             </div>
//           </div>
//           {/* Комментарий или форма редактирования */}
//           {editingReviewId === review.id ? (
//             <div className="space-y-2">
//               <textarea
//                 className="w-full border p-2 rounded"
//                 value={editText}
//                 onChange={(e) => setEditText(e.target.value)}
//               />
//               <div className="flex gap-2">
//                 <button
//                   onClick={() => {
//                     updateMutation.mutate({
//                       reviewId: review.id,
//                       comment: editText,
//                       rating: review.rating,
//                     });
//                     setEditingReviewId(null);
//                   }}
//                   className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
//                 >
//                   Сохранить
//                 </button>
//                 <button
//                   onClick={() => setEditingReviewId(null)}
//                   className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
//                 >
//                   Отмена
//                 </button>
//               </div>
//             </div>
//           ) : (
//             <p className="text-gray-700">{review.comment}</p>
//           )}
//           <div className="text-sm text-gray-500 mt-2">
//             {new Date(review.createdAt).toLocaleDateString()}
//           </div>
//           {/* Кнопка ответа */}
//           {currentUser?.id !== review.userId && (
//             <div className="mt-2">
//               <button
//                 onClick={() => setReplyingTo(replyingTo === review.id ? null : review.id)}
//                 className="flex items-center text-blue-600 hover:underline gap-1"
//               >
//                 <FolderPlusIcon className="w-4 h-4" />
//                 Ответить
//               </button>
//             </div>
//           )}
//           {/* Форма ответа */}
//           {replyingTo === review.id && (
//             <div className="mt-2 space-y-2">
//               <textarea
//                 className="w-full border p-2 rounded"
//                 value={replyText}
//                 onChange={(e) => setReplyText(e.target.value)}
//               />
//               <div className="flex gap-2">
//                 <button
//                   onClick={() => {
//                     createReplyMutation.mutate({
//                       productId,
//                       comment: replyText,
//                       rating: 0,
//                       parentId: review.id,
//                       userId: currentUser?.id || "",
//                     });
//                     setReplyText("");
//                     setReplyingTo(null);
//                   }}
//                   className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
//                 >
//                   Ответить
//                 </button>
//                 <button
//                   onClick={() => setReplyingTo(null)}
//                   className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
//                 >
//                   Отмена
//                 </button>
//               </div>
//             </div>
//           )}
//           {/* Ответы */}
//           {review.replies?.length > 0 && (
//             <div className="mt-4 ml-6 border-l-2 border-gray-200 space-y-4 pl-4">
//               {review.replies.map((reply) => (
//                 <div key={reply.id} className="text-sm text-left">
//                   <div className="font-semibold">
//                     {reply.user.name || "Аноним"} {reply.user.surname || ""}
//                   </div>
//                   <p className="text-gray-700">{reply.comment}</p>
//                   <div className="text-xs text-gray-500 mt-1">
//                     {new Date(reply.createdAt).toLocaleDateString()}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }
// "use client";
// import { useState } from "react";
// import { api } from "~/trpc/react";
// import {
//   PencilSquareIcon,
//   TrashIcon,
//   FolderPlusIcon,
// } from "@heroicons/react/24/outline";
// import { useSession } from "next-auth/react";
// import { db } from "~/server/db";
// import { auth } from "~/server/auth";
// export default async function Reviews({ productId, currentUser }: { productId: string, currentUser: Promise<{userId:string, name:string, surname:string, image:string }}) {
//   const currentUser = session?.user
// const { data: reviews, isLoading, refetch } = api.review.getByProduct.useQuery({ productId });
// const deleteMutation = api.review.delete.useMutation({ onSuccess: () => refetch() });
// const createReplyMutation = api.review.create.useMutation({ onSuccess: () => refetch() });
// const updateMutation = api.review.update.useMutation({ onSuccess: () => refetch() });
// const [replyingTo, setReplyingTo] = useState<string | null>(null);
// const [replyText, setReplyText] = useState<string>("");
// const [editingReviewId, setEditingReviewId] = useState<string | null>(null);
// const [editText, setEditText] = useState<string>("");
// if (isLoading) return <div className="text-center py-4">Загрузка отзывов...</div>;
// if (!reviews || reviews.length === 0) return <div className="text-center py-4">Отзывов пока нет</div>;
// return (
//   <div className="mt-8 space-y-6">
//     <h2 className="text-2xl font-bold">Отзывы</h2>
//     {reviews.map((review) => (
//       <div key={review.id} className="relative p-4 border rounded-lg">
//         {/* Кнопки редактирования и удаления */}
//         {currentUser?.id === review.userId && (
//           <div className="absolute top-2 right-2 flex gap-2">
//             <button
//               onClick={() => {
//                 setEditingReviewId(review.id);
//                 setEditText(review.comment ?? "");
//               }}
//               className="text-blue-600 hover:text-blue-800"
//               title="Редактировать"
//             >
//               <PencilSquareIcon className="w-5 h-5" />
//             </button>
//             <button
//               onClick={() => deleteMutation.mutate({ reviewId: review.id })}
//               className="text-red-500 hover:text-red-700"
//               title="Удалить"
//             >
//               <TrashIcon className="w-5 h-5" />
//             </button>
//           </div>
//         )}
//         {/* Автор и рейтинг */}
//         <div className="flex items-center gap-4 mb-2">
//           <div>
//             <div className="font-semibold">
//               {review.user.name || "Аноним"} {review.user.surname || ""}
//             </div>
//             <div className="text-yellow-500">
//               {[...Array(5)].map((_, i) => (
//                 <span key={i}>{i < review.rating ? "★" : "☆"}</span>
//               ))}
//             </div>
//           </div>
//         </div>
//         {/* Комментарий или форма редактирования */}
//         {editingReviewId === review.id ? (
//           <div className="space-y-2">
//             <textarea
//               className="w-full border p-2 rounded"
//               value={editText}
//               onChange={(e) => setEditText(e.target.value)}
//             />
//             <div className="flex gap-2">
//               <button
//                 onClick={() => {
//                   updateMutation.mutate({
//                     reviewId: review.id,
//                     comment: editText,
//                     rating: review.rating,
//                   });
//                   setEditingReviewId(null);
//                 }}
//                 className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
//               >
//                 Сохранить
//               </button>
//               <button
//                 onClick={() => setEditingReviewId(null)}
//                 className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
//               >
//                 Отмена
//               </button>
//             </div>
//           </div>
//         ) : (
//           <p className="text-gray-700">{review.comment ?? ""}</p>
//         )}
//         <div className="text-sm text-gray-500 mt-2">
//           {new Date(review.createdAt).toLocaleDateString()}
//         </div>
//         {/* Кнопка ответа */}
//         {/* {currentUser?.id !== review.userId && ( */}
//           <div className="mt-2">
//             <button
//               onClick={() => setReplyingTo(replyingTo === review.id ? null : review.id)}
//               className="flex items-center text-blue-600 hover:underline gap-1"
//             >
//               <FolderPlusIcon className="w-4 h-4" />
//               Ответить
//             </button>
//           </div>
//         {/* )} */}
//         {/* Форма ответа */}
//         {replyingTo === review.id && (
//           <div className="mt-2 space-y-2">
//             <textarea
//               className="w-full border p-2 rounded"
//               value={replyText}
//               onChange={(e) => setReplyText(e.target.value)}
//             />
//             <div className="flex gap-2">
//               <button
//                 onClick={() => {
//                   createReplyMutation.mutate({
//                     productId,
//                     comment: replyText,
//                     rating: 0,
//                     parentId: review.id,
//                     userId: currentUser?.id || "",
//                   });
//                   setReplyText("");
//                   setReplyingTo(null);
//                 }}
//                 className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
//               >
//                 Ответить
//               </button>
//               <button
//                 onClick={() => setReplyingTo(null)}
//                 className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
//               >
//                 Отмена
//               </button>
//             </div>
//           </div> 
//         )}
//         {/* Ответы */}
//         {Array.isArray(review.replies) && review.replies.length > 0 && (
//           <div className="mt-4 ml-6 border-l-2 border-gray-200 space-y-4 pl-4">
//             {review.replies.map((reply) => (
//               <div key={reply.id} className="text-sm text-left">
//                 <div className="font-semibold">
//                   {reply.user.name || "Аноним"} {reply.user.surname || ""}
//                 </div>
//                 <p className="text-gray-700">{reply.comment ?? ""}</p>
//                 <div className="text-xs text-gray-500 mt-1">
//                   {new Date(reply.createdAt).toLocaleDateString()}
//                 </div>
//               </div>
//             ))}
//                       {currentUser?.id === review.userId &&  (
//           <div className="">
//             <button
//               onClick={() => {
//                 setEditingReviewId(review.parentId);
//                 setEditText(review.comment ?? "");
//               }}
//               className="text-blue-600 hover:text-blue-800"
//               title="Редактировать"
//             >
//               <PencilSquareIcon className="w-5 h-5" />
//             </button>
//             <button
//               onClick={() => deleteMutation.mutate({ reviewId: review.id })}
//               className="text-red-500 hover:text-red-700"
//               title="Удалить"
//             >
//               <TrashIcon className="w-5 h-5" />
//             </button>
//           </div>
//         )}
//           </div>
//         )}
//       </div>
//     ))}
//   </div>
// );
// }
__turbopack_esm__({
    "default": (()=>Reviews)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$trpc$2f$react$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/trpc/react.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$heroicons$2b$react$40$2$2e$2$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$PencilSquareIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PencilSquareIcon$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@heroicons+react@2.2.0_react@18.3.1/node_modules/@heroicons/react/24/outline/esm/PencilSquareIcon.js [app-client] (ecmascript) <export default as PencilSquareIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$heroicons$2b$react$40$2$2e$2$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$TrashIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrashIcon$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@heroicons+react@2.2.0_react@18.3.1/node_modules/@heroicons/react/24/outline/esm/TrashIcon.js [app-client] (ecmascript) <export default as TrashIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$heroicons$2b$react$40$2$2e$2$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$FolderPlusIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderPlusIcon$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@heroicons+react@2.2.0_react@18.3.1/node_modules/@heroicons/react/24/outline/esm/FolderPlusIcon.js [app-client] (ecmascript) <export default as FolderPlusIcon>");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
function Reviews({ productId, currentUser, initialReviews }) {
    _s();
    const { data: reviews = initialReviews, isLoading, refetch } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$trpc$2f$react$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].review.getByProduct.useQuery({
        productId
    }, {
        initialData: initialReviews
    });
    const deleteMutation = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$trpc$2f$react$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].review.delete.useMutation({
        onSuccess: {
            "Reviews.useMutation[deleteMutation]": ()=>refetch()
        }["Reviews.useMutation[deleteMutation]"]
    });
    const createReplyMutation = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$trpc$2f$react$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].review.create.useMutation({
        onSuccess: {
            "Reviews.useMutation[createReplyMutation]": ()=>refetch()
        }["Reviews.useMutation[createReplyMutation]"]
    });
    const updateMutation = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$trpc$2f$react$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].review.update.useMutation({
        onSuccess: {
            "Reviews.useMutation[updateMutation]": ()=>refetch()
        }["Reviews.useMutation[updateMutation]"]
    });
    const [replyingTo, setReplyingTo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [replyText, setReplyText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [editingReviewId, setEditingReviewId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editText, setEditText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    if (isLoading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "text-center py-4",
        children: "Загрузка отзывов..."
    }, void 0, false, {
        fileName: "[project]/src/app/_components/rerwies/reviews.tsx",
        lineNumber: 451,
        columnNumber: 25
    }, this);
    // if (!reviews || reviews.length === 0) return <div className="text-center py-4">Отзывов пока нет</div>;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-8 space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-bold",
                children: "Отзывы"
            }, void 0, false, {
                fileName: "[project]/src/app/_components/rerwies/reviews.tsx",
                lineNumber: 456,
                columnNumber: 7
            }, this),
            reviews.map((review)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative p-4 border rounded-lg",
                    children: [
                        currentUser?.id === review.userId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-2 right-2 flex gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setEditingReviewId(review.id);
                                        setEditText(review.comment ?? "");
                                    },
                                    className: "text-blue-600 hover:text-blue-800",
                                    title: "Редактировать",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$heroicons$2b$react$40$2$2e$2$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$PencilSquareIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PencilSquareIcon$3e$__["PencilSquareIcon"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/_components/rerwies/reviews.tsx",
                                        lineNumber: 470,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/_components/rerwies/reviews.tsx",
                                    lineNumber: 462,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>deleteMutation.mutate({
                                            reviewId: review.id
                                        }),
                                    className: "text-red-500 hover:text-red-700",
                                    title: "Удалить",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$heroicons$2b$react$40$2$2e$2$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$TrashIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrashIcon$3e$__["TrashIcon"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/_components/rerwies/reviews.tsx",
                                        lineNumber: 477,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/_components/rerwies/reviews.tsx",
                                    lineNumber: 472,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/_components/rerwies/reviews.tsx",
                            lineNumber: 461,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4 mb-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-semibold",
                                        children: [
                                            review.user.name || "Аноним",
                                            " ",
                                            review.user.surname || ""
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/_components/rerwies/reviews.tsx",
                                        lineNumber: 485,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-yellow-500",
                                        children: [
                                            ...Array(5)
                                        ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: i < review.rating ? "★" : "☆"
                                            }, i, false, {
                                                fileName: "[project]/src/app/_components/rerwies/reviews.tsx",
                                                lineNumber: 491,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/_components/rerwies/reviews.tsx",
                                        lineNumber: 489,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/_components/rerwies/reviews.tsx",
                                lineNumber: 484,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/_components/rerwies/reviews.tsx",
                            lineNumber: 483,
                            columnNumber: 11
                        }, this),
                        editingReviewId === review.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    className: "w-full border p-2 rounded",
                                    value: editText,
                                    onChange: (e)=>setEditText(e.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/_components/rerwies/reviews.tsx",
                                    lineNumber: 500,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                updateMutation.mutate({
                                                    reviewId: review.id,
                                                    comment: editText,
                                                    rating: review.rating
                                                });
                                                setEditingReviewId(null);
                                            },
                                            className: "px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700",
                                            children: "Сохранить"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/_components/rerwies/reviews.tsx",
                                            lineNumber: 506,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setEditingReviewId(null),
                                            className: "px-3 py-1 bg-gray-300 rounded hover:bg-gray-400",
                                            children: "Отмена"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/_components/rerwies/reviews.tsx",
                                            lineNumber: 519,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/_components/rerwies/reviews.tsx",
                                    lineNumber: 505,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/_components/rerwies/reviews.tsx",
                            lineNumber: 499,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-700",
                            children: review.comment ?? ""
                        }, void 0, false, {
                            fileName: "[project]/src/app/_components/rerwies/reviews.tsx",
                            lineNumber: 528,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm text-gray-500 mt-2",
                            children: new Date(review.createdAt).toLocaleDateString()
                        }, void 0, false, {
                            fileName: "[project]/src/app/_components/rerwies/reviews.tsx",
                            lineNumber: 531,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setReplyingTo(replyingTo === review.id ? null : review.id),
                                className: "flex items-center text-blue-600 hover:underline gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$heroicons$2b$react$40$2$2e$2$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$FolderPlusIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderPlusIcon$3e$__["FolderPlusIcon"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/_components/rerwies/reviews.tsx",
                                        lineNumber: 542,
                                        columnNumber: 17
                                    }, this),
                                    "Ответить"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/_components/rerwies/reviews.tsx",
                                lineNumber: 538,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/_components/rerwies/reviews.tsx",
                            lineNumber: 537,
                            columnNumber: 13
                        }, this),
                        replyingTo === review.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-2 space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    className: "w-full border p-2 rounded",
                                    value: replyText,
                                    onChange: (e)=>setReplyText(e.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/_components/rerwies/reviews.tsx",
                                    lineNumber: 551,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                createReplyMutation.mutate({
                                                    productId,
                                                    comment: replyText,
                                                    rating: 0,
                                                    parentId: review.id,
                                                    userId: currentUser?.id || ""
                                                });
                                                setReplyText("");
                                                setReplyingTo(null);
                                            },
                                            className: "px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700",
                                            children: "Ответить"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/_components/rerwies/reviews.tsx",
                                            lineNumber: 557,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setReplyingTo(null),
                                            className: "px-3 py-1 bg-gray-300 rounded hover:bg-gray-400",
                                            children: "Отмена"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/_components/rerwies/reviews.tsx",
                                            lineNumber: 573,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/_components/rerwies/reviews.tsx",
                                    lineNumber: 556,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/_components/rerwies/reviews.tsx",
                            lineNumber: 550,
                            columnNumber: 13
                        }, this),
                        Array.isArray(review.replies) && review.replies.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 ml-6 border-l-2 border-gray-200 space-y-4 pl-4",
                            children: review.replies.map((reply)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm text-left relative p-2 border rounded-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-semibold",
                                            children: [
                                                reply.user.name || "Аноним",
                                                " ",
                                                reply.user.surname || ""
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/_components/rerwies/reviews.tsx",
                                            lineNumber: 589,
                                            columnNumber: 9
                                        }, this),
                                        editingReviewId === reply.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2 mt-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    className: "w-full border p-2 rounded",
                                                    value: editText,
                                                    onChange: (e)=>setEditText(e.target.value)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/_components/rerwies/reviews.tsx",
                                                    lineNumber: 596,
                                                    columnNumber: 13
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>{
                                                                updateMutation.mutate({
                                                                    reviewId: reply.id,
                                                                    comment: editText,
                                                                    rating: 0
                                                                });
                                                                setEditingReviewId(null);
                                                            },
                                                            className: "px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700",
                                                            children: "Сохранить"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/_components/rerwies/reviews.tsx",
                                                            lineNumber: 602,
                                                            columnNumber: 15
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setEditingReviewId(null),
                                                            className: "px-3 py-1 bg-gray-300 rounded hover:bg-gray-400",
                                                            children: "Отмена"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/_components/rerwies/reviews.tsx",
                                                            lineNumber: 615,
                                                            columnNumber: 15
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/_components/rerwies/reviews.tsx",
                                                    lineNumber: 601,
                                                    columnNumber: 13
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/_components/rerwies/reviews.tsx",
                                            lineNumber: 595,
                                            columnNumber: 11
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-700 mt-1",
                                            children: reply.comment ?? ""
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/_components/rerwies/reviews.tsx",
                                            lineNumber: 624,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-gray-500 mt-1",
                                            children: new Date(reply.createdAt).toLocaleDateString()
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/_components/rerwies/reviews.tsx",
                                            lineNumber: 627,
                                            columnNumber: 9
                                        }, this),
                                        currentUser?.id === reply.userId && editingReviewId !== reply.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-2 right-2 flex gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        setEditingReviewId(reply.id);
                                                        setEditText(reply.comment ?? "");
                                                    },
                                                    className: "text-blue-600 hover:text-blue-800",
                                                    title: "Редактировать",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$heroicons$2b$react$40$2$2e$2$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$PencilSquareIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PencilSquareIcon$3e$__["PencilSquareIcon"], {
                                                        className: "w-5 h-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/_components/rerwies/reviews.tsx",
                                                        lineNumber: 642,
                                                        columnNumber: 15
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/_components/rerwies/reviews.tsx",
                                                    lineNumber: 634,
                                                    columnNumber: 13
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>deleteMutation.mutate({
                                                            reviewId: reply.id
                                                        }),
                                                    className: "text-red-500 hover:text-red-700",
                                                    title: "Удалить",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$heroicons$2b$react$40$2$2e$2$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$TrashIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrashIcon$3e$__["TrashIcon"], {
                                                        className: "w-5 h-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/_components/rerwies/reviews.tsx",
                                                        lineNumber: 649,
                                                        columnNumber: 15
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/_components/rerwies/reviews.tsx",
                                                    lineNumber: 644,
                                                    columnNumber: 13
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/_components/rerwies/reviews.tsx",
                                            lineNumber: 633,
                                            columnNumber: 11
                                        }, this)
                                    ]
                                }, reply.id, true, {
                                    fileName: "[project]/src/app/_components/rerwies/reviews.tsx",
                                    lineNumber: 588,
                                    columnNumber: 7
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/_components/rerwies/reviews.tsx",
                            lineNumber: 586,
                            columnNumber: 3
                        }, this)
                    ]
                }, review.id, true, {
                    fileName: "[project]/src/app/_components/rerwies/reviews.tsx",
                    lineNumber: 458,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/_components/rerwies/reviews.tsx",
        lineNumber: 455,
        columnNumber: 5
    }, this);
} // "use client";
 // import { useState } from "react";
 // import { api } from "~/trpc/react";
 // import {
 //   PencilSquareIcon,
 //   TrashIcon,
 //   FolderPlusIcon,
 // } from "@heroicons/react/24/outline";
 // import { useSession } from "next-auth/react";
 // export default function Reviews({ productId }: { productId: string }) {
 //   const { data: session } = useSession();
 //   const currentUser = session?.user;
 //   const { data: reviews, isLoading, refetch } = api.review.getByProduct.useQuery({ productId },
 //     {
 //       refetchOnWindowFocus: true,
 //     }
 //     );
 //   const deleteMutation = api.review.delete.useMutation({ onSuccess: () => refetch() });
 //   const createReplyMutation = api.review.create.useMutation({ onSuccess: () => refetch() });
 //   const updateMutation = api.review.update.useMutation({ onSuccess: () => refetch() });
 //   const [replyingTo, setReplyingTo] = useState<string | null>(null);
 //   const [replyText, setReplyText] = useState<string>("");
 //   const [editingReviewId, setEditingReviewId] = useState<string | null>(null);
 //   const [editText, setEditText] = useState<string>("");
 //   const [expandedReplies, setExpandedReplies] = useState<Record<string, boolean>>({});
 //   const [editingReplyId, setEditingReplyId] = useState<string | null>(null);
 // const [editReplyText, setEditReplyText] = useState<string>("");
 // const [visibleReplies, setVisibleReplies] = useState<Record<string, boolean>>({});
 // const sortedReviews = [...(reviews ?? [])].sort(
 //   (a, b) => b.createdAt.getTime() - a.createdAt.getTime() 
 // );
 // const sortedReviews2 = [...(reviews ?? [])].sort(
 //   (a, b) =>   a.createdAt.getTime() - b.createdAt.getTime()
 // );
 //   if (isLoading) return <div className="text-center py-4">Загрузка отзывов...</div>;
 //   if (!reviews || reviews.length === 0) return <div className="text-center py-4">Отзывов пока нет</div>;
 // return ( 
 //   <div className="mt-8 space-y-6">
 //     <h2 className="text-2xl font-bold">Отзывы</h2>
 //     {sortedReviews.map((review) => (
 //       <div key={review.id} className="relative p-4 border rounded-lg">
 //         {/* Кнопки редактирования и удаления */}
 //         {currentUser?.id === review.userId && (
 //           <div className="absolute top-2 right-2 flex gap-2">
 //             <button
 //               onClick={() => {
 //                 setEditingReviewId(review.id);
 //                 setEditText(review.comment ?? "");
 //               }}
 //               className="text-blue-600 hover:text-blue-800"
 //               title="Редактировать"
 //             >
 //               <PencilSquareIcon className="w-5 h-5" />
 //             </button>
 //             <button
 //               onClick={() => deleteMutation.mutate({ reviewId: review.id })}
 //               className="text-red-500 hover:text-red-700"
 //               title="Удалить"
 //             >
 //               <TrashIcon className="w-5 h-5" />
 //             </button>
 //           </div>
 //         )}
 //         {/* Автор и рейтинг */}
 //         <div className="flex items-center gap-4 mb-2">
 //           <div>
 //             <div className="font-semibold">
 //               {review.user.name || "Аноним"} {review.user.surname || ""}
 //             </div>
 //             <div className="text-yellow-500">
 //               {[...Array(5)].map((_, i) => (
 //                 <span key={i}>{i < review.rating ? "★" : "☆"}</span>
 //               ))}
 //             </div>
 //           </div>
 //         </div>
 //         {/* Комментарий или форма редактирования */}
 //         {editingReviewId === review.id ? (
 //           <div className="space-y-2">
 //             <textarea
 //               className="w-full border p-2 rounded"
 //               value={editText}
 //               onChange={(e) => setEditText(e.target.value)}
 //             />
 //             <div className="flex gap-2">
 //               <button
 //                 onClick={() => {
 //                   updateMutation.mutate({
 //                     reviewId: review.id,
 //                     comment: editText,
 //                     rating: review.rating,
 //                   });
 //                   setEditingReviewId(null);
 //                 }}
 //                 className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
 //               >
 //                 Сохранить
 //               </button>
 //               <button
 //                 onClick={() => setEditingReviewId(null)}
 //                 className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
 //               >
 //                 Отмена
 //               </button>
 //             </div>
 //           </div>
 //         ) : (
 //           <p className="text-gray-700">{review.comment ?? ""}</p>
 //         )}
 //         <div className="text-sm text-gray-500 mt-2">
 //           {review.createdAt.toLocaleString()}
 //         </div>
 //         {/* Кнопка ответа */}
 //         <div className="mt-2">
 //           <button
 //             onClick={() => setReplyingTo(replyingTo === review.id ? null : review.id)}
 //             className="flex items-center text-blue-600 hover:underline gap-1"
 //           >
 //             <FolderPlusIcon className="w-4 h-4" />
 //             Ответить
 //           </button>
 //         </div>
 //         {/* Форма ответа */}
 //         {replyingTo === review.id && (
 //           <div className="mt-2 space-y-2">
 //             <textarea
 //               className="w-full border p-2 rounded"
 //               value={replyText}
 //               onChange={(e) => setReplyText(e.target.value)}
 //             />
 //             <div className="flex gap-2">
 //               <button
 //                 onClick={() => {
 //                   createReplyMutation.mutate({
 //                     productId,
 //                     comment: replyText,
 //                     rating: 0,
 //                     parentId: review.id,
 //                   });
 //                   setReplyText("");
 //                   setReplyingTo(null);
 //                 }}
 //                 className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
 //               >
 //                 Ответить
 //               </button>
 //               <button
 //                 onClick={() => setReplyingTo(null)}
 //                 className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
 //               >
 //                 Отмена
 //               </button>
 //             </div>
 //           </div> 
 //         )}
 //         {/* Ответы */}
 //         {Array.isArray(review.replies) && review.replies.length > 0 && (
 //           <div className="mt-4 ml-6 space-y-2">
 //             <button
 //               onClick={() =>
 //                 setVisibleReplies((prev) => ({
 //                   ...prev,
 //                   [review.id]: !prev[review.id],
 //                 }))
 //               }
 //               className="text-sm text-blue-600 hover:underline"
 //             >
 //               {visibleReplies[review.id]
 //                 ? "Скрыть ответы"
 //                 : `Показать ответы (${review.replies.length})`}
 //             </button>
 //             {visibleReplies[review.id] && (
 //               <div className="border-l-2 border-gray-200 space-y-4 pl-4">
 //                 {[...review.replies]
 //                   .sort(
 //                     (a, b) =>
 //                       new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
 //                   )
 //                   .map((reply) => (
 //                     <div
 //                       key={reply.id}
 //                       className="text-sm text-left relative p-2 border rounded"
 //                     >
 //                       {/* Автор ответа */}
 //                       <div className="font-semibold">
 //                         {reply.user.name || "Аноним"} {reply.user.surname || ""}
 //                       </div>
 //                       {/* Комментарий или редактирование */}
 //                       {editingReplyId === reply.id ? (
 //                         <>
 //                           <textarea
 //                             className="w-full border p-2 rounded mt-1"
 //                             value={editReplyText}
 //                             onChange={(e) => setEditReplyText(e.target.value)}
 //                           />
 //                           <div className="flex gap-2 mt-2">
 //                             <button
 //                               onClick={() => {
 //                                 updateMutation.mutate({
 //                                   reviewId: reply.id,
 //                                   comment: editReplyText,
 //                                   rating: reply.rating,
 //                                 });
 //                                 setEditingReplyId(null);
 //                               }}
 //                               className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
 //                             >
 //                               Сохранить
 //                             </button>
 //                             <button
 //                               onClick={() => setEditingReplyId(null)}
 //                               className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
 //                             >
 //                               Отмена
 //                             </button>
 //                           </div>
 //                         </>
 //                       ) : (
 //                         <>
 //                           <p className="text-gray-700">{reply.comment ?? ""}</p>
 //                           <div className="text-xs text-gray-500 mt-1">
 //                             {reply.createdAt.toLocaleString()}
 //                           </div>
 //                         </>
 //                       )}
 //                       {/* Кнопки редактирования и удаления */}
 //                       {currentUser?.id === reply.userId &&
 //                         editingReplyId !== reply.id && (
 //                           <div className="absolute top-1 right-1 flex gap-2">
 //                             <button
 //                               onClick={() => {
 //                                 setEditingReplyId(reply.id);
 //                                 setEditReplyText(reply.comment ?? "");
 //                               }}
 //                               className="text-blue-600 hover:text-blue-800"
 //                               title="Редактировать"
 //                             >
 //                               <PencilSquareIcon className="w-4 h-4" />
 //                             </button>
 //                             <button
 //                               onClick={() =>
 //                                 deleteMutation.mutate({ reviewId: reply.id })
 //                               }
 //                               className="text-red-500 hover:text-red-700"
 //                               title="Удалить"
 //                             >
 //                               <TrashIcon className="w-4 h-4" />
 //                             </button>
 //                           </div>
 //                         )}
 //                     </div>
 //                   ))}
 //               </div>
 //             )}
 //           </div>
 //         )}
 //       </div>
 //     ))}
 //   </div>
 // );
 //                               }
_s(Reviews, "SheaPS+a9FCrUE34iJXaBCpnnQE=");
_c = Reviews;
var _c;
__turbopack_refresh__.register(_c, "Reviews");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/_components/producList/confirmDialog.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>ConfirmDialog)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
function ConfirmDialog({ message, onConfirm, onCancel }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-lg font-medium mb-6",
                    children: message
                }, void 0, false, {
                    fileName: "[project]/src/app/_components/producList/confirmDialog.tsx",
                    lineNumber: 15,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-center gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onConfirm,
                            className: "bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700",
                            children: "Да"
                        }, void 0, false, {
                            fileName: "[project]/src/app/_components/producList/confirmDialog.tsx",
                            lineNumber: 17,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onCancel,
                            className: "bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600",
                            children: "Нет"
                        }, void 0, false, {
                            fileName: "[project]/src/app/_components/producList/confirmDialog.tsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/_components/producList/confirmDialog.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/_components/producList/confirmDialog.tsx",
            lineNumber: 14,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/_components/producList/confirmDialog.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = ConfirmDialog;
var _c;
__turbopack_refresh__.register(_c, "ConfirmDialog");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/_components/producList/editProductForm.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// 'use client';
// import { useState } from "react";
// import ConfirmDialog from "./confirmDialog";
// import { updateProduct } from "~/app/api/action/product";
// type Category = {
//   id: string;
//   name: string;
// };
// type Product = {
//   id: string;
//   name: string;
//   description: string;
//   price: number;
//   imageUrl: string;
//   categoryId: string;
// };
// export default function EditProductForm({
//   product,
//   categories,
// }: {
//   product: Product;
//   categories: Category[];
// }) {
//   const [name, setName] = useState(product.name);
//   const [description, setDescription] = useState(product.description);
//   const [price, setPrice] = useState(product.price);
//   const [imageUrl, setImageUrl] = useState(product.imageUrl);
//   const [categoryId, setCategoryId] = useState(product.categoryId);
//   const [showConfirm, setShowConfirm] = useState(false);
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setShowConfirm(true);
//   };
//   const confirmSave = async () => {
//     setShowConfirm(false);
//     const formData = new FormData();
//     formData.append("id", product.id);
//     formData.append("name", name);
//     formData.append("description", description);
//     formData.append("price", price.toString());
//     formData.append("imageUrl", imageUrl);
//     formData.append("categoryId", categoryId);
//     await updateProduct(formData);
//   };
//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="bg-white p-6 rounded shadow-md max-w-2xl mx-auto mb-8 space-y-4"
//     >
//       <h2 className="text-2xl font-bold mb-4">Редактировать товар</h2>
//       <div>
//         <label htmlFor="name" className="label font-semibold">Название товара</label>
//         <input
//           id="name"
//           className="w-full p-2 border rounded"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//       </div>
//       <div>
//         <label htmlFor="description" className="label font-semibold">Описание</label>
//         <textarea
//           id="description"
//           className="w-full p-2 border rounded"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//         />
//       </div>
//       <div>
//         <label htmlFor="price" className="label font-semibold">Цена</label>
//         <input
//           id="price"
//           type="number"
//           className="w-full p-2 border rounded"
//           value={price}
//           onChange={(e) => setPrice(parseFloat(e.target.value))}
//         />
//       </div>
//       <div>
//         <label htmlFor="imageUrl" className="label font-semibold">URL изображения</label>
//         <input
//           id="imageUrl"
//           className="w-full p-2 border rounded"
//           value={imageUrl}
//           onChange={(e) => setImageUrl(e.target.value)}
//         />
//       </div>
//       <div>
//         <label htmlFor="categoryId" className="label font-semibold">Категория</label>
//         <select
//           id="categoryId"
//           value={categoryId}
//           className="w-full p-2 border rounded"
//           onChange={(e) => setCategoryId(e.target.value)}
//         >
//           <option value="">Выберите категорию</option>
//           {categories.map((cat) => (
//             <option key={cat.id} value={cat.id}>{cat.name}</option>
//           ))}
//         </select>
//       </div>
//       <button
//         type="submit"
//         className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
//       >
//         Сохранить изменения
//       </button>
//       {showConfirm && (
//         <ConfirmDialog
//           message="Вы уверены, что хотите сохранить изменения?"
//           onConfirm={confirmSave}
//           onCancel={() => setShowConfirm(false)}
//         />
//       )}
//     </form>
//   );
// }
__turbopack_esm__({
    "default": (()=>EditProductForm)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_components$2f$producList$2f$confirmDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/_components/producList/confirmDialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$action$2f$product$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/api/action/product.ts [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
function EditProductForm({ product, categories, availableImages }) {
    _s();
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(product.name);
    const [description, setDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(product.description);
    const [price, setPrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(product.price);
    const [imageUrl, setImageUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(product.imageUrl);
    const [categoryId, setCategoryId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(product.categoryId);
    const [showConfirm, setShowConfirm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSubmit = (e)=>{
        e.preventDefault();
        setShowConfirm(true);
    };
    const confirmSave = async ()=>{
        setShowConfirm(false);
        const formData = new FormData();
        formData.append("id", product.id);
        formData.append("name", name);
        formData.append("description", description);
        formData.append("price", price.toString());
        formData.append("imageUrl", imageUrl);
        formData.append("categoryId", categoryId);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$action$2f$product$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateProduct"])(formData);
    };
    const [selectedImages, setSelectedImages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const toggleImage = (url)=>{
        setSelectedImages((prev)=>prev.includes(url) ? prev.filter((u)=>u !== url) : [
                ...prev,
                url
            ]);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: "bg-white p-6 rounded shadow-md max-w-2xl mx-auto mb-8 space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-bold mb-4",
                children: "Редактировать товар"
            }, void 0, false, {
                fileName: "[project]/src/app/_components/producList/editProductForm.tsx",
                lineNumber: 208,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "name",
                        className: "label font-semibold",
                        children: "Название товара"
                    }, void 0, false, {
                        fileName: "[project]/src/app/_components/producList/editProductForm.tsx",
                        lineNumber: 211,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "name",
                        className: "w-full p-2 border rounded",
                        value: name,
                        onChange: (e)=>setName(e.target.value)
                    }, void 0, false, {
                        fileName: "[project]/src/app/_components/producList/editProductForm.tsx",
                        lineNumber: 212,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/_components/producList/editProductForm.tsx",
                lineNumber: 210,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "description",
                        className: "label font-semibold",
                        children: "Описание"
                    }, void 0, false, {
                        fileName: "[project]/src/app/_components/producList/editProductForm.tsx",
                        lineNumber: 221,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        id: "description",
                        className: "w-full p-2 border rounded",
                        value: description,
                        onChange: (e)=>setDescription(e.target.value)
                    }, void 0, false, {
                        fileName: "[project]/src/app/_components/producList/editProductForm.tsx",
                        lineNumber: 222,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/_components/producList/editProductForm.tsx",
                lineNumber: 220,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "price",
                        className: "label font-semibold",
                        children: "Цена"
                    }, void 0, false, {
                        fileName: "[project]/src/app/_components/producList/editProductForm.tsx",
                        lineNumber: 231,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "price",
                        type: "number",
                        className: "w-full p-2 border rounded",
                        value: price,
                        onChange: (e)=>setPrice(parseFloat(e.target.value))
                    }, void 0, false, {
                        fileName: "[project]/src/app/_components/producList/editProductForm.tsx",
                        lineNumber: 232,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/_components/producList/editProductForm.tsx",
                lineNumber: 230,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "label font-semibold",
                        children: "Выберите изображения"
                    }, void 0, false, {
                        fileName: "[project]/src/app/_components/producList/editProductForm.tsx",
                        lineNumber: 242,
                        columnNumber: 15
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-3 gap-2 mt-2",
                        children: availableImages.map((img)=>{
                            const isSelected = selectedImages.includes(img.url);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `cursor-pointer border-2 rounded-md ${isSelected ? 'border-purple-600' : 'border-gray-300'}`,
                                onClick: ()=>toggleImage(img.url),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: img.url,
                                    alt: img.name,
                                    className: "w-full h-24 object-cover rounded-md"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/_components/producList/editProductForm.tsx",
                                    lineNumber: 252,
                                    columnNumber: 23
                                }, this)
                            }, img.url, false, {
                                fileName: "[project]/src/app/_components/producList/editProductForm.tsx",
                                lineNumber: 247,
                                columnNumber: 21
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/app/_components/producList/editProductForm.tsx",
                        lineNumber: 243,
                        columnNumber: 15
                    }, this),
                    selectedImages.map((url, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "hidden",
                            name: "imageUrls",
                            value: url
                        }, idx, false, {
                            fileName: "[project]/src/app/_components/producList/editProductForm.tsx",
                            lineNumber: 260,
                            columnNumber: 17
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/_components/producList/editProductForm.tsx",
                lineNumber: 241,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "categoryId",
                        className: "label font-semibold",
                        children: "Категория"
                    }, void 0, false, {
                        fileName: "[project]/src/app/_components/producList/editProductForm.tsx",
                        lineNumber: 265,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        id: "categoryId",
                        value: categoryId,
                        className: "w-full p-2 border rounded",
                        onChange: (e)=>setCategoryId(e.target.value),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "",
                                children: "Выберите категорию"
                            }, void 0, false, {
                                fileName: "[project]/src/app/_components/producList/editProductForm.tsx",
                                lineNumber: 272,
                                columnNumber: 11
                            }, this),
                            categories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: cat.id,
                                    children: cat.name
                                }, cat.id, false, {
                                    fileName: "[project]/src/app/_components/producList/editProductForm.tsx",
                                    lineNumber: 274,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/_components/producList/editProductForm.tsx",
                        lineNumber: 266,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/_components/producList/editProductForm.tsx",
                lineNumber: 264,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "submit",
                className: "bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors",
                children: "Сохранить изменения"
            }, void 0, false, {
                fileName: "[project]/src/app/_components/producList/editProductForm.tsx",
                lineNumber: 279,
                columnNumber: 7
            }, this),
            showConfirm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_components$2f$producList$2f$confirmDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                message: "Вы уверены, что хотите сохранить изменения?",
                onConfirm: confirmSave,
                onCancel: ()=>setShowConfirm(false)
            }, void 0, false, {
                fileName: "[project]/src/app/_components/producList/editProductForm.tsx",
                lineNumber: 287,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/_components/producList/editProductForm.tsx",
        lineNumber: 204,
        columnNumber: 5
    }, this);
}
_s(EditProductForm, "D9+rEq2txiD8+QfzW4K10OTd57M=");
_c = EditProductForm;
var _c;
__turbopack_refresh__.register(_c, "EditProductForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/_components/producList/editProductWrapper.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>EditProductWrapper)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_components$2f$producList$2f$editProductForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/_components/producList/editProductForm.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
function EditProductWrapper({ product, categories, availableImages }) {
    _s();
    const [editing, setEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center mb-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center mt-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setEditing((prev)=>!prev),
                    className: "btn btn-primary py-2 px-6 text-lg",
                    children: editing ? "Скрыть форму редактирования" : "Редактировать информацию о товаре"
                }, void 0, false, {
                    fileName: "[project]/src/app/_components/producList/editProductWrapper.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/_components/producList/editProductWrapper.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            editing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 w-full max-w-2xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_components$2f$producList$2f$editProductForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    product: product,
                    categories: categories,
                    availableImages: availableImages
                }, void 0, false, {
                    fileName: "[project]/src/app/_components/producList/editProductWrapper.tsx",
                    lineNumber: 33,
                    columnNumber: 3
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/_components/producList/editProductWrapper.tsx",
                lineNumber: 32,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/_components/producList/editProductWrapper.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_s(EditProductWrapper, "8NtxifNHNH77GP4fOyN5Q3EVoDA=");
_c = EditProductWrapper;
var _c;
__turbopack_refresh__.register(_c, "EditProductWrapper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/_components/producList/deleteProduct.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>DeleteButton)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$action$2f$product$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/api/action/product.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_components$2f$producList$2f$confirmDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/_components/producList/confirmDialog.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
function DeleteButton({ productId }) {
    _s();
    const [showConfirm, setShowConfirm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const confirmSave = async ()=>{
        setShowConfirm(false);
        const formData = new FormData();
        formData.append("id", productId);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$action$2f$product$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteProduct"])(formData);
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        setShowConfirm(true);
    };
    return(// <form action={deleteProduct} className="flex justify-center mt-4">
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: "flex justify-center mt-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "hidden",
                name: "id",
                value: productId
            }, void 0, false, {
                fileName: "[project]/src/app/_components/producList/deleteProduct.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "submit",
                className: "btn btn-error py-2 px-6 text-lg",
                style: {
                    width: "auto",
                    paddingLeft: "calc(1.5rem + 140px)",
                    paddingRight: "calc(1.5rem + 140px)"
                },
                children: "Удалить"
            }, void 0, false, {
                fileName: "[project]/src/app/_components/producList/deleteProduct.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            showConfirm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_components$2f$producList$2f$confirmDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                message: "Вы уверены, что хотите удалить данный товар?",
                onConfirm: confirmSave,
                onCancel: ()=>setShowConfirm(false)
            }, void 0, false, {
                fileName: "[project]/src/app/_components/producList/deleteProduct.tsx",
                lineNumber: 38,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/_components/producList/deleteProduct.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this));
}
_s(DeleteButton, "07w5HhsPbG9uHJfYjLCIuUrAXBQ=");
_c = DeleteButton;
var _c;
__turbopack_refresh__.register(_c, "DeleteButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/_components/rerwies/ratingSelector.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>RatingSelector)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function RatingSelector({ rating, setRating }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "form-control mb-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: "rating",
                className: "label",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "label-text",
                    children: "Рейтинг (необязательно)"
                }, void 0, false, {
                    fileName: "[project]/src/app/_components/rerwies/ratingSelector.tsx",
                    lineNumber: 11,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/_components/rerwies/ratingSelector.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                id: "rating",
                value: rating,
                onChange: (e)=>setRating(Number(e.target.value)),
                className: "select select-bordered w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: 0,
                        children: "Не задано"
                    }, void 0, false, {
                        fileName: "[project]/src/app/_components/rerwies/ratingSelector.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this),
                    [
                        1,
                        2,
                        3,
                        4,
                        5
                    ].map((num)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                            value: num,
                            children: num
                        }, num, false, {
                            fileName: "[project]/src/app/_components/rerwies/ratingSelector.tsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/_components/rerwies/ratingSelector.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/_components/rerwies/ratingSelector.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = RatingSelector;
var _c;
__turbopack_refresh__.register(_c, "RatingSelector");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/_components/rerwies/addreview.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// "use client";
// import { useState } from "react";
// import { useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";
// import RatingSelector from "./ratingSelector";
// import { api } from "~/trpc/react";
// interface AddReviewProps {
//   productId: string;
// }
// export default function AddReview({ productId }: AddReviewProps) {
//   const { data: session, status } = useSession();
//   const router = useRouter();
//   const [rating, setRating] = useState<number>(0);
//   const [comment, setComment] = useState<string>("");
//   const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
//   const [error, setError] = useState<string | null>(null);
//   const utils = api.useUtils();
//   const createReview = api.review.create.useMutation({
//     onSuccess: () => {
//       setRating(0);
//       setComment("");
//       setError(null);
//       void utils.review.getByProduct.invalidate({ productId });
//     },
//     onError: (error) => {
//       setError(error.message);
//     },
//     onSettled: () => {
//       setIsSubmitting(false);
//     },
//   });
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (status === "unauthenticated") {
//       router.push("/auth/signin");
//       return;
//     }
//     if (!session?.user?.id) {
//       setError("Ошибка авторизации. Пожалуйста, войдите снова.");
//       return;
//     }
//     if (!comment.trim()) {
//       setError("Пожалуйста, оставьте комментарий");
//       return;
//     }
//     if (rating === 0) {
//       setError("Пожалуйста, укажите рейтинг");
//       return;
//     }
//     setIsSubmitting(true);
//     setError(null);
//       await createReview.mutateAsync({
//         productId,
//         userId: session.user.id, 
//         rating,
//         comment,
//       });
//   };
//   if (status === "unauthenticated") {
//     return (
//       <div className="my-8 p-4 max-w-xl mx-auto bg-base-200 rounded-lg shadow-md">
//         <h3 className="text-xl font-semibold mb-4">Оставить отзыв</h3>
//         <p className="mb-4">Чтобы оставить отзыв, пожалуйста, войдите в систему.</p>
//         <button 
//           onClick={() => router.push("/auth/signin")}
//           className="btn btn-primary"
//         >
//           Войти
//         </button>
//       </div>
//     );
//   }
//   return (
//     <div className="my-8 p-4 max-w-xl mx-auto bg-base-200 rounded-lg shadow-md">
//       <h3 className="text-xl font-semibold mb-4">Оставить отзыв</h3>
//       {error && <p className="text-red-500 mb-4">{error}</p>}
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text">Ваша оценка</span>
//           </label>
//           <RatingSelector rating={rating} setRating={setRating} />
//         </div>
//         <div className="form-control">
//           <label htmlFor="comment" className="label">
//             <span className="label-text">Ваш отзыв</span>
//           </label>
//           <textarea
//             id="comment"
//             value={comment}
//             onChange={(e) => setComment(e.target.value)}
//             placeholder="Расскажите о вашем опыте..."
//             className="textarea textarea-bordered h-24"
//             required
//           />
//         </div>
//         <div className="form-control mt-6">
//           <button
//             type="submit"
//             className={`btn btn-primary ${isSubmitting ? "loading" : ""}`}
//             disabled={isSubmitting}
//           >
//             {isSubmitting ? "Отправка..." : "Опубликовать отзыв"}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }
__turbopack_esm__({
    "default": (()=>AddReview)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$auth$40$5$2e$0$2e$0$2d$beta$2e$25_nex_58b7dc5b73c6ef365398cce3a6865e42$2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next-auth@5.0.0-beta.25_nex_58b7dc5b73c6ef365398cce3a6865e42/node_modules/next-auth/react.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_components$2f$rerwies$2f$ratingSelector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/_components/rerwies/ratingSelector.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$trpc$2f$react$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/trpc/react.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
function AddReview({ productId }) {
    _s();
    const { data: session, status } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$auth$40$5$2e$0$2e$0$2d$beta$2e$25_nex_58b7dc5b73c6ef365398cce3a6865e42$2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [rating, setRating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [comment, setComment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const utils = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$trpc$2f$react$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].useUtils();
    const createReview = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$trpc$2f$react$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].review.create.useMutation({
        onSuccess: {
            "AddReview.useMutation[createReview]": ()=>{
                setRating(0);
                setComment("");
                setError(null);
                void utils.review.getByProduct.invalidate({
                    productId
                });
            }
        }["AddReview.useMutation[createReview]"],
        onError: {
            "AddReview.useMutation[createReview]": (error)=>{
                setError(error.message);
            }
        }["AddReview.useMutation[createReview]"],
        onSettled: {
            "AddReview.useMutation[createReview]": ()=>{
                setIsSubmitting(false);
            }
        }["AddReview.useMutation[createReview]"]
    });
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (status === "unauthenticated") {
            router.push("/auth/signin");
            return;
        }
        if (!session?.user?.id) {
            setError("Ошибка авторизации. Пожалуйста, войдите снова.");
            return;
        }
        if (!comment.trim()) {
            setError("Пожалуйста, оставьте комментарий");
            return;
        }
        if (rating === 0) {
            setError("Пожалуйста, укажите рейтинг");
            return;
        }
        setIsSubmitting(true);
        setError(null);
        await createReview.mutateAsync({
            productId,
            userId: session.user.id,
            rating,
            comment
        });
    };
    if (status === "unauthenticated") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "my-8 p-4 max-w-xl mx-auto bg-base-200 rounded-lg shadow-md",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-xl font-semibold mb-4",
                    children: "Оставить отзыв"
                }, void 0, false, {
                    fileName: "[project]/src/app/_components/rerwies/addreview.tsx",
                    lineNumber: 201,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mb-4",
                    children: "Чтобы оставить отзыв, пожалуйста, войдите в систему."
                }, void 0, false, {
                    fileName: "[project]/src/app/_components/rerwies/addreview.tsx",
                    lineNumber: 202,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>router.push("/auth/signin"),
                    className: "btn btn-primary",
                    children: "Войти"
                }, void 0, false, {
                    fileName: "[project]/src/app/_components/rerwies/addreview.tsx",
                    lineNumber: 203,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/_components/rerwies/addreview.tsx",
            lineNumber: 200,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "my-8 p-4 max-w-xl mx-auto bg-base-200 rounded-lg shadow-md",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-xl font-semibold mb-4",
                children: "Оставить отзыв"
            }, void 0, false, {
                fileName: "[project]/src/app/_components/rerwies/addreview.tsx",
                lineNumber: 212,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-red-500 mb-4",
                children: error
            }, void 0, false, {
                fileName: "[project]/src/app/_components/rerwies/addreview.tsx",
                lineNumber: 213,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "form-control",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "label",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "label-text",
                                    children: "Ваша оценка"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/_components/rerwies/addreview.tsx",
                                    lineNumber: 218,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/_components/rerwies/addreview.tsx",
                                lineNumber: 217,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_components$2f$rerwies$2f$ratingSelector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                rating: rating,
                                setRating: setRating
                            }, void 0, false, {
                                fileName: "[project]/src/app/_components/rerwies/addreview.tsx",
                                lineNumber: 220,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/_components/rerwies/addreview.tsx",
                        lineNumber: 216,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "form-control",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "comment",
                                className: "label",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "label-text",
                                    children: "Ваш отзыв"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/_components/rerwies/addreview.tsx",
                                    lineNumber: 225,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/_components/rerwies/addreview.tsx",
                                lineNumber: 224,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                id: "comment",
                                value: comment,
                                onChange: (e)=>setComment(e.target.value),
                                placeholder: "Расскажите о вашем опыте...",
                                className: "textarea textarea-bordered h-24",
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/src/app/_components/rerwies/addreview.tsx",
                                lineNumber: 227,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/_components/rerwies/addreview.tsx",
                        lineNumber: 223,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "form-control mt-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            className: `btn btn-primary ${isSubmitting ? "loading" : ""}`,
                            disabled: isSubmitting,
                            children: isSubmitting ? "Отправка..." : "Опубликовать отзыв"
                        }, void 0, false, {
                            fileName: "[project]/src/app/_components/rerwies/addreview.tsx",
                            lineNumber: 238,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/_components/rerwies/addreview.tsx",
                        lineNumber: 237,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/_components/rerwies/addreview.tsx",
                lineNumber: 215,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/_components/rerwies/addreview.tsx",
        lineNumber: 211,
        columnNumber: 5
    }, this);
}
_s(AddReview, "8MhD7VwMk6Evc3O2/CZVyC7rSY8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$auth$40$5$2e$0$2e$0$2d$beta$2e$25_nex_58b7dc5b73c6ef365398cce3a6865e42$2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$trpc$2f$react$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].useUtils
    ];
});
_c = AddReview;
var _c;
__turbopack_refresh__.register(_c, "AddReview");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/product/[id]/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=src_app_061dae._.js.map