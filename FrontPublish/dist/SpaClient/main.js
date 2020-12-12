(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+rtx":
/*!******************************************************************!*\
  !*** ./src/app/components/booksbyauthor/BooksByAuthorService.ts ***!
  \******************************************************************/
/*! exports provided: BooksByAuthorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksByAuthorService", function() { return BooksByAuthorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../http.service */ "F11b");



class BooksByAuthorService {
    //books
    constructor(service) {
        this.service = service;
        this.books = 'http://52.53.203.248/Borders/api/BooksByAuthor';
    }
    getBooksByAuthor(ID) {
        return this.service.sendGetRequest(this.books + "/" + ID);
    }
}
BooksByAuthorService.ɵfac = function BooksByAuthorService_Factory(t) { return new (t || BooksByAuthorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"])); };
BooksByAuthorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BooksByAuthorService, factory: BooksByAuthorService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BooksByAuthorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\josht\git_projects\586Project\SpaClient\src\main.ts */"zUnb");


/***/ }),

/***/ "3HRk":
/*!**************************************************!*\
  !*** ./src/app/components/books/BooksService.ts ***!
  \**************************************************/
/*! exports provided: BooksService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksService", function() { return BooksService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../http.service */ "F11b");



class BooksService {
    //books
    constructor(service) {
        this.service = service;
        this.books = 'http://52.53.203.248/Borders/api/Books';
    }
    getBooks() {
        return this.service.sendGetRequest(this.books);
    }
}
BooksService.ɵfac = function BooksService_Factory(t) { return new (t || BooksService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"])); };
BooksService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BooksService, factory: BooksService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BooksService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }]; }, null); })();


/***/ }),

/***/ "695Y":
/*!*********************************************************************!*\
  !*** ./src/app/components/signup-button/signup-button.component.ts ***!
  \*********************************************************************/
/*! exports provided: SignupButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupButtonComponent", function() { return SignupButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/auth0-angular */ "2beD");



class SignupButtonComponent {
    constructor(auth) {
        this.auth = auth;
    }
    ngOnInit() { }
    loginWithRedirect() {
        this.auth.loginWithRedirect({ screen_hint: 'signup' });
    }
}
SignupButtonComponent.ɵfac = function SignupButtonComponent_Factory(t) { return new (t || SignupButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
SignupButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignupButtonComponent, selectors: [["app-signup-button"]], decls: 2, vars: 0, consts: [[1, "btn", "btn-primary", "btn-block", 3, "click"]], template: function SignupButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignupButtonComponent_Template_button_click_0_listener() { return ctx.loginWithRedirect(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Sign Up\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-signup-button',
                templateUrl: './signup-button.component.html',
            }]
    }], function () { return [{ type: _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "9iHZ":
/*!*******************************************************************!*\
  !*** ./src/app/components/login-button/login-button.component.ts ***!
  \*******************************************************************/
/*! exports provided: LoginButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginButtonComponent", function() { return LoginButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/auth0-angular */ "2beD");



class LoginButtonComponent {
    constructor(auth) {
        this.auth = auth;
    }
    ngOnInit() { }
    loginWithRedirect() {
        this.auth.loginWithRedirect();
    }
}
LoginButtonComponent.ɵfac = function LoginButtonComponent_Factory(t) { return new (t || LoginButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
LoginButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginButtonComponent, selectors: [["app-login-button"]], decls: 2, vars: 0, consts: [[1, "btn", "btn-primary", "btn-block", 3, "click"]], template: function LoginButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginButtonComponent_Template_button_click_0_listener() { return ctx.loginWithRedirect(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Log in\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login-button',
                templateUrl: './login-button.component.html',
                styles: [],
            }]
    }], function () { return [{ type: _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_authentication_button_authentication_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/authentication-button/authentication-button.component */ "FEQ6");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_authors_AuthorsComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/authors/AuthorsComponent */ "PdlQ");
/* harmony import */ var _components_books_BooksComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/books/BooksComponent */ "Mfq0");






function HomeComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "authorsList");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "booksList");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HomeComponent {
    constructor() {
        this.selectedTab = "authors";
    }
    ngOnInit() {
    }
    setSelectedTab(selected) {
        this.selectedTab = selected;
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 15, vars: 2, consts: [["name", "Choice"], ["value", "Authors"], ["value", "Books"], ["type", "text", "placeholder", "Search.."], [3, "click"], [4, "ngIf"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-authentication-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "select", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "option", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Authors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Books");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_9_listener() { return ctx.setSelectedTab("authors"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Authors ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HomeComponent_div_11_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_12_listener() { return ctx.setSelectedTab("books"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Books ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HomeComponent_div_14_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedTab == "authors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedTab == "books");
    } }, directives: [_components_authentication_button_authentication_button_component__WEBPACK_IMPORTED_MODULE_1__["AuthenticationButtonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _components_authors_AuthorsComponent__WEBPACK_IMPORTED_MODULE_3__["AuthorsComponent"], _components_books_BooksComponent__WEBPACK_IMPORTED_MODULE_4__["BooksComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var _auth_config_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../auth_config.json */ "gWCv");
var _auth_config_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../auth_config.json */ "gWCv", 1);

const environment = {
    production: false,
    auth: {
        domain: _auth_config_json__WEBPACK_IMPORTED_MODULE_0__["domain"],
        clientId: _auth_config_json__WEBPACK_IMPORTED_MODULE_0__["clientId"],
        redirectUri: window.location.origin,
    },
};


/***/ }),

