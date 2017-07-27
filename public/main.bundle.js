webpackJsonp([1,4],{

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BikeService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BikeService = (function () {
    function BikeService(http) {
        this.http = http;
    }
    BikeService.prototype.getBikeList = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('bikes/list', { headers: headers }).map(function (res) { return res.json(); });
    };
    BikeService.prototype.addBike = function (bike) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('bikes/add', bike, { headers: headers }).map(function (res) { return res.json(); });
    };
    BikeService.prototype.delBike = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('bikes/del', id, { headers: headers }).map(function (res) { return res.json(); });
    };
    BikeService.prototype.editBike = function (bike) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('bikes/edit', bike, { headers: headers }).map(function (res) { return res.json(); });
    };
    BikeService.prototype.countBike = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('bikes/count', { headers: headers }).map(function (res) { return res.json(); });
    };
    BikeService.prototype.bikeByStatus = function (status) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('bikes/status', status, { headers: headers }).map(function (res) { return res.json(); });
    };
    BikeService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], BikeService);
    return BikeService;
    var _a;
}());
//# sourceMappingURL=/home/jm/Projects/mean/angular-src/src/bike.service.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomerService = (function () {
    function CustomerService(http) {
        this.http = http;
    }
    CustomerService.prototype.getCustList = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('customers/list', { headers: headers }).map(function (res) { return res.json(); });
    };
    CustomerService.prototype.getCustId = function (name) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('customers/find', name, { headers: headers }).map(function (res) { return res.json(); });
    };
    CustomerService.prototype.delCustomer = function (custId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('customers/del', custId, { headers: headers }).map(function (res) { return res.json(); });
    };
    CustomerService.prototype.editCustomer = function (cust) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('customers/update', cust, { headers: headers }).map(function (res) { return res.json(); });
    };
    CustomerService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], CustomerService);
    return CustomerService;
    var _a;
}());
//# sourceMappingURL=/home/jm/Projects/mean/angular-src/src/customer.service.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RentalService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RentalService = (function () {
    function RentalService(http) {
        this.http = http;
    }
    RentalService.prototype.getRentalList = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('rentals/list', { headers: headers }).map(function (res) { return res.json(); });
    };
    RentalService.prototype.getActiveRentals = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('rentals/active', { headers: headers }).map(function (res) { return res.json(); });
    };
    RentalService.prototype.startRental = function (custId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('rentals/start', custId, { headers: headers }).map(function (res) { return res.json(); });
    };
    RentalService.prototype.returnRental = function (rental) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('rentals/ret', rental, { headers: headers }).map(function (res) { return res.json(); });
    };
    RentalService.prototype.delRental = function (rentId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('rentals/del', rentId, { headers: headers }).map(function (res) { return res.json(); });
    };
    RentalService.prototype.addBike = function (rental) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('rentals/add', rental, { headers: headers }).map(function (res) { return res.json(); });
    };
    RentalService.prototype.removeBike = function (rental) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('rentals/remove', rental, { headers: headers }).map(function (res) { return res.json(); });
    };
    RentalService.prototype.changeDate = function (rental) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('rentals/date', rental, { headers: headers }).map(function (res) { return res.json(); });
    };
    RentalService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], RentalService);
    return RentalService;
    var _a;
}());
//# sourceMappingURL=/home/jm/Projects/mean/angular-src/src/rental.service.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateLogin = function (user) {
        if (user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], ValidateService);
    return ValidateService;
}());
//# sourceMappingURL=/home/jm/Projects/mean/angular-src/src/validate.service.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Bike; });
var Bike = (function () {
    function Bike() {
    }
    return Bike;
}());
//# sourceMappingURL=/home/jm/Projects/mean/angular-src/src/bike.js.map

/***/ }),

/***/ 393:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 393;


