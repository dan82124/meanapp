webpackJsonp(["main"],{

/***/ "./src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_gendir lazy recursive";

/***/ }),

/***/ "./src/app/animations/fade-in.animation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fadeInAnimation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/@angular/animations.es5.js");

var fadeInAnimation = 
// trigger name for attaching this animation to an element using the [@triggerName] syntax
Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* trigger */])('fadeInAnimation', [
    // route 'enter' transition
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* transition */])(':enter', [
        // css styles at start of transition
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* style */])({ opacity: 0 }),
        // animation and styles at end of transition
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('.5s', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* style */])({ opacity: 1 }))
    ])
]);
//# sourceMappingURL=/home/jm/Projects/mean/angular-src/src/fade-in.animation.js.map

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n\t<flash-messages></flash-messages>\n\t<router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_bike_service__ = __webpack_require__("./src/app/services/bike.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(authService, bikeService) {
        this.authService = authService;
        this.bikeService = bikeService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.authService.getUserData();
        this.bikeService.getModelList();
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_bike_service__["a" /* BikeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_bike_service__["a" /* BikeService */]) === "function" && _b || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b;
}());

//# sourceMappingURL=/home/jm/Projects/mean/angular-src/src/app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_navbar_navbar_component__ = __webpack_require__("./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_register_register_component__ = __webpack_require__("./src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_dashboard_dashboard_component__ = __webpack_require__("./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_profile_profile_component__ = __webpack_require__("./src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_inventory_inventory_component__ = __webpack_require__("./src/app/components/inventory/inventory.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_rental_rental_component__ = __webpack_require__("./src/app/components/rental/rental.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_customer_customer_component__ = __webpack_require__("./src/app/components/customer/customer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_sales_sales_component__ = __webpack_require__("./src/app/components/sales/sales.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_checkout_checkout_component__ = __webpack_require__("./src/app/components/checkout/checkout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_customer_service__ = __webpack_require__("./src/app/services/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_rental_service__ = __webpack_require__("./src/app/services/rental.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_bike_service__ = __webpack_require__("./src/app/services/bike.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_validate_service__ = __webpack_require__("./src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__guards_auth_guard__ = __webpack_require__("./src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__shared_bikefilter_pipe__ = __webpack_require__("./src/app/shared/bikefilter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__shared_customerfilter_pipe__ = __webpack_require__("./src/app/shared/customerfilter.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_10__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_9__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_13__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_24__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_12__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_24__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'inventory', component: __WEBPACK_IMPORTED_MODULE_14__components_inventory_inventory_component__["a" /* InventoryComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_24__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'rental', component: __WEBPACK_IMPORTED_MODULE_15__components_rental_rental_component__["a" /* RentalComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_24__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'customer', component: __WEBPACK_IMPORTED_MODULE_16__components_customer_customer_component__["a" /* CustomerComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_24__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'sales', component: __WEBPACK_IMPORTED_MODULE_17__components_sales_sales_component__["a" /* SalesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_24__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'checkout', component: __WEBPACK_IMPORTED_MODULE_18__components_checkout_checkout_component__["a" /* CheckoutComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_24__guards_auth_guard__["a" /* AuthGuard */]] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_inventory_inventory_component__["a" /* InventoryComponent */],
                __WEBPACK_IMPORTED_MODULE_25__shared_bikefilter_pipe__["a" /* BikeFilterPipe */],
                __WEBPACK_IMPORTED_MODULE_26__shared_customerfilter_pipe__["a" /* CustomerFilterPipe */],
                __WEBPACK_IMPORTED_MODULE_15__components_rental_rental_component__["a" /* RentalComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_customer_customer_component__["a" /* CustomerComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_sales_sales_component__["a" /* SalesComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_checkout_checkout_component__["a" /* CheckoutComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesModule"],
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_22__services_validate_service__["a" /* ValidateService */],
                __WEBPACK_IMPORTED_MODULE_23__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_24__guards_auth_guard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_21__services_bike_service__["a" /* BikeService */],
                __WEBPACK_IMPORTED_MODULE_20__services_rental_service__["a" /* RentalService */],
                __WEBPACK_IMPORTED_MODULE_19__services_customer_service__["a" /* CustomerService */]
            ],
            bootstrap: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=/home/jm/Projects/mean/angular-src/src/app.module.js.map

/***/ }),

