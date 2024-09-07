/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n    font-family: \"Merriweather\", serif;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    display: grid;\n    grid-template-rows: 10vh 90vh;\n}\n\n.header {\n    display: flex;\n    padding: 1rem;\n    align-items: center;\n    justify-content: space-between;\n    background-color: #eaebec;\n    border-bottom: solid 0.2em;\n}\n\n.main-content{\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    gap: 1rem;\n}\n\n\n\n.projects-title{\n    display: flex;\n    justify-content: space-between;\n    border-bottom: solid;\n    padding-bottom: 0.5em;\n}\n\n.add-project-modal, .add-task-modal, .open-task-modal, .edit-task-modal{\n    margin: auto;\n    border-radius: 1em;\n}\n\n.left-content{\n    padding: 1.5em;\n    display: flex;\n    flex-direction: column;\n    gap: 0.4em;\n}\n\n.project-card{\n    display: flex;\n    justify-content: space-between;\n    cursor: pointer;\n}\n\n.task-header{\n    display: flex;\n    flex-direction: row-reverse;\n}\n\n.task-div{\n    background-color: lightblue;\n    padding: 0.5rem;\n    display: flex;\n    justify-content: space-between;\n    cursor: pointer;\n    border-radius: 0.3em;\n}\n\n.task-content{\n    display: flex;\n    flex-direction: column;\n    gap: 1em;\n    margin-top: 1em;\n}\n\n\n\n.buttons-div, .title-div{\n    display: flex;\n    gap: 1em;\n}\n\n.edit-task, .delete-task{\n    cursor: pointer;\n    padding: 0.5em 1.5em;\n    border: none;\n    background-color: #DEC5E3;\n    border-radius: 0.5em;\n    font-weight: bold;\n}\n\n.delete-task{\n    background-color: indianred;\n}\n\ninput[type=\"checkbox\"]{\n    width: 2.5em;\n    cursor: pointer;\n    \n}\n\n.buttons-div{\n    align-items: center;\n}\n\n.blue{\n    color: #5B99C2;\n}\n\n.title{\n    display: flex;\n    gap: 0.5em;\n    align-items: center;\n}\n\n.logo{\n    width: 2.5em;\n}\n\n.sign{\n    background-color: transparent;\n    border: solid 0.2em;\n    padding: 0.5em 1em;\n    border-radius: 1.3em;\n    cursor: pointer;\n    color: #5B99C2;\n}\n\n.right-content{\n    background-color: #f7f5f5;\n    padding: 1.5em;\n}\n\n.projects{\n    display: flex;\n    flex-direction: column;\n    gap: 0.2em;\n}\n\n.highlightproject{\n    border-bottom-right-radius: 1em;\n    border-top-right-radius: 1em;\n    background-color: lightblue;\n    padding: 0.5em;\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n}\n\n.add-project-button{\n    border: none;\n    background-color: transparent;\n    cursor: pointer;\n}\n\n.delete{\n    background-color: transparent;\n    border: none;\n    cursor: pointer;\n}\n\n.add-task-button{\n    padding: 0.5em 1em;\n    background-color: white;\n    border-radius: 1em;\n    color: black;\n    border: solid 0.2em #5B99C2;\n    cursor: pointer;\n}\n\n\n\n.task-form, .edit-task-form, .open-task-form, .form{\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n    padding: 1em;\n    gap: 1em;\n    align-items: center;\n    background-color: #5B99C2;\n}\n\n\n.task-form input , .task-form select , .edit-task-form input, .edit-task-form select,.open-task-form input, .open-task-form select, form input{\n    height: 2em;\n    border: none;\n}\n\n\n.task-form .actions , .edit-task-form .actions, .open-task-form .actions, .form .actions{\n    grid-column: 2;\n    justify-self: end;\n}\n\n.task-form label , .edit-task-form label, .open-task-form label, .form label{\n    color: white;\n    font-weight: bold;\n}\n\n.actions button {\n    padding: 0.4em 1em;\n    background-color: #403D58;\n    color: white;\n    border: none;\n    cursor: pointer;\n}\n\ninput:disabled, select:disabled{\n    color: black;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayProjects: () => (/* binding */ displayProjects),\n/* harmony export */   displayTasks: () => (/* binding */ displayTasks),\n/* harmony export */   generateDelete: () => (/* binding */ generateDelete),\n/* harmony export */   generateProjectsList: () => (/* binding */ generateProjectsList),\n/* harmony export */   highlightProject: () => (/* binding */ highlightProject),\n/* harmony export */   populateEditTaskModal: () => (/* binding */ populateEditTaskModal),\n/* harmony export */   populateShowTaskModal: () => (/* binding */ populateShowTaskModal)\n/* harmony export */ });\n/* harmony import */ var _icons_delete_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons/delete.svg */ \"./src/icons/delete.svg\");\n\n\n\n// projects list dom creation\nconst displayProjects = (todoList) =>  {\n    console.log(todoList)\n    const projects = document.querySelector(\".projects\")\n    projects.innerHTML = \"\"\n    todoList.getProjects().forEach(project => {\n        const projectDiv = document.createElement(\"div\")\n        projectDiv.classList.add(\"project-card\")\n        projectDiv.setAttribute(\"data-name\",project.title)\n\n        const projectHeader = document.createElement(\"h3\")\n        projectHeader.textContent = project.title\n        projectHeader.setAttribute(\"data-name\",project.title)\n\n        // create a delete button\n        const deleteButton = document.createElement(\"button\")\n        deleteButton.classList.add(\"delete\")\n        const img = document.createElement(\"img\")\n        img.src = _icons_delete_svg__WEBPACK_IMPORTED_MODULE_0__\n        deleteButton.append(img)\n        deleteButton.hidden = true\n        \n\n        projectDiv.append(projectHeader,deleteButton)\n        projects.append(projectDiv)\n \n    });\n}\n\n// highlight active project\nconst highlightProject = (dataset) => {\n    if (dataset) {\n        // get the projects list by using dataset selector\n        let projects = []\n        document.querySelectorAll(`[data-name]`).forEach(element => {\n            if(element.className != \"project-card\") {\n                projects.push(element)\n            }\n        })\n        //projects = projects.filter(element => element.className != )\n        // get the active project\n        const activeProject = Array.from(projects).filter((project) => project.innerText == dataset)\n        // get the unactive projects\n        const unactiveProjects = Array.from(projects).filter((project) => project.innerText != dataset)\n\n        // highlight the active in blue and others in base white\n        activeProject[0].parentNode.style.backgroundColor = \"lightblue\"\n        activeProject[0].parentNode.classList.add(\"highlightproject\")\n        unactiveProjects.forEach(project => {\n            project.parentNode.style.backgroundColor = \"white\"\n            project.parentNode.classList.remove(\"highlightproject\")\n    })   \n    }\n}\n\n// show delete button to delete current project\nconst generateDelete = (dataset) => {\n    // get the projects list by using dataset selector\n    let projects = []\n    document.querySelectorAll(`[data-name]`).forEach(element => {\n        if(element.className != \"project-card\") {\n            projects.push(element)\n        }\n    })\n    if (dataset && dataset != \"All Tasks\") {\n        const activeProject = Array.from(projects).filter((project) => project.innerText == dataset)\n        const deleteButton = activeProject[0].lastChild;\n        console.log(deleteButton)\n        console.log(activeProject[0].lastChild)\n        deleteButton.hidden = false\n        \n        // get the unactive projects\n        const unactiveProjects = Array.from(projects).filter((project) => project.innerText != dataset)\n\n        // highlight the active in blue and others in base white\n        unactiveProjects.forEach(project => {\n           if(project.nextElementSibling) project.nextElementSibling.hidden = true\n        })   \n    } else if(dataset == \"All Tasks\"){\n        projects.forEach((project) => {if(project.nextElementSibling)  project.nextElementSibling.hidden = true}  )\n    }\n}\n\n\n// display project list in add task modal\nconst generateProjectsList = (todoList) => {\n    const projectInputs = document.querySelectorAll(\".parent-project\")\n    projectInputs.forEach(projectInput => {\n        projectInput.innerHTML = ''\n        const options = todoList.getProjects().map(project => project.title)\n        options.forEach(option => {\n            const optionTag = document.createElement(\"option\")\n            optionTag.innerText = option\n            projectInput.append(optionTag)\n        })\n    });\n}\n\n\n// display tasks\nconst displayTasks = (todoList) =>  {\n    \n    const tasks = document.querySelector(\".task-content\")\n    tasks.innerHTML = \"\"\n    todoList.getProjects().forEach(project => {\n        console.log(todoList.getSelectedProject())\n        if(project.title == todoList.getSelectedProject() || todoList.getSelectedProject() == \"All Tasks\"){\n            console.log(\"hello\")\n            project.getTasks().forEach((task) => {\n            \n                const taskDiv = document.createElement('div')\n                taskDiv.classList.add(\"task-div\")\n                taskDiv.setAttribute(\"data-project\",project.title)\n                taskDiv.setAttribute(\"data-id\",task.id)\n    \n                \n                // check task creation\n                const check = document.createElement(\"input\")\n                check.type = \"checkbox\"\n                check.classList.add(\"checkbox\")\n                check.setAttribute(\"data-project\",project.title)\n                check.setAttribute(\"data-id\",task.id)\n                check.checked = task.checked\n    \n                // task title header creation\n                const taskHeader = document.createElement(\"h2\")\n                taskHeader.innerText = task.title\n                taskHeader.setAttribute(\"data-project\",project.title)\n                taskHeader.setAttribute(\"data-id\",task.id)\n                \n                \n                // task left content div\n                const titleDiv = document.createElement(\"div\")\n                titleDiv.classList.add(\"title-div\")\n                titleDiv.append(check,taskHeader)\n    \n                // create task date element\n                const dueDate = document.createElement(\"p\")\n                dueDate.textContent = task.dueDate\n                // create an edit button\n                const editButton = document.createElement(\"button\")\n                editButton.classList.add(\"edit-task\")\n                editButton.innerText = \"Edit\"\n                editButton.setAttribute(\"data-project\",project.title)\n                editButton.setAttribute(\"data-id\",task.id)\n    \n                // create a delete button\n                const deleteButton = document.createElement(\"button\")\n                deleteButton.classList.add(\"delete-task\")\n                deleteButton.innerText = \"Delete\"\n                deleteButton.setAttribute(\"data-project\",project.title)\n    \n                const buttonsDiv = document.createElement(\"div\")\n                buttonsDiv.classList.add(\"buttons-div\")\n                buttonsDiv.append(dueDate,editButton,deleteButton)\n                \n    \n                taskDiv.append(titleDiv,buttonsDiv)\n                tasks.append(taskDiv)\n            })\n        }\n    });\n}\n\n// populate task modal\nconst populateShowTaskModal = (taskInfo) => {\n    document.querySelector(\"#show-title\").value = taskInfo[0].title\n    document.querySelector(\"#show-description\").value = taskInfo[0].description\n    document.querySelector(\"#show-due-date\").value = taskInfo[0].dueDate\n    document.querySelector(\"#show-parent-project\").value = taskInfo[0].parentProject\n    document.querySelector(\"#show-priority\").value = taskInfo[0].priority\n}\n\n\n// populate task modal\nconst populateEditTaskModal = (taskInfo) => {\n    console.log(taskInfo)\n    document.querySelector(\"#edit-task-id\").value = taskInfo[0].id\n    document.querySelector(\"#edit-task-title\").value = taskInfo[0].title\n    document.querySelector(\"#edit-task-description\").value = taskInfo[0].description\n    document.querySelector(\"#edit-due-date\").value = taskInfo[0].dueDate\n    document.querySelector(\"#edit-parent-project\").value = taskInfo[0].parentProject\n    document.querySelector(\"#edit-priority\").value = taskInfo[0].priority\n}\n\n\n\n//# sourceURL=webpack:///./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _project_listener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-listener */ \"./src/project-listener.js\");\n/* harmony import */ var _task_listener__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task-listener */ \"./src/task-listener.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _todo_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todo-list */ \"./src/todo-list.js\");\n\n\n\n\n\n\nconst displayFunction = () =>  {\n    //localStorage.clear()\n    const todoList = new _todo_list__WEBPACK_IMPORTED_MODULE_4__[\"default\"](JSON.parse(localStorage.getItem(\"projects\")))\n\n    // dom creations\n    ;(0,_dom__WEBPACK_IMPORTED_MODULE_3__.displayProjects)(todoList);\n    (0,_dom__WEBPACK_IMPORTED_MODULE_3__.displayTasks)(todoList)\n    \n    // event listeners\n    ;(0,_project_listener__WEBPACK_IMPORTED_MODULE_1__.addProjectListener)(todoList);\n    (0,_project_listener__WEBPACK_IMPORTED_MODULE_1__.projectFormListener)(todoList);\n    (0,_project_listener__WEBPACK_IMPORTED_MODULE_1__.selectedProjectListener)(todoList);\n    (0,_project_listener__WEBPACK_IMPORTED_MODULE_1__.deleteProjectListener)(todoList);\n    (0,_task_listener__WEBPACK_IMPORTED_MODULE_2__.addTaskListener)(todoList);\n    (0,_task_listener__WEBPACK_IMPORTED_MODULE_2__.taskFormListener)(todoList);\n    (0,_task_listener__WEBPACK_IMPORTED_MODULE_2__.deleteTaskListener)(todoList);\n    (0,_task_listener__WEBPACK_IMPORTED_MODULE_2__.openTaskListener)(todoList);\n    (0,_task_listener__WEBPACK_IMPORTED_MODULE_2__.editTaskListener)(todoList);\n    (0,_task_listener__WEBPACK_IMPORTED_MODULE_2__.checkboxListener)(todoList);\n}\n\n\n\ndisplayFunction();\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/project-listener.js":
/*!*********************************!*\
  !*** ./src/project-listener.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addProjectListener: () => (/* binding */ addProjectListener),\n/* harmony export */   deleteProjectListener: () => (/* binding */ deleteProjectListener),\n/* harmony export */   projectFormListener: () => (/* binding */ projectFormListener),\n/* harmony export */   selectedProjectListener: () => (/* binding */ selectedProjectListener)\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\nconst addProjectListener = (todoList) =>  {\n    const addbutton = document.querySelector(\".add-project-button\")\n    const dialog = document.querySelector(\".add-project-modal\")\n    addbutton.addEventListener(\"click\", (e) => {\n        dialog.showModal();\n        e.stopImmediatePropagation();\n       } \n    )\n}\n\nconst projectFormListener = (todoList) => {\n    const cancelButton = document.querySelector(\".close-button\")\n    const submitButton = document.querySelector(\".submit-button\")\n    const dialog = document.querySelector(\".add-project-modal\")\n    const form = document.querySelector(\".form\")\n\n    cancelButton.addEventListener(\"click\", (e) => {\n        e.preventDefault()\n        dialog.close();\n    })\n    \n    submitButton.addEventListener(\"click\", (e) => {\n        e.preventDefault()\n        const formData = new FormData(form)\n        todoList.addProject(Object.fromEntries(formData))\n        ;(0,_dom__WEBPACK_IMPORTED_MODULE_0__.displayTasks)(todoList);\n        (0,_dom__WEBPACK_IMPORTED_MODULE_0__.displayProjects)(todoList);\n        dialog.close();\n    })\n}\n\nconst selectedProjectListener = (todoList) => {\n    const projectsList = document.querySelector(\".left-content\")\n    projectsList.addEventListener(\"click\", (e) => {\n        console.log(\"switch should happen\")\n        console.log(e.target)\n        if(e.target.innerText != \"Projects\"){\n            todoList.selectProject(e.target.getAttribute(\"data-name\"))\n            ;(0,_dom__WEBPACK_IMPORTED_MODULE_0__.highlightProject)(e.target.getAttribute(\"data-name\"))\n            ;(0,_dom__WEBPACK_IMPORTED_MODULE_0__.generateDelete)(e.target.getAttribute(\"data-name\"))\n            ;(0,_dom__WEBPACK_IMPORTED_MODULE_0__.displayTasks)(todoList);\n        }\n        })\n}\n\nconst deleteProjectListener = (todoList) =>  {\n    const projects = document.querySelector(\".projects\")\n    projects.addEventListener(\"click\", (e) => {\n        if(e.target.parentNode.className == \"delete\"){\n            console.log(e.target.parentNode)\n            const projectToDelete = e.target.parentNode.previousSibling.innerText\n            todoList.removeProject(projectToDelete)\n            ;(0,_dom__WEBPACK_IMPORTED_MODULE_0__.displayProjects)(todoList)\n        }\n    })\n}\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/project-listener.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n\nclass Project {\n    constructor(projectInfo){\n        this.title = projectInfo.title\n        this.description = projectInfo.description\n        this.tasks = []\n        if(projectInfo.tasks){\n            projectInfo.tasks.forEach(task => {\n                this.tasks.push(new _task__WEBPACK_IMPORTED_MODULE_0__[\"default\"](task))\n            });\n        }\n    }\n\n    getTasks(){\n        return this.tasks\n    }\n\n    // get specific project by name\n    getTaskById(taskId){\n        let task = this.tasks.filter((task) => task.id == taskId)\n        return task\n    }\n\n    addTask(taskInfo, projects) {\n        // adding a unique id to tasks for editing purposes\n        taskInfo.id = Math.random()\n        console.log(taskInfo)\n        this.tasks.push(new _task__WEBPACK_IMPORTED_MODULE_0__[\"default\"](taskInfo))\n        localStorage.setItem(\"projects\",JSON.stringify(projects))\n        console.log(JSON.parse(localStorage.getItem(\"projects\")))\n    }\n\n    removeTask(removedTask, projects){\n        this.tasks = this.tasks.filter((task) => task.title != removedTask)\n        localStorage.setItem(\"projects\",JSON.stringify(projects))\n    }\n\n    editTask(task,projects){\n        let newtask = task\n        newtask.id = Number(task.id)\n        console.log(this.tasks)\n        this.tasks = this.tasks.map( task => {\n            if(task.id == newtask.id) return new _task__WEBPACK_IMPORTED_MODULE_0__[\"default\"](newtask)\n            else return task\n        }\n        )\n        console.log(this.tasks)\n        localStorage.setItem(\"projects\",JSON.stringify(projects))\n    }\n    \n    checkTask(id,check,projects){\n        this.tasks.forEach(task => { if(task.id == id) task.checked = check})\n        localStorage.setItem(\"projects\",JSON.stringify(projects))\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\n\n//# sourceURL=webpack:///./src/project.js?");

/***/ }),