/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(512);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/jm/Projects/mean/angular-src/src/main.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(66);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(authService) {
        this.authService = authService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.authService.getUserData();
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(695),
            styles: [__webpack_require__(685)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=/home/jm/Projects/mean/angular-src/src/app.component.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_dashboard_dashboard_component__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_inventory_inventory_component__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_rental_rental_component__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_customer_customer_component__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_customer_service__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_rental_service__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_bike_service__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_validate_service__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_auth_service__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__guards_auth_guard__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__shared_bikefilter_pipe__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__shared_customerfilter_pipe__ = __webpack_require__(525);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
























var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_11__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'inventory', component: __WEBPACK_IMPORTED_MODULE_13__components_inventory_inventory_component__["a" /* InventoryComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'rental', component: __WEBPACK_IMPORTED_MODULE_14__components_rental_rental_component__["a" /* RentalComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'customer', component: __WEBPACK_IMPORTED_MODULE_15__components_customer_customer_component__["a" /* CustomerComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__guards_auth_guard__["a" /* AuthGuard */]] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_inventory_inventory_component__["a" /* InventoryComponent */],
                __WEBPACK_IMPORTED_MODULE_22__shared_bikefilter_pipe__["a" /* BikeFilterPipe */],
                __WEBPACK_IMPORTED_MODULE_23__shared_customerfilter_pipe__["a" /* CustomerFilterPipe */],
                __WEBPACK_IMPORTED_MODULE_14__components_rental_rental_component__["a" /* RentalComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_customer_customer_component__["a" /* CustomerComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_19__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_20__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_21__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_18__services_bike_service__["a" /* BikeService */], __WEBPACK_IMPORTED_MODULE_17__services_rental_service__["a" /* RentalService */], __WEBPACK_IMPORTED_MODULE_16__services_customer_service__["a" /* CustomerService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/jm/Projects/mean/angular-src/src/app.module.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_customer_service__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_customer__ = __webpack_require__(524);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CustomerComponent = (function () {
    function CustomerComponent(customerService, flashMessage) {
        this.customerService = customerService;
        this.flashMessage = flashMessage;
        this.customerfilter = new __WEBPACK_IMPORTED_MODULE_3__shared_customer__["a" /* Customer */]();
        this.currCust = new __WEBPACK_IMPORTED_MODULE_3__shared_customer__["a" /* Customer */]();
        this.prevCust = new __WEBPACK_IMPORTED_MODULE_3__shared_customer__["a" /* Customer */]();
    }
    CustomerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.customerService.getCustList().subscribe(function (data) {
            _this.customers = data.msg;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    CustomerComponent.prototype.onDelCust = function (cust) {
        var _this = this;
        var del = {
            id: cust._id
        };
        this.customerService.delCustomer(del).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-success' });
                _this.ngOnInit();
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger' });
            }
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    CustomerComponent.prototype.onEditCust = function (cust) {
        this.currCust._id = cust._id;
        this.currCust.name = cust.name;
        this.currCust.info = cust.info;
        this.prevCust._id = cust._id;
        this.prevCust.name = cust.name;
        this.prevCust.info = cust.info;
    };
    CustomerComponent.prototype.onEditSubmit = function () {
        var _this = this;
        var edit = {
            id: this.currCust._id,
            name: this.currCust.name,
            info: this.currCust.info
        };
        this.customerService.editCustomer(edit).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-success' });
                _this.ngOnInit();
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger' });
            }
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    CustomerComponent.prototype.resetEdit = function () {
        this.currCust.info = this.prevCust.info;
    };
    CustomerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-customer',
            template: __webpack_require__(696),
            styles: [__webpack_require__(686)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_customer_service__["a" /* CustomerService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_customer_service__["a" /* CustomerService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object])
    ], CustomerComponent);
    return CustomerComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/jm/Projects/mean/angular-src/src/customer.component.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_bike_service__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_rental_service__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_bike__ = __webpack_require__(338);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardComponent = (function () {
    function DashboardComponent(bikeService, rentalService, flashMessage) {
        this.bikeService = bikeService;
        this.rentalService = rentalService;
        this.flashMessage = flashMessage;
        this.bikefilter = new __WEBPACK_IMPORTED_MODULE_4__shared_bike__["a" /* Bike */]();
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bikeService.getBikeList().subscribe(function (data) {
            if (data.msg.length !== 0) {
                _this.bikeList = data.msg;
            }
            _this.bikefilter.status = "in";
        }, function (err) {
            console.log(err);
            return false;
        });
        this.bikeService.countBike().subscribe(function (data) {
            _this.availBikeCount = data.msg.inBikes;
            _this.totalBikeCount = data.msg.totalBikes;
        }, function (err) {
            console.log(err);
            return false;
        });
        this.rentalService.getActiveRentals().subscribe(function (data) {
            _this.rentalCount = data.msg.length;
            if (_this.rentalCount !== 0) {
                _this.rentalList = data.msg;
            }
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(697),
            styles: [__webpack_require__(687)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_bike_service__["a" /* BikeService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_bike_service__["a" /* BikeService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_rental_service__["a" /* RentalService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_rental_service__["a" /* RentalService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], DashboardComponent);
    return DashboardComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/jm/Projects/mean/angular-src/src/dashboard.component.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(698),
            styles: [__webpack_require__(688)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=/home/jm/Projects/mean/angular-src/src/home.component.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_bike_service__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_bike__ = __webpack_require__(338);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InventoryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InventoryComponent = (function () {
    function InventoryComponent(bikeService, flashMessage) {
        this.bikeService = bikeService;
        this.flashMessage = flashMessage;
        this.currBike = new __WEBPACK_IMPORTED_MODULE_3__shared_bike__["a" /* Bike */]();
        this.prevBike = new __WEBPACK_IMPORTED_MODULE_3__shared_bike__["a" /* Bike */]();
        this.bikefilter = new __WEBPACK_IMPORTED_MODULE_3__shared_bike__["a" /* Bike */]();
        this.bikeModels = ["Cruiser", "MTN", "Electric", "Tandem", "Kids", "Trailer"];
    }
    InventoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bikeService.getBikeList().subscribe(function (list) {
            _this.list = list.msg;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    InventoryComponent.prototype.clearBikeInfo = function () {
        this.currBike = new __WEBPACK_IMPORTED_MODULE_3__shared_bike__["a" /* Bike */]();
    };
    InventoryComponent.prototype.onAddSubmit = function () {
        var _this = this;
        this.currBike.status = "in";
        this.bikeService.addBike(this.currBike).subscribe(function (data) {
            console.log(data);
            if (data.success) {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-success' });
                _this.ngOnInit();
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger' });
            }
            _this.clearBikeInfo();
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    InventoryComponent.prototype.onEditBike = function (bike) {
        this.currBike._id = bike._id;
        this.currBike.model = bike.model;
        this.currBike.status = bike.status;
        this.currBike.price = bike.price;
        this.prevBike._id = bike._id;
        this.prevBike.model = bike.model;
        this.prevBike.status = bike.status;
        this.prevBike.price = bike.price;
    };
    InventoryComponent.prototype.undoEdit = function () {
        this.currBike._id = this.prevBike._id;
        this.currBike.model = this.prevBike.model;
        this.currBike.status = this.prevBike.status;
        this.currBike.price = this.prevBike.price;
    };
    InventoryComponent.prototype.onEditSubmit = function () {
        var _this = this;
        this.bikeService.editBike(this.currBike).subscribe(function (data) {
            console.log(data);
            if (data.success) {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-success' });
                _this.ngOnInit();
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger' });
            }
            _this.clearBikeInfo();
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    InventoryComponent.prototype.onDelBike = function (bike) {
        var _this = this;
        this.bikeService.delBike(bike).subscribe(function (data) {
            console.log(data);
            if (data.success) {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-success' });
                _this.ngOnInit();
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger' });
            }
            _this.clearBikeInfo();
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    InventoryComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-inventory',
            template: __webpack_require__(699),
            styles: [__webpack_require__(689)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_bike_service__["a" /* BikeService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_bike_service__["a" /* BikeService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object])
    ], InventoryComponent);
    return InventoryComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/jm/Projects/mean/angular-src/src/inventory.component.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_validate_service__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(107);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(authService, validateService, flashMessage, router) {
        this.authService = authService;
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        if (!this.validateService.validateLogin(user)) {
            this.flashMessage.show('Please enter a username and password', { cssClass: 'alert-danger' });
            return false;
        }
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show('Welcome ' + data.user.name, { cssClass: 'alert-success' });
                _this.router.navigate(['/dashboard']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger' });
                _this.router.navigate(['/login']);
            }
        });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(700),
            styles: [__webpack_require__(690)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/home/jm/Projects/mean/angular-src/src/login.component.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(107);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(authService, flashMessage, router) {
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () { };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('You are logged out', { cssClass: 'alert-success' });
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(701),
            styles: [__webpack_require__(691)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/jm/Projects/mean/angular-src/src/navbar.component.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(authService, flashMessage) {
        this.authService = authService;
        this.flashMessage = flashMessage;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.user = this.authService.user;
    };
    ProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(702),
            styles: [__webpack_require__(692)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/jm/Projects/mean/angular-src/src/profile.component.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(107);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(validateService, authService, flashMessage, router) {
        this.validateService = validateService;
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () { };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password
        };
        //Validate form
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger' });
            return false;
        }
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show('Please provide a valid email', { cssClass: 'alert-danger' });
            return false;
        }
        //Register user
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('You are now registered', { cssClass: 'alert-success' });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show('Unsuccessful register', { cssClass: 'alert-danger' });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(703),
            styles: [__webpack_require__(693)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/home/jm/Projects/mean/angular-src/src/register.component.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_customer_service__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_rental_service__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_bike_service__ = __webpack_require__(155);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RentalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RentalComponent = (function () {
    function RentalComponent(customerService, bikeService, rentalService, flashMessage) {
        this.customerService = customerService;
        this.bikeService = bikeService;
        this.rentalService = rentalService;
        this.flashMessage = flashMessage;
        this.subTotal = 0;
        this.inBikes = [];
        this.outBikes = [];
        this.selectedBikes = [];
    }
    RentalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.rentalService.getRentalList().subscribe(function (data) {
            _this.rentals = data.msg;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    RentalComponent.prototype.getCustId = function () {
        var _this = this;
        var query = {
            name: this.custName.toUpperCase(),
            info: this.custInfo
        };
        this.customerService.getCustId(query).subscribe(function (data) {
            if (data.success) {
                _this.startRental(data.msg);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger' });
            }
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    RentalComponent.prototype.startRental = function (cust) {
        var _this = this;
        var start = {
            customerId: cust._id,
            customerName: cust.name
        };
        this.rentalService.startRental(start).subscribe(function (data) {
            if (data.success) {
                console.log(data);
                _this.flashMessage.show("Rental created for: " + _this.custName.toUpperCase(), { cssClass: 'alert-success' });
                _this.ngOnInit();
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger' });
            }
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    RentalComponent.prototype.onDelRental = function (rental) {
        var _this = this;
        var del = {
            customerId: rental.customerId,
            rentalId: rental._id,
            bikeId: rental.bikeId
        };
        this.rentalService.delRental(del).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show("Rental " + rental._id + " deleted", { cssClass: 'alert-success' });
                _this.ngOnInit();
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger' });
                _this.ngOnInit();
            }
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    RentalComponent.prototype.onAddBike = function (rental) {
        var _this = this;
        this.clearSelectedBikes();
        this.custId = rental.customerId;
        this.rentalId = rental._id;
        this.rentalDate = new Date(rental.date);
        this.rentalBikes = rental.bikeId;
        this.bikeService.bikeByStatus({ status: "in" }).subscribe(function (data) {
            if (data.success) {
                _this.inBikes = data.msg;
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger' });
            }
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    RentalComponent.prototype.onAddBikeSubmit = function () {
        var _this = this;
        var add = {
            rentalId: this.rentalId,
            bikes: this.selectedBikes
        };
        console.log(add);
        this.rentalService.addBike(add).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-success' });
                _this.ngOnInit();
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger' });
            }
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    RentalComponent.prototype.onDelBike = function (rental) {
        var _this = this;
        this.clearSelectedBikes();
        this.custId = rental.customerId;
        this.rentalId = rental._id;
        this.rentalDate = new Date(rental.date);
        this.rentalBikes = rental.bikeId;
        var rented = {
            status: this.rentalId
        };
        this.bikeService.bikeByStatus(rented).subscribe(function (data) {
            if (data.success) {
                _this.outBikes = data.msg;
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger' });
            }
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    RentalComponent.prototype.onDelBikeSubmit = function () {
        var _this = this;
        var del = {
            rentalId: this.rentalId,
            bikes: this.selectedBikes
        };
        console.log(del);
        this.rentalService.removeBike(del).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-success' });
                _this.ngOnInit();
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger' });
            }
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    RentalComponent.prototype.onRetBike = function (rental) {
        var _this = this;
        this.clearSelectedBikes();
        this.subTotal = 0;
        this.rentalTotal = rental.total;
        this.custId = rental.customerId;
        this.custName = rental.customerName;
        this.rentalId = rental._id;
        this.rentalDate = new Date(rental.date);
        this.rentalBikes = rental.bikeId;
        var rented = {
            status: this.rentalId
        };
        this.bikeService.bikeByStatus(rented).subscribe(function (data) {
            if (data.success) {
                _this.outBikes = data.msg;
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger' });
            }
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    RentalComponent.prototype.onRetBikeSubmit = function () {
        var _this = this;
        this.rentalTotal = Math.round((this.subTotal.valueOf() + this.rentalTotal.valueOf()) * 100) / 100;
        console.log(this.rentalId);
        console.log(this.currentTime);
        console.log(this.selectedBikes);
        console.log(this.rentalTotal);
        console.log(this.rentalDuration);
        var ret = {
            rentalId: this.rentalId,
            endDate: this.currentTime,
            duration: this.rentalDuration,
            rentalStatus: (this.selectedBikes.length !== this.outBikes.length),
            total: this.rentalTotal,
            bikes: this.selectedBikes
        };
        this.rentalService.returnRental(ret).subscribe(function (data) {
            if (data.success) {
                _this.ngOnInit();
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger' });
            }
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    RentalComponent.prototype.calcPrice = function (bikes) {
        this.currentTime = new Date;
        var duration = Math.round((this.currentTime.getTime() - this.rentalDate.getTime()) / (1000 * 60));
        var total = 0;
        for (var bike = 0; bike < bikes.length; bike++) {
            var cost = Math.round((duration * (bikes[bike].price / 60)) * 100) / 100;
            total += cost;
        }
        this.subTotal = Math.round(total * 100) / 100;
        this.rentalDuration = duration;
    };
    RentalComponent.prototype.onEditRental = function (rental) {
        this.custId = rental.customerId;
        this.rentalId = rental._id;
        this.rentalDate = new Date(rental.date);
        this.rentalBikes = rental.bikeId;
        this.editDate = new Date(rental.date);
    };
    RentalComponent.prototype.resetEdit = function () {
        this.editDate = this.rentalDate;
        document.getElementById("rentalDate").nodeValue = this.rentalDate.toLocaleString();
    };
    RentalComponent.prototype.onEditSubmit = function () {
        var _this = this;
        var edit = {
            rentalId: this.rentalId,
            date: new Date(this.editDate).toISOString()
        };
        console.log(edit);
        this.rentalService.changeDate(edit).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-success' });
                _this.ngOnInit();
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger' });
            }
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    RentalComponent.prototype.updateChecked = function (bike) {
        var index = this.selectedBikes.indexOf(bike);
        if (index === -1) {
            this.selectedBikes.push(bike);
        }
        else {
            this.selectedBikes.splice(index, 1);
        }
        console.log(this.selectedBikes);
    };
    RentalComponent.prototype.clearSelectedBikes = function () {
        this.selectedBikes.splice(0, this.selectedBikes.length);
    };
    RentalComponent.prototype.clearCustInfo = function () {
        this.custName = "";
        this.custId = null;
    };
    RentalComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-rental',
            template: __webpack_require__(704),
            styles: [__webpack_require__(694)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_customer_service__["a" /* CustomerService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_customer_service__["a" /* CustomerService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_bike_service__["a" /* BikeService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_bike_service__["a" /* BikeService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_rental_service__["a" /* RentalService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_rental_service__["a" /* RentalService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _d) || Object])
    ], RentalComponent);
    return RentalComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/home/jm/Projects/mean/angular-src/src/rental.component.js.map

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(66);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());
//# sourceMappingURL=/home/jm/Projects/mean/angular-src/src/auth.guard.js.map

/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BikeFilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BikeFilterPipe = (function () {
    function BikeFilterPipe() {
    }
    BikeFilterPipe.prototype.transform = function (bikes, query) {
        if (!bikes || !query)
            return bikes;
        return bikes.filter(function (bike) {
            for (var field in query) {
                if (query[field]) {
                    if (typeof query[field] === 'string') {
                        if (bike[field].toLowerCase().indexOf(query[field].toLowerCase()) === -1) {
                            return false;
                        }
                    }
                    else if (typeof query[field] === 'number') {
                        if (bike[field] !== query[field]) {
                            return false;
                        }
                    }
                }
            }
            return true;
        });
    };
    BikeFilterPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'bfilter',
            pure: false
        }), 
        __metadata('design:paramtypes', [])
    ], BikeFilterPipe);
    return BikeFilterPipe;
}());
//# sourceMappingURL=/home/jm/Projects/mean/angular-src/src/bikefilter.pipe.js.map

/***/ }),

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Customer; });
var Customer = (function () {
    function Customer() {
    }
    return Customer;
}());
//# sourceMappingURL=/home/jm/Projects/mean/angular-src/src/customer.js.map

/***/ }),

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerFilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CustomerFilterPipe = (function () {
    function CustomerFilterPipe() {
    }
    CustomerFilterPipe.prototype.transform = function (customers, query) {
        if (!customers || !query)
            return customers;
        return customers.filter(function (cust) {
            for (var field in query) {
                if (query[field] && cust[field]) {
                    if (field === 'name' || field === 'info') {
                        if (cust[field].toUpperCase().indexOf(query[field].toUpperCase()) === -1) {
                            return false;
                        }
                    }
                    else if (field === 'rentalId') {
                        var found = false;
                        for (var id in cust[field]) {
                            if (cust[field][id].indexOf(query[field]) !== -1) {
                                found = true;
                            }
                        }
                        return found;
                    }
                    else {
                        if (cust[field].indexOf(query[field]) === -1) {
                            return false;
                        }
                    }
                }
            }
            return true;
        });
    };
    CustomerFilterPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'cfilter',
            pure: false
        }), 
        __metadata('design:paramtypes', [])
    ], CustomerFilterPipe);
    return CustomerFilterPipe;
}());
//# sourceMappingURL=/home/jm/Projects/mean/angular-src/src/customerfilter.pipe.js.map

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/home/jm/Projects/mean/angular-src/src/environment.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/register', user, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/auth', user, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('users/profile', { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.getUserData = function () {
        var token = localStorage.getItem('id_token');
        var user = localStorage.getItem('user');
        this.authToken = token;
        this.user = JSON.parse(user);
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());
//# sourceMappingURL=/home/jm/Projects/mean/angular-src/src/auth.service.js.map

/***/ }),

/***/ 685:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 686:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 687:
/***/ (function(module, exports) {

module.exports = ".panel {\n\tpadding:0;\n}\n\n#countPanels {\n\t padding-left: 10%;\n\t padding-right: 10%;\n}"

/***/ }),

/***/ 688:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 689:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 690:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 691:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 692:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 693:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 694:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 695:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n\t<flash-messages></flash-messages>\n\t<router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ 696:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Customers</h2>\n\n<div *ngIf=\"customers\">\n\t<ul class=\"list-group\">\n\t\t\t<!-- Customer List Filter-->\n\t\t<li class=\"list-group-item\">\n\t\t\t<div class=\"row\">\n\t\t\t  <div class=\"col-md-3 col-sm-6 col-xs-12\">\n\t\t\t    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"customerfilter._id\" placeholder=\"ID\">\n\t\t\t  </div>\n\t\t\t  <div class=\"col-md-3 col-sm-6 col-xs-12\">\n\t\t\t    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"customerfilter.name\" placeholder=\"Name\">\n\t\t\t  </div>\n\t\t\t  <div class=\"col-md-3 col-sm-6 col-xs-12\">\n\t\t\t    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"customerfilter.info\" placeholder=\"Info\">\n\t\t\t  </div>\n\t\t\t  <div class=\"col-md-3 col-sm-6 col-xs-12\">\n\t\t\t    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"customerfilter.rentalId\" placeholder=\"Rental ID\">\n\t\t\t  </div>\n\t\t  </div>\n\t\t</li>\n\t\t<!-- Customer List -->\n\t\t<li class=\"list-group-item\" *ngFor=\"let cust of customers | cfilter:customerfilter\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-3 col-sm-6 col-xs-12 text-center\">\n\t      \t<b>Customer ID:</b> <div>{{cust._id}}</div>\n\t      </div>\n\t      <div class=\"col-md-3 col-sm-6 col-xs-12 text-center\">\n\t      \t<b>Name:</b> <div>{{cust.name}}</div>\n\t      </div>\n\t      <div class=\"col-md-3 col-sm-6 col-xs-12 text-center\">\n\t      \t<b>Note:</b> <div>{{cust.info}}</div>\n\t      </div>\n\t      <div class=\"col-md-3 col-sm-6 col-xs-12 text-center\">\n\t      \t<b>Rentals:</b> <div *ngFor=\"let id of cust.rentalId\">{{id}}</div>\n\t      </div>\n    \t</div>\n    \t<hr>\n    \t<div class=\"row\">\n\t      <div class=\"col-md-12 col-sm-12 col-xs-12 text-center\">\n\t      \t<button type=\"button\" class=\"btn btn-primary btn-xs\" (click)=\"onEditCust(cust)\" data-toggle=\"modal\" data-target=\"#editModal\">Edit Note</button>\n\t      \t<button type=\"button\" class=\"btn btn-danger btn-xs pull-right\" (click)=\"onDelCust(cust)\">Delete Customer</button>\n\t      </div>\n    \t</div>\n    </li>\n\t</ul>\n</div>\n\n<!-- Edit Customer Modal -->\n<div class=\"modal fade\" id=\"editModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\" id=\"myModalLabel\">Customer Info</h4>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"form-group\">\n\t\t\t\t\t<label>Customer ID:</label>\n\t\t\t\t\t{{this.currCust._id}}\n\t\t\t\t</div>\n        <div class=\"form-group\">\n\t\t\t\t\t<label>Name:</label>\n\t\t\t\t\t{{this.currCust.name}}\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Note</label>\n\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"this.currCust.info\" name=\"custInfo\" class=\"form-control\">\n\t\t\t\t</div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"resetEdit()\">Reset Changes</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"onEditSubmit()\" data-dismiss=\"modal\">Save Changes</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 697:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Dashboard</h2>\n\n<div class=\"col-lg-12\">\n\t<!-- Current Counts -->\n\t<div class=\"row text-center\" id=\"countPanels\">\n\t\t\t<div class=\"panel panel-success col-md-5 col-xs-12\">\n\t\t\t\t<div class=\"panel-heading\">\n\t\t\t    <h2 class=\"panel-title\">Current Active Rentals</h2>\n\t\t\t  </div>\n\t\t\t  <div class=\"panel-body\">\n\t\t\t\t\t<h1>\n\t\t\t    \t{{this.rentalCount}}\n\t\t\t    </h1>\n\t\t\t  </div>\n\t\t\t</div>\n\n\t\t\t<div class=\"panel panel-success col-md-5 col-md-offset-1 col-xs-12 pull-right\">\n\t\t\t  <div class=\"panel-heading\">\n\t\t\t    <h2 class=\"panel-title\">Current Available Bikes</h2>\n\t\t\t  </div>\n\t\t\t  <div class=\"panel-body\">\n\t\t\t    <h1>\n\t\t\t    \t{{this.availBikeCount}} / {{this.totalBikeCount}}\n\t\t\t    </h1>\n\t\t\t  </div>\n\t\t\t</div>\n\t</div>\n\n\t<div *ngIf=\"rentalList\" class=\"row\">\n\t\t<h3>Active Rentals</h3>\n\t\t<ul class=\"list-group\">\n\t\t\t<!-- Rental List -->\n\t\t\t<li class=\"list-group-item\" *ngFor=\"let rental of rentalList\">\n\t\t\t\t<div class=\"row text-center\">\n\t\t      <div class=\"col-md-3 col-sm-6 col-xs-12\">\n\t\t\t\t\t\t<b>Rental ID:</b> <div>{{rental._id}}</div>\n\t\t      \t<hr>\n\t\t      \t<b>Status:</b> <div *ngIf=\"rental.status\" class=\"text-success\">Active</div> <div *ngIf=\"!rental.status\" class=\"text-danger\">Returned</div>\n\t\t      </div>\n\t\t      <div class=\"col-md-3 col-sm-6 col-xs-12\">\n\t\t      \t<b>Customer ID:</b> <div>{{rental.customerId}}</div>\n\t\t      \t<hr>\n\t\t      \t<b>Customer Name:</b> <div>{{rental.customerName}}</div>\n\t\t      </div>\n\t\t      <div class=\"col-md-3 col-sm-6 col-xs-12\">\n\t\t      \t<b>Start Date:</b> <div>{{rental.date | date:\"medium\"}}</div>\n\t\t      \t<hr>\n\t\t      \t<b>Duration (Minutes):</b> <div>{{rental.duration}}</div>\n\t\t      </div>\n\t\t      <div class=\"col-md-3 col-sm-6 col-xs-12\" style=\"overflow-wrap:break-word;\">\n\t\t      \t<b>Bikes:</b> <div>{{rental.bikeId}}</div>\n\t\t      \t<hr>\n\t\t      \t<b>Total:</b> <div>{{rental.total}}</div>\n\t\t      </div>\n\t    \t</div>\n\t    </li>\n\t\t</ul>\n\t</div>\n\n\t<div *ngIf=\"bikeList\" class=\"row\">\n\t\t<h3>Available Bikes</h3>\n\t\t<ul class=\"list-group\">\n\t\t\t<!-- Bike List Filter-->\n<!-- \t\t\t<li class=\"list-group-item\">\n\t\t\t\t<div class=\"row text-center\">\n\t\t\t\t  <div class=\"col-md-3 col-sm-6 col-xs-12\">\n\t\t\t\t    <input class=\"form-control\" type=\"number\" [(ngModel)]=\"bikefilter._id\" placeholder=\"ID\">\n\t\t\t\t  </div>\n\t\t\t\t  <div class=\"col-md-3 col-sm-6 col-xs-12\">\n\t\t\t\t    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"bikefilter.model\" placeholder=\"Model\">\n\t\t\t\t  </div>\n\t\t\t\t  <div class=\"col-md-3 col-sm-6 col-xs-12\">\n\t\t\t\t    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"bikefilter.status\" placeholder=\"Status\">\n\t\t\t\t  </div>\n\t\t\t\t  <div class=\"col-md-3 col-sm-6 col-xs-12\">\n\t\t\t\t    <input class=\"form-control\" type=\"number\" min=\"4.5\" max=\"12.5\" step=\"0.5\" [(ngModel)]=\"bikefilter.price\" placeholder=\"Price\">\n\t\t\t\t  </div>\n\t\t\t  </div>\n\t\t\t</li> -->\n\n\t\t\t<!-- Bike List -->\n\t\t\t<li class=\"list-group-item\" *ngFor=\"let bike of bikeList | bfilter:bikefilter\">\n\t\t\t\t<div class=\"row text-center\">\n\t\t      <div class=\"col-md-3 col-sm-6 col-xs-12\">\n\t\t      <b>ID:</b> {{bike._id}}\n\t\t      </div>\n\t\t      <div class=\"col-md-3 col-sm-6 col-xs-12\">\n\t\t      <b>Model:</b> {{bike.model}}\n\t\t      </div>\n\t\t      <div class=\"col-md-3 col-sm-6 col-xs-12\">\n\t\t      <b>Status:</b> {{bike.status}}\n\t\t      </div>\n\t\t      <div class=\"col-md-3 col-sm-6 col-xs-12\">\n\t\t      <b>Price:</b> {{bike.price}}\n\t\t      </div>\n\t    \t</div>\n\t    </li>\n\t\t</ul>\n\t</div>\n\n</div>"

/***/ }),

/***/ 698:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n\t<h2>Bike Rental</h2>\n\t<div>\n\t\t<a class=\"btn btn-primary\" [routerLink]=\"['/register']\">Register</a>\n\t\t<a class=\"btn btn-default\" [routerLink]=\"['/login']\">Login</a>\n\t</div>\n</div>\n"

/***/ }),

/***/ 699:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Bikes <a class=\"btn btn-success pull-right\" data-toggle=\"modal\" data-target=\"#addModal\" (click)=\"clearBikeInfo()\">Add Bike</a></h2>\n\n<div *ngIf=\"list\">\n\t<ul class=\"list-group\">\n\t\t<!-- Bike List Filter-->\n\t\t<li class=\"list-group-item\">\n\t\t\t<div class=\"row\">\n\t\t\t  <div class=\"col-md-2 col-sm-4 col-xs-6 text-center\">\n\t\t\t    <input class=\"form-control\" type=\"number\" [(ngModel)]=\"bikefilter._id\" placeholder=\"ID\">\n\t\t\t  </div>\n\t\t\t  <div class=\"col-md-2 col-sm-4 col-xs-6 text-center\">\n\t\t\t    <select class=\"form-control\" [(ngModel)]=\"bikefilter.model\">\n\t\t\t    \t<option selected=\"selected\" [ngValue]=\"null\">All</option>\n\t\t\t\t    <option *ngFor=\"let model of bikeModels\" [ngValue]=\"model\">{{model}}</option>\n\t\t\t    </select>\n\t\t\t  </div>\n\t\t\t  <div class=\"col-md-2 col-sm-4 col-xs-6 text-center\">\n\t\t\t    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"bikefilter.status\" placeholder=\"Status\">\n\t\t\t  </div>\n\t\t\t  <div class=\"col-md-2 col-sm-4 col-xs-6 text-center\">\n\t\t\t    <input class=\"form-control\" type=\"number\" min=\"4.5\" max=\"12.5\" step=\"0.5\" [(ngModel)]=\"bikefilter.price\" placeholder=\"Price\">\n\t\t\t  </div>\n\t\t  </div>\n\t\t</li>\n\t\t<!-- Bike List -->\n\t\t<li class=\"list-group-item\" *ngFor=\"let bike of list | bfilter:bikefilter\">\n\t\t\t<div class=\"row\">\n\t      <div class=\"col-md-2 col-sm-4 col-xs-6 text-center\">\n\t      <b>ID:</b> {{bike._id}}\n\t      </div>\n\t      <div class=\"col-md-2 col-sm-4 col-xs-6 text-center\">\n\t      <b>Model:</b> {{bike.model}}\n\t      </div>\n\t      <div class=\"col-md-2 col-sm-4 col-xs-6 text-center\">\n\t      <b>Status:</b> {{bike.status}}\n\t      </div>\n\t      <div class=\"col-md-2 col-sm-4 col-xs-6 text-center\">\n\t      <b>Price:</b> {{bike.price}}\n\t      </div>\n\t      <div class=\"col-md-4 col-sm-12 col-xs-12 text-center\"> \n\t      \t<button type=\"button\" class=\"btn btn-primary btn-xs pull-left\" (click)=\"onEditBike(bike)\" data-toggle=\"modal\" data-target=\"#editModal\">Edit Bike</button>\n\t      \t<button type=\"button\" class=\"btn btn-danger btn-xs pull-right\" (click)=\"onDelBike(bike)\">Delete Bike</button>\n\t      </div>\n    \t</div>\n    </li>\n\t</ul>\n</div>\n\n<!-- Add Modal -->\n<div class=\"modal fade\" id=\"addModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"clearBikeInfo()\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\" id=\"myModalLabel\">Add Bike</h4>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"form-group\">\n\t\t\t\t\t<label>ID</label>\n\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"currBike._id\" name=\"id\" class=\"form-control\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Model</label>\n\t\t\t\t\t<select class=\"form-control\" [(ngModel)]=\"currBike.model\">\n\t\t\t\t    <option *ngFor=\"let model of bikeModels\" [ngValue]=\"model\">{{model}}</option>\n\t\t\t    </select>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Price</label>\n\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"currBike.price\" name=\"price\" class=\"form-control\">\n\t\t\t\t</div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"clearBikeInfo()\">Clear</button>\n        <button type=\"button\" class=\"btn btn-primary\" *ngIf=\"currBike._id && currBike.model && currBike.price\" (click)=\"onAddSubmit()\" data-dismiss=\"modal\">Add Bike</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Edit Modal -->\n<div class=\"modal fade\" id=\"editModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"clearBikeInfo()\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\" id=\"myModalLabel\">Edit Bike {{currBike._id}}</h4>\n      </div>\n      <div class=\"modal-body\" *ngIf=\"prevBike.status === 'in'\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Model</label>\n\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"currBike.model\" name=\"model\" class=\"form-control\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Status</label>\n\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"currBike.status\" name=\"status\" class=\"form-control\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Price</label>\n\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"currBike.price\" name=\"price\" class=\"form-control\">\n\t\t\t\t</div>\n      </div>\n      <div class=\"modal-body\" *ngIf=\"prevBike.status !== 'in'\">\n      \t<h3 class=\"text-danger\">Bike is currently out and cannot be modified.</h3>\n      </div>\n      <div class=\"modal-footer\" *ngIf=\"prevBike.status === 'in'\">\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"undoEdit()\">Reset</button>\n        <button type=\"button\" class=\"btn btn-primary\" *ngIf=\"currBike.model && currBike.status && currBike.price\" (click)=\"onEditSubmit()\" data-dismiss=\"modal\">Save changes</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 700:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Login</h2>\n<form (submit)=\"onLoginSubmit()\">\n\t<div class=\"form-group\">\n\t\t<label>Username</label>\n\t\t<input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label>Password</label>\n\t\t<input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n\t</div>\n\t<input type=\"submit\" class=\"btn btn-primary\" value=\"Login\">\n</form>"

/***/ }),

/***/ 701:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\" role=\"navigation\">\n            <div class=\"navbar-header\">\n                <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-ex1-collapse\">\n                    <span class=\"sr-only\">Toggle navigation</span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                </button>\n                <a class=\"navbar-brand\" [routerLink]=\"['/']\">Bike Rental</a>\n            </div>\n\n            <div class=\"collapse navbar-collapse navbar-ex1-collapse\">\n                <ul id=\"active\" class=\"nav navbar-nav side-nav\">\n                \t<li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\"><a [routerLink]=\"['/register']\">Register</a></li>\n                    <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\"><a [routerLink]=\"['/dashboard']\">Dashboard</a></li>\n                    <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\"><a [routerLink]=\"['/inventory']\">Bikes</a></li>\n                    <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\"><a [routerLink]=\"['/rental']\">Rental</a></li>\n                    <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\"><a [routerLink]=\"['/customer']\">Customers</a></li>\n                    <!--\n                    <li [routerLinkActive]=\"['active']\"><a [routerLink]=\"['/sales']\">Sales</a></li>\n                    -->\n                </ul>\n                <ul class=\"nav navbar-nav navbar-right navbar-user\">\n                    <!-- <li class=\"dropdown messages-dropdown\" [routerLinkActive]=\"['active']\">\n                        <a [routerLink]=\"['/messages']\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"fa fa-envelope\"></i> Messages <span class=\"badge\">2</span> <b class=\"caret\"></b></a>\n                        <ul class=\"dropdown-menu\">\n                            <li class=\"dropdown-header\">2 New Messages</li>\n                            <li class=\"message-preview\">\n                                <a href=\"#\">\n                                    <span class=\"avatar\"><i class=\"fa fa-bell\"></i></span>\n                                    <span class=\"message\">Security alert</span>\n                                </a>\n                            </li>\n                            <li class=\"divider\"></li>\n                            <li class=\"message-preview\">\n                                <a href=\"#\">\n                                    <span class=\"avatar\"><i class=\"fa fa-bell\"></i></span>\n                                    <span class=\"message\">Security alert</span>\n                                </a>\n                            </li>\n                            <li class=\"divider\"></li>\n                            <li><a href=\"#\">Go to Inbox <span class=\"badge\">2</span></a></li>\n                        </ul>\n                    </li> -->\n                    <li *ngIf=\"authService.loggedIn()\" class=\"dropdown user-dropdown\">\n                        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">{{authService.user.name}} <b class=\"caret\"></b></a>\n                        <ul class=\"dropdown-menu\">\n                            <li><a [routerLink]=\"['/profile']\"><i class=\"fa fa-user\"></i> Profile</a></li>\n                            <li class=\"divider\"></li>\n                            <li><a href=\"#\" (click)=\"onLogoutClick()\"><i class=\"fa fa-power-off\"></i> Log Out</a></li>\n\n                        </ul>\n                    </li>\n                </ul>\n            </div>\n        </nav>"

/***/ }),

