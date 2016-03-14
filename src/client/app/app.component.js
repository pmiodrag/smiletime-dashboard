System.register(['angular2/core', 'angular2/common', 'angular2/router', './customers/customers.component', './orders/orders.component', './auth/auth.component', './components/dashboard/dashboard', './components/tables/tables'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, router_1, customers_component_1, orders_component_1, auth_component_1, dashboard_1, tables_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (customers_component_1_1) {
                customers_component_1 = customers_component_1_1;
            },
            function (orders_component_1_1) {
                orders_component_1 = orders_component_1_1;
            },
            function (auth_component_1_1) {
                auth_component_1 = auth_component_1_1;
            },
            function (dashboard_1_1) {
                dashboard_1 = dashboard_1_1;
            },
            function (tables_1_1) {
                tables_1 = tables_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.mobileView = 992;
                    this.toggle = false;
                    this.attachEvents();
                }
                AppComponent.prototype.ngOnInit = function () {
                    this.pacientDisplayModeEnabled = true;
                };
                AppComponent.prototype.attachEvents = function () {
                    var _this = this;
                    window.onresize = function () {
                        if (_this.getWidth() >= _this.mobileView) {
                            if (localStorage.getItem('toggle')) {
                                _this.toggle = !localStorage.getItem('toggle') ? false : true;
                            }
                            else {
                                _this.toggle = true;
                            }
                        }
                        else {
                            _this.toggle = false;
                        }
                    };
                };
                AppComponent.prototype.getWidth = function () {
                    return window.innerWidth;
                };
                AppComponent.prototype.toggleSidebar = function () {
                    this.toggle = !this.toggle;
                    localStorage.setItem('toggle', this.toggle.toString());
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'app-container',
                        directives: [router_1.ROUTER_DIRECTIVES, router_1.RouterLink, common_1.CORE_DIRECTIVES, auth_component_1.AuthComponent, customers_component_1.CustomersComponent, dashboard_1.Dashboard],
                        templateUrl: 'app/app.component.html'
                    }),
                    router_1.RouteConfig([
                        { path: '/customers', as: 'Customers', component: customers_component_1.CustomersComponent },
                        { path: '/orders/:id', as: 'Orders', component: orders_component_1.OrdersComponent },
                        //    { path: '/login', as: 'Auth', component: AuthComponent },
                        //     {path: '/dashboard',  component: Dashboard, as: 'Dashboard', useAsDefault: true },
                        { path: '/tables', component: tables_1.Tables, as: 'Tables' },
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map