System.register(['angular2/platform/browser', 'angular2/core', "angular2/common", 'angular2/router', 'angular2/http', 'angular2/platform/common_dom', 'angular2-jwt/angular2-jwt', './app.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
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
                core_1.bind(router_1.LocationStrategy).toClass(router_1.HashLocationStrategy)
            ]).then(function (success) { return console.log('AppComponent bootstrapped!'); }, function (error) { return console.log(error); });
        }
    }
});
//# sourceMappingURL=main.js.map