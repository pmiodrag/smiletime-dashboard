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
                    this.baseUrl = '/';
                }
                DataService.prototype.getPacients = function () {
                    return this.http.get(this.baseUrl + 'getPacients')
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                DataService.prototype.getTreatments = function () {
                    return this.http.get(this.baseUrl + 'selectTreatments')
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2VydmljZXMvZGF0YS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbIkRhdGFTZXJ2aWNlIiwiRGF0YVNlcnZpY2UuY29uc3RydWN0b3IiLCJEYXRhU2VydmljZS5nZXRQYWNpZW50cyIsIkRhdGFTZXJ2aWNlLmdldFRyZWF0bWVudHMiLCJEYXRhU2VydmljZS5oYW5kbGVFcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFTQTtnQkFLSUEscUJBQW9CQSxJQUFVQTtvQkFBVkMsU0FBSUEsR0FBSkEsSUFBSUEsQ0FBTUE7b0JBRjlCQSxZQUFPQSxHQUFXQSxHQUFHQSxDQUFDQTtnQkFFWUEsQ0FBQ0E7Z0JBRW5DRCxpQ0FBV0EsR0FBWEE7b0JBRUlFLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLElBQUlBLENBQUNBLE9BQU9BLEdBQUdBLGFBQWFBLENBQUNBO3lCQUNsQ0EsR0FBR0EsQ0FBQ0EsVUFBQ0EsR0FBYUEsSUFBS0EsT0FBQUEsR0FBR0EsQ0FBQ0EsSUFBSUEsRUFBRUEsRUFBVkEsQ0FBVUEsQ0FBQ0E7eUJBQ2pDQSxLQUFLQSxDQUFDQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxDQUFDQTtnQkFDN0NBLENBQUNBO2dCQUVERixtQ0FBYUEsR0FBYkE7b0JBQ0VHLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLElBQUlBLENBQUNBLE9BQU9BLEdBQUdBLGtCQUFrQkEsQ0FBQ0E7eUJBQ3RDQSxHQUFHQSxDQUFDQSxVQUFDQSxHQUFhQSxJQUFLQSxPQUFBQSxHQUFHQSxDQUFDQSxJQUFJQSxFQUFFQSxFQUFWQSxDQUFVQSxDQUFDQTt5QkFDbENBLEtBQUtBLENBQUNBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLENBQUNBO2dCQUMzQ0EsQ0FBQ0E7Z0JBRURILGlDQUFXQSxHQUFYQSxVQUFZQSxLQUFVQTtvQkFDbEJJLE9BQU9BLENBQUNBLEtBQUtBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO29CQUNyQkEsTUFBTUEsQ0FBQ0EsdUJBQVVBLENBQUNBLEtBQUtBLENBQUNBLEtBQUtBLENBQUNBLElBQUlBLEVBQUVBLENBQUNBLEtBQUtBLElBQUlBLGNBQWNBLENBQUNBLENBQUNBO2dCQUNsRUEsQ0FBQ0E7Z0JBdkJMSjtvQkFBQ0EsaUJBQVVBLEVBQUVBOztnQ0F5QlpBO2dCQUFEQSxrQkFBQ0E7WUFBREEsQ0F6QkEsQUF5QkNBLElBQUE7WUF6QkQscUNBeUJDLENBQUEiLCJmaWxlIjoiYXBwL3NoYXJlZC9zZXJ2aWNlcy9kYXRhLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlIH0gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XHJcblxyXG4vL0dyYWIgZXZlcnl0aGluZyB3aXRoIGltcG9ydCAncnhqcy9SeCc7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnOyBcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCc7XHJcblxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRGF0YVNlcnZpY2Uge1xyXG4gIFxyXG4gICAgYmFzZVVybDogc3RyaW5nID0gJy8nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkgeyB9XHJcbiAgICBcclxuICAgIGdldFBhY2llbnRzKCkgeyAgICAgICBcclxuICAgIFxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuYmFzZVVybCArICdnZXRQYWNpZW50cycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRyZWF0bWVudHMoKXtcclxuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5iYXNlVXJsICsgJ3NlbGVjdFRyZWF0bWVudHMnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTsgICAgICAgICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgaGFuZGxlRXJyb3IoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKS5lcnJvciB8fCAnU2VydmVyIGVycm9yJyk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