/***/ "F11b":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class HttpService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    sendGetRequest(url) {
        return this.httpClient.get(url);
    }
    sendPostRequest(data, url) {
        return this.httpClient.post(url, data);
    }
}
HttpService.ɵfac = function HttpService_Factory(t) { return new (t || HttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
HttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HttpService, factory: HttpService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "FEQ6":
/*!*************************************************************************************!*\
  !*** ./src/app/components/authentication-button/authentication-button.component.ts ***!
  \*************************************************************************************/
/*! exports provided: AuthenticationButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationButtonComponent", function() { return AuthenticationButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/auth0-angular */ "2beD");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _login_button_login_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login-button/login-button.component */ "9iHZ");
/* harmony import */ var _logout_button_logout_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../logout-button/logout-button.component */ "gbrI");






function AuthenticationButtonComponent_app_login_button_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-login-button");
} }
function AuthenticationButtonComponent_app_logout_button_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-logout-button");
} }
class AuthenticationButtonComponent {
    constructor(auth) {
        this.auth = auth;
    }
    ngOnInit() { }
}
AuthenticationButtonComponent.ɵfac = function AuthenticationButtonComponent_Factory(t) { return new (t || AuthenticationButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
AuthenticationButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthenticationButtonComponent, selectors: [["app-authentication-button"]], decls: 4, vars: 6, consts: [[4, "ngIf"]], template: function AuthenticationButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AuthenticationButtonComponent_app_login_button_0_Template, 1, 0, "app-login-button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AuthenticationButtonComponent_app_logout_button_2_Template, 1, 0, "app-logout-button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.auth.isAuthenticated$) === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, ctx.auth.isAuthenticated$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _login_button_login_button_component__WEBPACK_IMPORTED_MODULE_3__["LoginButtonComponent"], _logout_button_logout_button_component__WEBPACK_IMPORTED_MODULE_4__["LogoutButtonComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticationButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-authentication-button',
                templateUrl: './authentication-button.component.html',
                styles: [],
            }]
    }], function () { return [{ type: _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "Mfq0":
/*!****************************************************!*\
  !*** ./src/app/components/books/BooksComponent.ts ***!
  \****************************************************/
/*! exports provided: BooksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksComponent", function() { return BooksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _BooksService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BooksService */ "3HRk");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");





function BooksComponent_tr_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const book_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](book_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](book_r1.author.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](book_r1.pages);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](book_r1.price);
} }
class BooksComponent {
    constructor(service) {
        this.service = service;
    }
    ngOnInit() {
        this.books = this.service.getBooks().subscribe(books => this.books = books);
    }
}
BooksComponent.ɵfac = function BooksComponent_Factory(t) { return new (t || BooksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_BooksService__WEBPACK_IMPORTED_MODULE_1__["BooksService"])); };
BooksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BooksComponent, selectors: [["booksList"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_BooksService__WEBPACK_IMPORTED_MODULE_1__["BooksService"]])], decls: 11, vars: 1, consts: [[4, "ngFor", "ngForOf"]], template: function BooksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Author");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Pages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, BooksComponent_tr_10_Template, 9, 4, "tr", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.books);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BooksComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'booksList',
                templateUrl: './books.html',
                providers: [_BooksService__WEBPACK_IMPORTED_MODULE_1__["BooksService"]]
            }]
    }], function () { return [{ type: _BooksService__WEBPACK_IMPORTED_MODULE_1__["BooksService"] }]; }, null); })();


