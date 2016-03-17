System.register(['angular2/platform/browser', 'angular2/core', "angular2/common", 'angular2/router', 'angular2/http', 'angular2/platform/common_dom', 'angular2-jwt/angular2-jwt', './app.component'], function(exports_1) {
    var browser_1, core_1, common_1, router_1, http_1, common_dom_1, angular2_jwt_1, app_component_1;
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
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBVUEsbUJBQVMsQ0FBQyw0QkFBWSxFQUFFO2dCQUNwQix5QkFBZ0I7Z0JBQ2hCLHdCQUFlO2dCQUNmLHVCQUFjO2dCQUNkLHFCQUFjO2dCQUNkLG9DQUF1QjtnQkFDdkIsY0FBTyxDQUFDLHVCQUFRLEVBQUU7b0JBQ2hCLFVBQVUsRUFBRSxVQUFDLElBQUk7d0JBQ2YsTUFBTSxDQUFDLElBQUksdUJBQVEsQ0FBQyxJQUFJLHlCQUFVLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDOUMsQ0FBQztvQkFDRCxJQUFJLEVBQUUsQ0FBQyxXQUFJLENBQUM7aUJBQ2IsQ0FBQztnQkFDRCxjQUFPLENBQUMsc0JBQWEsRUFBRSxFQUFDLFFBQVEsRUFBRyxHQUFHLEVBQUUsQ0FBQztnQkFDMUMsV0FBSSxDQUFDLHlCQUFnQixDQUFDLENBQUMsT0FBTyxDQUFDLDZCQUFvQixDQUFDO2FBQ3ZELENBQUMsQ0FBQyxJQUFJLENBQ0gsVUFBQSxPQUFPLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLDRCQUE0QixDQUFDLEVBQXpDLENBQXlDLEVBQ3BELFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsRUFBRSxLQUFLLENBQUMsRUFBcEQsQ0FBb0QsQ0FDaEUsQ0FBQyIsImZpbGUiOiJhcHAvbWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvYW5ndWxhcjIvdHlwaW5ncy9icm93c2VyLmQudHNcIiAvPlxyXG5pbXBvcnQgeyBib290c3RyYXAgfSBmcm9tICdhbmd1bGFyMi9wbGF0Zm9ybS9icm93c2VyJztcclxuaW1wb3J0IHsgYmluZCwgcHJvdmlkZSB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQgeyBGT1JNX1BST1ZJREVSUyB9IGZyb20gXCJhbmd1bGFyMi9jb21tb25cIjtcclxuaW1wb3J0IHtBUFBfQkFTRV9IUkVGLCBST1VURVJfUFJPVklERVJTLCBST1VURVJfQklORElOR1MsIExvY2F0aW9uU3RyYXRlZ3ksIFBhdGhMb2NhdGlvblN0cmF0ZWd5IH0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcclxuaW1wb3J0IHsgSFRUUF9QUk9WSURFUlMsIEh0dHAgfSBmcm9tICdhbmd1bGFyMi9odHRwJztcclxuaW1wb3J0IHtFTEVNRU5UX1BST0JFX1BST1ZJREVSU30gZnJvbSAnYW5ndWxhcjIvcGxhdGZvcm0vY29tbW9uX2RvbSc7XHJcbmltcG9ydCB7QXV0aEh0dHAsIEF1dGhDb25maWd9IGZyb20gJ2FuZ3VsYXIyLWp3dC9hbmd1bGFyMi1qd3QnO1xyXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xyXG5cclxuYm9vdHN0cmFwKEFwcENvbXBvbmVudCwgW1xyXG4gICAgUk9VVEVSX1BST1ZJREVSUyxcclxuICAgIFJPVVRFUl9CSU5ESU5HUyxcclxuICAgIEZPUk1fUFJPVklERVJTLFxyXG4gICAgSFRUUF9QUk9WSURFUlMsXHJcbiAgICBFTEVNRU5UX1BST0JFX1BST1ZJREVSUyxcclxuICAgIHByb3ZpZGUoQXV0aEh0dHAsIHtcclxuICAgICAgdXNlRmFjdG9yeTogKGh0dHApID0+IHtcclxuICAgICAgICByZXR1cm4gbmV3IEF1dGhIdHRwKG5ldyBBdXRoQ29uZmlnKCksIGh0dHApO1xyXG4gICAgICB9LFxyXG4gICAgICBkZXBzOiBbSHR0cF1cclxuICAgIH0pLFxyXG4gICAgIHByb3ZpZGUoQVBQX0JBU0VfSFJFRiwge3VzZVZhbHVlIDogJy8nIH0pLFxyXG4gICAgYmluZChMb2NhdGlvblN0cmF0ZWd5KS50b0NsYXNzKFBhdGhMb2NhdGlvblN0cmF0ZWd5KVxyXG5dKS50aGVuKFxyXG4gICAgc3VjY2VzcyA9PiBjb25zb2xlLmxvZygnQXBwQ29tcG9uZW50IGJvb3RzdHJhcHBlZCEnKSxcclxuICAgIGVycm9yID0+IGNvbnNvbGUubG9nKCdBcHBDb21wb25lbnQgTk9UIGJvb3RzdHJhcHBlZCEnLCBlcnJvcilcclxuKTtcclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