/***/ "./src/app/components/checkout/checkout.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/checkout/checkout.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"this.rentalService.returnDetails\" id=\"rentalDetails\">\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">\n      <div class=\"row\">\n        <div class=\"col-md-6 col-sm-6 col-xs-12 text-center\">\n          <b>Rental ID</b> <div>{{rentalService.returnDetails.rental._id}}</div>\n        </div>\n        <div class=\"col-md-6 col-sm-6 col-xs-12 text-center\">\n          <b>Customer Name</b> <div>{{rentalService.returnDetails.cust.name}}</div>\n        </div>\n      </div>\n      <hr>\n      <div class=\"row\">\n        <div class=\"col-md-4 col-sm-4 col-xs-12 text-center\">\n          <b>Start Time</b> <div>{{rentalService.returnDetails.rental.date | date:\"medium\"}}</div>\n        </div>\n        <div class=\"col-md-4 col-sm-4 col-xs-12 text-center\">\n          <b>Return Time</b> <div>{{rentalService.returnDetails.endDate | date:\"medium\"}}</div>\n        </div>\n        <div class=\"col-md-4 col-sm-4 col-xs-12 text-center\">\n          <b>Duration (Minutes)</b> <div>{{rentalService.returnDetails.rental.duration}}</div>\n        </div>\n      </div>\n    </li>\n    <br>\n    <table class=\"table table-bordered\">\n      <thead>\n        <tr>\n          <th><b>Bike ID</b></th>\n          <th><b>Model</b></th>\n          <th><b>Rate</b></th>\n          <th><b>Subtotal</b></th>\n          <th><b>Tax</b></th>\n          <th><b>Total</b></th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let bikeDetail of rentalService.returnDetails.bikeCostDetails\">\n          <td>{{bikeDetail.bike._id}}</td>\n          <td>{{bikeDetail.bike.model}}</td>\n          <td>{{bikeDetail.bike.price}}</td>\n          <td>{{bikeDetail.subTotal | currency:'CAD':'1.2-2'}}</td>\n          <td>{{bikeDetail.tax | currency:'CAD':'1.2-2'}}</td>\n          <td>{{bikeDetail.total | currency:'CAD':'1.2-2'}}</td>\n        </tr>\n      </tbody>\n    </table>\n    <br>\n    <li class=\"list-group-item\">\n      <div class=\"row\">\n        <div class=\"col-md-4 col-sm-4 col-xs-12 text-center\">\n          <b>Subtotal</b> <div>{{rentalService.returnDetails.subTotal | currency:'CAD':'1.2-2'}}</div>\n        </div>\n        <div class=\"col-md-4 col-sm-4 col-xs-12 text-center\">\n          <b>Tax</b> <div>{{rentalService.returnDetails.taxTotal | currency:'CAD':'1.2-2'}}</div>\n        </div>\n        <div class=\"col-md-4 col-sm-4 col-xs-12 text-center\">\n          <b>Total</b> <div>{{rentalService.returnDetails.total | currency:'CAD':'1.2-2'}}</div>\n        </div>\n      </div>\n    </li>\n  </ul>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-12 col-sm-12 col-xs-12 text-center\">\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"rentalService.print('rentalDetails')\">Print Page</button>\n    <button [disabled]=\"this.rentalService.returnDetails.rental.discountUsed == true || this.rentalService.returnDetails.cust.discount <= 0\" type=\"button\" class=\"btn btn-info\" (click)=\"applyDiscount()\">Discount $5</button>\n    <button *ngIf=\"this.rentalService.returnDetails\" type=\"button\" class=\"btn btn-primary\" (click)=\"onRetSubmit()\">Return Bike</button>\n    <button type=\"button\" class=\"btn btn-danger btn-xs pull-right\" (click)=\"goBack()\">Go Back</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/checkout/checkout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_rental_service__ = __webpack_require__("./src/app/services/rental.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CheckoutComponent = /** @class */ (function () {
    function CheckoutComponent(rentalService, router, flashMessage) {
        this.rentalService = rentalService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    CheckoutComponent.prototype.ngOnInit = function () {
    };
    CheckoutComponent.prototype.applyDiscount = function () {
        console.log(this.rentalService.returnDetails);
        this.rentalService.returnDetails.rental.discountUsed = true;
        this.rentalService.returnDetails.total = this.rentalService.returnDetails.total - 5.0;
        console.log(this.rentalService.returnDetails.rental.discountUsed);
    };
    CheckoutComponent.prototype.goBack = function () {
        this.router.navigate(['/rental']);
    };
    CheckoutComponent.prototype.onRetSubmit = function () {
        var _this = this;
        this.rentalService.returnRental(this.rentalService.returnDetails).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-success' });
                _this.router.navigate(['/rental']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger' });
            }
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    CheckoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-checkout',
            template: __webpack_require__("./src/app/components/checkout/checkout.component.html"),
            styles: [__webpack_require__("./src/app/components/checkout/checkout.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_rental_service__["a" /* RentalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_rental_service__["a" /* RentalService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
    ], CheckoutComponent);
    return CheckoutComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=/home/jm/Projects/mean/angular-src/src/checkout.component.js.map

/***/ }),

/***/ "./src/app/components/customer/customer.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/customer/customer.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Customers</h2>\n\n<div *ngIf=\"customers\">\n\t<ul class=\"list-group\">\n\t\t<!-- Customer List Filter-->\n\t\t<li class=\"list-group-item\">\n\t\t\t<div class=\"row\">\n\t\t\t  <div class=\"col-md-3 col-sm-6 col-xs-12\">\n\t\t\t    <input\n\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\ttype=\"text\"\n\t\t\t\t\t\t[(ngModel)]=\"customerfilter._id\"\n\t\t\t\t\t\tplaceholder=\"ID\">\n\t\t\t  </div>\n\t\t\t  <div class=\"col-md-3 col-sm-6 col-xs-12\">\n\t\t\t    <input\n\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\ttype=\"text\"\n\t\t\t\t\t\t[(ngModel)]=\"customerfilter.name\"\n\t\t\t\t\t\tplaceholder=\"Name\">\n\t\t\t  </div>\n\t\t\t  <div class=\"col-md-3 col-sm-6 col-xs-12\">\n\t\t\t    <input\n\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\ttype=\"text\"\n\t\t\t\t\t\t[(ngModel)]=\"customerfilter.info\"\n\t\t\t\t\t\tplaceholder=\"Info\">\n\t\t\t  </div>\n\t\t\t  <div class=\"col-md-3 col-sm-6 col-xs-12\">\n\t\t\t    <input\n\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\ttype=\"text\"\n\t\t\t\t\t\t[(ngModel)]=\"customerfilter.rentalId\"\n\t\t\t\t\t\tplaceholder=\"Rental ID\">\n\t\t\t  </div>\n\t\t  </div>\n\t\t</li>\n\t\t<!-- Customer List -->\n\t\t<li\n\t\t\tclass=\"list-group-item\"\n\t\t\t*ngFor=\"let cust of customers | cfilter:customerfilter\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-3 col-sm-6 col-xs-12 text-center\">\n\t      \t<b>Customer ID:</b> <div>{{cust._id}}</div>\n\t      </div>\n\t      <div class=\"col-md-3 col-sm-6 col-xs-12 text-center\">\n\t      \t<b>Name:</b> <div>{{cust.name}}</div>\n\t      </div>\n\t      <div class=\"col-md-3 col-sm-6 col-xs-12 text-center\">\n\t      \t<b>Note:</b> <div>{{cust.info}}</div>\n\t      </div>\n\t      <div class=\"col-md-3 col-sm-6 col-xs-12 text-center\">\n\t      \t<b>Rentals:</b> <div>{{cust.rentalId.length}}</div>\n\t      </div>\n    \t</div>\n\t\t\t<hr>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-3 col-sm-6 col-xs-12 text-center\">\n\t\t\t\t\t<b>Customer Since:</b> <div>{{cust.created | date: medium}}</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-3 col-sm-6 col-xs-12 text-center\">\n\t\t\t\t\t<b>Discount Available:</b> <div>{{cust.discount}}</div>\n\t\t\t\t</div>\n\t\t\t</div>\n    \t<hr>\n    \t<div class=\"row\">\n\t      <div class=\"col-md-12 col-sm-12 col-xs-12 text-center\">\n\t      \t<button\n\t\t\t\t\t\ttype=\"button\"\n\t\t\t\t\t\tclass=\"btn btn-primary btn-xs\"\n\t\t\t\t\t\t(click)=\"onEditCust(cust)\"\n\t\t\t\t\t\tdata-toggle=\"modal\"\n\t\t\t\t\t\tdata-target=\"#editModal\">\n\t\t\t\t\t\tEdit Note\n\t\t\t\t\t</button>\n\t      \t<button\n\t\t\t\t\t\ttype=\"button\"\n\t\t\t\t\t\tclass=\"btn btn-danger btn-xs pull-right\"\n\t\t\t\t\t\t(click)=\"onDelCust(cust)\">\n\t\t\t\t\t\tDelete Customer\n\t\t\t\t\t</button>\n\t      </div>\n    \t</div>\n    </li>\n\t</ul>\n</div>\n\n<!-- Edit Customer Modal -->\n<div\n\tclass=\"modal fade\"\n\tid=\"editModal\"\n\ttabindex=\"-1\"\n\trole=\"dialog\"\n\taria-labelledby=\"myModalLabel\">\n  <div\n\t\tclass=\"modal-dialog\"\n\t\trole=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button\n\t\t\t\t\ttype=\"button\"\n\t\t\t\t\tclass=\"close\"\n\t\t\t\t\tdata-dismiss=\"modal\"\n\t\t\t\t\taria-label=\"Close\">\n\t\t\t\t\t<span aria-hidden=\"true\">\n\t\t\t\t\t\t&times;\n\t\t\t\t\t</span>\n\t\t\t\t</button>\n        <h4\n\t\t\t\t\tclass=\"modal-title\"\n\t\t\t\t\tid=\"myModalLabel\">\n\t\t\t\t\tCustomer Info\n\t\t\t\t</h4>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"form-group\">\n\t\t\t\t\t<label>Customer ID:</label>\n\t\t\t\t\t{{this.currCust._id}}\n\t\t\t\t</div>\n        <div class=\"form-group\">\n\t\t\t\t\t<label>Name:</label>\n\t\t\t\t\t{{this.currCust.name}}\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Note</label>\n\t\t\t\t\t<input\n\t\t\t\t\t\ttype=\"text\"\n\t\t\t\t\t\t[(ngModel)]=\"this.currCust.info\"\n\t\t\t\t\t\tname=\"custInfo\"\n\t\t\t\t\t\tclass=\"form-control\">\n\t\t\t\t</div>\n      </div>\n      <div class=\"modal-footer\">\n        <button\n\t\t\t\t\ttype=\"button\"\n\t\t\t\t\tclass=\"btn btn-default\"\n\t\t\t\t\t(click)=\"resetEdit()\">\n\t\t\t\t\tReset Changes\n\t\t\t\t</button>\n        <button\n\t\t\t\t\ttype=\"button\"\n\t\t\t\t\tclass=\"btn btn-primary\"\n\t\t\t\t\t(click)=\"onEditSubmit()\"\n\t\t\t\t\tdata-dismiss=\"modal\">\n\t\t\t\t\tSave Changes\n\t\t\t\t</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/customer/customer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_customer_service__ = __webpack_require__("./src/app/services/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_customer__ = __webpack_require__("./src/app/shared/customer.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CustomerComponent = /** @class */ (function () {
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
            console.log(data.msg);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-customer',
            template: __webpack_require__("./src/app/components/customer/customer.component.html"),
            styles: [__webpack_require__("./src/app/components/customer/customer.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_customer_service__["a" /* CustomerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_customer_service__["a" /* CustomerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object])
    ], CustomerComponent);
    return CustomerComponent;
    var _a, _b;
}());

//# sourceMappingURL=/home/jm/Projects/mean/angular-src/src/customer.component.js.map

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports) {

module.exports = ".panel {\n\tpadding:0;\n}\n\n#countPanels {\n\t padding-left: 10%;\n\t padding-right: 10%;\n}"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Dashboard</h2>\n\n<div class=\"col-lg-12\">\n\t<!-- Current Counts -->\n\t<div\n\t\tclass=\"row text-center\"\n\t\tid=\"countPanels\">\n\t\t\t<div class=\"panel panel-success col-md-5 col-xs-12\">\n\t\t\t\t<div class=\"panel-heading\">\n\t\t\t    <h2 class=\"panel-title\">Current Active Rentals</h2>\n\t\t\t  </div>\n\t\t\t  <div class=\"panel-body\">\n\t\t\t\t\t<h1>\n\t\t\t    \t{{this.rentalCount}}\n\t\t\t    </h1>\n\t\t\t  </div>\n\t\t\t</div>\n\n\t\t\t<div class=\"panel panel-success col-md-5 col-md-offset-1 col-xs-12 pull-right\">\n\t\t\t  <div class=\"panel-heading\">\n\t\t\t    <h2 class=\"panel-title\">Current Available Bikes</h2>\n\t\t\t  </div>\n\t\t\t  <div class=\"panel-body\">\n\t\t\t    <h1>\n\t\t\t    \t{{this.availBikeCount}} / {{this.totalBikeCount}}\n\t\t\t    </h1>\n\t\t\t  </div>\n\t\t\t</div>\n\t</div>\n\n\t<div\n\t\t*ngIf=\"rentalList\" \n\t\tclass=\"row\">\n\t\t<h3>Active Rentals</h3>\n\t\t<ul class=\"list-group\">\n\t\t\t<!-- Rental List -->\n\t\t\t<li\n\t\t\t\tclass=\"list-group-item\"\n\t\t\t\t*ngFor=\"let rental of rentalList\">\n\t\t\t\t<div class=\"row text-center\">\n\t\t      <div class=\"col-md-3 col-sm-6 col-xs-12\">\n\t\t\t\t\t\t<b>Rental ID:</b>\n\t\t\t\t\t\t<div>{{rental._id}}</div>\n\t\t      \t<hr>\n\t\t      \t<b>Status:</b>\n\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t*ngIf=\"rental.status\"\n\t\t\t\t\t\t\tclass=\"text-success\">\n\t\t\t\t\t\t\tActive\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t*ngIf=\"!rental.status\"\n\t\t\t\t\t\t\tclass=\"text-danger\">\n\t\t\t\t\t\t\tReturned\n\t\t\t\t\t\t</div>\n\t\t      </div>\n\t\t      <div class=\"col-md-3 col-sm-6 col-xs-12\">\n\t\t      \t<b>Customer ID:</b>\n\t\t\t\t\t\t<div>{{rental.customerId}}</div>\n\t\t      \t<hr>\n\t\t      \t<b>Customer Name:</b>\n\t\t\t\t\t\t<div>{{rental.customerName}}</div>\n\t\t      </div>\n\t\t      <div class=\"col-md-3 col-sm-6 col-xs-12\">\n\t\t      \t<b>Start Date:</b>\n\t\t\t\t\t\t<div>{{rental.date | date:\"medium\"}}</div>\n\t\t      \t<hr>\n\t\t      \t<b>Duration (Minutes):</b>\n\t\t\t\t\t\t<div>{{rental.duration}}</div>\n\t\t      </div>\n\t\t      <div\n\t\t\t\t\t\tclass=\"col-md-3 col-sm-6 col-xs-12\"\n\t\t\t\t\t\tstyle=\"overflow-wrap:break-word;\">\n\t\t\t\t\t\t<b>Total:</b>\n\t\t\t\t\t\t<div>{{rental.total}}</div>\n\t\t\t\t\t\t<hr>\n\t\t\t\t\t\t<b>Bikes:</b>\n\t\t\t\t\t\t<div>{{rental.bikeId.length}}</div>\n\t\t      </div>\n\t    \t</div>\n\t    </li>\n\t\t</ul>\n\t</div>\n\n\t<div\n\t\t*ngIf=\"this.availBikeCount !== 0\"\n\t\tclass=\"row\">\n\t\t<h3>Available Bikes</h3>\n\t\t<ul class=\"list-group\">\n\t\t\t<!-- Bike List -->\n\t\t\t<li\n\t\t\t\tclass=\"list-group-item\"\n\t\t\t\t*ngFor=\"let bike of bikeList | bfilter:bikefilter\">\n\t\t\t\t<div class=\"row text-center\">\n\t\t      <div class=\"col-md-3 col-sm-6 col-xs-12\">\n\t\t      <b>ID:</b> {{bike._id}}\n\t\t      </div>\n\t\t      <div class=\"col-md-3 col-sm-6 col-xs-12\">\n\t\t      <b>Model:</b> {{bike.model}}\n\t\t      </div>\n\t\t      <div class=\"col-md-3 col-sm-6 col-xs-12\">\n\t\t      <b>Status:</b> {{bike.status}}\n\t\t      </div>\n\t\t      <div class=\"col-md-3 col-sm-6 col-xs-12\">\n\t\t      <b>Price:</b> {{bike.price}}\n\t\t      </div>\n\t    \t</div>\n\t    </li>\n\t\t</ul>\n\t</div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_bike_service__ = __webpack_require__("./src/app/services/bike.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_rental_service__ = __webpack_require__("./src/app/services/rental.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_bike__ = __webpack_require__("./src/app/shared/bike.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(bikeService, rentalService, flashMessage) {
        this.bikeService = bikeService;
        this.rentalService = rentalService;
        this.flashMessage = flashMessage;
        this.bikefilter = new __WEBPACK_IMPORTED_MODULE_4__shared_bike__["a" /* Bike */]();
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bikeService.getBikeList().subscribe(function (data) {
            _this.bikeList = data.msg;
            _this.bikefilter.status = "Available";
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_bike_service__["a" /* BikeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_bike_service__["a" /* BikeService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_rental_service__["a" /* RentalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_rental_service__["a" /* RentalService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
    ], DashboardComponent);
    return DashboardComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=/home/jm/Projects/mean/angular-src/src/dashboard.component.js.map

/***/ }),

/***/ "./src/app/components/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\" [@fadeInAnimation]>\n\t<h2>Bike Rental</h2>\n\t<div>\n\t\t<a class=\"btn btn-default\" [routerLink]=\"['/login']\">Login</a>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__animations_fade_in_animation__ = __webpack_require__("./src/app/animations/fade-in.animation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        if (this.authService.loggedIn()) {
            this.router.navigate(['/dashboard']);
        }
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/components/home/home.component.html"),
            styles: [__webpack_require__("./src/app/components/home/home.component.css")],
            animations: [__WEBPACK_IMPORTED_MODULE_3__animations_fade_in_animation__["a" /* fadeInAnimation */]],
            host: { '[@fadeInAnimation]': '' }
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b;
}());

//# sourceMappingURL=/home/jm/Projects/mean/angular-src/src/home.component.js.map

/***/ }),

