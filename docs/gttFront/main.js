(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/api.service.ts":
/*!********************************!*\
  !*** ./src/app/api.service.ts ***!
  \********************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ApiService = /** @class */ (function () {
    //guardar user de jira en el back
    //   editJiraUser(userJira: UserJira){
    //     return this.http.put('/api/jira/'+localStorage.getItem('idJira'),userJira).toPromise();
    //   }
    //
    function ApiService(http) {
        this.http = http;
        this.baseurl = 'https://localhost:5001';
    }
    //control del registro por el backend
    ApiService.prototype.register = function (username, password, email) {
        var body = { username: username, password: password, email: email };
        return this.http.post('/api/users', body).toPromise();
    };
    //control del login por el back
    ApiService.prototype.login = function (username, password) {
        var body = { username: username, password: password };
        return this.http.post('/api/auth', body)
            .toPromise();
    };
    //Cargar user de jira loggeado
    ApiService.prototype.getUserJiraData = function () {
        return this.http.get('/api/jira/' + localStorage.getItem('id')).toPromise();
    };
    //obtener la id del user loggeado
    ApiService.prototype.getIdLoggedUser = function () {
        return localStorage.getItem('id');
    };
    //obtiene la id del jira del usuario loggeado
    ApiService.prototype.getJiraIDLoggedUser = function () {
        return localStorage.getItem('idJira');
    };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_view_login_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-view/login-view.component */ "./src/app/login-view/login-view.component.ts");
/* harmony import */ var _register_view_register_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register-view/register-view.component */ "./src/app/register-view/register-view.component.ts");
/* harmony import */ var _certificates_view_certificates_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./certificates-view/certificates-view.component */ "./src/app/certificates-view/certificates-view.component.ts");
/* harmony import */ var _jira_view_jira_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./jira-view/jira-view.component */ "./src/app/jira-view/jira-view.component.ts");







var routes = [
    {
        path: 'login',
        component: _login_view_login_view_component__WEBPACK_IMPORTED_MODULE_3__["LoginViewComponent"]
    },
    {
        path: 'register',
        component: _register_view_register_view_component__WEBPACK_IMPORTED_MODULE_4__["RegisterViewComponent"],
    },
    {
        path: 'certificados',
        component: _certificates_view_certificates_view_component__WEBPACK_IMPORTED_MODULE_5__["CertificatesViewComponent"],
    },
    {
        path: 'jira',
        component: _jira_view_jira_view_component__WEBPACK_IMPORTED_MODULE_6__["JiraViewComponent"],
    },
    { path: '**',
        redirectTo: 'login',
        pathMatch: 'full',
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-attachment: fixed; \r\n    background-position: center;\r\n    background-position:50% 50%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLDRCQUE0QjtJQUM1QiwyQkFBMkI7SUFDM0IsMkJBQTJCO0FBQy9CIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkOyBcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246NTAlIDUwJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n<img class=\"logo\" src=\"assets/abs.jpg\" alt=\"Trello Clone App\">\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'gttFront';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _general_navbar_general_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./general-navbar/general-navbar.component */ "./src/app/general-navbar/general-navbar.component.ts");
/* harmony import */ var _user_navbar_user_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-navbar/user-navbar.component */ "./src/app/user-navbar/user-navbar.component.ts");
/* harmony import */ var _register_view_register_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register-view/register-view.component */ "./src/app/register-view/register-view.component.ts");
/* harmony import */ var _login_view_login_view_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login-view/login-view.component */ "./src/app/login-view/login-view.component.ts");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./api.service */ "./src/app/api.service.ts");
/* harmony import */ var _jira_view_jira_view_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./jira-view/jira-view.component */ "./src/app/jira-view/jira-view.component.ts");
/* harmony import */ var _certificates_view_certificates_view_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./certificates-view/certificates-view.component */ "./src/app/certificates-view/certificates-view.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _general_navbar_general_navbar_component__WEBPACK_IMPORTED_MODULE_6__["GeneralNavbarComponent"],
                _user_navbar_user_navbar_component__WEBPACK_IMPORTED_MODULE_7__["UserNavbarComponent"],
                _register_view_register_view_component__WEBPACK_IMPORTED_MODULE_8__["RegisterViewComponent"],
                _login_view_login_view_component__WEBPACK_IMPORTED_MODULE_9__["LoginViewComponent"],
                _jira_view_jira_view_component__WEBPACK_IMPORTED_MODULE_11__["JiraViewComponent"],
                _certificates_view_certificates_view_component__WEBPACK_IMPORTED_MODULE_12__["CertificatesViewComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"]
            ],
            providers: [_api_service__WEBPACK_IMPORTED_MODULE_10__["ApiService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/certificates-view/certificates-view.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/certificates-view/certificates-view.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NlcnRpZmljYXRlcy12aWV3L2NlcnRpZmljYXRlcy12aWV3LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/certificates-view/certificates-view.component.html":
/*!********************************************************************!*\
  !*** ./src/app/certificates-view/certificates-view.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  certificates-view works!\n</p>\n"

/***/ }),

