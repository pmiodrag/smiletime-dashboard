System.register(['angular2/core', 'angular2/common', 'angular2/router', '../shared/services/data.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, router_1, data_service_1;
    var OrdersComponent;
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
            function (data_service_1_1) {
                data_service_1 = data_service_1_1;
            }],
        execute: function() {
            OrdersComponent = (function () {
                function OrdersComponent(dataService, _routeParams) {
                    this.dataService = dataService;
                    this._routeParams = _routeParams;
                    this.title = 'Orders';
                    this.filteredOrders = [];
                }
                OrdersComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var customerId = parseInt(this._routeParams.get('id'), 10);
                    this.dataService.getOrders().subscribe(function (orders) {
                        _this.filteredOrders = orders.filter(function (order) { return order.customerId === customerId; });
                    });
                };
                OrdersComponent = __decorate([
                    core_1.Component({
                        selector: 'orders',
                        providers: [data_service_1.DataService],
                        templateUrl: 'app/orders/orders.component.html',
                        directives: [common_1.CORE_DIRECTIVES, router_1.RouterLink]
                    }), 
                    __metadata('design:paramtypes', [data_service_1.DataService, router_1.RouteParams])
                ], OrdersComponent);
                return OrdersComponent;
            })();
            exports_1("OrdersComponent", OrdersComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9vcmRlcnMvb3JkZXJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJPcmRlcnNDb21wb25lbnQiLCJPcmRlcnNDb21wb25lbnQuY29uc3RydWN0b3IiLCJPcmRlcnNDb21wb25lbnQubmdPbkluaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUtBO2dCQVdJQSx5QkFBb0JBLFdBQXdCQSxFQUFVQSxZQUF5QkE7b0JBQTNEQyxnQkFBV0EsR0FBWEEsV0FBV0EsQ0FBYUE7b0JBQVVBLGlCQUFZQSxHQUFaQSxZQUFZQSxDQUFhQTtvQkFIaEZBLFVBQUtBLEdBQVdBLFFBQVFBLENBQUNBO29CQUN4QkEsbUJBQWNBLEdBQVVBLEVBQUVBLENBQUNBO2dCQUkzQkEsQ0FBQ0E7Z0JBRURELGtDQUFRQSxHQUFSQTtvQkFBQUUsaUJBS0NBO29CQUpDQSxJQUFJQSxVQUFVQSxHQUFHQSxRQUFRQSxDQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSxFQUFFQSxFQUFFQSxDQUFDQSxDQUFDQTtvQkFDM0RBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLFNBQVNBLEVBQUVBLENBQUNBLFNBQVNBLENBQUNBLFVBQUNBLE1BQWFBO3dCQUNuREEsS0FBSUEsQ0FBQ0EsY0FBY0EsR0FBR0EsTUFBTUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsVUFBQUEsS0FBS0EsSUFBSUEsT0FBQUEsS0FBS0EsQ0FBQ0EsVUFBVUEsS0FBS0EsVUFBVUEsRUFBL0JBLENBQStCQSxDQUFDQSxDQUFDQTtvQkFDaEZBLENBQUNBLENBQUNBLENBQUNBO2dCQUNMQSxDQUFDQTtnQkFwQkxGO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1RBLFFBQVFBLEVBQUVBLFFBQVFBO3dCQUNsQkEsU0FBU0EsRUFBRUEsQ0FBQ0EsMEJBQVdBLENBQUNBO3dCQUN4QkEsV0FBV0EsRUFBRUEsa0NBQWtDQTt3QkFDL0NBLFVBQVVBLEVBQUVBLENBQUNBLHdCQUFlQSxFQUFFQSxtQkFBVUEsQ0FBQ0E7cUJBQzFDQSxDQUFDQTs7b0NBZ0JEQTtnQkFBREEsc0JBQUNBO1lBQURBLENBckJBLEFBcUJDQSxJQUFBO1lBckJELDZDQXFCQyxDQUFBIiwiZmlsZSI6ImFwcC9vcmRlcnMvb3JkZXJzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQgeyBDT1JFX0RJUkVDVElWRVMgfSBmcm9tICdhbmd1bGFyMi9jb21tb24nO1xyXG5pbXBvcnQgeyBSb3V0ZXJMaW5rLCBSb3V0ZVBhcmFtcyB9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XHJcbmltcG9ydCB7IERhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3NlcnZpY2VzL2RhdGEuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHsgXHJcbiAgc2VsZWN0b3I6ICdvcmRlcnMnLFxyXG4gIHByb3ZpZGVyczogW0RhdGFTZXJ2aWNlXSxcclxuICB0ZW1wbGF0ZVVybDogJ2FwcC9vcmRlcnMvb3JkZXJzLmNvbXBvbmVudC5odG1sJyxcclxuICBkaXJlY3RpdmVzOiBbQ09SRV9ESVJFQ1RJVkVTLCBSb3V0ZXJMaW5rXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgT3JkZXJzQ29tcG9uZW50IHtcclxuXHRcclxuXHQgIHRpdGxlOiBzdHJpbmcgPSAnT3JkZXJzJztcclxuICAgIGZpbHRlcmVkT3JkZXJzOiBhbnlbXSA9IFtdO1xyXG4gIFxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkYXRhU2VydmljZTogRGF0YVNlcnZpY2UsIHByaXZhdGUgX3JvdXRlUGFyYW1zOiBSb3V0ZVBhcmFtcykge1xyXG4gICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgIGxldCBjdXN0b21lcklkID0gcGFyc2VJbnQodGhpcy5fcm91dGVQYXJhbXMuZ2V0KCdpZCcpLCAxMCk7XHJcbiAgICAgIHRoaXMuZGF0YVNlcnZpY2UuZ2V0T3JkZXJzKCkuc3Vic2NyaWJlKChvcmRlcnM6IGFueVtdKSA9PiB7XHJcbiAgICAgICAgdGhpcy5maWx0ZXJlZE9yZGVycyA9IG9yZGVycy5maWx0ZXIob3JkZXIgPT4gb3JkZXIuY3VzdG9tZXJJZCA9PT0gY3VzdG9tZXJJZCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