/***/ "./src/app/components/inventory/inventory.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/inventory/inventory.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">\n\tBikes\n\t<!-- Function Buttons --> \n\t<a class=\"btn btn-success pull-right\" data-toggle=\"modal\" data-target=\"#addModal\" (click)=\"clearBikeInfo();clearModelInfo()\">Add Bike</a>\n\t<a class=\"btn btn-primary pull-right\" data-toggle=\"modal\" data-target=\"#editModelModal\" (click)=\"clearModelInfo()\">Edit Price</a>\n\t<a class=\"btn btn-danger pull-right\" data-toggle=\"modal\" data-target=\"#delModelModal\" (click)=\"clearModelInfo()\">Delete Model</a>\n\t<a class=\"btn btn-success pull-right\" data-toggle=\"modal\" data-target=\"#addModelModal\" (click)=\"clearModelInfo()\">Add Model</a>\n</h2>\n\n<div *ngIf=\"list\">\n\t<ul class=\"list-group\">\n\t\t<!-- Bike List Filter-->\n\t\t<li class=\"list-group-item\">\n\t\t\t<div class=\"row\">\n\t\t\t  <div class=\"col-md-2 col-sm-4 col-xs-6 text-center\">\n\t\t\t    <select class=\"form-control\" [(ngModel)]=\"bikefilter._id\">\n\t\t\t    \t<option selected=\"selected\" [ngValue]=\"null\">All</option>\n\t\t\t\t    <option *ngFor=\"let tag of bikeService.idTags\" [ngValue]=\"tag\">Group {{tag}}</option>\n\t\t\t    </select>\n\t\t\t  </div>\n\t\t\t  <div class=\"col-md-2 col-sm-4 col-xs-6 text-center\">\n\t\t\t    <select class=\"form-control\" [(ngModel)]=\"bikefilter.model\">\n\t\t\t    \t<option selected=\"selected\" [ngValue]=\"null\">All</option>\n\t\t\t\t    <option *ngFor=\"let model of bikeService.modelList\" [ngValue]=\"model.name\">{{model.name}}</option>\n\t\t\t    </select>\n\t\t\t  </div>\n\t\t\t  <div class=\"col-md-2 col-sm-4 col-xs-6 text-center\">\n\t\t\t    <select class=\"form-control\" [(ngModel)]=\"bikefilter.status\">\n\t\t\t    \t<option selected=\"selected\" [ngValue]=\"null\">All</option>\n\t\t\t\t    <option *ngFor=\"let status of bikeService.bikeStatus\" [ngValue]=\"status\">{{status}}</option>\n\t\t\t    </select>\n\t\t\t  </div>\n\t\t\t  <div class=\"col-md-2 col-sm-4 col-xs-6 text-center\">\n\t\t\t    <input class=\"form-control\" type=\"number\" step=\"0.5\" [(ngModel)]=\"bikefilter.price\" placeholder=\"Price\">\n\t\t\t  </div>\n\t\t  </div>\n\t\t</li>\n\t\t<!-- Bike List -->\n\t\t<li class=\"list-group-item\" *ngFor=\"let bike of list | bfilter:bikefilter\">\n\t\t\t<div class=\"row\">\n\t      <div class=\"col-md-2 col-sm-4 col-xs-6 text-center\">\n\t      <b>ID:</b> {{bike._id}}\n\t      </div>\n\t      <div class=\"col-md-2 col-sm-4 col-xs-6 text-center\">\n\t      <b>Model:</b> {{bike.model}}\n\t      </div>\n\t      <div class=\"col-md-2 col-sm-4 col-xs-6 text-center\">\n\t      <b>Status:</b> {{bike.status}}\n\t      </div>\n\t      <div class=\"col-md-2 col-sm-4 col-xs-6 text-center\">\n\t      <b>Price:</b> {{bike.price}}\n\t      </div>\n\t      <div class=\"col-md-4 col-sm-12 col-xs-12 text-center\"> \n\t      \t<button type=\"button\" class=\"btn btn-primary btn-xs pull-left\" (click)=\"onEditBike(bike)\" data-toggle=\"modal\" data-target=\"#editModal\">Edit Bike</button>\n\t      \t<button type=\"button\" class=\"btn btn-danger btn-xs pull-right\" (click)=\"onDelBike(bike)\">Delete Bike</button>\n\t      </div>\n    \t</div>\n    </li>\n\t</ul>\n</div>\n\n<!-- Add Bike Modal -->\n<div class=\"modal fade\" id=\"addModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"clearBikeInfo()\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\" id=\"myModalLabel\">Add Bike</h4>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"form-group\">\n\t\t\t\t\t<label>ID</label>\n\t\t\t\t\t<input type=\"number\" [(ngModel)]=\"currBike._id\" name=\"id\" class=\"form-control\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Model</label>\n\t\t\t\t\t<select class=\"form-control\" [(ngModel)]=\"selectModel\">\n\t\t\t\t    <option *ngFor=\"let model of bikeService.modelList\" [ngValue]=\"model\">{{model.name}}</option>\n\t\t\t    </select>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Price</label>\n\t\t\t\t\t<br>\n\t\t\t\t\t{{selectModel.price}}\n\t\t\t\t</div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"clearBikeInfo()\">Clear</button>\n        <button type=\"button\" class=\"btn btn-primary\" *ngIf=\"currBike._id\" (click)=\"onAddSubmit()\" data-dismiss=\"modal\">Add Bike</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Edit Bike Modal -->\n<div class=\"modal fade\" id=\"editModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"clearBikeInfo()\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\" id=\"myModalLabel\">Edit Bike {{currBike._id}}</h4>\n      </div>\n      <div class=\"modal-body\" *ngIf=\"prevBike.status === 'Available' || prevBike.status === 'Maintenance'\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Model</label>\n\t\t\t\t\t<select class=\"form-control\" (change)=\"updateEdit(currBike.model)\" [(ngModel)]=\"currBike.model\">\n\t\t\t\t    <option *ngFor=\"let model of bikeService.modelList\" [ngValue]=\"model.name\">{{model.name}}</option>\n\t\t\t    </select>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Status</label>\n\t\t\t\t\t<select class=\"form-control\" [(ngModel)]=\"currBike.status\">\n\t\t\t\t    <option *ngFor=\"let status of bikeService.bikeStatus\" [ngValue]=\"status\">{{status}}</option>\n\t\t\t    </select>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Price</label>\n\t\t\t\t\t<input type=\"number\" [(ngModel)]=\"currBike.price\" name=\"price\" step=\"0.5\" class=\"form-control\">\n\t\t\t\t</div>\n      </div>\n      <div class=\"modal-body\" *ngIf=\"prevBike.status !== 'Available' && prevBike.status !== 'Maintenance'\">\n      \t<h3 class=\"text-danger\">Bike is currently out and cannot be modified.</h3>\n      </div>\n      <div class=\"modal-footer\" *ngIf=\"prevBike.status === 'Available' || prevBike.status === 'Maintenance'\">\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"undoEdit()\">Reset</button>\n        <button type=\"button\" class=\"btn btn-primary\" *ngIf=\"currBike.model && currBike.status && currBike.price\" (click)=\"onEditSubmit()\" data-dismiss=\"modal\">Save changes</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Add Model Modal -->\n<div class=\"modal fade\" id=\"addModelModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"clearModelInfo()\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\" id=\"myModalLabel\">Add Model</h4>\n      </div>\n      <div class=\"modal-body\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Model</label>\n\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"selectModel.name\" name=\"model\" class=\"form-control\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Price</label>\n\t\t\t\t\t<input type=\"number\" [(ngModel)]=\"selectModel.price\" name=\"price\" class=\"form-control\">\n\t\t\t\t</div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"clearModelInfo()\">Clear</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"onAddModelSubmit()\" data-dismiss=\"modal\">Add Model</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Delete Model Modal -->\n<div class=\"modal fade\" id=\"delModelModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"clearModelInfo()\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\" id=\"myModalLabel\">Delete Model</h4>\n      </div>\n      <div class=\"modal-body\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Model</label>\n\t\t\t\t\t<select class=\"form-control\" [(ngModel)]=\"selectModel\">\n\t\t\t\t    <option *ngFor=\"let model of bikeService.modelList\" [ngValue]=\"model\">{{model.name}}</option>\n\t\t\t    </select>\n\t\t\t\t</div>\n\t\t\t</div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"onDelModelSubmit()\" data-dismiss=\"modal\">Delete Model</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Edit Model Modal -->\n<div class=\"modal fade\" id=\"editModelModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"clearModelInfo()\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\" id=\"myModalLabel\">Edit Price</h4>\n      </div>\n      <div class=\"modal-body\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Model</label>\n\t\t\t\t\t<select class=\"form-control\" [(ngModel)]=\"selectModel\">\n\t\t\t\t    <option *ngFor=\"let model of bikeService.modelList\" [ngValue]=\"model\">{{model.name}}</option>\n\t\t\t    </select>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Price</label>\n\t\t\t\t\t<input type=\"number\" [(ngModel)]=\"selectModel.price\" name=\"price\" step=\"0.5\" class=\"form-control\">\n\t\t\t\t</div>\n\t\t\t</div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"onEditModelSubmit()\" data-dismiss=\"modal\">Update Price</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/inventory/inventory.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InventoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_bike_service__ = __webpack_require__("./src/app/services/bike.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_bike__ = __webpack_require__("./src/app/shared/bike.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_model__ = __webpack_require__("./src/app/shared/model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InventoryComponent = /** @class */ (function () {
    function InventoryComponent(bikeService, flashMessage) {
        this.bikeService = bikeService;
        this.flashMessage = flashMessage;
        this.currBike = new __WEBPACK_IMPORTED_MODULE_3__shared_bike__["a" /* Bike */]();
        this.prevBike = new __WEBPACK_IMPORTED_MODULE_3__shared_bike__["a" /* Bike */]();
        this.bikefilter = new __WEBPACK_IMPORTED_MODULE_3__shared_bike__["a" /* Bike */]();
        this.selectModel = new __WEBPACK_IMPORTED_MODULE_4__shared_model__["a" /* Model */]();
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
    InventoryComponent.prototype.clearModelInfo = function () {
        this.selectModel = new __WEBPACK_IMPORTED_MODULE_4__shared_model__["a" /* Model */]();
    };
    InventoryComponent.prototype.onAddSubmit = function () {
        var _this = this;
        this.currBike.status = "Available";
        this.currBike.model = this.selectModel.name;
        this.currBike.price = this.selectModel.price;
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
            _this.clearModelInfo();
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
    InventoryComponent.prototype.updateEdit = function (modelName) {
        for (var model in this.bikeService.modelList) {
            if (this.bikeService.modelList[model].name === modelName) {
                this.currBike.price = this.bikeService.modelList[model].price;
            }
        }
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
    InventoryComponent.prototype.onAddModelSubmit = function () {
        var _this = this;
        this.bikeService.addModel(this.selectModel).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show(data.msg.name + " model added with price: " + data.msg.price, { cssClass: 'alert-success' });
                _this.bikeService.getModelList();
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger' });
            }
            _this.clearModelInfo();
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    InventoryComponent.prototype.onDelModelSubmit = function () {
        var _this = this;
        this.bikeService.delModel(this.selectModel).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-success' });
                _this.bikeService.getModelList();
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger' });
            }
            _this.clearModelInfo();
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    InventoryComponent.prototype.onEditModelSubmit = function () {
        var _this = this;
        this.bikeService.updatePrice(this.selectModel).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-success' });
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger' });
            }
            _this.clearModelInfo();
        }, function (err) {
            console.log(err);
            return false;
        });
        this.bikeService.getModelList();
        this.ngOnInit();
    };
    InventoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-inventory',
            template: __webpack_require__("./src/app/components/inventory/inventory.component.html"),
            styles: [__webpack_require__("./src/app/components/inventory/inventory.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_bike_service__["a" /* BikeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_bike_service__["a" /* BikeService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object])
    ], InventoryComponent);
    return InventoryComponent;
    var _a, _b;
}());

//# sourceMappingURL=/home/jm/Projects/mean/angular-src/src/inventory.component.js.map

/***/ }),