/***/ "./src/app/certificates-view/certificates-view.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/certificates-view/certificates-view.component.ts ***!
  \******************************************************************/
/*! exports provided: CertificatesViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertificatesViewComponent", function() { return CertificatesViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CertificatesViewComponent = /** @class */ (function () {
    function CertificatesViewComponent() {
    }
    CertificatesViewComponent.prototype.ngOnInit = function () {
    };
    CertificatesViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-certificates-view',
            template: __webpack_require__(/*! ./certificates-view.component.html */ "./src/app/certificates-view/certificates-view.component.html"),
            styles: [__webpack_require__(/*! ./certificates-view.component.css */ "./src/app/certificates-view/certificates-view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CertificatesViewComponent);
    return CertificatesViewComponent;
}());



/***/ }),

/***/ "./src/app/general-navbar/general-navbar.component.css":
/*!*************************************************************!*\
  !*** ./src/app/general-navbar/general-navbar.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\r\n    padding: 1em;\r\n    display: flex;\r\n    justify-content: space-around;\r\n    background: linear-gradient(to left, #057ffa, #47f701);\r\n    /* // background-image: url(\"/assets/bg_space.png\");\r\n    // background-size: cover;\r\n    // background-repeat: no-repeat;\r\n    // background-attachment: fixed; \r\n    // background-position: center;\r\n    // background-position:50% 50%; */\r\n}\r\nnav a {\r\n      color: white;\r\n      margin: 1em;\r\n      text-decoration: none;\r\n      font-weight: bold;\r\n    }\r\nnav .active {\r\n      border-bottom: dotted 1px black;\r\n      border-top: dotted 1px black;\r\n      /* // padding-top: 2px; */\r\n    }\r\nnav .logo{\r\n        align-self: flex-start;\r\n        margin-left: 20px;\r\n    }\r\n.login, .register {\r\n    padding: 5px;\r\n} \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2VuZXJhbC1uYXZiYXIvZ2VuZXJhbC1uYXZiYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLHNEQUFzRDtJQUN0RDs7Ozs7cUNBS2lDO0FBQ3JDO0FBQ0E7TUFDTSxZQUFZO01BQ1osV0FBVztNQUNYLHFCQUFxQjtNQUNyQixpQkFBaUI7SUFDbkI7QUFDSjtNQUNNLCtCQUErQjtNQUMvQiw0QkFBNEI7TUFDNUIseUJBQXlCO0lBQzNCO0FBRUo7UUFDUSxzQkFBc0I7UUFDdEIsaUJBQWlCO0lBQ3JCO0FBQ0o7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvZ2VuZXJhbC1uYXZiYXIvZ2VuZXJhbC1uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm5hdiB7XHJcbiAgICBwYWRkaW5nOiAxZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzA1N2ZmYSwgIzQ3ZjcwMSk7XHJcbiAgICAvKiAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2JnX3NwYWNlLnBuZ1wiKTtcclxuICAgIC8vIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgLy8gYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDsgXHJcbiAgICAvLyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLXBvc2l0aW9uOjUwJSA1MCU7ICovXHJcbn1cclxubmF2IGEge1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIG1hcmdpbjogMWVtO1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG5uYXYgLmFjdGl2ZSB7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IGRvdHRlZCAxcHggYmxhY2s7XHJcbiAgICAgIGJvcmRlci10b3A6IGRvdHRlZCAxcHggYmxhY2s7XHJcbiAgICAgIC8qIC8vIHBhZGRpbmctdG9wOiAycHg7ICovXHJcbiAgICB9XHJcblxyXG5uYXYgLmxvZ297XHJcbiAgICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIH1cclxuLmxvZ2luLCAucmVnaXN0ZXIge1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59ICJdfQ== */"

