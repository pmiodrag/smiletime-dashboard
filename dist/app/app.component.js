System.register(['angular2/core', 'angular2/common', 'angular2/router', './customers/customers.component', './orders/orders.component', './auth/auth.component', './components/dashboard/dashboard', './components/tables/tables'], function(exports_1) {
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
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIkFwcENvbXBvbmVudCIsIkFwcENvbXBvbmVudC5jb25zdHJ1Y3RvciIsIkFwcENvbXBvbmVudC5uZ09uSW5pdCIsIkFwcENvbXBvbmVudC5hdHRhY2hFdmVudHMiLCJBcHBDb21wb25lbnQuZ2V0V2lkdGgiLCJBcHBDb21wb25lbnQudG9nZ2xlU2lkZWJhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBUUE7Z0JBa0JFQTtvQkFKQUMsZUFBVUEsR0FBVUEsR0FBR0EsQ0FBQ0E7b0JBQ3hCQSxXQUFNQSxHQUFXQSxLQUFLQSxDQUFDQTtvQkFJckJBLElBQUlBLENBQUNBLFlBQVlBLEVBQUVBLENBQUNBO2dCQUN0QkEsQ0FBQ0E7Z0JBRURELCtCQUFRQSxHQUFSQTtvQkFFRUUsSUFBSUEsQ0FBQ0EseUJBQXlCQSxHQUFHQSxJQUFJQSxDQUFDQTtnQkFHeENBLENBQUNBO2dCQUNERixtQ0FBWUEsR0FBWkE7b0JBQUFHLGlCQVlDQTtvQkFYQ0EsTUFBTUEsQ0FBQ0EsUUFBUUEsR0FBR0E7d0JBQ2hCQSxFQUFFQSxDQUFDQSxDQUFDQSxLQUFJQSxDQUFDQSxRQUFRQSxFQUFFQSxJQUFJQSxLQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxDQUFDQSxDQUFDQTs0QkFDdkNBLEVBQUVBLENBQUNBLENBQUNBLFlBQVlBLENBQUNBLE9BQU9BLENBQUNBLFFBQVFBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO2dDQUNuQ0EsS0FBSUEsQ0FBQ0EsTUFBTUEsR0FBR0EsQ0FBQ0EsWUFBWUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsR0FBR0EsS0FBS0EsR0FBR0EsSUFBSUEsQ0FBQ0E7NEJBQy9EQSxDQUFDQTs0QkFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7Z0NBQ05BLEtBQUlBLENBQUNBLE1BQU1BLEdBQUdBLElBQUlBLENBQUNBOzRCQUNyQkEsQ0FBQ0E7d0JBQ0hBLENBQUNBO3dCQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTs0QkFDTkEsS0FBSUEsQ0FBQ0EsTUFBTUEsR0FBR0EsS0FBS0EsQ0FBQ0E7d0JBQ3RCQSxDQUFDQTtvQkFDSEEsQ0FBQ0EsQ0FBQUE7Z0JBQ0hBLENBQUNBO2dCQUVESCwrQkFBUUEsR0FBUkE7b0JBQ0VJLE1BQU1BLENBQUNBLE1BQU1BLENBQUNBLFVBQVVBLENBQUNBO2dCQUMzQkEsQ0FBQ0E7Z0JBRURKLG9DQUFhQSxHQUFiQTtvQkFDRUssSUFBSUEsQ0FBQ0EsTUFBTUEsR0FBR0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0E7b0JBQzNCQSxZQUFZQSxDQUFDQSxPQUFPQSxDQUFDQSxRQUFRQSxFQUFFQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxRQUFRQSxFQUFFQSxDQUFDQSxDQUFDQTtnQkFDekRBLENBQUNBO2dCQWpESEw7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBRUEsZUFBZUE7d0JBQ3pCQSxVQUFVQSxFQUFFQSxDQUFDQSwwQkFBaUJBLEVBQUVBLG1CQUFVQSxFQUFFQSx3QkFBZUEsRUFBRUEsOEJBQWFBLEVBQUVBLHdDQUFrQkEsRUFBRUEscUJBQVNBLENBQUNBO3dCQUMxR0EsV0FBV0EsRUFBRUEsd0JBQXdCQTtxQkFDeENBLENBQUNBO29CQUNEQSxvQkFBV0EsQ0FBQ0E7d0JBQ1pBLEVBQUVBLElBQUlBLEVBQUVBLFlBQVlBLEVBQUVBLEVBQUVBLEVBQUVBLFdBQVdBLEVBQUVBLFNBQVNBLEVBQUVBLHdDQUFrQkEsRUFBRUE7d0JBQ3RFQSxFQUFFQSxJQUFJQSxFQUFFQSxhQUFhQSxFQUFFQSxFQUFFQSxFQUFFQSxRQUFRQSxFQUFFQSxTQUFTQSxFQUFFQSxrQ0FBZUEsRUFBS0E7d0JBQ3JFQSwrREFBK0RBO3dCQUMvREEseUZBQXlGQTt3QkFDdkZBLEVBQUNBLElBQUlBLEVBQUVBLFNBQVNBLEVBQUVBLFNBQVNBLEVBQUVBLGVBQU1BLEVBQUVBLEVBQUVBLEVBQUVBLFFBQVFBLEVBQUNBO3FCQUNuREEsQ0FBQ0E7O2lDQXdDREE7Z0JBQURBLG1CQUFDQTtZQUFEQSxDQW5EQSxBQW1EQ0EsSUFBQTtZQW5ERCx1Q0FtREMsQ0FBQSIsImZpbGUiOiJhcHAvYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQgeyBDT1JFX0RJUkVDVElWRVN9IGZyb20gJ2FuZ3VsYXIyL2NvbW1vbic7XHJcbmltcG9ydCB7IFJPVVRFUl9ESVJFQ1RJVkVTLCBSb3V0ZUNvbmZpZyAsIFJvdXRlckxpbmt9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XHJcbmltcG9ydCB7IEN1c3RvbWVyc0NvbXBvbmVudCB9IGZyb20gJy4vY3VzdG9tZXJzL2N1c3RvbWVycy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBPcmRlcnNDb21wb25lbnQgfSBmcm9tICcuL29yZGVycy9vcmRlcnMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQXV0aENvbXBvbmVudCB9IGZyb20gJy4vYXV0aC9hdXRoLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7RGFzaGJvYXJkfSBmcm9tICcuL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZCc7XHJcbmltcG9ydCB7VGFibGVzfSBmcm9tICcuL2NvbXBvbmVudHMvdGFibGVzL3RhYmxlcyc7XHJcbkBDb21wb25lbnQoeyBcclxuICAgIHNlbGVjdG9yOiAnYXBwLWNvbnRhaW5lcicsXHJcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVMsIFJvdXRlckxpbmssIENPUkVfRElSRUNUSVZFUywgQXV0aENvbXBvbmVudCwgQ3VzdG9tZXJzQ29tcG9uZW50LCBEYXNoYm9hcmRdLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAvYXBwLmNvbXBvbmVudC5odG1sJyBcclxufSlcclxuQFJvdXRlQ29uZmlnKFtcclxuIHsgcGF0aDogJy9jdXN0b21lcnMnLCBhczogJ0N1c3RvbWVycycsIGNvbXBvbmVudDogQ3VzdG9tZXJzQ29tcG9uZW50IH0sXHJcbiB7IHBhdGg6ICcvb3JkZXJzLzppZCcsIGFzOiAnT3JkZXJzJywgY29tcG9uZW50OiBPcmRlcnNDb21wb25lbnQgICAgfSxcclxuLy8gICAgeyBwYXRoOiAnL2xvZ2luJywgYXM6ICdBdXRoJywgY29tcG9uZW50OiBBdXRoQ29tcG9uZW50IH0sXHJcbi8vICAgICB7cGF0aDogJy9kYXNoYm9hcmQnLCAgY29tcG9uZW50OiBEYXNoYm9hcmQsIGFzOiAnRGFzaGJvYXJkJywgdXNlQXNEZWZhdWx0OiB0cnVlIH0sXHJcbiAge3BhdGg6ICcvdGFibGVzJywgY29tcG9uZW50OiBUYWJsZXMsIGFzOiAnVGFibGVzJ30sXHJcbl0pXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xyXG4gIFxyXG4gIG1vYmlsZVZpZXc6bnVtYmVyID0gOTkyO1xyXG4gIHRvZ2dsZTpib29sZWFuID0gZmFsc2U7XHJcbiAgcHJvZmlsZTogc3RyaW5nO1xyXG4gIHBhY2llbnREaXNwbGF5TW9kZUVuYWJsZWQ6IGJvb2xlYW47XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmF0dGFjaEV2ZW50cygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgIFxyXG4gICAgdGhpcy5wYWNpZW50RGlzcGxheU1vZGVFbmFibGVkID0gdHJ1ZTtcclxuXHJcbiAgXHJcbiAgfVxyXG4gIGF0dGFjaEV2ZW50cygpIHtcclxuICAgIHdpbmRvdy5vbnJlc2l6ZSA9ICgpPT4ge1xyXG4gICAgICBpZiAodGhpcy5nZXRXaWR0aCgpID49IHRoaXMubW9iaWxlVmlldykge1xyXG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9nZ2xlJykpIHtcclxuICAgICAgICAgIHRoaXMudG9nZ2xlID0gIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2dnbGUnKSA/IGZhbHNlIDogdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy50b2dnbGUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnRvZ2dsZSA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRXaWR0aCgpIHtcclxuICAgIHJldHVybiB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICB9XHJcblxyXG4gIHRvZ2dsZVNpZGViYXIoKSB7XHJcbiAgICB0aGlzLnRvZ2dsZSA9ICF0aGlzLnRvZ2dsZTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2dnbGUnLCB0aGlzLnRvZ2dsZS50b1N0cmluZygpKTtcclxuICB9XHJcbiAgXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