/***/ "./src/app/components/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3 col-xs-12\" id=\"loginForm\" [@fadeInAnimation]>\t\n\t<h2 class=\"page-header\">Login</h2>\n\t<form class=\"text-center\" (submit)=\"onLoginSubmit()\">\n\t\t<div class=\"form-group\">\n\t\t\t<input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\" placeholder=\"Username\">\n\t\t</div>\n\t\t<div class=\"form-group\">\n\t\t\t<input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Password\">\n\t\t</div>\n\t\t<input type=\"submit\" class=\"btn btn-success\" value=\"Login\" style=\"width: 30%\">\n\t</form>\n</div>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_validate_service__ = __webpack_require__("./src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__animations_fade_in_animation__ = __webpack_require__("./src/app/animations/fade-in.animation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/components/login/login.component.html"),
            styles: [__webpack_require__("./src/app/components/login/login.component.css")],
            animations: [__WEBPACK_IMPORTED_MODULE_5__animations_fade_in_animation__["a" /* fadeInAnimation */]],
            host: { '[@fadeInAnimation]': '' }
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _d || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=/home/jm/Projects/mean/angular-src/src/login.component.js.map

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\" role=\"navigation\">\n  <div class=\"navbar-header\">\n    <button\n      type=\"button\"\n      class=\"navbar-toggle\"\n      data-toggle=\"collapse\"\n      data-target=\".navbar-ex1-collapse\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n    </button>\n    <a\n      class=\"navbar-brand\"\n      [routerLink]=\"['/']\">\n      Bike Rental\n    </a>\n  </div>\n\n  <div class=\"collapse navbar-collapse navbar-ex1-collapse\">\n    <ul\n      id=\"active\"\n      class=\"nav navbar-nav side-nav\">\n        <li\n        *ngIf=\"!authService.loggedIn()\"\n        [routerLinkActive]=\"['active']\">\n        <a [routerLink]=\"['/register']\">\n          Register\n        </a>\n      </li>\n      <li\n        *ngIf=\"authService.loggedIn()\"\n        [routerLinkActive]=\"['active']\">\n        <a [routerLink]=\"['/dashboard']\">\n          Dashboard\n        </a>\n      </li>\n      <li\n        *ngIf=\"authService.loggedIn()\"\n        [routerLinkActive]=\"['active']\">\n        <a [routerLink]=\"['/inventory']\">\n          Bikes\n        </a>\n      </li>\n      <li\n        *ngIf=\"authService.loggedIn()\"\n        [routerLinkActive]=\"['active']\">\n        <a [routerLink]=\"['/rental']\">\n          Rentals\n        </a>\n      </li>\n      <li\n        *ngIf=\"authService.loggedIn()\"\n        [routerLinkActive]=\"['active']\">\n        <a [routerLink]=\"['/customer']\">\n          Customers\n        </a>\n      </li>\n      <li\n        *ngIf=\"authService.loggedIn()\"\n        [routerLinkActive]=\"['active']\">\n        <a [routerLink]=\"['/sales']\">\n          Sales\n        </a>\n      </li>\n\n    </ul>\n    <ul class=\"nav navbar-nav navbar-right navbar-user\">\n      <li\n        *ngIf=\"authService.loggedIn()\"\n        class=\"dropdown user-dropdown\">\n        <a\n          href=\"#\"\n          class=\"dropdown-toggle\"\n          data-toggle=\"dropdown\">\n          {{authService.user?.name}}\n          <b class=\"caret\"></b>\n        </a>\n        <ul class=\"dropdown-menu\">\n          <li>\n            <a [routerLink]=\"['/profile']\">\n              <i class=\"fa fa-user\"></i>\n              Profile\n            </a>\n          </li>\n          <li class=\"divider\"></li>\n          <li>\n            <a\n              href=\"#\"\n              (click)=\"onLogoutClick()\">\n              <i class=\"fa fa-power-off\"></i>\n              Log Out\n            </a>\n          </li>\n        </ul>\n      </li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _c || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=/home/jm/Projects/mean/angular-src/src/navbar.component.js.map