/***/ }),

/***/ "./src/app/general-navbar/general-navbar.component.html":
/*!**************************************************************!*\
  !*** ./src/app/general-navbar/general-navbar.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"logo\">\n    <img src=\"../../assets/gttlogo.png\" alt=\"Logo GTT\">\n</div>\n<nav>\n  \n  <a class=\"login\" routerLink=\"/login\" routerLinkActive=\"active\">Login</a> \n  <a class=\"register\" routerLink=\"/register\" routerLinkActive=\"active\">Register</a>\n \n</nav>"

/***/ }),

/***/ "./src/app/general-navbar/general-navbar.component.ts":
/*!************************************************************!*\
  !*** ./src/app/general-navbar/general-navbar.component.ts ***!
  \************************************************************/
/*! exports provided: GeneralNavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralNavbarComponent", function() { return GeneralNavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GeneralNavbarComponent = /** @class */ (function () {
    function GeneralNavbarComponent() {
    }
    GeneralNavbarComponent.prototype.ngOnInit = function () {
    };
    GeneralNavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-general-navbar',
            template: __webpack_require__(/*! ./general-navbar.component.html */ "./src/app/general-navbar/general-navbar.component.html"),
            styles: [__webpack_require__(/*! ./general-navbar.component.css */ "./src/app/general-navbar/general-navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GeneralNavbarComponent);
    return GeneralNavbarComponent;
}());



/***/ }),

/***/ "./src/app/jira-view/jira-view.component.css":
/*!***************************************************!*\
  !*** ./src/app/jira-view/jira-view.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ppcmEtdmlldy9qaXJhLXZpZXcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/jira-view/jira-view.component.html":
/*!****************************************************!*\
  !*** ./src/app/jira-view/jira-view.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  jira-view works!\n</p>\n"

/***/ }),

/***/ "./src/app/jira-view/jira-view.component.ts":
/*!**************************************************!*\
  !*** ./src/app/jira-view/jira-view.component.ts ***!
  \**************************************************/
/*! exports provided: JiraViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JiraViewComponent", function() { return JiraViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var JiraViewComponent = /** @class */ (function () {
    function JiraViewComponent() {
    }
    JiraViewComponent.prototype.ngOnInit = function () {
    };
    JiraViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-jira-view',
            template: __webpack_require__(/*! ./jira-view.component.html */ "./src/app/jira-view/jira-view.component.html"),
            styles: [__webpack_require__(/*! ./jira-view.component.css */ "./src/app/jira-view/jira-view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], JiraViewComponent);
    return JiraViewComponent;
}());



/***/ }),