/***/ "./src/task-listener.js":
/*!******************************!*\
  !*** ./src/task-listener.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addTaskListener: () => (/* binding */ addTaskListener),\n/* harmony export */   checkboxListener: () => (/* binding */ checkboxListener),\n/* harmony export */   deleteTaskListener: () => (/* binding */ deleteTaskListener),\n/* harmony export */   editTaskListener: () => (/* binding */ editTaskListener),\n/* harmony export */   openTaskListener: () => (/* binding */ openTaskListener),\n/* harmony export */   taskFormListener: () => (/* binding */ taskFormListener)\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\n\nconst addTaskListener = (todoList) =>  {\n    const addbutton = document.querySelector(\".add-task-button\")\n    const dialog = document.querySelector(\".add-task-modal\")\n    addbutton.addEventListener(\"click\", (e) => {\n        ;(0,_dom__WEBPACK_IMPORTED_MODULE_0__.generateProjectsList)(todoList);\n        dialog.showModal()\n    })\n}\n\n\nconst taskFormListener = (todoList) => {\n    const cancelButton = document.querySelector(\".task-close-button\")\n    const viewTaskcancelButton = document.querySelector(\".view-task-close-button\")\n    const editCancelButton = document.querySelector(\".edit-task-close-button\")\n\n    const submitButton = document.querySelector(\".task-submit-button\")\n    const editSubmitButton =  document.querySelector(\".edit-task-submit-button\")\n\n\n    // modals add, view and edit\n    const dialog = document.querySelector(\".add-task-modal\")\n    const viewDialog = document.querySelector(\".open-task-modal\")\n    const editDialog = document.querySelector(\".edit-task-modal\")\n\n    // forms\n    const form = document.querySelector(\".task-form\")\n    const editForm = document.querySelector(\".edit-task-form\")\n\n\n    cancelButton.addEventListener(\"click\", (e) => {\n        e.preventDefault()\n        dialog.close();\n    })\n\n    viewTaskcancelButton.addEventListener(\"click\", (e) => {\n        e.preventDefault()\n        viewDialog.close();\n    })\n\n    editCancelButton.addEventListener(\"click\", (e) => {\n        console.log(\"click me\")\n        e.preventDefault()\n        editDialog.close();\n    })\n    \n    submitButton.addEventListener(\"click\", (e) => {\n        e.preventDefault()\n        const formData = new FormData(form)\n        const parentProject = todoList.getProjectByName(Object.fromEntries(formData)['parentProject'])\n        parentProject[0].addTask(Object.fromEntries(formData),todoList.getProjects())\n        ;(0,_dom__WEBPACK_IMPORTED_MODULE_0__.displayTasks)(todoList);\n        form.reset();\n        dialog.close();\n    })\n\n    editSubmitButton.addEventListener(\"click\", (e) => {\n        e.preventDefault()\n        const formData = new FormData(editForm)\n        console.log(Object.fromEntries(formData))\n        //const parentProject = todoList.getProjectByName(Object.fromEntries(formData)['parentProject'])\n        todoList.getProjects().forEach(project => {\n            project.getTasks().forEach(task => {\n                if(task.id == Object.fromEntries(formData).id) project.editTask(Object.fromEntries(formData),todoList.getProjects())\n            })\n        });\n        (0,_dom__WEBPACK_IMPORTED_MODULE_0__.displayTasks)(todoList);\n        editDialog.close();\n    })\n}\n\n\n\nconst deleteTaskListener = (todoList) =>  {\n    \n    const tasks = document.querySelector(\".task-content\")\n    tasks.addEventListener(\"click\", (e) => {\n        if(e.target.className == \"delete-task\"){\n            console.log(e.target.previousSibling.innerText)\n            const taskToDelete = e.target.parentNode.previousSibling.innerText\n            const parentProject = e.target.getAttribute(\"data-project\")\n            todoList.getProjectByName(parentProject)[0].removeTask(taskToDelete,todoList.getProjects())\n            ;(0,_dom__WEBPACK_IMPORTED_MODULE_0__.displayTasks)(todoList)\n        }\n    })\n}\n\nconst openTaskListener = (todoList) =>  {\n    const taskContent = document.querySelector(\".task-content\")\n    const dialog = document.querySelector(\".open-task-modal\")\n    taskContent.addEventListener(\"click\", (e) => {\n            if(e.target.className == \"task-div\" || e.target.tagName == \"H2\"){\n                const parentProject = todoList.getProjectByName(e.target.getAttribute(\"data-project\")) \n                const taskInfo = parentProject[0].getTaskById(e.target.getAttribute(\"data-id\"))\n                // populating the modal\n                ;(0,_dom__WEBPACK_IMPORTED_MODULE_0__.generateProjectsList)(todoList);\n                (0,_dom__WEBPACK_IMPORTED_MODULE_0__.populateShowTaskModal)(taskInfo);\n                dialog.showModal()\n            }\n        })\n}\n\nconst editTaskListener = (todoList) =>  {\n    const taskContent = document.querySelector(\".task-content\")\n    const dialog = document.querySelector(\".edit-task-modal\")\n    taskContent.addEventListener(\"click\", (e) => {\n            if(e.target.className == \"edit-task\"){\n                console.log(e.target)\n                const parentProject = todoList.getProjectByName(e.target.getAttribute(\"data-project\")) \n                console.log(parentProject)\n                const taskInfo = parentProject[0].getTaskById(e.target.getAttribute(\"data-id\"))\n                // populating the modal\n                ;(0,_dom__WEBPACK_IMPORTED_MODULE_0__.generateProjectsList)(todoList);\n                (0,_dom__WEBPACK_IMPORTED_MODULE_0__.populateEditTaskModal)(taskInfo);\n                dialog.showModal()\n            }\n        })\n}\n\nconst checkboxListener = (todoList) => {\n    const taskContent = document.querySelector(\".task-content\")\n    taskContent.addEventListener(\"click\", (e) => {\n        if(e.target.className == \"checkbox\"){\n            console.log(e.target.checked)\n            const parentProject = todoList.getProjectByName(e.target.getAttribute(\"data-project\")) \n            parentProject[0].checkTask(e.target.getAttribute(\"data-id\"),e.target.checked,todoList.getProjects())\n        }\n    })\n}\n\n\n\n//# sourceURL=webpack:///./src/task-listener.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Task {\n    constructor(taskInfo){\n        this.title = taskInfo.title\n        this.description = taskInfo.description\n        this.dueDate = taskInfo.dueDate\n        this.parentProject = taskInfo.parentProject\n        this.priority = taskInfo.priority\n        this.id = taskInfo.id\n        \n        if(taskInfo.checked) this.checked = taskInfo.checked\n        else this.checked = false\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/task.js?");

/***/ }),