/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n\t<h2 class=\"page-header\">Profile</h2>\n\t<ul class=\"list-group\">\n\t\t<li class=\"list-group-item\"><b>Username:</b> {{user.username}}</li>\n\t\t<li class=\"list-group-item\"><b>Email:</b> {{user.email}}</li>\n\t\t<li class=\"list-group-item\"><b>Last Login:</b> {{user.lastLogin | date:\"medium\"}}</li>\n\t</ul>\n</div>"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService, flashMessage) {
        this.authService = authService;
        this.flashMessage = flashMessage;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.user = this.authService.user;
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b;
}());

//# sourceMappingURL=/home/jm/Projects/mean/angular-src/src/profile.component.js.map

/***/ }),

/***/ "./src/app/components/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" [@fadeInAnimation]>\n\t<h2 class=\"page-header\">Register</h2>\n\t<form (submit)=\"onRegisterSubmit()\">\n\t\t<div class=\"form-group\">\n\t\t\t<label>Name</label>\n\t\t\t<input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\n\t\t</div>\n\t\t<div class=\"form-group\">\n\t\t\t<label>Username</label>\n\t\t\t<input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\n\t\t</div>\n\t\t<div class=\"form-group\">\n\t\t\t<label>Email</label>\n\t\t\t<input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\">\n\t\t</div>\n\t\t<div class=\"form-group\">\n\t\t\t<label>Password</label>\n\t\t\t<input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n\t\t</div>\n\t\t<input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n\t</form>\n</div>"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("./src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__animations_fade_in_animation__ = __webpack_require__("./src/app/animations/fade-in.animation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterComponent = /** @class */ (function () {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/components/register/register.component.html"),
            styles: [__webpack_require__("./src/app/components/register/register.component.css")],
            animations: [__WEBPACK_IMPORTED_MODULE_5__animations_fade_in_animation__["a" /* fadeInAnimation */]],
            host: { '[@fadeInAnimation]': '' }
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _d || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=/home/jm/Projects/mean/angular-src/src/register.component.js.map

/***/ }),

/***/ "./src/app/components/rental/rental.component.css":
/***/ (function(module, exports) {

module.exports = "#all {\n\tfont-weight: bold;\n}"

/***/ }),

/***/ "./src/app/components/rental/rental.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Rentals\n\t<!-- Function Buttons -->\n\t<button class=\"btn btn-success pull-right\" data-toggle=\"modal\" data-target=\"#startModal\" (click)=\"clearCustInfo()\">Start Rental</button>\n</h2>\n\n<!-- Rental List -->\n<div *ngIf=\"rentals\">\n\t<ul class=\"list-group\">\n\t\t<li class=\"list-group-item\" *ngFor=\"let rental of rentals\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-3 col-sm-6 col-xs-12 text-center\">\n\t      \t<b>Rental ID:</b> <div>{{rental._id}}</div>\n\t      \t<hr>\n\t      \t<b>Status:</b> <div *ngIf=\"rental.status\" class=\"text-success\">Active</div> <div *ngIf=\"!rental.status\" class=\"text-danger\">Returned</div>\n\t      </div>\n\t      <div class=\"col-md-3 col-sm-6 col-xs-12 text-center\">\n\t      \t<b>Customer ID:</b> <div>{{rental.customerId}}</div>\n\t      \t<hr>\n\t      \t<b>Customer Name:</b> <div>{{rental.customerName}}</div>\n\t      </div>\n\t      <div class=\"col-md-3 col-sm-6 col-xs-12 text-center\">\n\t      \t<b>Start Date:</b> <div>{{rental.date | date:\"medium\"}}</div>\n\t      \t<hr>\n\t      \t<b>Duration (Minutes):</b> <div>{{rental.duration}}</div>\n\t      </div>\n\t      <div class=\"col-md-3 col-sm-6 col-xs-12 text-center\" style=\"overflow-wrap:break-word;\">\n\t      \t<b>Total:</b> <div>{{rental.total | currency:'CAD':'1.2-2'}}</div>\n\t      \t<hr>\n\t      \t<b>Bikes Out:</b> <div>{{rental.bikeId.length}}</div>\n\t      </div>\n    \t</div>\n    \t<hr>\n    \t<!-- Function Buttons -->\n    \t<div class=\"row\">\n\t      <div class=\"col-md-12 col-sm-12 col-xs-12 text-center\">\n\t      \t<button *ngIf=\"rental.status\" type=\"button\" class=\"btn btn-primary btn-xs\" (click)=\"onAddBike(rental)\" data-toggle=\"modal\" data-target=\"#addBikeModal\">Add Bike</button>\n\t      \t<button *ngIf=\"rental.status\" type=\"button\" class=\"btn btn-primary btn-xs\" (click)=\"onDelBike(rental)\" data-toggle=\"modal\" data-target=\"#delBikeModal\">Remove Bike</button>\n\t      \t<button *ngIf=\"rental.status\" type=\"button\" class=\"btn btn-primary btn-xs\" (click)=\"onEditRental(rental)\" data-toggle=\"modal\" data-target=\"#editModal\">Edit Time</button>\n\t      \t<button *ngIf=\"rental.status\" type=\"button\" class=\"btn btn-primary btn-xs\" (click)=\"onRetBike(rental)\" data-toggle=\"modal\" data-target=\"#retBikeModal\">Return Bike</button>\n\t      \t<button type=\"button\" class=\"btn btn-danger btn-xs pull-right\" (click)=\"onDelRental(rental)\">Delete Rental</button>\n\t      </div>\n    \t</div>\n    </li>\n\t</ul>\n</div>\n\n<!-- Start Rental Modal -->\n<div class=\"modal fade\" id=\"startModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\" id=\"myModalLabel\">Search Customer</h4>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"form-group\">\n\t\t\t\t\t<label>Name</label>\n\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"searchName\" name=\"custName\" class=\"form-control\">\n\t\t\t\t</div>\n\t\t\t\t<div *ngIf=\"custFound == true\" class=\"text-center\">\n\t\t\t\t\t<hr>\n\t\t\t\t\t<div *ngIf=\"cust\">\n\t\t\t\t\t\t<strong>Customer Name:</strong>\n\t\t\t\t\t\t{{cust.name}}\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t<strong>Visits:</strong>\n\t\t\t\t\t\t{{cust.rentalId.length}}\n\t\t\t\t\t\t<div *ngIf=\"cust.info\">\n\t\t\t\t\t\t\t<strong>Note:</strong>\n\t\t\t\t\t\t\t{{cust.info}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<br>\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-success\" (click)=\"startRental(cust)\" data-dismiss=\"modal\">Create Rental</button>\n\t\t\t\t</div>\n\t\t\t\t<div *ngIf=\"custFound == false\" class=\"text-center\">\n\t\t\t\t\t<h2>Customer Not Found :(</h2>\n\t\t\t\t\t<br>\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-success\" (click)=\"addCustStartRental()\" data-dismiss=\"modal\">Add Customer and Create Rental</button>\n\t\t\t\t</div>\n      </div>\n      <div class=\"modal-footer\">\n        <button *ngIf=\"searchName\" type=\"button\" class=\"btn btn-default\" (click)=\"clearCustInfo()\">Clear</button>\n        <button *ngIf=\"searchName\" type=\"button\" class=\"btn btn-primary\" (click)=\"getCust(searchName)\">Find Customer</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Edit Rental Modal -->\n<div class=\"modal fade\" id=\"editModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\" id=\"myModalLabel\">Rental Info</h4>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"form-group\">\n\t\t\t\t\t<label>Rental ID:</label>\n\t\t\t\t\t{{this.rental._id}}\n\t\t\t\t</div>\n\t\t\t\t<div *ngIf=\"cust\" class=\"form-group\">\n\t\t\t\t\t<label>Customer Name:</label>\n\t\t\t\t\t{{this.cust.name}}\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Date (Please change according to format)</label>\n\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"editDate\" id=\"rentalDate\" class=\"form-control\">\n\t\t\t\t</div>\n      </div>\n      <div class=\"modal-footer\">\n      \t<button type=\"button\" class=\"btn btn-default\" (click)=\"editToCurrent()\">Use Current Time</button>\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"resetEdit()\">Reset Change</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"onEditSubmit()\" data-dismiss=\"modal\">Change Time</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Add Bike Modal -->\n<div class=\"modal fade\" id=\"addBikeModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"clearSelectedBikes()\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\" id=\"myModalLabel\">Rental Info</h4>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"form-group\">\n\t\t\t\t\t<label>Rental ID:</label>\n\t\t\t\t\t{{this.rental._id}}\n\t\t\t\t</div>\n\t\t\t\t<div *ngIf=\"cust\" class=\"form-group\">\n\t\t\t\t\t<label>Customer Name:</label>\n\t\t\t\t\t{{this.cust.name}}\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Date:</label>\n\t\t\t\t\t{{this.rental.date | date:\"medium\"}}\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Bike</label>\n\t\t\t\t\t<table\n\t\t\t\t\t\tclass=\"table table-bordered\"\n\t\t\t\t\t\t*ngIf=\"inBikeCount.length !== 0;else noBikes\">\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td class=\"text-center\">\n\t\t\t\t\t\t  \t<b>Model</b>\n\t\t\t\t\t\t  </td>\n\t\t\t\t\t\t  <td class=\"text-center\">\n\t\t\t\t\t\t  \t<b>Available</b>\n\t\t\t\t\t\t  </td>\n\t\t\t\t\t\t  <td class=\"text-center\">\n\t\t\t\t\t\t  \t<b>Renting</b>\n\t\t\t\t\t\t  </td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr *ngFor=\"let inBike of inBikeCount\">\n\t\t\t\t\t\t\t<td class=\"text-center\">\n\t\t\t\t\t\t  \t{{inBike.model}}\n\t\t\t\t\t\t  </td>\n\t\t\t\t\t\t  <td class=\"text-center\">\n\t\t\t\t\t\t  \t{{inBike.count}}\n\t\t\t\t\t\t  </td>\n\t\t\t\t\t\t  <td\n\t\t\t\t\t\t\t\tclass=\"text-center\"\n\t\t\t\t\t\t\t\t*ngIf=\"rentBikeCount[inBike.model];else zero\">\n\t\t\t\t\t\t\t\t<button\n\t\t\t\t\t\t\t\t\ttype=\"button\"\n\t\t\t\t\t\t\t\t\tclass=\"btn btn-xs btn-success pull-left\"\n\t\t\t\t\t\t\t\t\t(click)=\"addBikeToRental(inBike)\">\n\t\t\t\t\t\t\t\t\t+\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t{{rentBikeCount[inBike.model]}}\n\t\t\t\t\t\t\t\t<button\n\t\t\t\t\t\t\t\t\ttype=\"button\"\n\t\t\t\t\t\t\t\t\tclass=\"btn btn-xs btn-danger pull-right\"\n\t\t\t\t\t\t\t\t\t(click)=\"removeBikeFromRental(inBike)\">\n\t\t\t\t\t\t\t\t\t-\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t  </td>\n\t\t\t\t\t\t\t<ng-template #zero>\n\t\t\t\t\t\t\t\t<td class=\"text-center\">\n\t\t\t\t\t\t\t\t<button\n\t\t\t\t\t\t\t\t\ttype=\"button\"\n\t\t\t\t\t\t\t\t\tclass=\"btn btn-xs btn-success pull-left\"\n\t\t\t\t\t\t\t\t\t(click)=\"addBikeToRental(inBike)\">\n\t\t\t\t\t\t\t\t\t+\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t0\n\t\t\t\t\t\t\t\t<button\n\t\t\t\t\t\t\t\t\ttype=\"button\"\n\t\t\t\t\t\t\t\t\tclass=\"btn btn-xs btn-danger pull-right\"\n\t\t\t\t\t\t\t\t\t(click)=\"removeBikeFromRental(inBike)\">\n\t\t\t\t\t\t\t\t\t-\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</table>\n\t\t\t\t\t<ng-template #noBikes>\n\t\t\t\t\t\t<div class=\"text-danger\">\n\t\t\t\t\t\t\tNo Bikes Available :(\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ng-template>\n\t\t\t\t</div>\n      </div>\n      <div class=\"modal-footer\">\n        <button *ngIf=\"!isEmpty(rentBikeCount)\" type=\"button\" class=\"btn btn-primary\" (click)=\"onAddBikeSubmit()\" data-dismiss=\"modal\">Add Bike</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Remove Bike Modal -->\n<div class=\"modal fade\" id=\"delBikeModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"clearSelectedBikes()\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\" id=\"myModalLabel\">Remove Bike</h4>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"form-group\">\n\t\t\t\t\t<label>Rental ID:</label>\n\t\t\t\t\t{{this.rental._id}}\n\t\t\t\t</div>\n\t\t\t\t<div *ngIf=\"cust\" class=\"form-group\">\n\t\t\t\t\t<label>Customer Name:</label>\n\t\t\t\t\t{{this.cust.name}}\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Date:</label>\n\t\t\t\t\t{{this.rental.date | date:\"medium\"}}\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Bike</label>\n\t\t\t\t\t<label *ngFor=\"let outBike of outBikes\" class=\"form-control\">\n\t\t        <input type=\"checkbox\" (change)=\"updateChecked(outBike)\"> ID: {{outBike._id}} | Model: {{outBike.model}}\n\t\t    \t</label>\n\t\t\t\t</div>\n      </div>\n      <div class=\"modal-footer\">\n        <button *ngIf=\"selectedBikes.length !== 0\" type=\"button\" class=\"btn btn-primary\" (click)=\"onDelBikeSubmit()\" data-dismiss=\"modal\">Remove Bike</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Return Bike Modal -->\n<div class=\"modal fade\" id=\"retBikeModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"clearSelectedBikes()\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\" id=\"myModalLabel\">Return Bike</h4>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"form-group\">\n\t\t\t\t\t<label>Rental ID:</label>\n\t\t\t\t\t{{this.rental._id}}\n\t\t\t\t</div>\n\t\t\t\t<div *ngIf=\"cust\" class=\"form-group\">\n\t\t\t\t\t<label>Customer Name:</label>\n\t\t\t\t\t{{this.cust.name}}\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Date:</label>\n\t\t\t\t\t{{this.rental.date | date:\"medium\"}}\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Duration:</label>\n\t\t\t\t\t{{this.rental.duration}} minutes\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Bike</label>\n\t\t\t\t\t<label *ngFor=\"let outBike of outBikes\" class=\"form-control\">\n\t\t        <input type=\"checkbox\" [checked]=\"selectAll\" (change)=\"updateChecked(outBike)\"> ID: {{outBike._id}} | Model: {{outBike.model}}\n\t\t    \t</label>\n\t\t    \t<button type=\"button\" class=\"form-control\" id=\"all\" (click)=\"selectAllBikes();\">Select All</button>\n\t\t\t\t</div>\n      </div>\n      <div class=\"modal-footer\">\n\t\t\t\t<div class=\"pull-right\">\n        \t<button *ngIf=\"selectedBikes.length !== 0\" type=\"button\" class=\"btn btn-primary\" (click)=\"onRetBikeSubmit()\" data-dismiss=\"modal\">Return Bike</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/rental/rental.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RentalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_customer_service__ = __webpack_require__("./src/app/services/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_rental_service__ = __webpack_require__("./src/app/services/rental.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_bike_service__ = __webpack_require__("./src/app/services/bike.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_customer__ = __webpack_require__("./src/app/shared/customer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_rental__ = __webpack_require__("./src/app/shared/rental.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var RentalComponent = /** @class */ (function () {
    function RentalComponent(customerService, bikeService, rentalService, flashMessage, router) {
        this.customerService = customerService;
        this.bikeService = bikeService;
        this.rentalService = rentalService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.rental = new __WEBPACK_IMPORTED_MODULE_6__shared_rental__["a" /* Rental */]();
        this.tax = 0;
        this.subTotal = 0;
        this.total = 0;
        this.inBikeCount = [];
        this.rentBikeCount = {};
        this.outBikes = [];
        this.selectedBikes = [];
        this.cust = new __WEBPACK_IMPORTED_MODULE_5__shared_customer__["a" /* Customer */]();
        this.selectAll = false;
    }
    RentalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.rentalService.getActiveRentals().subscribe(function (data) {
            _this.rentals = data.msg;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    RentalComponent.prototype.getCust = function (name) {
        var _this = this;
        var query = {
            name: name.toUpperCase()
        };
        this.customerService.getCust(query).subscribe(function (data) {
            if (data.success) {
                _this.cust = data.msg;
                _this.custFound = true;
            }
            else {
                _this.custFound = false;
            }
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    RentalComponent.prototype.addCustStartRental = function () {
        var _this = this;
        var query = {
            name: this.searchName.toUpperCase()
        };
        this.customerService.addCustomer(query).subscribe(function (data) {
            if (data.success) {
                _this.cust = data.msg;
                _this.startRental(_this.cust);
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
        this.rentalService.startRental(cust).subscribe(function (data) {
            if (data.success) {
                console.log(data);
                _this.flashMessage.show("Rental created for: " + _this.cust.name.toUpperCase(), { cssClass: 'alert-success' });
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
        this.cust._id = rental.customerId;
        this.cust.name = rental.customerName;
        this.rental._id = rental._id;
        this.rental.date = new Date(rental.date);
        this.rental.bikeId = rental.bikeId;
        this.bikeService.getBikeCountOfModels().subscribe(function (data) {
            if (data.success) {
                for (var bikeModel in data.msg) {
                    var bikeModelCount = {
                        model: bikeModel,
                        count: data.msg[bikeModel]
                    };
                    _this.inBikeCount.push(bikeModelCount);
                }
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger' });
            }
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    RentalComponent.prototype.addBikeToRental = function (bike) {
        var index = this.inBikeCount.indexOf(bike);
        if (index !== -1 && this.inBikeCount[index]['count'] > 0) {
            this.inBikeCount[index]['count']--;
            if (!this.rentBikeCount[bike.model]) {
                this.rentBikeCount[bike.model] = 1;
            }
            else {
                this.rentBikeCount[bike.model]++;
            }
        }
    };
    RentalComponent.prototype.removeBikeFromRental = function (bike) {
        var index = this.inBikeCount.indexOf(bike);
        if (index !== -1 && this.rentBikeCount[bike.model] > 0) {
            this.inBikeCount[index]['count']++;
            if (this.rentBikeCount[bike.model]) {
                this.rentBikeCount[bike.model]--;
                if (this.rentBikeCount[bike.model] === 0) {
                    delete this.rentBikeCount[bike.model];
                }
            }
        }
    };
    RentalComponent.prototype.onAddBikeSubmit = function () {
        var _this = this;
        var add = {
            rentalId: this.rental._id,
            bikeCount: this.rentBikeCount
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
        this.cust._id = rental.customerId;
        this.cust.name = rental.customerName;
        this.rental._id = rental._id;
        this.rental.date = new Date(rental.date);
        this.rental.bikeId = rental.bikeId;
        var rented = {
            status: this.rental._id
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
            rentalId: this.rental._id,
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
        this.getCust(rental.customerName);
        this.rental = rental;
        this.currentTime = new Date();
        var duration = Math.round((this.currentTime.getTime() - new Date(this.rental.date).getTime()) / (1000 * 60));
        this.rental.duration = duration;
        var rented = {
            status: this.rental._id
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
        this.rental.status = this.selectedBikes.length !== this.outBikes.length;
        var bikeCostDetails = new Array();
        for (var bike = 0; bike < this.selectedBikes.length; bike++) {
            var bikeCost = this.rentalService.calcPrice(this.selectedBikes[bike], this.rental.duration);
            var bikeTax = this.rentalService.calcTax(bikeCost);
            var bikeTotal = bikeCost + bikeTax;
            var bikeCostDetail = {
                bike: this.selectedBikes[bike],
                subTotal: bikeCost,
                tax: bikeTax,
                discount: 0,
                total: bikeTotal
            };
            bikeCostDetails.push(bikeCostDetail);
            this.subTotal += bikeCost;
            this.tax += bikeTax;
            this.total += bikeTotal;
        }
        this.rentalService.returnDetails = {
            rental: this.rental,
            cust: this.cust,
            bikeCostDetails: bikeCostDetails,
            bikes: this.selectedBikes,
            endDate: this.currentTime,
            taxTotal: this.tax,
            subTotal: this.subTotal,
            total: this.total
        };
        console.log(this.rentalService.returnDetails);
        this.router.navigate(['/checkout']);
    };
    RentalComponent.prototype.onEditRental = function (rental) {
        this.cust._id = rental.customerId;
        this.rental._id = rental._id;
        this.rental.date = new Date(rental.date);
        this.rental.bikeId = rental.bikeId;
        this.editDate = new Date(rental.date);
    };
    RentalComponent.prototype.resetEdit = function () {
        this.editDate = this.rental.date;
    };
    RentalComponent.prototype.editToCurrent = function () {
        this.editDate = new Date();
    };
    RentalComponent.prototype.onEditSubmit = function () {
        var _this = this;
        var edit = {
            rentalId: this.rental._id,
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
            if (this.selectedBikes.length === this.outBikes.length) {
                this.selectAll = true;
                document.getElementById('all').innerHTML = 'Deselect All';
            }
        }
        else {
            this.selectedBikes.splice(index, 1);
            if (this.selectedBikes.length === 0) {
                this.selectAll = false;
                document.getElementById('all').innerHTML = 'Select All';
            }
        }
    };
    RentalComponent.prototype.selectAllBikes = function () {
        this.selectAll = !this.selectAll;
        if (this.selectAll) {
            for (var bike = 0; bike < this.outBikes.length; bike++) {
                var index = this.selectedBikes.indexOf(this.outBikes[bike]);
                if (index === -1) {
                    this.selectedBikes.push(this.outBikes[bike]);
                }
            }
            document.getElementById('all').innerHTML = 'Deselect All';
        }
        else {
            this.clearSelectedBikes();
            document.getElementById('all').innerHTML = 'Select All';
        }
        // console.log(this.selectedBikes);
        // console.log(this.selectAll);
    };
    RentalComponent.prototype.clearSelectedBikes = function () {
        this.inBikeCount = [];
        this.rentBikeCount = {};
        this.selectAll = false;
        this.selectedBikes.splice(0, this.selectedBikes.length);
        this.subTotal = 0;
        this.tax = 0;
        this.total = 0;
        document.getElementById('all').innerHTML = 'Select All';
    };
    RentalComponent.prototype.clearCustInfo = function () {
        this.searchName = "";
        this.custFound = null;
        this.cust = null;
    };
    RentalComponent.prototype.isEmpty = function (obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
                return false;
        }
        return true;
    };
    RentalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-rental',
            template: __webpack_require__("./src/app/components/rental/rental.component.html"),
            styles: [__webpack_require__("./src/app/components/rental/rental.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_customer_service__["a" /* CustomerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_customer_service__["a" /* CustomerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_bike_service__["a" /* BikeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_bike_service__["a" /* BikeService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_rental_service__["a" /* RentalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_rental_service__["a" /* RentalService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* Router */]) === "function" && _e || Object])
    ], RentalComponent);
    return RentalComponent;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=/home/jm/Projects/mean/angular-src/src/rental.component.js.map

/***/ }),

/***/ "./src/app/components/sales/sales.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/sales/sales.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Sales</h2>\n\n<!-- Search Date -->\n<div>\n\t<input \n\t\ttype=\"date\" \n\t\t(change)=\"changeDate(date);\"\n\t\t[(ngModel)]=\"date\" \n\t\tname=\"date\" \n\t\tclass=\"form-control\" \n\t\tstyle=\"width:170px;\">\n</div>\n<br>\n\n<!-- Sales Report -->\n<table class=\"table table-bordered\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-3 col-sm-6 col-xs-12 text-center\">\n\t  \t<b>Number of Rentals:</b> \n\t\t\t<div>{{totalRentals}}</div>\n\t  </div>\n\t  <div class=\"col-md-3 col-sm-6 col-xs-12 text-center\">\n\t  \t<b>Total Sales:</b> \n\t\t\t<div>{{revenue | currency:'CAD':'1.2-2'}}</div>\n\t  </div>\n\t  <div class=\"col-md-3 col-sm-6 col-xs-12 text-center\">\n\t  \t<b>Tax:</b> \n\t\t\t<div>{{tax | currency:'CAD':'1.2-2'}}</div>\n\t  </div>\n\t  <div class=\"col-md-3 col-sm-6 col-xs-12 text-center\">\n\t  \t<b>Average Rental Sale:</b> \n\t\t\t<div>{{avgRental | currency:'CAD':'1.2-2'}}</div>\n\t  </div>\n\t</div>\n</table>\n\n<!-- Rental List -->\n<div *ngIf=\"rentals\">\n\t<ul class=\"list-group\">\n\t\t<li \n\t\t\tclass=\"list-group-item\" \n\t\t\t*ngFor=\"let rental of rentals\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-3 col-sm-6 col-xs-12 text-center\">\n\t      \t<b>Rental ID:</b> \n\t\t\t\t\t<div>{{rental._id}}</div>\n\t      \t<hr>\n\t      \t<b>Status:</b> \n\t\t\t\t\t<div \n\t\t\t\t\t\t*ngIf=\"rental.status\" \n\t\t\t\t\t\tclass=\"text-success\">\n\t\t\t\t\t\tActive\n\t\t\t\t\t</div> \n\t\t\t\t\t<div \n\t\t\t\t\t\t*ngIf=\"!rental.status\" \n\t\t\t\t\t\tclass=\"text-danger\">\n\t\t\t\t\t\tReturned\n\t\t\t\t\t</div>\n\t      </div>\n\t      <div class=\"col-md-3 col-sm-6 col-xs-12 text-center\">\n\t      \t<b>Customer ID:</b> \n\t\t\t\t\t<div>{{rental.customerId}}</div>\n\t      \t<hr>\n\t      \t<b>Customer Name:</b> \n\t\t\t\t\t<div>{{rental.customerName}}</div>\n\t      </div>\n\t      <div class=\"col-md-3 col-sm-6 col-xs-12 text-center\">\n\t      \t<b>Start Date:</b> \n\t\t\t\t\t<div>{{rental.date | date:\"medium\"}}</div>\n\t      \t<hr>\n\t      \t<b>Duration (Minutes):</b> <div>{{rental.duration}}</div>\n\t      </div>\n\t\t\t\t<div \n\t\t\t\t\tclass=\"col-md-3 col-sm-6 col-xs-12 text-center\" style=\"overflow-wrap:break-word;\">\n\t      \t<b>Total:</b> \n\t\t\t\t\t<div>{{rental.total | currency:'CAD':'1.2-2'}}</div>\n\t      \t<hr>\n\t      \t<b>Bikes:</b> \n\t\t\t\t\t<div>{{rental.bikeId.length}}</div>\n\t      </div>\n    \t</div>\n    </li>\n\t</ul>\n</div>"

/***/ }),

/***/ "./src/app/components/sales/sales.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SalesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_rental_service__ = __webpack_require__("./src/app/services/rental.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SalesComponent = /** @class */ (function () {
    function SalesComponent(rentalService, flashMessage) {
        this.rentalService = rentalService;
        this.flashMessage = flashMessage;
        this.date = new Date();
    }
    SalesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.today = new Date();
        this.today.setUTCHours(0, 0, 0, 0);
        var rentalDate = {
            date: this.today
        };
        console.log(rentalDate);
        this.rentalService.getRentalByDate(rentalDate)
            .subscribe(function (data) {
            console.log(data);
            _this.rentals = data.msg;
            _this.calcSales();
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    SalesComponent.prototype.changeDate = function (date) {
        var _this = this;
        var rentalDate = {
            date: date
        };
        console.log(rentalDate);
        this.rentalService.getRentalByDate(rentalDate)
            .subscribe(function (data) {
            console.log(data);
            _this.rentals = data.msg;
            _this.calcSales();
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    SalesComponent.prototype.calcSales = function () {
        this.totalRentals = this.rentals.length;
        this.avgRental = 0;
        this.revenue = 0;
        this.tax = 0;
        for (var rental = 0; rental < this.rentals.length; rental++) {
            this.revenue = this.rentals[rental].total.valueOf() + this.revenue.valueOf();
            this.tax = this.rentals[rental].tax.valueOf() + this.tax.valueOf();
        }
        if (this.totalRentals > 0) {
            this.avgRental = Math.round((this.revenue / this.totalRentals) * 100) / 100;
        }
    };
    SalesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sales',
            template: __webpack_require__("./src/app/components/sales/sales.component.html"),
            styles: [__webpack_require__("./src/app/components/sales/sales.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_rental_service__["a" /* RentalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_rental_service__["a" /* RentalService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object])
    ], SalesComponent);
    return SalesComponent;
    var _a, _b;
}());

//# sourceMappingURL=/home/jm/Projects/mean/angular-src/src/sales.component.js.map

/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());

//# sourceMappingURL=/home/jm/Projects/mean/angular-src/src/auth.guard.js.map

/***/ }),

/***/ "./src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__("./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
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
        return Object(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());

//# sourceMappingURL=/home/jm/Projects/mean/angular-src/src/auth.service.js.map

/***/ }),

/***/ "./src/app/services/bike.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BikeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BikeService = /** @class */ (function () {
    function BikeService(http) {
        this.http = http;
        this.bikeStatus = ['Available', 'Maintenance'];
        this.idTags = [1, 2, 3, 4];
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
    BikeService.prototype.getBikeCountOfModels = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('bikes/inbikecount', { headers: headers }).map(function (res) { return res.json(); });
    };
    BikeService.prototype.bikeByStatus = function (status) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('bikes/status', status, { headers: headers }).map(function (res) { return res.json(); });
    };
    BikeService.prototype.getModelList = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        this.http.get('models/list', { headers: headers }).map(function (res) { return res.json(); }).subscribe(function (list) {
            _this.modelList = list.msg;
        });
    };
    BikeService.prototype.addModel = function (model) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('models/add', model, { headers: headers }).map(function (res) { return res.json(); });
    };
    BikeService.prototype.delModel = function (model) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('models/del', model, { headers: headers }).map(function (res) { return res.json(); });
    };
    BikeService.prototype.updatePrice = function (model) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('bikes/update', model, { headers: headers }).map(function (res) { return res.json(); });
    };
    BikeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
    ], BikeService);
    return BikeService;
    var _a;
}());

//# sourceMappingURL=/home/jm/Projects/mean/angular-src/src/bike.service.js.map

/***/ }),

/***/ "./src/app/services/customer.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomerService = /** @class */ (function () {
    function CustomerService(http) {
        this.http = http;
    }
    CustomerService.prototype.getCustList = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('customers/list', { headers: headers }).map(function (res) { return res.json(); });
    };
    CustomerService.prototype.getCust = function (name) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('customers/find', name, { headers: headers }).map(function (res) { return res.json(); });
    };
    CustomerService.prototype.addCustomer = function (name) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/customers/add', name, { headers: headers }).map(function (res) { return res.json(); });
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
    ], CustomerService);
    return CustomerService;
    var _a;
}());

