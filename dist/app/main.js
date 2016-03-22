System.register(['angular2/platform/browser', 'angular2/core', "angular2/common", 'angular2/router', 'angular2/http', 'angular2/platform/common_dom', 'angular2-jwt/angular2-jwt', './app'], function(exports_1) {
    var browser_1, core_1, common_1, router_1, http_1, common_dom_1, angular2_jwt_1, app_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (common_dom_1_1) {
                common_dom_1 = common_dom_1_1;
            },
            function (angular2_jwt_1_1) {
                angular2_jwt_1 = angular2_jwt_1_1;
            },
            function (app_1_1) {
                app_1 = app_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_1.AppComponent, [
                router_1.ROUTER_PROVIDERS,
                router_1.ROUTER_BINDINGS,
                common_1.FORM_PROVIDERS,
                http_1.HTTP_PROVIDERS,
                common_dom_1.ELEMENT_PROBE_PROVIDERS,
                core_1.provide(angular2_jwt_1.AuthHttp, {
                    useFactory: function (http) {
                        return new angular2_jwt_1.AuthHttp(new angular2_jwt_1.AuthConfig(), http);
                    },
                    deps: [http_1.Http]
                }),
                core_1.provide(router_1.APP_BASE_HREF, { useValue: '/' }),
                core_1.bind(router_1.LocationStrategy).toClass(router_1.PathLocationStrategy)
            ]).then(function (success) { return console.log('AppComponent bootstrapped!'); }, function (error) { return console.log('AppComponent NOT bootstrapped!', error); });
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBVUEsbUJBQVMsQ0FBQyxrQkFBWSxFQUFFO2dCQUNwQix5QkFBZ0I7Z0JBQ2hCLHdCQUFlO2dCQUNmLHVCQUFjO2dCQUNkLHFCQUFjO2dCQUNkLG9DQUF1QjtnQkFDdkIsY0FBTyxDQUFDLHVCQUFRLEVBQUU7b0JBQ2hCLFVBQVUsRUFBRSxVQUFDLElBQUk7d0JBQ2YsTUFBTSxDQUFDLElBQUksdUJBQVEsQ0FBQyxJQUFJLHlCQUFVLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDOUMsQ0FBQztvQkFDRCxJQUFJLEVBQUUsQ0FBQyxXQUFJLENBQUM7aUJBQ2IsQ0FBQztnQkFDRCxjQUFPLENBQUMsc0JBQWEsRUFBRSxFQUFDLFFBQVEsRUFBRyxHQUFHLEVBQUUsQ0FBQztnQkFDMUMsV0FBSSxDQUFDLHlCQUFnQixDQUFDLENBQUMsT0FBTyxDQUFDLDZCQUFvQixDQUFDO2FBQ3ZELENBQUMsQ0FBQyxJQUFJLENBQ0gsVUFBQSxPQUFPLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLDRCQUE0QixDQUFDLEVBQXpDLENBQXlDLEVBQ3BELFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsRUFBRSxLQUFLLENBQUMsRUFBcEQsQ0FBb0QsQ0FDaEUsQ0FBQyIsImZpbGUiOiJhcHAvbWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvYW5ndWxhcjIvdHlwaW5ncy9icm93c2VyLmQudHNcIiAvPlxyXG5pbXBvcnQgeyBib290c3RyYXAgfSBmcm9tICdhbmd1bGFyMi9wbGF0Zm9ybS9icm93c2VyJztcclxuaW1wb3J0IHsgYmluZCwgcHJvdmlkZSB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQgeyBGT1JNX1BST1ZJREVSUyB9IGZyb20gXCJhbmd1bGFyMi9jb21tb25cIjtcclxuaW1wb3J0IHtBUFBfQkFTRV9IUkVGLCBST1VURVJfUFJPVklERVJTLCBST1VURVJfQklORElOR1MsIExvY2F0aW9uU3RyYXRlZ3ksIFBhdGhMb2NhdGlvblN0cmF0ZWd5IH0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcclxuaW1wb3J0IHsgSFRUUF9QUk9WSURFUlMsIEh0dHAgfSBmcm9tICdhbmd1bGFyMi9odHRwJztcclxuaW1wb3J0IHtFTEVNRU5UX1BST0JFX1BST1ZJREVSU30gZnJvbSAnYW5ndWxhcjIvcGxhdGZvcm0vY29tbW9uX2RvbSc7XHJcbmltcG9ydCB7QXV0aEh0dHAsIEF1dGhDb25maWd9IGZyb20gJ2FuZ3VsYXIyLWp3dC9hbmd1bGFyMi1qd3QnO1xyXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2FwcCc7XHJcblxyXG5ib290c3RyYXAoQXBwQ29tcG9uZW50LCBbXHJcbiAgICBST1VURVJfUFJPVklERVJTLFxyXG4gICAgUk9VVEVSX0JJTkRJTkdTLFxyXG4gICAgRk9STV9QUk9WSURFUlMsXHJcbiAgICBIVFRQX1BST1ZJREVSUyxcclxuICAgIEVMRU1FTlRfUFJPQkVfUFJPVklERVJTLFxyXG4gICAgcHJvdmlkZShBdXRoSHR0cCwge1xyXG4gICAgICB1c2VGYWN0b3J5OiAoaHR0cCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgQXV0aEh0dHAobmV3IEF1dGhDb25maWcoKSwgaHR0cCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGRlcHM6IFtIdHRwXVxyXG4gICAgfSksXHJcbiAgICAgcHJvdmlkZShBUFBfQkFTRV9IUkVGLCB7dXNlVmFsdWUgOiAnLycgfSksXHJcbiAgICBiaW5kKExvY2F0aW9uU3RyYXRlZ3kpLnRvQ2xhc3MoUGF0aExvY2F0aW9uU3RyYXRlZ3kpXHJcbl0pLnRoZW4oXHJcbiAgICBzdWNjZXNzID0+IGNvbnNvbGUubG9nKCdBcHBDb21wb25lbnQgYm9vdHN0cmFwcGVkIScpLFxyXG4gICAgZXJyb3IgPT4gY29uc29sZS5sb2coJ0FwcENvbXBvbmVudCBOT1QgYm9vdHN0cmFwcGVkIScsIGVycm9yKVxyXG4pO1xyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
