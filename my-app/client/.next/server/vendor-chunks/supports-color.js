"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/supports-color";
exports.ids = ["vendor-chunks/supports-color"];
exports.modules = {

/***/ "(ssr)/./node_modules/supports-color/index.js":
/*!**********************************************!*\
  !*** ./node_modules/supports-color/index.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst os = __webpack_require__(/*! os */ \"os\");\nconst hasFlag = __webpack_require__(/*! has-flag */ \"(ssr)/./node_modules/has-flag/index.js\");\nconst env = process.env;\nlet forceColor;\nif (hasFlag(\"no-color\") || hasFlag(\"no-colors\") || hasFlag(\"color=false\")) {\n    forceColor = false;\n} else if (hasFlag(\"color\") || hasFlag(\"colors\") || hasFlag(\"color=true\") || hasFlag(\"color=always\")) {\n    forceColor = true;\n}\nif (\"FORCE_COLOR\" in env) {\n    forceColor = env.FORCE_COLOR.length === 0 || parseInt(env.FORCE_COLOR, 10) !== 0;\n}\nfunction translateLevel(level) {\n    if (level === 0) {\n        return false;\n    }\n    return {\n        level,\n        hasBasic: true,\n        has256: level >= 2,\n        has16m: level >= 3\n    };\n}\nfunction supportsColor(stream) {\n    if (forceColor === false) {\n        return 0;\n    }\n    if (hasFlag(\"color=16m\") || hasFlag(\"color=full\") || hasFlag(\"color=truecolor\")) {\n        return 3;\n    }\n    if (hasFlag(\"color=256\")) {\n        return 2;\n    }\n    if (stream && !stream.isTTY && forceColor !== true) {\n        return 0;\n    }\n    const min = forceColor ? 1 : 0;\n    if (process.platform === \"win32\") {\n        // Node.js 7.5.0 is the first version of Node.js to include a patch to\n        // libuv that enables 256 color output on Windows. Anything earlier and it\n        // won't work. However, here we target Node.js 8 at minimum as it is an LTS\n        // release, and Node.js 7 is not. Windows 10 build 10586 is the first Windows\n        // release that supports 256 colors. Windows 10 build 14931 is the first release\n        // that supports 16m/TrueColor.\n        const osRelease = os.release().split(\".\");\n        if (Number(process.versions.node.split(\".\")[0]) >= 8 && Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {\n            return Number(osRelease[2]) >= 14931 ? 3 : 2;\n        }\n        return 1;\n    }\n    if (\"CI\" in env) {\n        if ([\n            \"TRAVIS\",\n            \"CIRCLECI\",\n            \"APPVEYOR\",\n            \"GITLAB_CI\"\n        ].some((sign)=>sign in env) || env.CI_NAME === \"codeship\") {\n            return 1;\n        }\n        return min;\n    }\n    if (\"TEAMCITY_VERSION\" in env) {\n        return /^(9\\.(0*[1-9]\\d*)\\.|\\d{2,}\\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;\n    }\n    if (env.COLORTERM === \"truecolor\") {\n        return 3;\n    }\n    if (\"TERM_PROGRAM\" in env) {\n        const version = parseInt((env.TERM_PROGRAM_VERSION || \"\").split(\".\")[0], 10);\n        switch(env.TERM_PROGRAM){\n            case \"iTerm.app\":\n                return version >= 3 ? 3 : 2;\n            case \"Apple_Terminal\":\n                return 2;\n        }\n    }\n    if (/-256(color)?$/i.test(env.TERM)) {\n        return 2;\n    }\n    if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {\n        return 1;\n    }\n    if (\"COLORTERM\" in env) {\n        return 1;\n    }\n    if (env.TERM === \"dumb\") {\n        return min;\n    }\n    return min;\n}\nfunction getSupportLevel(stream) {\n    const level = supportsColor(stream);\n    return translateLevel(level);\n}\nmodule.exports = {\n    supportsColor: getSupportLevel,\n    stdout: getSupportLevel(process.stdout),\n    stderr: getSupportLevel(process.stderr)\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvc3VwcG9ydHMtY29sb3IvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxNQUFNQSxLQUFLQyxtQkFBT0EsQ0FBQztBQUNuQixNQUFNQyxVQUFVRCxtQkFBT0EsQ0FBQztBQUV4QixNQUFNRSxNQUFNQyxRQUFRRCxHQUFHO0FBRXZCLElBQUlFO0FBQ0osSUFBSUgsUUFBUSxlQUNYQSxRQUFRLGdCQUNSQSxRQUFRLGdCQUFnQjtJQUN4QkcsYUFBYTtBQUNkLE9BQU8sSUFBSUgsUUFBUSxZQUNsQkEsUUFBUSxhQUNSQSxRQUFRLGlCQUNSQSxRQUFRLGlCQUFpQjtJQUN6QkcsYUFBYTtBQUNkO0FBQ0EsSUFBSSxpQkFBaUJGLEtBQUs7SUFDekJFLGFBQWFGLElBQUlHLFdBQVcsQ0FBQ0MsTUFBTSxLQUFLLEtBQUtDLFNBQVNMLElBQUlHLFdBQVcsRUFBRSxRQUFRO0FBQ2hGO0FBRUEsU0FBU0csZUFBZUMsS0FBSztJQUM1QixJQUFJQSxVQUFVLEdBQUc7UUFDaEIsT0FBTztJQUNSO0lBRUEsT0FBTztRQUNOQTtRQUNBQyxVQUFVO1FBQ1ZDLFFBQVFGLFNBQVM7UUFDakJHLFFBQVFILFNBQVM7SUFDbEI7QUFDRDtBQUVBLFNBQVNJLGNBQWNDLE1BQU07SUFDNUIsSUFBSVYsZUFBZSxPQUFPO1FBQ3pCLE9BQU87SUFDUjtJQUVBLElBQUlILFFBQVEsZ0JBQ1hBLFFBQVEsaUJBQ1JBLFFBQVEsb0JBQW9CO1FBQzVCLE9BQU87SUFDUjtJQUVBLElBQUlBLFFBQVEsY0FBYztRQUN6QixPQUFPO0lBQ1I7SUFFQSxJQUFJYSxVQUFVLENBQUNBLE9BQU9DLEtBQUssSUFBSVgsZUFBZSxNQUFNO1FBQ25ELE9BQU87SUFDUjtJQUVBLE1BQU1ZLE1BQU1aLGFBQWEsSUFBSTtJQUU3QixJQUFJRCxRQUFRYyxRQUFRLEtBQUssU0FBUztRQUNqQyxzRUFBc0U7UUFDdEUsMEVBQTBFO1FBQzFFLDJFQUEyRTtRQUMzRSw2RUFBNkU7UUFDN0UsZ0ZBQWdGO1FBQ2hGLCtCQUErQjtRQUMvQixNQUFNQyxZQUFZbkIsR0FBR29CLE9BQU8sR0FBR0MsS0FBSyxDQUFDO1FBQ3JDLElBQ0NDLE9BQU9sQixRQUFRbUIsUUFBUSxDQUFDQyxJQUFJLENBQUNILEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEtBQy9DQyxPQUFPSCxTQUFTLENBQUMsRUFBRSxLQUFLLE1BQ3hCRyxPQUFPSCxTQUFTLENBQUMsRUFBRSxLQUFLLE9BQ3ZCO1lBQ0QsT0FBT0csT0FBT0gsU0FBUyxDQUFDLEVBQUUsS0FBSyxRQUFRLElBQUk7UUFDNUM7UUFFQSxPQUFPO0lBQ1I7SUFFQSxJQUFJLFFBQVFoQixLQUFLO1FBQ2hCLElBQUk7WUFBQztZQUFVO1lBQVk7WUFBWTtTQUFZLENBQUNzQixJQUFJLENBQUNDLENBQUFBLE9BQVFBLFFBQVF2QixRQUFRQSxJQUFJd0IsT0FBTyxLQUFLLFlBQVk7WUFDNUcsT0FBTztRQUNSO1FBRUEsT0FBT1Y7SUFDUjtJQUVBLElBQUksc0JBQXNCZCxLQUFLO1FBQzlCLE9BQU8sZ0NBQWdDeUIsSUFBSSxDQUFDekIsSUFBSTBCLGdCQUFnQixJQUFJLElBQUk7SUFDekU7SUFFQSxJQUFJMUIsSUFBSTJCLFNBQVMsS0FBSyxhQUFhO1FBQ2xDLE9BQU87SUFDUjtJQUVBLElBQUksa0JBQWtCM0IsS0FBSztRQUMxQixNQUFNNEIsVUFBVXZCLFNBQVMsQ0FBQ0wsSUFBSTZCLG9CQUFvQixJQUFJLEVBQUMsRUFBR1gsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUU7UUFFekUsT0FBUWxCLElBQUk4QixZQUFZO1lBQ3ZCLEtBQUs7Z0JBQ0osT0FBT0YsV0FBVyxJQUFJLElBQUk7WUFDM0IsS0FBSztnQkFDSixPQUFPO1FBRVQ7SUFDRDtJQUVBLElBQUksaUJBQWlCSCxJQUFJLENBQUN6QixJQUFJK0IsSUFBSSxHQUFHO1FBQ3BDLE9BQU87SUFDUjtJQUVBLElBQUksOERBQThETixJQUFJLENBQUN6QixJQUFJK0IsSUFBSSxHQUFHO1FBQ2pGLE9BQU87SUFDUjtJQUVBLElBQUksZUFBZS9CLEtBQUs7UUFDdkIsT0FBTztJQUNSO0lBRUEsSUFBSUEsSUFBSStCLElBQUksS0FBSyxRQUFRO1FBQ3hCLE9BQU9qQjtJQUNSO0lBRUEsT0FBT0E7QUFDUjtBQUVBLFNBQVNrQixnQkFBZ0JwQixNQUFNO0lBQzlCLE1BQU1MLFFBQVFJLGNBQWNDO0lBQzVCLE9BQU9OLGVBQWVDO0FBQ3ZCO0FBRUEwQixPQUFPQyxPQUFPLEdBQUc7SUFDaEJ2QixlQUFlcUI7SUFDZkcsUUFBUUgsZ0JBQWdCL0IsUUFBUWtDLE1BQU07SUFDdENDLFFBQVFKLGdCQUFnQi9CLFFBQVFtQyxNQUFNO0FBQ3ZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vbm9kZV9tb2R1bGVzL3N1cHBvcnRzLWNvbG9yL2luZGV4LmpzPzdiYjkiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuY29uc3Qgb3MgPSByZXF1aXJlKCdvcycpO1xuY29uc3QgaGFzRmxhZyA9IHJlcXVpcmUoJ2hhcy1mbGFnJyk7XG5cbmNvbnN0IGVudiA9IHByb2Nlc3MuZW52O1xuXG5sZXQgZm9yY2VDb2xvcjtcbmlmIChoYXNGbGFnKCduby1jb2xvcicpIHx8XG5cdGhhc0ZsYWcoJ25vLWNvbG9ycycpIHx8XG5cdGhhc0ZsYWcoJ2NvbG9yPWZhbHNlJykpIHtcblx0Zm9yY2VDb2xvciA9IGZhbHNlO1xufSBlbHNlIGlmIChoYXNGbGFnKCdjb2xvcicpIHx8XG5cdGhhc0ZsYWcoJ2NvbG9ycycpIHx8XG5cdGhhc0ZsYWcoJ2NvbG9yPXRydWUnKSB8fFxuXHRoYXNGbGFnKCdjb2xvcj1hbHdheXMnKSkge1xuXHRmb3JjZUNvbG9yID0gdHJ1ZTtcbn1cbmlmICgnRk9SQ0VfQ09MT1InIGluIGVudikge1xuXHRmb3JjZUNvbG9yID0gZW52LkZPUkNFX0NPTE9SLmxlbmd0aCA9PT0gMCB8fCBwYXJzZUludChlbnYuRk9SQ0VfQ09MT1IsIDEwKSAhPT0gMDtcbn1cblxuZnVuY3Rpb24gdHJhbnNsYXRlTGV2ZWwobGV2ZWwpIHtcblx0aWYgKGxldmVsID09PSAwKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRsZXZlbCxcblx0XHRoYXNCYXNpYzogdHJ1ZSxcblx0XHRoYXMyNTY6IGxldmVsID49IDIsXG5cdFx0aGFzMTZtOiBsZXZlbCA+PSAzXG5cdH07XG59XG5cbmZ1bmN0aW9uIHN1cHBvcnRzQ29sb3Ioc3RyZWFtKSB7XG5cdGlmIChmb3JjZUNvbG9yID09PSBmYWxzZSkge1xuXHRcdHJldHVybiAwO1xuXHR9XG5cblx0aWYgKGhhc0ZsYWcoJ2NvbG9yPTE2bScpIHx8XG5cdFx0aGFzRmxhZygnY29sb3I9ZnVsbCcpIHx8XG5cdFx0aGFzRmxhZygnY29sb3I9dHJ1ZWNvbG9yJykpIHtcblx0XHRyZXR1cm4gMztcblx0fVxuXG5cdGlmIChoYXNGbGFnKCdjb2xvcj0yNTYnKSkge1xuXHRcdHJldHVybiAyO1xuXHR9XG5cblx0aWYgKHN0cmVhbSAmJiAhc3RyZWFtLmlzVFRZICYmIGZvcmNlQ29sb3IgIT09IHRydWUpIHtcblx0XHRyZXR1cm4gMDtcblx0fVxuXG5cdGNvbnN0IG1pbiA9IGZvcmNlQ29sb3IgPyAxIDogMDtcblxuXHRpZiAocHJvY2Vzcy5wbGF0Zm9ybSA9PT0gJ3dpbjMyJykge1xuXHRcdC8vIE5vZGUuanMgNy41LjAgaXMgdGhlIGZpcnN0IHZlcnNpb24gb2YgTm9kZS5qcyB0byBpbmNsdWRlIGEgcGF0Y2ggdG9cblx0XHQvLyBsaWJ1diB0aGF0IGVuYWJsZXMgMjU2IGNvbG9yIG91dHB1dCBvbiBXaW5kb3dzLiBBbnl0aGluZyBlYXJsaWVyIGFuZCBpdFxuXHRcdC8vIHdvbid0IHdvcmsuIEhvd2V2ZXIsIGhlcmUgd2UgdGFyZ2V0IE5vZGUuanMgOCBhdCBtaW5pbXVtIGFzIGl0IGlzIGFuIExUU1xuXHRcdC8vIHJlbGVhc2UsIGFuZCBOb2RlLmpzIDcgaXMgbm90LiBXaW5kb3dzIDEwIGJ1aWxkIDEwNTg2IGlzIHRoZSBmaXJzdCBXaW5kb3dzXG5cdFx0Ly8gcmVsZWFzZSB0aGF0IHN1cHBvcnRzIDI1NiBjb2xvcnMuIFdpbmRvd3MgMTAgYnVpbGQgMTQ5MzEgaXMgdGhlIGZpcnN0IHJlbGVhc2Vcblx0XHQvLyB0aGF0IHN1cHBvcnRzIDE2bS9UcnVlQ29sb3IuXG5cdFx0Y29uc3Qgb3NSZWxlYXNlID0gb3MucmVsZWFzZSgpLnNwbGl0KCcuJyk7XG5cdFx0aWYgKFxuXHRcdFx0TnVtYmVyKHByb2Nlc3MudmVyc2lvbnMubm9kZS5zcGxpdCgnLicpWzBdKSA+PSA4ICYmXG5cdFx0XHROdW1iZXIob3NSZWxlYXNlWzBdKSA+PSAxMCAmJlxuXHRcdFx0TnVtYmVyKG9zUmVsZWFzZVsyXSkgPj0gMTA1ODZcblx0XHQpIHtcblx0XHRcdHJldHVybiBOdW1iZXIob3NSZWxlYXNlWzJdKSA+PSAxNDkzMSA/IDMgOiAyO1xuXHRcdH1cblxuXHRcdHJldHVybiAxO1xuXHR9XG5cblx0aWYgKCdDSScgaW4gZW52KSB7XG5cdFx0aWYgKFsnVFJBVklTJywgJ0NJUkNMRUNJJywgJ0FQUFZFWU9SJywgJ0dJVExBQl9DSSddLnNvbWUoc2lnbiA9PiBzaWduIGluIGVudikgfHwgZW52LkNJX05BTUUgPT09ICdjb2Rlc2hpcCcpIHtcblx0XHRcdHJldHVybiAxO1xuXHRcdH1cblxuXHRcdHJldHVybiBtaW47XG5cdH1cblxuXHRpZiAoJ1RFQU1DSVRZX1ZFUlNJT04nIGluIGVudikge1xuXHRcdHJldHVybiAvXig5XFwuKDAqWzEtOV1cXGQqKVxcLnxcXGR7Mix9XFwuKS8udGVzdChlbnYuVEVBTUNJVFlfVkVSU0lPTikgPyAxIDogMDtcblx0fVxuXG5cdGlmIChlbnYuQ09MT1JURVJNID09PSAndHJ1ZWNvbG9yJykge1xuXHRcdHJldHVybiAzO1xuXHR9XG5cblx0aWYgKCdURVJNX1BST0dSQU0nIGluIGVudikge1xuXHRcdGNvbnN0IHZlcnNpb24gPSBwYXJzZUludCgoZW52LlRFUk1fUFJPR1JBTV9WRVJTSU9OIHx8ICcnKS5zcGxpdCgnLicpWzBdLCAxMCk7XG5cblx0XHRzd2l0Y2ggKGVudi5URVJNX1BST0dSQU0pIHtcblx0XHRcdGNhc2UgJ2lUZXJtLmFwcCc6XG5cdFx0XHRcdHJldHVybiB2ZXJzaW9uID49IDMgPyAzIDogMjtcblx0XHRcdGNhc2UgJ0FwcGxlX1Rlcm1pbmFsJzpcblx0XHRcdFx0cmV0dXJuIDI7XG5cdFx0XHQvLyBObyBkZWZhdWx0XG5cdFx0fVxuXHR9XG5cblx0aWYgKC8tMjU2KGNvbG9yKT8kL2kudGVzdChlbnYuVEVSTSkpIHtcblx0XHRyZXR1cm4gMjtcblx0fVxuXG5cdGlmICgvXnNjcmVlbnxeeHRlcm18XnZ0MTAwfF52dDIyMHxecnh2dHxjb2xvcnxhbnNpfGN5Z3dpbnxsaW51eC9pLnRlc3QoZW52LlRFUk0pKSB7XG5cdFx0cmV0dXJuIDE7XG5cdH1cblxuXHRpZiAoJ0NPTE9SVEVSTScgaW4gZW52KSB7XG5cdFx0cmV0dXJuIDE7XG5cdH1cblxuXHRpZiAoZW52LlRFUk0gPT09ICdkdW1iJykge1xuXHRcdHJldHVybiBtaW47XG5cdH1cblxuXHRyZXR1cm4gbWluO1xufVxuXG5mdW5jdGlvbiBnZXRTdXBwb3J0TGV2ZWwoc3RyZWFtKSB7XG5cdGNvbnN0IGxldmVsID0gc3VwcG9ydHNDb2xvcihzdHJlYW0pO1xuXHRyZXR1cm4gdHJhbnNsYXRlTGV2ZWwobGV2ZWwpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0c3VwcG9ydHNDb2xvcjogZ2V0U3VwcG9ydExldmVsLFxuXHRzdGRvdXQ6IGdldFN1cHBvcnRMZXZlbChwcm9jZXNzLnN0ZG91dCksXG5cdHN0ZGVycjogZ2V0U3VwcG9ydExldmVsKHByb2Nlc3Muc3RkZXJyKVxufTtcbiJdLCJuYW1lcyI6WyJvcyIsInJlcXVpcmUiLCJoYXNGbGFnIiwiZW52IiwicHJvY2VzcyIsImZvcmNlQ29sb3IiLCJGT1JDRV9DT0xPUiIsImxlbmd0aCIsInBhcnNlSW50IiwidHJhbnNsYXRlTGV2ZWwiLCJsZXZlbCIsImhhc0Jhc2ljIiwiaGFzMjU2IiwiaGFzMTZtIiwic3VwcG9ydHNDb2xvciIsInN0cmVhbSIsImlzVFRZIiwibWluIiwicGxhdGZvcm0iLCJvc1JlbGVhc2UiLCJyZWxlYXNlIiwic3BsaXQiLCJOdW1iZXIiLCJ2ZXJzaW9ucyIsIm5vZGUiLCJzb21lIiwic2lnbiIsIkNJX05BTUUiLCJ0ZXN0IiwiVEVBTUNJVFlfVkVSU0lPTiIsIkNPTE9SVEVSTSIsInZlcnNpb24iLCJURVJNX1BST0dSQU1fVkVSU0lPTiIsIlRFUk1fUFJPR1JBTSIsIlRFUk0iLCJnZXRTdXBwb3J0TGV2ZWwiLCJtb2R1bGUiLCJleHBvcnRzIiwic3Rkb3V0Iiwic3RkZXJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/supports-color/index.js\n");

/***/ })

};
;