//# sourceMappingURL=/home/jm/Projects/mean/angular-src/src/customer.service.js.map

/***/ }),

/***/ "./src/app/services/rental.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RentalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RentalService = /** @class */ (function () {
    function RentalService(http) {
        this.http = http;
        this.tax = 0.12;
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
    RentalService.prototype.getRentalByDate = function (date) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('rentals/date', date, { headers: headers }).map(function (res) { return res.json(); });
    };
    RentalService.prototype.startRental = function (cust) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('rentals/start', cust, { headers: headers }).map(function (res) { return res.json(); });
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
        return this.http.put('rentals/add', rental, { headers: headers }).map(function (res) { return res.json(); });
    };
    RentalService.prototype.removeBike = function (rental) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.put('rentals/remove', rental, { headers: headers }).map(function (res) { return res.json(); });
    };
    RentalService.prototype.changeDate = function (rental) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('rentals/edit', rental, { headers: headers }).map(function (res) { return res.json(); });
    };
    RentalService.prototype.calcPrice = function (bike, duration) {
        var price, discountDuration = 0;
        if (duration < 60) {
            //Minimum 1 Hour Charge
            discountDuration = 60;
        }
        else if (duration >= 60 && duration < 180) {
            //Normal Pricing (Below 3 Hours)
            discountDuration = duration;
        }
        else if (duration <= 240 && duration >= 180) {
            //Discount Pricing Between 3-4 Hours
            discountDuration = 180;
        }
        else if (duration < 360 && duration > 240) {
            //Discount Pricing For Under 6 Hours But Above 4 Hours
            discountDuration = (duration - 240) + 180;
        }
        else {
            //Full Day Pricing (6+ Hours)
            discountDuration = 360;
        }
        price = (bike.price / 60) * discountDuration;
        return price;
    };
    RentalService.prototype.calcTax = function (subtotal) {
        var tax = 0;
        tax = subtotal * this.tax;
        return tax;
    };
    RentalService.prototype.print = function (pageID) {
        console.log("printing");
        var printContents, popupWin;
        printContents = document.getElementById(pageID).innerHTML;
        popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
        popupWin.document.open();
        popupWin.document.write("\n      <html>\n        <head>\n          <title>Bike Rental</title>\n          <link rel=\"stylesheet\" href=\"https://bootswatch.com/slate/bootstrap.min.css\">\n        </head>\n        <body onload=\"window.print();window.close()\">" + printContents + "</body>\n      </html>");
        popupWin.document.close();
    };
    RentalService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
    ], RentalService);
    return RentalService;
    var _a;
}());

