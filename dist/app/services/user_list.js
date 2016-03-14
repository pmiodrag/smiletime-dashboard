System.register([], function(exports_1) {
    var UserListService;
    return {
        setters:[],
        execute: function() {
            UserListService = (function () {
                function UserListService() {
                    this.users = [{
                            id: 1,
                            name: 'Joe Bloggs',
                            role: 'Super Admin',
                            account: 'AZ23045'
                        }, {
                            id: 2,
                            name: 'Timothy Hernandez',
                            role: 'Admin',
                            account: 'AU24783'
                        }, {
                            id: 3,
                            name: 'Joe Bickham',
                            role: 'User',
                            account: 'AM23781'
                        }];
                }
                UserListService.prototype.add = function (value) {
                    this.users.push(value);
                };
                UserListService.prototype.all = function () {
                    return this.users;
                };
                return UserListService;
            })();
            exports_1("UserListService", UserListService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZXJ2aWNlcy91c2VyX2xpc3QudHMiXSwibmFtZXMiOlsiVXNlckxpc3RTZXJ2aWNlIiwiVXNlckxpc3RTZXJ2aWNlLmNvbnN0cnVjdG9yIiwiVXNlckxpc3RTZXJ2aWNlLmFkZCIsIlVzZXJMaXN0U2VydmljZS5hbGwiXSwibWFwcGluZ3MiOiI7Ozs7O1lBQUE7Z0JBQUFBO29CQUNFQyxVQUFLQSxHQUFTQSxDQUFDQTs0QkFDYkEsRUFBRUEsRUFBRUEsQ0FBQ0E7NEJBQ0xBLElBQUlBLEVBQUVBLFlBQVlBOzRCQUNsQkEsSUFBSUEsRUFBRUEsYUFBYUE7NEJBQ25CQSxPQUFPQSxFQUFFQSxTQUFTQTt5QkFDbkJBLEVBQUVBOzRCQUNEQSxFQUFFQSxFQUFFQSxDQUFDQTs0QkFDTEEsSUFBSUEsRUFBRUEsbUJBQW1CQTs0QkFDekJBLElBQUlBLEVBQUVBLE9BQU9BOzRCQUNiQSxPQUFPQSxFQUFFQSxTQUFTQTt5QkFDbkJBLEVBQUVBOzRCQUNEQSxFQUFFQSxFQUFFQSxDQUFDQTs0QkFDTEEsSUFBSUEsRUFBRUEsYUFBYUE7NEJBQ25CQSxJQUFJQSxFQUFFQSxNQUFNQTs0QkFDWkEsT0FBT0EsRUFBRUEsU0FBU0E7eUJBQ25CQSxDQUFDQSxDQUFDQTtnQkFTTEEsQ0FBQ0E7Z0JBUENELDZCQUFHQSxHQUFIQSxVQUFJQSxLQUFTQTtvQkFDWEUsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3pCQSxDQUFDQTtnQkFFREYsNkJBQUdBLEdBQUhBO29CQUNFRyxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQTtnQkFDcEJBLENBQUNBO2dCQUNISCxzQkFBQ0E7WUFBREEsQ0F6QkEsQUF5QkNBLElBQUE7WUF6QkQsNkNBeUJDLENBQUEiLCJmaWxlIjoiYXBwL3NlcnZpY2VzL3VzZXJfbGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBVc2VyTGlzdFNlcnZpY2Uge1xyXG4gIHVzZXJzOmFueVtdID0gW3tcclxuICAgIGlkOiAxLFxyXG4gICAgbmFtZTogJ0pvZSBCbG9nZ3MnLFxyXG4gICAgcm9sZTogJ1N1cGVyIEFkbWluJyxcclxuICAgIGFjY291bnQ6ICdBWjIzMDQ1J1xyXG4gIH0sIHtcclxuICAgIGlkOiAyLFxyXG4gICAgbmFtZTogJ1RpbW90aHkgSGVybmFuZGV6JyxcclxuICAgIHJvbGU6ICdBZG1pbicsXHJcbiAgICBhY2NvdW50OiAnQVUyNDc4MydcclxuICB9LCB7XHJcbiAgICBpZDogMyxcclxuICAgIG5hbWU6ICdKb2UgQmlja2hhbScsXHJcbiAgICByb2xlOiAnVXNlcicsXHJcbiAgICBhY2NvdW50OiAnQU0yMzc4MSdcclxuICB9XTtcclxuXHJcbiAgYWRkKHZhbHVlOmFueSk6dm9pZCB7XHJcbiAgICB0aGlzLnVzZXJzLnB1c2godmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgYWxsKCk6YW55W10ge1xyXG4gICAgcmV0dXJuIHRoaXMudXNlcnM7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
