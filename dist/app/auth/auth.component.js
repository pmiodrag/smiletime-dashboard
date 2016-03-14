System.register(['angular2/core', 'angular2/router', 'angular2/http', 'angular2-jwt/angular2-jwt'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, http_1, angular2_jwt_1;
    var AuthComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (angular2_jwt_1_1) {
                angular2_jwt_1 = angular2_jwt_1_1;
            }],
        execute: function() {
            AuthComponent = (function () {
                function AuthComponent(http, authHttp) {
                    this.http = http;
                    this.authHttp = authHttp;
                    this.lock = new Auth0Lock('9NdeCaZbpddcqM34xZ8BKcZcwMfPqFNl', 'twinsoft.eu.auth0.com');
                    //lock = new Auth0Lock('AUTH0_CLIENT_ID', 'AUTH0_DOMAIN');
                    this.jwtHelper = new angular2_jwt_1.JwtHelper();
                    this.profile = localStorage.getItem('profile');
                    this.setProfileObject();
                }
                AuthComponent.prototype.login = function () {
                    var _this = this;
                    this.lock.show(function (err, profile, id_token) {
                        if (err) {
                            throw new Error(err);
                        }
                        localStorage.setItem('profile', JSON.stringify(profile));
                        localStorage.setItem('id_token', id_token);
                        _this.setProfileObject();
                    });
                };
                AuthComponent.prototype.setProfileObject = function () {
                    this.profile = localStorage.getItem('profile');
                    this.jsonObj = JSON.parse(this.profile);
                    console.log(" this.jsonObj == ", this.jsonObj);
                    if (this.jsonObj != null) {
                        this.picture = this.jsonObj['picture'];
                        this.name = this.jsonObj['name'];
                    }
                    else {
                        this.picture = "img/avatar.jpg";
                        this.name = "";
                    }
                };
                AuthComponent.prototype.logout = function () {
                    localStorage.removeItem('profile');
                    localStorage.removeItem('id_token');
                    this.picture = "img/avatar.jpg";
                    this.name = "";
                };
                AuthComponent.prototype.loggedIn = function () {
                    return angular2_jwt_1.tokenNotExpired();
                };
                AuthComponent.prototype.tokenSubscription = function () {
                    this.authHttp.tokenStream.subscribe(function (data) { return console.log(data); }, function (err) { return console.log(err); }, function () { return console.log('Complete'); });
                };
                AuthComponent.prototype.useJwtHelper = function () {
                    var token = localStorage.getItem('id_token');
                    console.log(this.jwtHelper.decodeToken(token), this.jwtHelper.getTokenExpirationDate(token), this.jwtHelper.isTokenExpired(token));
                };
                AuthComponent = __decorate([
                    core_1.Component({
                        directives: [router_1.ROUTER_DIRECTIVES],
                        selector: 'auth-component',
                        templateUrl: 'app/auth/auth.component.html'
                    }), 
                    __metadata('design:paramtypes', [http_1.Http, angular2_jwt_1.AuthHttp])
                ], AuthComponent);
                return AuthComponent;
            })();
            exports_1("AuthComponent", AuthComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hdXRoL2F1dGguY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIkF1dGhDb21wb25lbnQiLCJBdXRoQ29tcG9uZW50LmNvbnN0cnVjdG9yIiwiQXV0aENvbXBvbmVudC5sb2dpbiIsIkF1dGhDb21wb25lbnQuc2V0UHJvZmlsZU9iamVjdCIsIkF1dGhDb21wb25lbnQubG9nb3V0IiwiQXV0aENvbXBvbmVudC5sb2dnZWRJbiIsIkF1dGhDb21wb25lbnQudG9rZW5TdWJzY3JpcHRpb24iLCJBdXRoQ29tcG9uZW50LnVzZUp3dEhlbHBlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBUUE7Z0JBZUlBLHVCQUFtQkEsSUFBVUEsRUFBU0EsUUFBa0JBO29CQUFyQ0MsU0FBSUEsR0FBSkEsSUFBSUEsQ0FBTUE7b0JBQVNBLGFBQVFBLEdBQVJBLFFBQVFBLENBQVVBO29CQU54REEsU0FBSUEsR0FBR0EsSUFBSUEsU0FBU0EsQ0FBQ0Esa0NBQWtDQSxFQUFFQSx1QkFBdUJBLENBQUNBLENBQUNBO29CQUNsRkEsMERBQTBEQTtvQkFDMURBLGNBQVNBLEdBQWNBLElBQUlBLHdCQUFTQSxFQUFFQSxDQUFDQTtvQkFLbkNBLElBQUlBLENBQUNBLE9BQU9BLEdBQUdBLFlBQVlBLENBQUNBLE9BQU9BLENBQUNBLFNBQVNBLENBQUNBLENBQUNBO29CQUMvQ0EsSUFBSUEsQ0FBQ0EsZ0JBQWdCQSxFQUFFQSxDQUFDQTtnQkFDNUJBLENBQUNBO2dCQUVERCw2QkFBS0EsR0FBTEE7b0JBQUFFLGlCQVNDQTtvQkFSR0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBQ0EsR0FBV0EsRUFBRUEsT0FBZUEsRUFBRUEsUUFBZ0JBO3dCQUMxREEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7NEJBQ05BLE1BQU1BLElBQUlBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO3dCQUN6QkEsQ0FB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bkVMUDtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNQQSxVQUFVQSxFQUFFQSxDQUFDQSwwQkFBaUJBLENBQUNBO3dCQUMvQkEsUUFBUUEsRUFBRUEsZ0JBQWdCQTt3QkFDMUJBLFdBQVdBLEVBQUVBLDhCQUE4QkE7cUJBQzlDQSxDQUFDQTs7a0NBaUVEQTtnQkFBREEsb0JBQUNBO1lBQURBLENBckVBLEFBcUVDQSxJQUFBO1lBckVELHlDQXFFQyxDQUFBIiwiZmlsZSI6ImFwcC9hdXRoL2F1dGguY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIFZpZXd9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge1JvdXRlQ29uZmlnLCBSb3V0ZXIsIFJPVVRFUl9ESVJFQ1RJVkVTLCBDYW5BY3RpdmF0ZX0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcclxuaW1wb3J0IHtIdHRwfSBmcm9tICdhbmd1bGFyMi9odHRwJztcclxuaW1wb3J0IHtGT1JNX1BST1ZJREVSU30gZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcclxuaW1wb3J0IHtBdXRoSHR0cCwgdG9rZW5Ob3RFeHBpcmVkLCBKd3RIZWxwZXJ9IGZyb20gJ2FuZ3VsYXIyLWp3dC9hbmd1bGFyMi1qd3QnO1xyXG5pbXBvcnQge01BVEVSSUFMX0RJUkVDVElWRVMsIE1BVEVSSUFMX1BST1ZJREVSU30gZnJvbSBcIm5nMi1tYXRlcmlhbC9hbGxcIjtcclxuZGVjbGFyZSB2YXIgQXV0aDBMb2NrO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdLFxyXG4gICAgc2VsZWN0b3I6ICdhdXRoLWNvbXBvbmVudCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcC9hdXRoL2F1dGguY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQXV0aENvbXBvbmVudCB7XHJcbiAgICBqc29uT2JqOiBKU09OO1xyXG4gICAgcGljdHVyZTogc3RyaW5nO1xyXG4gICAgbG9jayA9IG5ldyBBdXRoMExvY2soJzlOZGVDYVpicGRkY3FNMzR4WjhCS2NaY3dNZlBxRk5sJywgJ3R3aW5zb2Z0LmV1LmF1dGgwLmNvbScpO1xyXG4gICAgLy9sb2NrID0gbmV3IEF1dGgwTG9jaygnQVVUSDBfQ0xJRU5UX0lEJywgJ0FVVEgwX0RPTUFJTicpO1xyXG4gICAgand0SGVscGVyOiBKd3RIZWxwZXIgPSBuZXcgSnd0SGVscGVyKCk7XHJcbiAgICBwcm9maWxlOiBzdHJpbmc7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIGh0dHA6IEh0dHAsIHB1YmxpYyBhdXRoSHR0cDogQXV0aEh0dHApIHtcclxuICAgICAgICB0aGlzLnByb2ZpbGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvZmlsZScpO1xyXG4gICAgICAgIHRoaXMuc2V0UHJvZmlsZU9iamVjdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvZ2luKCkge1xyXG4gICAgICAgIHRoaXMubG9jay5zaG93KChlcnI6IHN0cmluZywgcHJvZmlsZTogc3RyaW5nLCBpZF90b2tlbjogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9maWxlJywgSlNPTi5zdHJpbmdpZnkocHJvZmlsZSkpO1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaWRfdG9rZW4nLCBpZF90b2tlbik7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0UHJvZmlsZU9iamVjdCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc2V0UHJvZmlsZU9iamVjdCgpIHtcclxuICAgICAgICB0aGlzLnByb2ZpbGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvZmlsZScpO1xyXG4gICAgICAgIHRoaXMuanNvbk9iaiA9IEpTT04ucGFyc2UodGhpcy5wcm9maWxlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIiB0aGlzLmpzb25PYmogPT0gXCIsIHRoaXMuanNvbk9iaik7XHJcbiAgICAgICAgaWYgKHRoaXMuanNvbk9iaiAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGljdHVyZSA9IHRoaXMuanNvbk9ialsncGljdHVyZSddO1xyXG4gICAgICAgICAgICB0aGlzLm5hbWUgPSB0aGlzLmpzb25PYmpbJ25hbWUnXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnBpY3R1cmUgPSBcImltZy9hdmF0YXIuanBnXCJcclxuICAgICAgICAgICAgdGhpcy5uYW1lID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBsb2dvdXQoKSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Byb2ZpbGUnKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnaWRfdG9rZW4nKTtcclxuICAgICAgICB0aGlzLnBpY3R1cmUgPSBcImltZy9hdmF0YXIuanBnXCI7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gXCJcIjtcclxuICAgIH1cclxuXHJcbiAgICBsb2dnZWRJbigpIHtcclxuICAgICAgICByZXR1cm4gdG9rZW5Ob3RFeHBpcmVkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9rZW5TdWJzY3JpcHRpb24oKSB7XHJcbiAgICAgICAgdGhpcy5hdXRoSHR0cC50b2tlblN0cmVhbS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSksXHJcbiAgICAgICAgICAgIGVyciA9PiBjb25zb2xlLmxvZyhlcnIpLFxyXG4gICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZygnQ29tcGxldGUnKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICB1c2VKd3RIZWxwZXIoKSB7XHJcbiAgICAgICAgdmFyIHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lkX3Rva2VuJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgICAgIHRoaXMuand0SGVscGVyLmRlY29kZVRva2VuKHRva2VuKSxcclxuICAgICAgICAgICAgdGhpcy5qd3RIZWxwZXIuZ2V0VG9rZW5FeHBpcmF0aW9uRGF0ZSh0b2tlbiksXHJcbiAgICAgICAgICAgIHRoaXMuand0SGVscGVyLmlzVG9rZW5FeHBpcmVkKHRva2VuKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