//# sourceMappingURL=/home/jm/Projects/mean/angular-src/src/rental.service.js.map

/***/ }),

/***/ "./src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = /** @class */ (function () {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());

//# sourceMappingURL=/home/jm/Projects/mean/angular-src/src/validate.service.js.map

/***/ }),

/***/ "./src/app/shared/bike.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Bike; });
var Bike = /** @class */ (function () {
    function Bike() {
    }
    return Bike;
}());

//# sourceMappingURL=/home/jm/Projects/mean/angular-src/src/bike.js.map

/***/ }),

/***/ "./src/app/shared/bikefilter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BikeFilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BikeFilterPipe = /** @class */ (function () {
    function BikeFilterPipe() {
    }
    BikeFilterPipe.prototype.transform = function (bikes, query) {
        if (!bikes || !query)
            return bikes;
        return bikes.filter(function (bike) {
            for (var field in query) {
                if (query[field]) {
                    if (field === '_id') {
                        if (Math.floor(bike[field] / 1000) !== query[field]) {
                            return false;
                        }
                    }
                    else if (field === 'status' || field === 'model') {
                        if (bike[field].toLowerCase().indexOf(query[field].toLowerCase()) === -1) {
                            return false;
                        }
                    }
                    else if (field === 'price') {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'bfilter',
            pure: false
        })
    ], BikeFilterPipe);
    return BikeFilterPipe;
}());