/***/ }),

/***/ "MvnF":
/*!******************************************************!*\
  !*** ./src/app/components/authors/AuthorsService.ts ***!
  \******************************************************/
/*! exports provided: AuthorsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorsService", function() { return AuthorsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../http.service */ "F11b");



class AuthorsService {
    //authors
    constructor(service) {
        this.service = service;
        this.authors = 'http://52.53.203.248/Borders/api/Authors';
    }
    getAuthors() {
        return this.service.sendGetRequest(this.authors);
    }
}
AuthorsService.ɵfac = function AuthorsService_Factory(t) { return new (t || AuthorsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"])); };
AuthorsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthorsService, factory: AuthorsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthorsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }]; }, null); })();


/***/ }),

/***/ "PdlQ":
/*!********************************************************!*\
  !*** ./src/app/components/authors/AuthorsComponent.ts ***!
  \********************************************************/
/*! exports provided: AuthorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorsComponent", function() { return AuthorsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _AuthorsService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AuthorsService */ "MvnF");
/* harmony import */ var _SelectedAuthor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../SelectedAuthor */ "dIQO");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _booksbyauthor_BooksByAuthorComponents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../booksbyauthor/BooksByAuthorComponents */ "X21G");








function AuthorsComponent_tr_6_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthorsComponent_tr_6_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const author_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onSelect(author_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const author_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](author_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](author_r2.numberOfBooks);
} }
function AuthorsComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "booksByAuthorList", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.selectedAuthor.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("responseId", ctx_r1.authId);
} }
class AuthorsComponent {
    constructor(service, service2) {
        this.service = service;
        this.service2 = service2;
        this.authId = 0;
    }
    ngOnInit() {
        this.authors = this.service.getAuthors().subscribe(books => this.authors = books);
    }
    onSelect(selAuthor) {
        if (this.selectedAuthor != selAuthor) {
            this.selectedAuthor = selAuthor;
            this.authId = selAuthor.authorId;
            this.service2.setSelectedAuthor(selAuthor.authorId);
        }
        else {
            this.selectedAuthor = null;
            this.authId = 0;
            this.service2.setSelectedAuthor(0);
        }
    }
}
AuthorsComponent.ɵfac = function AuthorsComponent_Factory(t) { return new (t || AuthorsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_AuthorsService__WEBPACK_IMPORTED_MODULE_1__["AuthorsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_SelectedAuthor__WEBPACK_IMPORTED_MODULE_2__["SelectedAuthor"])); };
AuthorsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthorsComponent, selectors: [["authorsList"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_AuthorsService__WEBPACK_IMPORTED_MODULE_1__["AuthorsService"], _SelectedAuthor__WEBPACK_IMPORTED_MODULE_2__["SelectedAuthor"]])], decls: 8, vars: 2, consts: [[3, "click", 4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "click"], [3, "responseId"]], template: function AuthorsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Author");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Number of Books");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AuthorsComponent_tr_6_Template, 5, 2, "tr", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AuthorsComponent_div_7_Template, 4, 2, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.authors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedAuthor);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _booksbyauthor_BooksByAuthorComponents__WEBPACK_IMPORTED_MODULE_4__["BooksByAuthorComponents"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthorsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'authorsList',
                templateUrl: './authors.html',
                providers: [_AuthorsService__WEBPACK_IMPORTED_MODULE_1__["AuthorsService"], _SelectedAuthor__WEBPACK_IMPORTED_MODULE_2__["SelectedAuthor"]]
            }]
    }], function () { return [{ type: _AuthorsService__WEBPACK_IMPORTED_MODULE_1__["AuthorsService"] }, { type: _SelectedAuthor__WEBPACK_IMPORTED_MODULE_2__["SelectedAuthor"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/auth0-angular */ "2beD");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






function AppComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-bar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-footer");
} }
class AppComponent {
    constructor(http, auth) {
        this.auth = auth;
        this.title = 'SpaClient';
        this.selectedTab = "authors";
        this.baseUrl = 'https://localhost:44396/';
        http.get(this.baseUrl + 'weatherforecast').subscribe(result => {
            this.forecasts = result;
        }, error => console.error(error));
    }
    setSelectedTab(selected) {
        this.selectedTab = selected;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 4, consts: [["id", "app", 1, "d-flex", "flex-column", "h-100"], ["class", "container", 4, "ngIf", "ngIfElse"], ["loaded", ""], [1, "container"], [1, "container", "flex-grow-1"], [1, "mt-5"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_1_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_ng_template_3_Template, 5, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx.auth.isLoading$))("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "X21G":
/*!*********************************************************************!*\
  !*** ./src/app/components/booksbyauthor/BooksByAuthorComponents.ts ***!
  \*********************************************************************/
/*! exports provided: BooksByAuthorComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksByAuthorComponents", function() { return BooksByAuthorComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _BooksByAuthorService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BooksByAuthorService */ "+rtx");
/* harmony import */ var _SelectedAuthor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../SelectedAuthor */ "dIQO");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");







function BooksByAuthorComponents_tr_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const book_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](book_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](book_r1.pages);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](book_r1.price);
} }
class BooksByAuthorComponents {
    constructor(service, service2) {
        this.service = service;
        this.service2 = service2;
    }
    ngOnInit() {
        this.books = this.service.getBooksByAuthor(this.service2.getSelectedAuthor()).subscribe(books => this.books = books);
    }
    ngOnChanges() {
        this.books = this.service.getBooksByAuthor(this.responseId).subscribe(books => this.books = books);
    }
}
BooksByAuthorComponents.ɵfac = function BooksByAuthorComponents_Factory(t) { return new (t || BooksByAuthorComponents)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_BooksByAuthorService__WEBPACK_IMPORTED_MODULE_1__["BooksByAuthorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_SelectedAuthor__WEBPACK_IMPORTED_MODULE_2__["SelectedAuthor"])); };
BooksByAuthorComponents.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BooksByAuthorComponents, selectors: [["booksByAuthorList"]], inputs: { responseId: "responseId" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_BooksByAuthorService__WEBPACK_IMPORTED_MODULE_1__["BooksByAuthorService"], _SelectedAuthor__WEBPACK_IMPORTED_MODULE_2__["SelectedAuthor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 9, vars: 1, consts: [[4, "ngFor", "ngForOf"]], template: function BooksByAuthorComponents_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Books");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Pages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, BooksByAuthorComponents_tr_8_Template, 7, 3, "tr", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.books);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BooksByAuthorComponents, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'booksByAuthorList',
                templateUrl: './BooksByAuthor.html',
                providers: [_BooksByAuthorService__WEBPACK_IMPORTED_MODULE_1__["BooksByAuthorService"], _SelectedAuthor__WEBPACK_IMPORTED_MODULE_2__["SelectedAuthor"]]
            }]
    }], function () { return [{ type: _BooksByAuthorService__WEBPACK_IMPORTED_MODULE_1__["BooksByAuthorService"] }, { type: _SelectedAuthor__WEBPACK_IMPORTED_MODULE_2__["SelectedAuthor"] }]; }, { responseId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_books_BooksComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/books/BooksComponent */ "Mfq0");