/***/ "./src/app/login-view/login-view.component.css":
/*!*****************************************************!*\
  !*** ./src/app/login-view/login-view.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n* {\r\n    margin: 0;\r\n      padding: 0;\r\n    font-family: tahoma, sans-serif;\r\n    box-sizing: border-box;\r\n    }\r\n  \r\n  .box {\r\n      box-sizing: border-box;\r\n      position: absolute;\r\n      top: 60%;\r\n      left: 50%;\r\n      -webkit-transform: translate(-50%, -50%);\r\n              transform: translate(-50%, -50%);\r\n      width: 450px; \r\n      padding: 40px;\r\n      background: rgba(0, 0, 0, 0.8);\r\n      box-shadow: 0 15px 25px rgba(0, 0, 0, 0.5);\r\n      border-radius: 10px;\r\n  }\r\n  \r\n  .box h2 {\r\n      margin: 0 0 30px;\r\n      padding: 0;\r\n      color: #fff;\r\n      text-align: center;\r\n  }\r\n  \r\n  .box .inputBox {\r\n      position: relative;\r\n  }\r\n  \r\n  .box .inputBox input {\r\n      width: 100%;\r\n      padding: 10px 0;\r\n      font-size: 16px;\r\n      color: #fff;\r\n      letter-spacing: 2px;\r\n      margin-bottom: 30px;\r\n      border: none;\r\n      border-bottom: 1px solid #fff; \r\n      outline: none;\r\n      background: transparent;\r\n  \r\n  }\r\n  \r\n  .box .inputBox label {\r\n      position: absolute;\r\n      top: 0;\r\n      left: 0;\r\n      padding: 10px 0;\r\n      font-size: 16px;\r\n      color: #fff;\r\n      pointer-events: none;\r\n      transition: 0.5s;\r\n  }\r\n  \r\n  .box .inputBox input:focus ~ label {\r\n      top: -18px;\r\n      left: 0;\r\n      color: #03a9f4;\r\n      font-size: 12px;\r\n  }\r\n  \r\n  .box .inputBox input:valid ~ label {\r\n    top: -23px;\r\n      left: 0;\r\n      color: #03a9f4;\r\n      font-size: 12px;\r\n  \r\n  }\r\n  \r\n  .box input[type=\"submit\"] {\r\n      cursor: pointer;\r\n      background: transparent;\r\n      border: none;\r\n      outline: none;\r\n      color: #fff;\r\n      background: #03a9f4;\r\n      padding: 10px 20px;\r\n      border-radius: 5px;\r\n  \r\n  \r\n  }\r\n    \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4tdmlldy9sb2dpbi12aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksU0FBUztNQUNQLFVBQVU7SUFDWiwrQkFBK0I7SUFDL0Isc0JBQXNCO0lBQ3RCOztFQUVGO01BQ0ksc0JBQXNCO01BQ3RCLGtCQUFrQjtNQUNsQixRQUFRO01BQ1IsU0FBUztNQUNULHdDQUFnQztjQUFoQyxnQ0FBZ0M7TUFDaEMsWUFBWTtNQUNaLGFBQWE7TUFDYiw4QkFBOEI7TUFDOUIsMENBQTBDO01BQzFDLG1CQUFtQjtFQUN2Qjs7RUFFQTtNQUNJLGdCQUFnQjtNQUNoQixVQUFVO01BQ1YsV0FBVztNQUNYLGtCQUFrQjtFQUN0Qjs7RUFFQTtNQUNJLGtCQUFrQjtFQUN0Qjs7RUFFQTtNQUNJLFdBQVc7TUFDWCxlQUFlO01BQ2YsZUFBZTtNQUNmLFdBQVc7TUFDWCxtQkFBbUI7TUFDbkIsbUJBQW1CO01BQ25CLFlBQVk7TUFDWiw2QkFBNkI7TUFDN0IsYUFBYTtNQUNiLHVCQUF1Qjs7RUFFM0I7O0VBRUE7TUFDSSxrQkFBa0I7TUFDbEIsTUFBTTtNQUNOLE9BQU87TUFDUCxlQUFlO01BQ2YsZUFBZTtNQUNmLFdBQVc7TUFDWCxvQkFBb0I7TUFDcEIsZ0JBQWdCO0VBQ3BCOztFQUVBO01BQ0ksVUFBVTtNQUNWLE9BQU87TUFDUCxjQUFjO01BQ2QsZUFBZTtFQUNuQjs7RUFFQTtJQUNFLFVBQVU7TUFDUixPQUFPO01BQ1AsY0FBYztNQUNkLGVBQWU7O0VBRW5COztFQUVBO01BQ0ksZUFBZTtNQUNmLHVCQUF1QjtNQUN2QixZQUFZO01BQ1osYUFBYTtNQUNiLFdBQVc7TUFDWCxtQkFBbUI7TUFDbkIsa0JBQWtCO01BQ2xCLGtCQUFrQjs7O0VBR3RCIiwiZmlsZSI6InNyYy9hcHAvbG9naW4tdmlldy9sb2dpbi12aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuKiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICBmb250LWZhbWlseTogdGFob21hLCBzYW5zLXNlcmlmO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIH1cclxuICBcclxuICAuYm94IHtcclxuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDYwJTtcclxuICAgICAgbGVmdDogNTAlO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgd2lkdGg6IDQ1MHB4OyBcclxuICAgICAgcGFkZGluZzogNDBweDtcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG4gICAgICBib3gtc2hhZG93OiAwIDE1cHggMjVweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5ib3ggaDIge1xyXG4gICAgICBtYXJnaW46IDAgMCAzMHB4O1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAuYm94IC5pbnB1dEJveCB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgXHJcbiAgLmJveCAuaW5wdXRCb3ggaW5wdXQge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmOyBcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gIC5ib3ggLmlucHV0Qm94IGxhYmVsIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgfVxyXG4gIFxyXG4gIC5ib3ggLmlucHV0Qm94IGlucHV0OmZvY3VzIH4gbGFiZWwge1xyXG4gICAgICB0b3A6IC0xOHB4O1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICBjb2xvcjogIzAzYTlmNDtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuICBcclxuICAuYm94IC5pbnB1dEJveCBpbnB1dDp2YWxpZCB+IGxhYmVsIHtcclxuICAgIHRvcDogLTIzcHg7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIGNvbG9yOiAjMDNhOWY0O1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gIC5ib3ggaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMwM2E5ZjQ7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIFxyXG4gIFxyXG4gIH1cclxuICAgICJdfQ== */"