/***/ "./src/todo-list.js":
/*!**************************!*\
  !*** ./src/todo-list.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n\nclass TodoList {\n    constructor(projects){\n        this.projects = []\n        if(projects){\n            projects.forEach(project => {\n                this.addProject(project)\n            });\n        }\n        this.selectedProject =  \"All Tasks\"\n    }\n\n    // projects getter\n    getProjects(){\n        return this.projects\n    }\n\n    // get specific project by name\n    getProjectByName(projectName){\n        let project = this.projects.filter((project) => project.title == projectName)\n        return project\n    }\n\n    addProject(projectInfo){\n        this.projects.push(new _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](projectInfo))\n        localStorage.setItem(\"projects\",JSON.stringify(this.projects))\n    }\n    \n\n    removeProject(removedProjectName){\n        this.projects = this.projects.filter((project) => project.title != removedProjectName)\n        localStorage.setItem(\"projects\",JSON.stringify(this.projects))\n    }\n\n    selectProject(project){\n        this.selectedProject = project\n    }\n    \n    getSelectedProject(){\n        return this.selectedProject\n    }\n    \n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoList);\n\n//# sourceURL=webpack:///./src/todo-list.js?");

/***/ }),

/***/ "./src/icons/delete.svg":
/*!******************************!*\
  !*** ./src/icons/delete.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9c9be50e9056d94345cd.svg\";\n\n//# sourceURL=webpack:///./src/icons/delete.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;