/* harmony import */ var _components_authors_AuthorsComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/authors/AuthorsComponent */ "PdlQ");
/* harmony import */ var _components_booksbyauthor_BooksByAuthorComponents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/booksbyauthor/BooksByAuthorComponents */ "X21G");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @auth0/auth0-angular */ "2beD");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _components_login_button_login_button_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/login-button/login-button.component */ "9iHZ");
/* harmony import */ var _components_signup_button_signup_button_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/signup-button/signup-button.component */ "695Y");
/* harmony import */ var _components_logout_button_logout_button_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/logout-button/logout-button.component */ "gbrI");
/* harmony import */ var _components_authentication_button_authentication_button_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/authentication-button/authentication-button.component */ "FEQ6");
/* harmony import */ var _components_auth_nav_auth_nav_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/auth-nav/auth-nav.component */ "cZML");
/* harmony import */ var _authenticated_authenticated_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./authenticated/authenticated.component */ "pLJv");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./home/home.component */ "9vUh");



















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_8__["AuthModule"].forRoot(Object.assign({}, _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].auth)),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _components_books_BooksComponent__WEBPACK_IMPORTED_MODULE_2__["BooksComponent"],
        _components_authors_AuthorsComponent__WEBPACK_IMPORTED_MODULE_3__["AuthorsComponent"],
        _components_booksbyauthor_BooksByAuthorComponents__WEBPACK_IMPORTED_MODULE_4__["BooksByAuthorComponents"],
        _components_login_button_login_button_component__WEBPACK_IMPORTED_MODULE_10__["LoginButtonComponent"],
        _components_signup_button_signup_button_component__WEBPACK_IMPORTED_MODULE_11__["SignupButtonComponent"],
        _components_logout_button_logout_button_component__WEBPACK_IMPORTED_MODULE_12__["LogoutButtonComponent"],
        _components_authentication_button_authentication_button_component__WEBPACK_IMPORTED_MODULE_13__["AuthenticationButtonComponent"],
        _components_auth_nav_auth_nav_component__WEBPACK_IMPORTED_MODULE_14__["AuthNavComponent"],
        _authenticated_authenticated_component__WEBPACK_IMPORTED_MODULE_15__["AuthenticatedComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_16__["HomeComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_8__["AuthModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                    _components_books_BooksComponent__WEBPACK_IMPORTED_MODULE_2__["BooksComponent"],
                    _components_authors_AuthorsComponent__WEBPACK_IMPORTED_MODULE_3__["AuthorsComponent"],
                    _components_booksbyauthor_BooksByAuthorComponents__WEBPACK_IMPORTED_MODULE_4__["BooksByAuthorComponents"],
                    _components_login_button_login_button_component__WEBPACK_IMPORTED_MODULE_10__["LoginButtonComponent"],
                    _components_signup_button_signup_button_component__WEBPACK_IMPORTED_MODULE_11__["SignupButtonComponent"],
                    _components_logout_button_logout_button_component__WEBPACK_IMPORTED_MODULE_12__["LogoutButtonComponent"],
                    _components_authentication_button_authentication_button_component__WEBPACK_IMPORTED_MODULE_13__["AuthenticationButtonComponent"],
                    _components_auth_nav_auth_nav_component__WEBPACK_IMPORTED_MODULE_14__["AuthNavComponent"],
                    _authenticated_authenticated_component__WEBPACK_IMPORTED_MODULE_15__["AuthenticatedComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_16__["HomeComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                    _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_8__["AuthModule"].forRoot(Object.assign({}, _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].auth)),
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "cZML":
/*!***********************************************************!*\
  !*** ./src/app/components/auth-nav/auth-nav.component.ts ***!
  \***********************************************************/
/*! exports provided: AuthNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthNavComponent", function() { return AuthNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _authentication_button_authentication_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../authentication-button/authentication-button.component */ "FEQ6");



class AuthNavComponent {
    constructor() { }
    ngOnInit() {
    }
}
AuthNavComponent.ɵfac = function AuthNavComponent_Factory(t) { return new (t || AuthNavComponent)(); };
AuthNavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthNavComponent, selectors: [["app-auth-nav"]], decls: 2, vars: 0, consts: [[1, "navbar-nav", "ml-auto"]], template: function AuthNavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-authentication-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_authentication_button_authentication_button_component__WEBPACK_IMPORTED_MODULE_1__["AuthenticationButtonComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthNavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-auth-nav',
                templateUrl: './auth-nav.component.html',
                styles: []
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "dIQO":
/*!***********************************!*\
  !*** ./src/app/SelectedAuthor.ts ***!
  \***********************************/
/*! exports provided: SelectedAuthor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectedAuthor", function() { return SelectedAuthor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SelectedAuthor {
    setSelectedAuthor(authorID) {
        this.selectedAuthor = authorID;
    }
    getSelectedAuthor() {
        return this.selectedAuthor;
    }
}
SelectedAuthor.ɵfac = function SelectedAuthor_Factory(t) { return new (t || SelectedAuthor)(); };
SelectedAuthor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SelectedAuthor, factory: SelectedAuthor.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectedAuthor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "gWCv":
/*!**************************!*\
  !*** ./auth_config.json ***!
  \**************************/
/*! exports provided: domain, clientId, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"domain\":\"joshuafoster208.us.auth0.com\",\"clientId\":\"JTeENGCadlStxu05ULJpFnkMX4VN2Bev\"}");

/***/ }),