/***/ }),

/***/ "./src/app/login-view/login-view.component.html":
/*!******************************************************!*\
  !*** ./src/app/login-view/login-view.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-general-navbar></app-general-navbar>\n<div class=\"box\">\n\t\t<h2>Login</h2>\n\t\t<form class=\"bg\"  (submit)=\"login()\">\n\t\t\t<div class=\"inputBox\">\n\t\t\t\t<input type=\"text\" [(ngModel)]=\"username\" name=\"username\" required=\"\">\n\t\t\t\t<label>Username</label>\t\t\t\t\n\t\t\t</div>\n\t\t\t<div class=\"inputBox\">\n\t\t\t\t<input type=\"password\" [(ngModel)]=\"password\" name=\"password\" required=\"\">\n\t\t\t\t<label>Password</label>\t\t\t\t\n\t\t\t</div>\n\t\t\t<input type=\"submit\" value=\"Login\">\n\t\t\t<div *ngIf=\"error\">{{ error | json }}</div>\n\t\t</form>\n  </div>"

/***/ }),

/***/ "./src/app/login-view/login-view.component.ts":
/*!****************************************************!*\
  !*** ./src/app/login-view/login-view.component.ts ***!
  \****************************************************/
/*! exports provided: LoginViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginViewComponent", function() { return LoginViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");




var LoginViewComponent = /** @class */ (function () {
    function LoginViewComponent(api, router) {
        this.api = api;
        this.router = router;
    }
    LoginViewComponent.prototype.login = function () {
        var _this = this;
        var _a = this, username = _a.username, password = _a.password;
        if (this.username.trim() !== '' && password.trim() !== '') {
            this.api.
                login(username.trim(), password.trim())
                .then(function (response) {
                console.log(response);
                if (response.status === 400) {
                    _this.error = response.error;
                    _this.username = '';
                    _this.password = '';
                }
                else {
                    _this.router.navigate(['/jira']);
                    console.log("id a guardar: " + response.user_id);
                    localStorage.setItem('id', response.user_id);
                }
            })
                .catch(function (error) {
                console.log('cach', error);
                _this.error = error;
            });
            this.password = '';
            this.username = '';
        }
    };
    LoginViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-view',
            template: __webpack_require__(/*! ./login-view.component.html */ "./src/app/login-view/login-view.component.html"),
            styles: [__webpack_require__(/*! ./login-view.component.css */ "./src/app/login-view/login-view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginViewComponent);
    return LoginViewComponent;
}());



/***/ }),