/***/ 702:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n\t<h2 class=\"page-header\">Profile</h2>\n\t<ul class=\"list-group\">\n\t\t<li class=\"list-group-item\"><b>Username:</b> {{user.username}}</li>\n\t\t<li class=\"list-group-item\"><b>Email:</b> {{user.email}}</li>\n\t\t<li class=\"list-group-item\"><b>Last Login:</b> {{user.lastLogin | date:\"medium\"}}</li>\n\t</ul>\n</div>"

/***/ }),

/***/ 703:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Register</h2>\n<form (submit)=\"onRegisterSubmit()\">\n\t<div class=\"form-group\">\n\t\t<label>Name</label>\n\t\t<input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label>Username</label>\n\t\t<input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label>Email</label>\n\t\t<input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\">\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label>Password</label>\n\t\t<input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n\t</div>\n\t<input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n</form>"

/***/ }),

/***/ 704:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Rentals <a class=\"btn btn-success pull-right\" data-toggle=\"modal\" data-target=\"#startModal\" (click)=\"clearCustInfo()\">Start Rental</a></h2>\n\n<!-- Rental List -->\n<div *ngIf=\"rentals\">\n\t<ul class=\"list-group\">\n\t\t<li class=\"list-group-item\" *ngFor=\"let rental of rentals\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-3 col-sm-6 col-xs-12 text-center\">\n\t      \t<b>Rental ID:</b> <div>{{rental._id}}</div>\n\t      \t<hr>\n\t      \t<b>Status:</b> <div *ngIf=\"rental.status\" class=\"text-success\">Active</div> <div *ngIf=\"!rental.status\" class=\"text-danger\">Returned</div>\n\t      </div>\n\t      <div class=\"col-md-3 col-sm-6 col-xs-12 text-center\">\n\t      \t<b>Customer ID:</b> <div>{{rental.customerId}}</div>\n\t      \t<hr>\n\t      \t<b>Customer Name:</b> <div>{{rental.customerName}}</div>\n\t      </div>\n\t      <div class=\"col-md-3 col-sm-6 col-xs-12 text-center\">\n\t      \t<b>Start Date:</b> <div>{{rental.date | date:\"medium\"}}</div>\n\t      \t<hr>\n\t      \t<b>Duration (Minutes):</b> <div>{{rental.duration}}</div>\n\t      </div>\n\t      <div class=\"col-md-3 col-sm-6 col-xs-12 text-center\" style=\"overflow-wrap:break-word;\">\n\t      \t<b>Bikes:</b> <div>{{rental.bikeId}}</div>\n\t      \t<hr>\n\t      \t<b>Total:</b> <div>{{rental.total}}</div>\n\t      </div>\n    \t</div>\n    \t<hr>\n    \t<div class=\"row\">\n\t      <div class=\"col-md-12 col-sm-12 col-xs-12 text-center\">\n\t      \t<button *ngIf=\"rental.status\" type=\"button\" class=\"btn btn-primary btn-xs\" (click)=\"onAddBike(rental)\" data-toggle=\"modal\" data-target=\"#addBikeModal\">Add Bike</button>\n\t      \t<button *ngIf=\"rental.status\" type=\"button\" class=\"btn btn-primary btn-xs\" (click)=\"onDelBike(rental)\" data-toggle=\"modal\" data-target=\"#delBikeModal\">Remove Bike</button>\n\t      \t<button *ngIf=\"rental.status\" type=\"button\" class=\"btn btn-primary btn-xs\" (click)=\"onEditRental(rental)\" data-toggle=\"modal\" data-target=\"#editModal\">Edit Time</button>\n\t      \t<button *ngIf=\"rental.status\" type=\"button\" class=\"btn btn-primary btn-xs\" (click)=\"onRetBike(rental)\" data-toggle=\"modal\" data-target=\"#retBikeModal\">Return Bike</button>\n\t      \t<button type=\"button\" class=\"btn btn-danger btn-xs pull-right\" (click)=\"onDelRental(rental)\">Delete Rental</button>\n\t      </div>\n    \t</div>\n    </li>\n\t</ul>\n</div>\n\n<!-- Start Rental Modal -->\n<div class=\"modal fade\" id=\"startModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\" id=\"myModalLabel\">Customer Info</h4>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"form-group\">\n\t\t\t\t\t<label>Name</label>\n\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"custName\" name=\"custName\" class=\"form-control\">\n\t\t\t\t</div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"clearCustInfo()\">Clear</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"getCustId()\" data-dismiss=\"modal\">Create Rental</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Edit Rental Modal -->\n<div class=\"modal fade\" id=\"editModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\" id=\"myModalLabel\">Rental Info</h4>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"form-group\">\n\t\t\t\t\t<label>Rental ID:</label>\n\t\t\t\t\t{{this.rentalId}}\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Customer ID:</label>\n\t\t\t\t\t{{this.custId}}\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Date (Please change according to format)</label>\n\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"editDate\" id=\"rentalDate\" class=\"form-control\">\n\t\t\t\t</div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"resetEdit()\">Reset Change</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"onEditSubmit()\" data-dismiss=\"modal\">Change Time</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Add Bike Modal -->\n<div class=\"modal fade\" id=\"addBikeModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"clearSelectedBikes()\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\" id=\"myModalLabel\">Rental Info</h4>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"form-group\">\n\t\t\t\t\t<label>Rental ID:</label>\n\t\t\t\t\t{{this.rentalId}}\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Customer ID:</label>\n\t\t\t\t\t{{this.custId}}\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Date:</label>\n\t\t\t\t\t{{this.rentalDate | date:\"medium\"}}\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Bike</label>\n\t\t\t\t\t<label *ngFor=\"let inBike of inBikes\" class=\"form-control\">\n\t\t        <input type=\"checkbox\" (change)=\"updateChecked(inBike)\"> ID: {{inBike._id}} | Model: {{inBike.model}}\n\t\t    \t</label>\n\t\t\t\t</div>\n      </div>\n      <div class=\"modal-footer\">\n        <button *ngIf=\"selectedBikes.length !== 0\" type=\"button\" class=\"btn btn-primary\" (click)=\"onAddBikeSubmit()\" data-dismiss=\"modal\">Add Bike</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Remove Bike Modal -->\n<div class=\"modal fade\" id=\"delBikeModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"clearSelectedBikes()\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\" id=\"myModalLabel\">Remove Bike</h4>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"form-group\">\n\t\t\t\t\t<label>Rental ID:</label>\n\t\t\t\t\t{{this.rentalId}}\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Customer ID:</label>\n\t\t\t\t\t{{this.custId}}\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Date:</label>\n\t\t\t\t\t{{this.rentalDate | date:\"medium\"}}\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Bike</label>\n\t\t\t\t\t<label *ngFor=\"let outBike of outBikes\" class=\"form-control\">\n\t\t        <input type=\"checkbox\" (change)=\"updateChecked(outBike)\"> ID: {{outBike._id}} | Model: {{outBike.model}}\n\t\t    \t</label>\n\t\t\t\t</div>\n      </div>\n      <div class=\"modal-footer\">\n        <button *ngIf=\"selectedBikes.length !== 0\" type=\"button\" class=\"btn btn-primary\" (click)=\"onDelBikeSubmit()\" data-dismiss=\"modal\">Remove Bike</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Return Bike Modal -->\n<div class=\"modal fade\" id=\"retBikeModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"clearSelectedBikes()\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\" id=\"myModalLabel\">Return Bike</h4>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"form-group\">\n\t\t\t\t\t<label>Rental ID:</label>\n\t\t\t\t\t{{this.rentalId}}\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Customer ID:</label>\n\t\t\t\t\t{{this.custId}}\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Customer Name:</label>\n\t\t\t\t\t{{this.custName}}\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Date:</label>\n\t\t\t\t\t{{this.rentalDate | date:\"medium\"}}\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Bike</label>\n\t\t\t\t\t<label *ngFor=\"let outBike of outBikes\" class=\"form-control\">\n\t\t        <input type=\"checkbox\" (change)=\"updateChecked(outBike);calcPrice(this.selectedBikes)\"> ID: {{outBike._id}} | Model: {{outBike.model}}\n\t\t    \t</label>\n\t\t\t\t</div>\n      </div>\n      <div class=\"modal-footer\">\n      \t<div class=\"pull-left\">\n\t\t\t\t\t<label>Total:</label>\n\t\t\t\t\t{{this.subTotal}}\n\t\t\t\t</div>\n        <button *ngIf=\"selectedBikes.length !== 0\" type=\"button\" class=\"btn btn-primary\" (click)=\"onRetBikeSubmit()\" data-dismiss=\"modal\">Return Bike</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 727:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(394);


/***/ })

},[727]);
//# sourceMappingURL=main.bundle.map