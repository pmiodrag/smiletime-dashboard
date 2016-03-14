System.register(['angular2/core', 'angular2/router', '../alerts/alerts', '../rd-loading/rd-loading', '../rd-widget/rd-widget', '../rd-widget-header/rd-widget-header', '../rd-widget-body/rd-widget-body', '../rd-widget-footer/rd-widget-footer', '../server-list-view/server-list-view', '../../services/server_list', '../user-list-view/user-list-view', '../../services/user_list'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, alerts_1, rd_loading_1, rd_widget_1, rd_widget_header_1, rd_widget_body_1, rd_widget_footer_1, server_list_view_1, server_list_1, user_list_view_1, user_list_1;
    var Dashboard;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (alerts_1_1) {
                alerts_1 = alerts_1_1;
            },
            function (rd_loading_1_1) {
                rd_loading_1 = rd_loading_1_1;
            },
            function (rd_widget_1_1) {
                rd_widget_1 = rd_widget_1_1;
            },
            function (rd_widget_header_1_1) {
                rd_widget_header_1 = rd_widget_header_1_1;
            },
            function (rd_widget_body_1_1) {
                rd_widget_body_1 = rd_widget_body_1_1;
            },
            function (rd_widget_footer_1_1) {
                rd_widget_footer_1 = rd_widget_footer_1_1;
            },
            function (server_list_view_1_1) {
                server_list_view_1 = server_list_view_1_1;
            },
            function (server_list_1_1) {
                server_list_1 = server_list_1_1;
            },
            function (user_list_view_1_1) {
                user_list_view_1 = user_list_view_1_1;
            },
            function (user_list_1_1) {
                user_list_1 = user_list_1_1;
            }],
        execute: function() {
            Dashboard = (function () {
                function Dashboard() {
                    this.serverListService = new server_list_1.ServerListService();
                    /*TODO: Inject*/
                    this.servers = this.serverListService.all();
                    this.userListService = new user_list_1.UserListService();
                    /*TODO: Inject*/
                    this.users = this.userListService.all();
                }
                Dashboard = __decorate([
                    core_1.Component({
                        selector: 'dashboard',
                        providers: [server_list_1.ServerListService]
                    }),
                    core_1.View({
                        templateUrl: 'app/components/dashboard/dashboard.html',
                        styleUrls: ['app/components/dashboard/dashboard.css'],
                        directives: [alerts_1.Alerts, router_1.RouterLink, rd_widget_1.RdWidget, rd_widget_header_1.RdWidgetHeader, rd_widget_body_1.RdWidgetBody, rd_widget_footer_1.RdWidgetFooter, rd_loading_1.RdLoading, server_list_view_1.ServerListView, user_list_view_1.UserListView]
                    }), 
                    __metadata('design:paramtypes', [])
                ], Dashboard);
                return Dashboard;
            })();
            exports_1("Dashboard", Dashboard);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQudHMiXSwibmFtZXMiOlsiRGFzaGJvYXJkIiwiRGFzaGJvYXJkLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFvQkE7Z0JBaUJFQTtvQkFDRUMsSUFBSUEsQ0FBQ0EsaUJBQWlCQSxHQUFHQSxJQUFJQSwrQkFBaUJBLEVBQUVBLENBQUNBO29CQUNqREEsZ0JBQWdCQTtvQkFDaEJBLElBQUlBLENBQUNBLE9BQU9BLEdBQUdBLElBQUlBLENBQUNBLGlCQUFpQkEsQ0FBQ0EsR0FBR0EsRUFBRUEsQ0FBQ0E7b0JBRTVDQSxJQUFJQSxDQUFDQSxlQUFlQSxHQUFHQSxJQUFJQSwyQkFBZUEsRUFBRUEsQ0FBQ0E7b0JBQzdDQSxnQkFBZ0JBO29CQUNoQkEsSUFBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsSUFBSUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsR0FBR0EsRUFBRUEsQ0FBQ0E7Z0JBQzFDQSxDQUFDQTtnQkF6QkhEO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1RBLFFBQVFBLEVBQUVBLFdBQVdBO3dCQUNyQkEsU0FBU0EsRUFBRUEsQ0FBQ0EsK0JBQWlCQSxDQUFDQTtxQkFDL0JBLENBQUNBO29CQUNEQSxXQUFJQSxDQUFDQTt3QkFDSkEsV0FBV0EsRUFBRUEseUNBQXlDQTt3QkFDdERBLFNBQVNBLEVBQUVBLENBQUNBLHdDQUF3Q0EsQ0FBQ0E7d0JBQ3JEQSxVQUFVQSxFQUFFQSxDQUFDQSxlQUFNQSxFQUFFQSxtQkFBVUEsRUFBRUEsb0JBQVFBLEVBQUVBLGlDQUFjQSxFQUFFQSw2QkFBWUEsRUFBRUEsaUNBQWNBLEVBQUVBLHNCQUFTQSxFQUFFQSxpQ0FBY0EsRUFBRUEsNkJBQVlBLENBQUNBO3FCQUNsSUEsQ0FBQ0E7OzhCQWtCREE7Z0JBQURBLGdCQUFDQTtZQUFEQSxDQTFCQSxBQTBCQ0EsSUFBQTtZQTFCRCxpQ0EwQkMsQ0FBQSIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIFZpZXd9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge0NPUkVfRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcclxuaW1wb3J0IHsgUm91dGVyTGlua30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcclxuaW1wb3J0IHtBbGVydHN9IGZyb20gJy4uL2FsZXJ0cy9hbGVydHMnO1xyXG5cclxuXHJcbmltcG9ydCB7UmRMb2FkaW5nfSBmcm9tICcuLi9yZC1sb2FkaW5nL3JkLWxvYWRpbmcnO1xyXG5pbXBvcnQge1JkV2lkZ2V0fSBmcm9tICcuLi9yZC13aWRnZXQvcmQtd2lkZ2V0JztcclxuXHJcbmltcG9ydCB7UmRXaWRnZXRIZWFkZXJ9IGZyb20gJy4uL3JkLXdpZGdldC1oZWFkZXIvcmQtd2lkZ2V0LWhlYWRlcic7XHJcbmltcG9ydCB7UmRXaWRnZXRCb2R5fSBmcm9tICcuLi9yZC13aWRnZXQtYm9keS9yZC13aWRnZXQtYm9keSc7XHJcbmltcG9ydCB7UmRXaWRnZXRGb290ZXJ9IGZyb20gJy4uL3JkLXdpZGdldC1mb290ZXIvcmQtd2lkZ2V0LWZvb3Rlcic7XHJcblxyXG5pbXBvcnQge1NlcnZlckxpc3RWaWV3fSBmcm9tICcuLi9zZXJ2ZXItbGlzdC12aWV3L3NlcnZlci1saXN0LXZpZXcnO1xyXG5pbXBvcnQge1NlcnZlckxpc3RTZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9zZXJ2ZXJfbGlzdCc7XHJcblxyXG5pbXBvcnQge1VzZXJMaXN0Vmlld30gZnJvbSAnLi4vdXNlci1saXN0LXZpZXcvdXNlci1saXN0LXZpZXcnO1xyXG5pbXBvcnQge1VzZXJMaXN0U2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvdXNlcl9saXN0JztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Rhc2hib2FyZCcsXHJcbiAgcHJvdmlkZXJzOiBbU2VydmVyTGlzdFNlcnZpY2VdXHJcbn0pXHJcbkBWaWV3KHtcclxuICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY3NzJ10sXHJcbiAgZGlyZWN0aXZlczogW0FsZXJ0cywgUm91dGVyTGluaywgUmRXaWRnZXQsIFJkV2lkZ2V0SGVhZGVyLCBSZFdpZGdldEJvZHksIFJkV2lkZ2V0Rm9vdGVyLCBSZExvYWRpbmcsIFNlcnZlckxpc3RWaWV3LCBVc2VyTGlzdFZpZXddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmQge1xyXG5cclxuICBzZXJ2ZXJzOmFueVtdO1xyXG4gIHVzZXJzOmFueVtdO1xyXG5cclxuICBzZXJ2ZXJMaXN0U2VydmljZTpTZXJ2ZXJMaXN0U2VydmljZTtcclxuICB1c2VyTGlzdFNlcnZpY2U6VXNlckxpc3RTZXJ2aWNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuc2VydmVyTGlzdFNlcnZpY2UgPSBuZXcgU2VydmVyTGlzdFNlcnZpY2UoKTtcclxuICAgIC8qVE9ETzogSW5qZWN0Ki9cclxuICAgIHRoaXMuc2VydmVycyA9IHRoaXMuc2VydmVyTGlzdFNlcnZpY2UuYWxsKCk7XHJcblxyXG4gICAgdGhpcy51c2VyTGlzdFNlcnZpY2UgPSBuZXcgVXNlckxpc3RTZXJ2aWNlKCk7XHJcbiAgICAvKlRPRE86IEluamVjdCovXHJcbiAgICB0aGlzLnVzZXJzID0gdGhpcy51c2VyTGlzdFNlcnZpY2UuYWxsKCk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