/***/ "gbrI":
/*!*********************************************************************!*\
  !*** ./src/app/components/logout-button/logout-button.component.ts ***!
  \*********************************************************************/
/*! exports provided: LogoutButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutButtonComponent", function() { return LogoutButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/auth0-angular */ "2beD");




class LogoutButtonComponent {
    constructor(auth, doc) {
        this.auth = auth;
        this.doc = doc;
    }
    ngOnInit() { }
    logout() {
        this.auth.logout({ returnTo: this.doc.location.origin });
    }
}
LogoutButtonComponent.ɵfac = function LogoutButtonComponent_Factory(t) { return new (t || LogoutButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])); };
LogoutButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LogoutButtonComponent, selectors: [["app-logout-button"]], decls: 2, vars: 0, consts: [[1, "btn", "btn-danger", "btn-block", 3, "click"]], template: function LogoutButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LogoutButtonComponent_Template_button_click_0_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Log out\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogoutButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-logout-button',
                templateUrl: './logout-button.component.html',
                styles: [],
            }]
    }], function () { return [{ type: _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }] }]; }, null); })();


/***/ }),

/***/ "pLJv":
/*!**********************************************************!*\
  !*** ./src/app/authenticated/authenticated.component.ts ***!
  \**********************************************************/
