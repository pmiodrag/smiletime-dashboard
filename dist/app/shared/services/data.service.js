System.register(['angular2/core', 'angular2/http', 'rxjs/Observable', 'rxjs/add/operator/map', 'rxjs/add/operator/catch'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, Observable_1;
    var DataService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {},
            function (_2) {}],
        execute: function() {
            DataService = (function () {
                function DataService(http) {
                    this.http = http;
                    this.baseUrl = '/src';
                }
                DataService.prototype.getCustomers = function () {
                    return this.http.get(this.baseUrl + '/customers.json')
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                DataService.prototype.getOrders = function () {
                    return this.http.get(this.baseUrl + '/orders.json')
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                DataService.prototype.handleError = function (error) {
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                DataService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], DataService);
                return DataService;
            })();
            exports_1("DataService", DataService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2VydmljZXMvZGF0YS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbIkRhdGFTZXJ2aWNlIiwiRGF0YVNlcnZpY2UuY29uc3RydWN0b3IiLCJEYXRhU2VydmljZS5nZXRDdXN0b21lcnMiLCJEYXRhU2VydmljZS5nZXRPcmRlcnMiLCJEYXRhU2VydmljZS5oYW5kbGVFcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFTQTtnQkFLSUEscUJBQW9CQSxJQUFVQTtvQkFBVkMsU0FBSUEsR0FBSkEsSUFBSUEsQ0FBTUE7b0JBRjlCQSxZQUFPQSxHQUFXQSxNQUFNQSxDQUFDQTtnQkFFU0EsQ0FBQ0E7Z0JBRW5DRCxrQ0FBWUEsR0FBWkE7b0JBQ0lFLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLElBQUlBLENBQUNBLE9BQU9BLEdBQUdBLGlCQUFpQkEsQ0FBQ0E7eUJBQ3JDQSxHQUFHQSxDQUFDQSxVQUFDQSxHQUFhQSxJQUFLQSxPQUFBQSxHQUFHQSxDQUFDQSxJQUFJQSxFQUFFQSxFQUFWQSxDQUFVQSxDQUFDQTt5QkFDbENBLEtBQUtBLENBQUNBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLENBQUNBO2dCQUM3Q0EsQ0FBQ0E7Z0JBRURGLCtCQUFTQSxHQUFUQTtvQkFDRUcsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsY0FBY0EsQ0FBQ0E7eUJBQ2xDQSxHQUFHQSxDQUFDQSxVQUFDQSxHQUFhQSxJQUFLQSxPQUFBQSxHQUFHQSxDQUFDQSxJQUFJQSxFQUFFQSxFQUFWQSxDQUFVQSxDQUFDQTt5QkFDbENBLEtBQUtBLENBQUNBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLENBQUNBO2dCQUMzQ0EsQ0FBQ0E7Z0JBRURILGlDQUFXQSxHQUFYQSxVQUFZQSxLQUFVQTtvQkFDbEJJLE9BQU9BLENBQUNBLEtBQUtBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO29CQUNyQkEsTUFBTUEsQ0FBQ0EsdUJBQVVBLENBQUNBLEtBQUtBLENBQUNBLEtBQUtBLENBQUNBLElBQUlBLEVBQUVBLENBQUNBLEtBQUtBLElBQUlBLGNBQWNBLENBQUNBLENBQUNBO2dCQUNsRUEsQ0FBQ0E7Z0JBdEJMSjtvQkFBQ0EsaUJBQVVBLEVBQUVBOztnQ0F3QlpBO2dCQUFEQSxrQkFBQ0E7WUFBREEsQ0F4QkEsQUF3QkNBLElBQUE7WUF4QkQscUNBd0JDLENBQUEiLCJmaWxlIjoiYXBwL3NoYXJlZC9zZXJ2aWNlcy9kYXRhLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlIH0gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XHJcblxyXG4vL0dyYWIgZXZlcnl0aGluZyB3aXRoIGltcG9ydCAncnhqcy9SeCc7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnOyBcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCc7XHJcblxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRGF0YVNlcnZpY2Uge1xyXG4gIFxyXG4gICAgYmFzZVVybDogc3RyaW5nID0gJy9zcmMnO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkgeyB9XHJcbiAgICBcclxuICAgIGdldEN1c3RvbWVycygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmJhc2VVcmwgKyAnL2N1c3RvbWVycy5qc29uJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE9yZGVycygpe1xyXG4gICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmJhc2VVcmwgKyAnL29yZGVycy5qc29uJylcclxuICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKHJlczogUmVzcG9uc2UpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7ICAgICAgICAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGhhbmRsZUVycm9yKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkuZXJyb3IgfHwgJ1NlcnZlciBlcnJvcicpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