//# sourceMappingURL=/home/jm/Projects/mean/angular-src/src/bikefilter.pipe.js.map

/***/ }),

/***/ "./src/app/shared/customer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Customer; });
var Customer = /** @class */ (function () {
    function Customer() {
    }
    return Customer;
}());

//# sourceMappingURL=/home/jm/Projects/mean/angular-src/src/customer.js.map

/***/ }),

/***/ "./src/app/shared/customerfilter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerFilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CustomerFilterPipe = /** @class */ (function () {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'cfilter',
            pure: false
        })
    ], CustomerFilterPipe);
    return CustomerFilterPipe;
}());

//# sourceMappingURL=/home/jm/Projects/mean/angular-src/src/customerfilter.pipe.js.map

/***/ }),

/***/ "./src/app/shared/model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Model; });
var Model = /** @class */ (function () {
    function Model() {
    }
    return Model;
}());

//# sourceMappingURL=/home/jm/Projects/mean/angular-src/src/model.js.map

/***/ }),

/***/ "./src/app/shared/rental.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Rental; });
var Rental = /** @class */ (function () {
    function Rental() {
    }
    return Rental;
}());

//# sourceMappingURL=/home/jm/Projects/mean/angular-src/src/rental.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("./src/app/app.module.ts");




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/jm/Projects/mean/angular-src/src/main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map