/***/ "./src/app/register-view/register-view.component.css":
/*!***********************************************************!*\
  !*** ./src/app/register-view/register-view.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n* {\r\n    margin: 0;\r\n      padding: 0;\r\n    font-family: tahoma, sans-serif;\r\n    box-sizing: border-box;\r\n    }\r\n  \r\n  .box {\r\n      box-sizing: border-box;\r\n      position: absolute;\r\n      top: 60%;\r\n      left: 50%;\r\n      -webkit-transform: translate(-50%, -50%);\r\n              transform: translate(-50%, -50%);\r\n      width: 450px; \r\n      padding: 40px;\r\n      background: rgba(0, 0, 0, 0.8);\r\n      box-shadow: 0 15px 25px rgba(0, 0, 0, 0.5);\r\n      border-radius: 10px;\r\n  }\r\n  \r\n  .box h2 {\r\n      margin: 0 0 30px;\r\n      padding: 0;\r\n      color: #fff;\r\n      text-align: center;\r\n  }\r\n  \r\n  .box .inputBox {\r\n      position: relative;\r\n  }\r\n  \r\n  .box .inputBox input {\r\n      width: 100%;\r\n      padding: 10px 0;\r\n      font-size: 16px;\r\n      color: #fff;\r\n      letter-spacing: 2px;\r\n      margin-bottom: 30px;\r\n      border: none;\r\n      border-bottom: 1px solid #fff; \r\n      outline: none;\r\n      background: transparent;\r\n  \r\n  }\r\n  \r\n  .box .inputBox label {\r\n      position: absolute;\r\n      top: 0;\r\n      left: 0;\r\n      padding: 10px 0;\r\n      font-size: 16px;\r\n      color: #fff;\r\n      pointer-events: none;\r\n      transition: 0.5s;\r\n  }\r\n  \r\n  .box .inputBox input:focus ~ label {\r\n      top: -18px;\r\n      left: 0;\r\n      color: #03a9f4;\r\n      font-size: 12px;\r\n  }\r\n  \r\n  .box .inputBox input:valid ~ label {\r\n    top: -24px;\r\n      left: 0;\r\n      color: #03a9f4;\r\n      font-size: 12px;\r\n  \r\n  }\r\n  \r\n  .box input[type=\"submit\"] {\r\n      cursor: pointer;\r\n      background: transparent;\r\n      border: none;\r\n      outline: none;\r\n      color: #fff;\r\n      background: #03a9f4;\r\n      padding: 10px 20px;\r\n      border-radius: 5px;\r\n  \r\n  \r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXItdmlldy9yZWdpc3Rlci12aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksU0FBUztNQUNQLFVBQVU7SUFDWiwrQkFBK0I7SUFDL0Isc0JBQXNCO0lBQ3RCOztFQUVGO01BQ0ksc0JBQXNCO01BQ3RCLGtCQUFrQjtNQUNsQixRQUFRO01BQ1IsU0FBUztNQUNULHdDQUFnQztjQUFoQyxnQ0FBZ0M7TUFDaEMsWUFBWTtNQUNaLGFBQWE7TUFDYiw4QkFBOEI7TUFDOUIsMENBQTBDO01BQzFDLG1CQUFtQjtFQUN2Qjs7RUFFQTtNQUNJLGdCQUFnQjtNQUNoQixVQUFVO01BQ1YsV0FBVztNQUNYLGtCQUFrQjtFQUN0Qjs7RUFFQTtNQUNJLGtCQUFrQjtFQUN0Qjs7RUFFQTtNQUNJLFdBQVc7TUFDWCxlQUFlO01BQ2YsZUFBZTtNQUNmLFdBQVc7TUFDWCxtQkFBbUI7TUFDbkIsbUJBQW1CO01BQ25CLFlBQVk7TUFDWiw2QkFBNkI7TUFDN0IsYUFBYTtNQUNiLHVCQUF1Qjs7RUFFM0I7O0VBRUE7TUFDSSxrQkFBa0I7TUFDbEIsTUFBTTtNQUNOLE9BQU87TUFDUCxlQUFlO01BQ2YsZUFBZTtNQUNmLFdBQVc7TUFDWCxvQkFBb0I7TUFDcEIsZ0JBQWdCO0VBQ3BCOztFQUVBO01BQ0ksVUFBVTtNQUNWLE9BQU87TUFDUCxjQUFjO01BQ2QsZUFBZTtFQUNuQjs7RUFFQTtJQUNFLFVBQVU7TUFDUixPQUFPO01BQ1AsY0FBYztNQUNkLGVBQWU7O0VBRW5COztFQUVBO01BQ0ksZUFBZTtNQUNmLHVCQUF1QjtNQUN2QixZQUFZO01BQ1osYUFBYTtNQUNiLFdBQVc7TUFDWCxtQkFBbUI7TUFDbkIsa0JBQWtCO01BQ2xCLGtCQUFrQjs7O0VBR3RCIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0ZXItdmlldy9yZWdpc3Rlci12aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuKiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICBmb250LWZhbWlseTogdGFob21hLCBzYW5zLXNlcmlmO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIH1cclxuICBcclxuICAuYm94IHtcclxuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDYwJTtcclxuICAgICAgbGVmdDogNTAlO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgd2lkdGg6IDQ1MHB4OyBcclxuICAgICAgcGFkZGluZzogNDBweDtcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG4gICAgICBib3gtc2hhZG93OiAwIDE1cHggMjVweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5ib3ggaDIge1xyXG4gICAgICBtYXJnaW46IDAgMCAzMHB4O1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAuYm94IC5pbnB1dEJveCB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgXHJcbiAgLmJveCAuaW5wdXRCb3ggaW5wdXQge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmOyBcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gIC5ib3ggLmlucHV0Qm94IGxhYmVsIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgfVxyXG4gIFxyXG4gIC5ib3ggLmlucHV0Qm94IGlucHV0OmZvY3VzIH4gbGFiZWwge1xyXG4gICAgICB0b3A6IC0xOHB4O1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICBjb2xvcjogIzAzYTlmNDtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuICBcclxuICAuYm94IC5pbnB1dEJveCBpbnB1dDp2YWxpZCB+IGxhYmVsIHtcclxuICAgIHRvcDogLTI0cHg7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIGNvbG9yOiAjMDNhOWY0O1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gIC5ib3ggaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMwM2E5ZjQ7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIFxyXG4gIFxyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/register-view/register-view.component.html":
/*!************************************************************!*\
  !*** ./src/app/register-view/register-view.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-general-navbar></app-general-navbar>\n<div class=\"box\">\n\t\t<h2>Register</h2>\n\t\t<form (submit)=\"register()\">\n\t\t\t<div class=\"inputBox\">\n\t\t\t\t<input type=\"text\" [(ngModel)]=\"username\" name=\"username\" required=\"\">\n\t\t\t\t<label>Username</label>\t\t\t\t\n\t\t\t</div>\n\t\t\t<div class=\"inputBox\">\n\t\t\t\t<input type=\"password\" [(ngModel)]=\"password\" name=\"password\" required=\"\">\n\t\t\t\t<label>Password</label>\t\t\t\t\n      </div>\n      <div class=\"inputBox\">\n          <input type=\"email\" [(ngModel)]=\"email\" name=\"email\" required=\"\">\n          <label>Email</label>\t\t\t\t\n      </div>\n\t\t\t<input type=\"submit\" value=\"Register\">\n      <div *ngIf=\"error\">{{ error | json }}</div>\n      <div *ngIf=\"valid\">Registered! <button routerLink=\"/login\">Go to Login</button></div>\n\t\t</form>\n</div>"

/***/ }),

