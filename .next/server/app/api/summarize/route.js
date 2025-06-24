/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/summarize/route";
exports.ids = ["app/api/summarize/route"];
exports.modules = {

/***/ "(rsc)/./app/api/summarize/route.ts":
/*!************************************!*\
  !*** ./app/api/summarize/route.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\nasync function POST(request) {\n    try {\n        const { text } = await request.json();\n        if (!text || typeof text !== 'string') {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: 'Text is required and must be a string'\n            }, {\n                status: 400\n            });\n        }\n        // Mock response - replace with actual Flask API call\n        const mockSummary = {\n            summary: \"This is a mock summary of the news article. The AI has analyzed the content and provided a concise overview highlighting the key points, main events, and important details while maintaining the essential information in a much shorter format.\",\n            original_length: text.length,\n            summary_length: 200\n        };\n        // Simulate API delay\n        await new Promise((resolve)=>setTimeout(resolve, 1500));\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(mockSummary);\n    } catch (error) {\n        console.error('Error in summarize API:', error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Internal server error'\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3N1bW1hcml6ZS9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7OztBQUF1RDtBQUVoRCxlQUFlQyxLQUFLQyxPQUFvQjtJQUM3QyxJQUFJO1FBQ0YsTUFBTSxFQUFFQyxJQUFJLEVBQUUsR0FBRyxNQUFNRCxRQUFRRSxJQUFJO1FBRW5DLElBQUksQ0FBQ0QsUUFBUSxPQUFPQSxTQUFTLFVBQVU7WUFDckMsT0FBT0gscURBQVlBLENBQUNJLElBQUksQ0FDdEI7Z0JBQUVDLE9BQU87WUFBd0MsR0FDakQ7Z0JBQUVDLFFBQVE7WUFBSTtRQUVsQjtRQUVBLHFEQUFxRDtRQUNyRCxNQUFNQyxjQUFjO1lBQ2xCQyxTQUFTO1lBQ1RDLGlCQUFpQk4sS0FBS08sTUFBTTtZQUM1QkMsZ0JBQWdCO1FBQ2xCO1FBRUEscUJBQXFCO1FBQ3JCLE1BQU0sSUFBSUMsUUFBUUMsQ0FBQUEsVUFBV0MsV0FBV0QsU0FBUztRQUVqRCxPQUFPYixxREFBWUEsQ0FBQ0ksSUFBSSxDQUFDRztJQUMzQixFQUFFLE9BQU9GLE9BQU87UUFDZFUsUUFBUVYsS0FBSyxDQUFDLDJCQUEyQkE7UUFDekMsT0FBT0wscURBQVlBLENBQUNJLElBQUksQ0FDdEI7WUFBRUMsT0FBTztRQUF3QixHQUNqQztZQUFFQyxRQUFRO1FBQUk7SUFFbEI7QUFDRiIsInNvdXJjZXMiOlsiL2hvbWUvcmF5L0RvY3VtZW50cy9UdWdhcyBLdWxpYWgvU2VtZXN0ZXIgOC9OTFAvUHJveWVrIFNlbWVzdGVyL25ld3Mtc3VtbWFyaXplci9hcHAvYXBpL3N1bW1hcml6ZS9yb3V0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVxdWVzdCwgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcXVlc3Q6IE5leHRSZXF1ZXN0KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyB0ZXh0IH0gPSBhd2FpdCByZXF1ZXN0Lmpzb24oKVxuXG4gICAgaWYgKCF0ZXh0IHx8IHR5cGVvZiB0ZXh0ICE9PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAgICB7IGVycm9yOiAnVGV4dCBpcyByZXF1aXJlZCBhbmQgbXVzdCBiZSBhIHN0cmluZycgfSxcbiAgICAgICAgeyBzdGF0dXM6IDQwMCB9XG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gTW9jayByZXNwb25zZSAtIHJlcGxhY2Ugd2l0aCBhY3R1YWwgRmxhc2sgQVBJIGNhbGxcbiAgICBjb25zdCBtb2NrU3VtbWFyeSA9IHtcbiAgICAgIHN1bW1hcnk6IFwiVGhpcyBpcyBhIG1vY2sgc3VtbWFyeSBvZiB0aGUgbmV3cyBhcnRpY2xlLiBUaGUgQUkgaGFzIGFuYWx5emVkIHRoZSBjb250ZW50IGFuZCBwcm92aWRlZCBhIGNvbmNpc2Ugb3ZlcnZpZXcgaGlnaGxpZ2h0aW5nIHRoZSBrZXkgcG9pbnRzLCBtYWluIGV2ZW50cywgYW5kIGltcG9ydGFudCBkZXRhaWxzIHdoaWxlIG1haW50YWluaW5nIHRoZSBlc3NlbnRpYWwgaW5mb3JtYXRpb24gaW4gYSBtdWNoIHNob3J0ZXIgZm9ybWF0LlwiLFxuICAgICAgb3JpZ2luYWxfbGVuZ3RoOiB0ZXh0Lmxlbmd0aCxcbiAgICAgIHN1bW1hcnlfbGVuZ3RoOiAyMDBcbiAgICB9XG5cbiAgICAvLyBTaW11bGF0ZSBBUEkgZGVsYXlcbiAgICBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMTUwMCkpXG5cbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24obW9ja1N1bW1hcnkpXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gc3VtbWFyaXplIEFQSTonLCBlcnJvcilcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICB7IGVycm9yOiAnSW50ZXJuYWwgc2VydmVyIGVycm9yJyB9LFxuICAgICAgeyBzdGF0dXM6IDUwMCB9XG4gICAgKVxuICB9XG59Il0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsIlBPU1QiLCJyZXF1ZXN0IiwidGV4dCIsImpzb24iLCJlcnJvciIsInN0YXR1cyIsIm1vY2tTdW1tYXJ5Iiwic3VtbWFyeSIsIm9yaWdpbmFsX2xlbmd0aCIsImxlbmd0aCIsInN1bW1hcnlfbGVuZ3RoIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwiY29uc29sZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/summarize/route.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fsummarize%2Froute&page=%2Fapi%2Fsummarize%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsummarize%2Froute.ts&appDir=%2Fhome%2Fray%2FDocuments%2FTugas%20Kuliah%2FSemester%208%2FNLP%2FProyek%20Semester%2Fnews-summarizer%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fray%2FDocuments%2FTugas%20Kuliah%2FSemester%208%2FNLP%2FProyek%20Semester%2Fnews-summarizer&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fsummarize%2Froute&page=%2Fapi%2Fsummarize%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsummarize%2Froute.ts&appDir=%2Fhome%2Fray%2FDocuments%2FTugas%20Kuliah%2FSemester%208%2FNLP%2FProyek%20Semester%2Fnews-summarizer%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fray%2FDocuments%2FTugas%20Kuliah%2FSemester%208%2FNLP%2FProyek%20Semester%2Fnews-summarizer&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_ray_Documents_Tugas_Kuliah_Semester_8_NLP_Proyek_Semester_news_summarizer_app_api_summarize_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/summarize/route.ts */ \"(rsc)/./app/api/summarize/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/summarize/route\",\n        pathname: \"/api/summarize\",\n        filename: \"route\",\n        bundlePath: \"app/api/summarize/route\"\n    },\n    resolvedPagePath: \"/home/ray/Documents/Tugas Kuliah/Semester 8/NLP/Proyek Semester/news-summarizer/app/api/summarize/route.ts\",\n    nextConfigOutput,\n    userland: _home_ray_Documents_Tugas_Kuliah_Semester_8_NLP_Proyek_Semester_news_summarizer_app_api_summarize_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZzdW1tYXJpemUlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnN1bW1hcml6ZSUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnN1bW1hcml6ZSUyRnJvdXRlLnRzJmFwcERpcj0lMkZob21lJTJGcmF5JTJGRG9jdW1lbnRzJTJGVHVnYXMlMjBLdWxpYWglMkZTZW1lc3RlciUyMDglMkZOTFAlMkZQcm95ZWslMjBTZW1lc3RlciUyRm5ld3Mtc3VtbWFyaXplciUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGaG9tZSUyRnJheSUyRkRvY3VtZW50cyUyRlR1Z2FzJTIwS3VsaWFoJTJGU2VtZXN0ZXIlMjA4JTJGTkxQJTJGUHJveWVrJTIwU2VtZXN0ZXIlMkZuZXdzLXN1bW1hcml6ZXImaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQzBEO0FBQ3ZJO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvaG9tZS9yYXkvRG9jdW1lbnRzL1R1Z2FzIEt1bGlhaC9TZW1lc3RlciA4L05MUC9Qcm95ZWsgU2VtZXN0ZXIvbmV3cy1zdW1tYXJpemVyL2FwcC9hcGkvc3VtbWFyaXplL3JvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9zdW1tYXJpemUvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9zdW1tYXJpemVcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3N1bW1hcml6ZS9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9ob21lL3JheS9Eb2N1bWVudHMvVHVnYXMgS3VsaWFoL1NlbWVzdGVyIDgvTkxQL1Byb3llayBTZW1lc3Rlci9uZXdzLXN1bW1hcml6ZXIvYXBwL2FwaS9zdW1tYXJpemUvcm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fsummarize%2Froute&page=%2Fapi%2Fsummarize%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsummarize%2Froute.ts&appDir=%2Fhome%2Fray%2FDocuments%2FTugas%20Kuliah%2FSemester%208%2FNLP%2FProyek%20Semester%2Fnews-summarizer%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fray%2FDocuments%2FTugas%20Kuliah%2FSemester%208%2FNLP%2FProyek%20Semester%2Fnews-summarizer&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fsummarize%2Froute&page=%2Fapi%2Fsummarize%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsummarize%2Froute.ts&appDir=%2Fhome%2Fray%2FDocuments%2FTugas%20Kuliah%2FSemester%208%2FNLP%2FProyek%20Semester%2Fnews-summarizer%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fray%2FDocuments%2FTugas%20Kuliah%2FSemester%208%2FNLP%2FProyek%20Semester%2Fnews-summarizer&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();