/*! exports provided: AuthenticatedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticatedComponent", function() { return AuthenticatedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_authentication_button_authentication_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/authentication-button/authentication-button.component */ "FEQ6");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_authors_AuthorsComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/authors/AuthorsComponent */ "PdlQ");
/* harmony import */ var _components_books_BooksComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/books/BooksComponent */ "Mfq0");






function AuthenticatedComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "authorsList");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AuthenticatedComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "booksList");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AuthenticatedComponent {
    constructor() {
        this.selectedTab = "authors";
    }
    ngOnInit() {
    }
    setSelectedTab(selected) {
        this.selectedTab = selected;
    }
}
AuthenticatedComponent.ɵfac = function AuthenticatedComponent_Factory(t) { return new (t || AuthenticatedComponent)(); };
AuthenticatedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthenticatedComponent, selectors: [["app-authenticated"]], decls: 15, vars: 2, consts: [["name", "Choice"], ["value", "Authors"], ["value", "Books"], ["type", "text", "placeholder", "Search.."], [3, "click"], [4, "ngIf"]], template: function AuthenticatedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-authentication-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "select", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "option", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Authors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Books");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthenticatedComponent_Template_div_click_9_listener() { return ctx.setSelectedTab("authors"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Authors ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AuthenticatedComponent_div_11_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthenticatedComponent_Template_div_click_12_listener() { return ctx.setSelectedTab("books"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Books ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AuthenticatedComponent_div_14_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedTab == "authors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedTab == "books");
    } }, directives: [_components_authentication_button_authentication_button_component__WEBPACK_IMPORTED_MODULE_1__["AuthenticationButtonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _components_authors_AuthorsComponent__WEBPACK_IMPORTED_MODULE_3__["AuthorsComponent"], _components_books_BooksComponent__WEBPACK_IMPORTED_MODULE_4__["BooksComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0ZWQvYXV0aGVudGljYXRlZC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticatedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-authenticated',
                templateUrl: './authenticated.component.html',
                styleUrls: ['./authenticated.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_booksbyauthor_BooksByAuthorComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/booksbyauthor/BooksByAuthorComponents */ "X21G");
/* harmony import */ var _authenticated_authenticated_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authenticated/authenticated.component */ "pLJv");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "9vUh");







const routes = [
    { path: 'booksByAuthor', component: _components_booksbyauthor_BooksByAuthorComponents__WEBPACK_IMPORTED_MODULE_2__["BooksByAuthorComponents"] },
    { path: 'auth', component: _authenticated_authenticated_component__WEBPACK_IMPORTED_MODULE_3__["AuthenticatedComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map