/***/ "./src/app/register-view/register-view.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/register-view/register-view.component.ts ***!
  \**********************************************************/
/*! exports provided: RegisterViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterViewComponent", function() { return RegisterViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");




var RegisterViewComponent = /** @class */ (function () {
    function RegisterViewComponent(api, router) {
        this.api = api;
        this.router = router;
    }
    RegisterViewComponent.prototype.register = function () {
        var _this = this;
        var _a = this, username = _a.username, password = _a.password, email = _a.email;
        if (this.username.trim() !== '' && password.trim() && email.trim() !== '') {
            this.api.
                register(username.trim(), password.trim(), email.trim())
                .then(function (res) {
                console.log(res);
                _this.valid = res;
            })
                .catch(function (error) {
                console.log(error);
                _this.error = error;
            });
        }
    };
    RegisterViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register-view',
            template: __webpack_require__(/*! ./register-view.component.html */ "./src/app/register-view/register-view.component.html"),
            styles: [__webpack_require__(/*! ./register-view.component.css */ "./src/app/register-view/register-view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RegisterViewComponent);
    return RegisterViewComponent;
}());



/***/ }),

/***/ "./src/app/user-navbar/user-navbar.component.css":
/*!*******************************************************!*\
  !*** ./src/app/user-navbar/user-navbar.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItbmF2YmFyL3VzZXItbmF2YmFyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/user-navbar/user-navbar.component.html":
/*!********************************************************!*\
  !*** ./src/app/user-navbar/user-navbar.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  user-navbar works!\n</p>\n"

/***/ }),

/***/ "./src/app/user-navbar/user-navbar.component.ts":
/*!******************************************************!*\
  !*** ./src/app/user-navbar/user-navbar.component.ts ***!
  \******************************************************/
/*! exports provided: UserNavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserNavbarComponent", function() { return UserNavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserNavbarComponent = /** @class */ (function () {
    function UserNavbarComponent() {
    }
    UserNavbarComponent.prototype.ngOnInit = function () {
    };
    UserNavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-navbar',
            template: __webpack_require__(/*! ./user-navbar.component.html */ "./src/app/user-navbar/user-navbar.component.html"),
            styles: [__webpack_require__(/*! ./user-navbar.component.css */ "./src/app/user-navbar/user-navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserNavbarComponent);
    return UserNavbarComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\geekshubs\source\repos\apiGTT_front\gttFront\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map