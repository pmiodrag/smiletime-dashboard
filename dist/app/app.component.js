System.register(['angular2/core', 'angular2/common', 'angular2/router', './customers/customers.component', './orders/orders.component', './components/dashboard/dashboard', './components/tables/tables'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, router_1, customers_component_1, orders_component_1, dashboard_1, tables_1;
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
                        directives: [router_1.ROUTER_DIRECTIVES, router_1.RouterLink, common_1.CORE_DIRECTIVES, customers_component_1.CustomersComponent, dashboard_1.Dashboard],
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIkFwcENvbXBvbmVudCIsIkFwcENvbXBvbmVudC5jb25zdHJ1Y3RvciIsIkFwcENvbXBvbmVudC5uZ09uSW5pdCIsIkFwcENvbXBvbmVudC5hdHRhY2hFdmVudHMiLCJBcHBDb21wb25lbnQuZ2V0V2lkdGgiLCJBcHBDb21wb25lbnQudG9nZ2xlU2lkZWJhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBUUE7Z0JBa0JFQTtvQkFKQUMsZUFBVUEsR0FBVUEsR0FBR0EsQ0FBQ0E7b0JBQ3hCQSxXQUFNQSxHQUFXQSxLQUFLQSxDQUFDQTtvQkFJckJBLElBQUlBLENBQUNBLFlBQVlBLEVBQUVBLENBQUNBO2dCQUN0QkEsQ0FBQ0E7Z0JBRURELCtCQUFRQSxHQUFSQTtvQkFFRUUsSUFBSUEsQ0FBQ0EseUJBQXlCQSxHQUFHQSxJQUFJQSxDQUFDQTtnQkFHeENBLENBQUNBO2dCQUNERixtQ0FBWUEsR0FBWkE7b0JBQUFHLGlCQVlDQTtvQkFYQ0EsTUFBTUEsQ0FBQ0EsUUFBUUEsR0FBR0E7d0JBQ2hCQSxFQUFFQSxDQUFDQSxDQUFDQSxLQUFJQSxDQUFDQSxRQUFRQSxFQUFFQSxJQUFJQSxLQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxDQUFDQSxDQUFDQTs0QkFDdkNBLEVBQUVBLENBQUNBLENBQUNBLFlBQVlBLENBQUNBLE9BQU9BLENBQUNBLFFBQVFBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO2dDQUNuQ0EsS0FBSUEsQ0FBQ0EsTUFBTUEsR0FBR0EsQ0FBQ0EsWUFBWUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsR0FBR0EsS0FBS0EsR0FBR0EsSUFBSUEsQ0FBQ0E7NEJBQy9EQSxDQUFDQTs0QkFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7Z0NBQ05BLEtBQUlBLENBQUNBLE1BQU1BLEdBQUdBLElBQUlBLENBQUNBOzRCQUNyQkEsQ0FBQ0E7d0JBQ0hBLENBQUNBO3dCQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTs0QkFDTkEsS0FBSUEsQ0FBQ0EsTUFBTUEsR0FBR0EsS0FBS0EsQ0FBQ0E7d0JBQ3RCQSxDQUFDQTtvQkFDSEEsQ0FBQ0EsQ0FBQUE7Z0JBQ0hBLENBQUNBO2dCQUVESCwrQkFBUUEsR0FBUkE7b0JBQ0VJLE1BQU1BLENBQUNBLE1BQU1BLENBQUNBLFVBQVVBLENBQUNBO2dCQUMzQkEsQ0FBQ0E7Z0JBRURKLG9DQUFhQSxHQUFiQTtvQkFDRUssSUFBSUEsQ0FBQ0EsTUFBTUEsR0FBR0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0E7b0JBQzNCQSxZQUFZQSxDQUFDQSxPQUFPQSxDQUFDQSxRQUFRQSxFQUFFQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxRQUFRQSxFQUFFQSxDQUFDQSxDQUFDQTtnQkFDekRBLENBQUNBO2dCQWpESEw7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBRUEsZUFBZUE7d0JBQ3pCQSxVQUFVQSxFQUFFQSxDQUFDQSwwQkFBaUJBLEVBQUVBLG1CQUFVQSxFQUFFQSx3QkFBZUEsRUFBRUEsd0NBQWtCQSxFQUFFQSxxQkFBU0EsQ0FBQ0E7d0JBQzNGQSxXQUFXQSxFQUFFQSx3QkFBd0JBO3FCQUN4Q0EsQ0FBQ0E7b0JBQ0RBLG9CQUFXQSxDQUFDQTt3QkFDWkEsRUFBRUEsSUFBSUEsRUFBRUEsWUFBWUEsRUFBRUEsRUFBRUEsRUFBRUEsV0FBV0EsRUFBRUEsU0FBU0EsRUFBRUEsd0NBQWtCQSxFQUFFQTt3QkFDdEVBLEVBQUVBLElBQUlBLEVBQUVBLGFBQWFBLEVBQUVBLEVBQUVBLEVBQUVBLFFBQVFBLEVBQUVBLFNBQVNBLEVBQUVBLGtDQUFlQSxFQUFLQTt3QkFDckVBLCtEQUErREE7d0JBQy9EQSx5RkFBeUZBO3dCQUN2RkEsRUFBQ0EsSUFBSUEsRUFBRUEsU0FBU0EsRUFBRUEsU0FBU0EsRUFBRUEsZUFBTUEsRUFBRUEsRUFBRUEsRUFBRUEsUUFBUUEsRUFBQ0E7cUJBQ25EQSxDQUFDQTs7aUNBd0NEQTtnQkFBREEsbUJBQUNBO1lBQURBLENBbkRBLEFBbURDQSxJQUFBO1lBbkRELHVDQW1EQyxDQUFBIiwiZmlsZSI6ImFwcC9hcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7IENPUkVfRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcclxuaW1wb3J0IHsgUk9VVEVSX0RJUkVDVElWRVMsIFJvdXRlQ29uZmlnICwgUm91dGVyTGlua30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcclxuaW1wb3J0IHsgQ3VzdG9tZXJzQ29tcG9uZW50IH0gZnJvbSAnLi9jdXN0b21lcnMvY3VzdG9tZXJzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE9yZGVyc0NvbXBvbmVudCB9IGZyb20gJy4vb3JkZXJzL29yZGVycy5jb21wb25lbnQnO1xyXG4vL2ltcG9ydCB7IEF1dGhDb21wb25lbnQgfSBmcm9tICcuL2F1dGgvYXV0aC5jb21wb25lbnQnO1xyXG5pbXBvcnQge0Rhc2hib2FyZH0gZnJvbSAnLi9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQnO1xyXG5pbXBvcnQge1RhYmxlc30gZnJvbSAnLi9jb21wb25lbnRzL3RhYmxlcy90YWJsZXMnO1xyXG5AQ29tcG9uZW50KHsgXHJcbiAgICBzZWxlY3RvcjogJ2FwcC1jb250YWluZXInLFxyXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTLCBSb3V0ZXJMaW5rLCBDT1JFX0RJUkVDVElWRVMsIEN1c3RvbWVyc0NvbXBvbmVudCwgRGFzaGJvYXJkXSxcclxuICAgIHRlbXBsYXRlVXJsOiAnYXBwL2FwcC5jb21wb25lbnQuaHRtbCcgXHJcbn0pXHJcbkBSb3V0ZUNvbmZpZyhbXHJcbiB7IHBhdGg6ICcvY3VzdG9tZXJzJywgYXM6ICdDdXN0b21lcnMnLCBjb21wb25lbnQ6IEN1c3RvbWVyc0NvbXBvbmVudCB9LFxyXG4geyBwYXRoOiAnL29yZGVycy86aWQnLCBhczogJ09yZGVycycsIGNvbXBvbmVudDogT3JkZXJzQ29tcG9uZW50ICAgIH0sXHJcbi8vICAgIHsgcGF0aDogJy9sb2dpbicsIGFzOiAnQXV0aCcsIGNvbXBvbmVudDogQXV0aENvbXBvbmVudCB9LFxyXG4vLyAgICAge3BhdGg6ICcvZGFzaGJvYXJkJywgIGNvbXBvbmVudDogRGFzaGJvYXJkLCBhczogJ0Rhc2hib2FyZCcsIHVzZUFzRGVmYXVsdDogdHJ1ZSB9LFxyXG4gIHtwYXRoOiAnL3RhYmxlcycsIGNvbXBvbmVudDogVGFibGVzLCBhczogJ1RhYmxlcyd9LFxyXG5dKVxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcclxuICBcclxuICBtb2JpbGVWaWV3Om51bWJlciA9IDk5MjtcclxuICB0b2dnbGU6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gIHByb2ZpbGU6IHN0cmluZztcclxuICBwYWNpZW50RGlzcGxheU1vZGVFbmFibGVkOiBib29sZWFuO1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5hdHRhY2hFdmVudHMoKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICBcclxuICAgIHRoaXMucGFjaWVudERpc3BsYXlNb2RlRW5hYmxlZCA9IHRydWU7XHJcblxyXG4gIFxyXG4gIH1cclxuICBhdHRhY2hFdmVudHMoKSB7XHJcbiAgICB3aW5kb3cub25yZXNpemUgPSAoKT0+IHtcclxuICAgICAgaWYgKHRoaXMuZ2V0V2lkdGgoKSA+PSB0aGlzLm1vYmlsZVZpZXcpIHtcclxuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZ2dsZScpKSB7XHJcbiAgICAgICAgICB0aGlzLnRvZ2dsZSA9ICFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9nZ2xlJykgPyBmYWxzZSA6IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMudG9nZ2xlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy50b2dnbGUgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0V2lkdGgoKSB7XHJcbiAgICByZXR1cm4gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVTaWRlYmFyKCkge1xyXG4gICAgdGhpcy50b2dnbGUgPSAhdGhpcy50b2dnbGU7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9nZ2xlJywgdGhpcy50b2dnbGUudG9TdHJpbmcoKSk7XHJcbiAgfVxyXG4gIFxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
