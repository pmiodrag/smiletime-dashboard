System.register(['angular2/core', 'angular2/common', '../rd-loading/rd-loading', '../rd-widget/rd-widget', '../rd-widget-header/rd-widget-header', '../rd-widget-body/rd-widget-body', '../rd-widget-footer/rd-widget-footer', '../server-list-view/server-list-view', '../../services/server_list'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, rd_loading_1, rd_widget_1, rd_widget_header_1, rd_widget_body_1, rd_widget_footer_1, server_list_view_1, server_list_1;
    var Tables;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
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
            }],
        execute: function() {
            Tables = (function () {
                function Tables() {
                    this.serverListService = new server_list_1.ServerListService(); /*TODO: Inject*/
                    this.servers = this.serverListService.all();
                }
                Tables = __decorate([
                    core_1.Component({
                        selector: 'tables',
                        providers: [server_list_1.ServerListService]
                    }),
                    core_1.View({
                        templateUrl: 'app/components/tables/tables.html',
                        directives: [common_1.CORE_DIRECTIVES, rd_widget_1.RdWidget, rd_widget_header_1.RdWidgetHeader, rd_widget_body_1.RdWidgetBody, rd_widget_footer_1.RdWidgetFooter, rd_loading_1.RdLoading, server_list_view_1.ServerListView]
                    }), 
                    __metadata('design:paramtypes', [])
                ], Tables);
                return Tables;
            })();
            exports_1("Tables", Tables);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3RhYmxlcy90YWJsZXMudHMiXSwibmFtZXMiOlsiVGFibGVzIiwiVGFibGVzLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFZQTtnQkFZRUE7b0JBQ0VDLElBQUlBLENBQUNBLGlCQUFpQkEsR0FBR0EsSUFBSUEsK0JBQWlCQSxFQUFFQSxDQUFDQSxDQUFBQSxnQkFBZ0JBO29CQUNqRUEsSUFBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsSUFBSUEsQ0FBQ0EsaUJBQWlCQSxDQUFDQSxHQUFHQSxFQUFFQSxDQUFDQTtnQkFDOUNBLENBQUNBO2dCQWZIRDtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNUQSxRQUFRQSxFQUFFQSxRQUFRQTt3QkFDbEJBLFNBQVNBLEVBQUVBLENBQUNBLCtCQUFpQkEsQ0FBQ0E7cUJBQy9CQSxDQUFDQTtvQkFDREEsV0FBSUEsQ0FBQ0E7d0JBQ0pBLFdBQVdBLEVBQUVBLG1DQUFtQ0E7d0JBQ2hEQSxVQUFVQSxFQUFFQSxDQUFDQSx3QkFBZUEsRUFBRUEsb0JBQVFBLEVBQUVBLGlDQUFjQSxFQUFFQSw2QkFBWUEsRUFBRUEsaUNBQWNBLEVBQUVBLHNCQUFTQSxFQUFDQSxpQ0FBY0EsQ0FBQ0E7cUJBQ2hIQSxDQUFDQTs7MkJBU0RBO2dCQUFEQSxhQUFDQTtZQUFEQSxDQWhCQSxBQWdCQ0EsSUFBQTtZQWhCRCwyQkFnQkMsQ0FBQSIsImZpbGUiOiJhcHAvY29tcG9uZW50cy90YWJsZXMvdGFibGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIFZpZXcsIEluamVjdG9yLCBwcm92aWRlIH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7Q09SRV9ESVJFQ1RJVkVTfSBmcm9tICdhbmd1bGFyMi9jb21tb24nO1xyXG5pbXBvcnQge1JkTG9hZGluZ30gZnJvbSAnLi4vcmQtbG9hZGluZy9yZC1sb2FkaW5nJztcclxuaW1wb3J0IHtSZFdpZGdldH0gZnJvbSAnLi4vcmQtd2lkZ2V0L3JkLXdpZGdldCc7XHJcblxyXG5pbXBvcnQge1JkV2lkZ2V0SGVhZGVyfSBmcm9tICcuLi9yZC13aWRnZXQtaGVhZGVyL3JkLXdpZGdldC1oZWFkZXInO1xyXG5pbXBvcnQge1JkV2lkZ2V0Qm9keX0gZnJvbSAnLi4vcmQtd2lkZ2V0LWJvZHkvcmQtd2lkZ2V0LWJvZHknO1xyXG5pbXBvcnQge1JkV2lkZ2V0Rm9vdGVyfSBmcm9tICcuLi9yZC13aWRnZXQtZm9vdGVyL3JkLXdpZGdldC1mb290ZXInO1xyXG5cclxuaW1wb3J0IHtTZXJ2ZXJMaXN0Vmlld30gZnJvbSAnLi4vc2VydmVyLWxpc3Qtdmlldy9zZXJ2ZXItbGlzdC12aWV3JztcclxuaW1wb3J0IHtTZXJ2ZXJMaXN0U2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvc2VydmVyX2xpc3QnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd0YWJsZXMnLFxyXG4gIHByb3ZpZGVyczogW1NlcnZlckxpc3RTZXJ2aWNlXVxyXG59KVxyXG5AVmlldyh7XHJcbiAgdGVtcGxhdGVVcmw6ICdhcHAvY29tcG9uZW50cy90YWJsZXMvdGFibGVzLmh0bWwnLFxyXG4gIGRpcmVjdGl2ZXM6IFtDT1JFX0RJUkVDVElWRVMsIFJkV2lkZ2V0LCBSZFdpZGdldEhlYWRlciwgUmRXaWRnZXRCb2R5LCBSZFdpZGdldEZvb3RlciwgUmRMb2FkaW5nLFNlcnZlckxpc3RWaWV3XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGFibGVzIHtcclxuICBzZXJ2ZXJzOmFueVtdO1xyXG4gIHNlcnZlckxpc3RTZXJ2aWNlOlNlcnZlckxpc3RTZXJ2aWNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuc2VydmVyTGlzdFNlcnZpY2UgPSBuZXcgU2VydmVyTGlzdFNlcnZpY2UoKTsvKlRPRE86IEluamVjdCovXHJcbiAgICB0aGlzLnNlcnZlcnMgPSB0aGlzLnNlcnZlckxpc3RTZXJ2aWNlLmFsbCgpO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
