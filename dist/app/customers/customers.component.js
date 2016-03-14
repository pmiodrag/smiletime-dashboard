System.register(['angular2/core', 'angular2/common', 'angular2/router', '../shared/services/data.service', '../shared/sorter', './filterTextbox.component', '../shared/directives/sortby.directive', '../shared/pipes/capitalize.pipe', '../shared/pipes/trim.pipe'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, router_1, data_service_1, sorter_1, filterTextbox_component_1, sortby_directive_1, capitalize_pipe_1, trim_pipe_1;
    var CustomersComponent;
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
            },
            function (sorter_1_1) {
                sorter_1 = sorter_1_1;
            },
            function (filterTextbox_component_1_1) {
                filterTextbox_component_1 = filterTextbox_component_1_1;
            },
            function (sortby_directive_1_1) {
                sortby_directive_1 = sortby_directive_1_1;
            },
            function (capitalize_pipe_1_1) {
                capitalize_pipe_1 = capitalize_pipe_1_1;
            },
            function (trim_pipe_1_1) {
                trim_pipe_1 = trim_pipe_1_1;
            }],
        execute: function() {
            CustomersComponent = (function () {
                function CustomersComponent(dataService) {
                    this.dataService = dataService;
                    this.customers = [];
                    this.filteredCustomers = [];
                }
                CustomersComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.title = 'Pacients';
                    this.filterText = 'Filter Pacients:';
                    this.listDisplayModeEnabled = false;
                    this.dataService.getCustomers()
                        .subscribe(function (customers) {
                        _this.customers = _this.filteredCustomers = customers;
                    });
                    this.sorter = new sorter_1.Sorter();
                };
                CustomersComponent.prototype.changeDisplayMode = function (mode) {
                    this.listDisplayModeEnabled = (mode === 'List');
                };
                CustomersComponent.prototype.filterChanged = function (data) {
                    if (data && this.customers) {
                        data = data.toUpperCase();
                        var props = ['firstName', 'lastName', 'address', 'city', 'orderTotal'];
                        var filtered = this.customers.filter(function (item) {
                            var match = false;
                            for (var _i = 0; _i < props.length; _i++) {
                                var prop = props[_i];
                                //console.log(item[prop] + ' ' + item[prop].toUpperCase().indexOf(data));
                                if (item[prop].toString().toUpperCase().indexOf(data) > -1) {
                                    match = true;
                                    break;
                                }
                            }
                            ;
                            return match;
                        });
                        this.filteredCustomers = filtered;
                    }
                    else {
                        this.filteredCustomers = this.customers;
                    }
                };
                CustomersComponent.prototype.deleteCustomer = function (id) {
                };
                CustomersComponent.prototype.sort = function (prop) {
                    //Check for complex type such as 'state.name'
                    if (prop && prop.indexOf('.')) {
                    }
                    this.sorter.sort(this.filteredCustomers, prop);
                };
                CustomersComponent = __decorate([
                    core_1.Component({
                        selector: 'customers',
                        providers: [data_service_1.DataService],
                        templateUrl: 'app/customers/customers.component.html',
                        directives: [common_1.CORE_DIRECTIVES, router_1.RouterLink, filterTextbox_component_1.FilterTextboxComponent, sortby_directive_1.SortByDirective],
                        pipes: [capitalize_pipe_1.CapitalizePipe, trim_pipe_1.TrimPipe]
                    }), 
                    __metadata('design:paramtypes', [data_service_1.DataService])
                ], CustomersComponent);
                return CustomersComponent;
            })();
            exports_1("CustomersComponent", CustomersComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jdXN0b21lcnMvY3VzdG9tZXJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJDdXN0b21lcnNDb21wb25lbnQiLCJDdXN0b21lcnNDb21wb25lbnQuY29uc3RydWN0b3IiLCJDdXN0b21lcnNDb21wb25lbnQubmdPbkluaXQiLCJDdXN0b21lcnNDb21wb25lbnQuY2hhbmdlRGlzcGxheU1vZGUiLCJDdXN0b21lcnNDb21wb25lbnQuZmlsdGVyQ2hhbmdlZCIsIkN1c3RvbWVyc0NvbXBvbmVudC5kZWxldGVDdXN0b21lciIsIkN1c3RvbWVyc0NvbXBvbmVudC5zb3J0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFXQTtnQkFnQkVBLDRCQUFvQkEsV0FBd0JBO29CQUF4QkMsZ0JBQVdBLEdBQVhBLFdBQVdBLENBQWFBO29CQUo1Q0EsY0FBU0EsR0FBVUEsRUFBRUEsQ0FBQ0E7b0JBQ3RCQSxzQkFBaUJBLEdBQVVBLEVBQUVBLENBQUNBO2dCQUdrQkEsQ0FBQ0E7Z0JBRWpERCxxQ0FBUUEsR0FBUkE7b0JBQUFFLGlCQVdDQTtvQkFWQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsVUFBVUEsQ0FBQ0E7b0JBQ3hCQSxJQUFJQSxDQUFDQSxVQUFVQSxHQUFHQSxrQkFBa0JBLENBQUNBO29CQUNyQ0EsSUFBSUEsQ0FBQ0Esc0JBQXNCQSxHQUFHQSxLQUFLQSxDQUFDQTtvQkFFcENBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLFlBQVlBLEVBQUVBO3lCQUMxQkEsU0FBU0EsQ0FBQ0EsVUFBQ0EsU0FBZUE7d0JBQ3pCQSxLQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxLQUFJQSxDQUFDQSxpQkFBaUJBLEdBQUdBLFNBQVNBLENBQUNBO29CQUN0REEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBRVBBLElBQUlBLENBQUNBLE1BQU1BLEdBQUdBLElBQUlBLGVBQU1BLEVBQUVBLENBQUNBO2dCQUM3QkEsQ0FBQ0E7Z0JBRURGLDhDQUFpQkEsR0FBakJBLFVBQWtCQSxJQUFZQTtvQkFDMUJHLElBQUlBLENBQUNBLHNCQUFzQkEsR0FBR0EsQ0FBQ0EsSUFBSUEsS0FBS0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7Z0JBQ3BEQSxDQUFDQTtnQkFFREgsMENBQWFBLEdBQWJBLFVBQWNBLElBQVlBO29CQUN4QkksRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsSUFBSUEsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7d0JBQ3pCQSxJQUFJQSxHQUFHQSxJQUFJQSxDQUFDQSxXQUFXQSxFQUFFQSxDQUFDQTt3QkFDMUJBLElBQUlBLEtBQUtBLEdBQUdBLENBQUNBLFdBQVdBLEVBQUVBLFVBQVVBLEVBQUVBLFNBQVNBLEVBQUVBLE1BQU1BLEVBQUVBLFlBQVlBLENBQUNBLENBQUNBO3dCQUN2RUEsSUFBSUEsUUFBUUEsR0FBR0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsVUFBQUEsSUFBSUE7NEJBQ3JDQSxJQUFJQSxLQUFLQSxHQUFHQSxLQUFLQSxDQUFDQTs0QkFDbEJBLEdBQUdBLENBQUNBLENBQWFBLFVBQUtBLEVBQWpCQSxpQkFBUUEsRUFBUkEsSUFBaUJBLENBQUNBO2dDQUFsQkEsSUFBSUEsSUFBSUEsR0FBSUEsS0FBS0EsSUFBVEE7Z0NBQ1RBLHlFQUF5RUE7Z0NBQ3pFQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxRQUFRQSxFQUFFQSxDQUFDQSxXQUFXQSxFQUFFQSxDQUFDQSxPQUFPQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtvQ0FDM0RBLEtBQUtBLEdBQUdBLElBQUlBLENBQUNBO29DQUNiQSxLQUFLQSxDQUFDQTtnQ0FDUkEsQ0FBQ0E7NkJBQ0pBOzRCQUFBQSxDQUFDQTs0QkFDRkEsTUFBTUEsQ0FBQ0EsS0FBS0EsQ0FBQ0E7d0JBQ2pCQSxDQUFDQSxDQUFDQSxDQUFDQTt3QkFDSEEsSUFBSUEsQ0FBQ0EsaUJBQWlCQSxHQUFHQSxRQUFRQSxDQUFDQTtvQkFDdENBLENBQUNBO29CQUNEQSxJQUFJQSxDQUFDQSxDQUFDQTt3QkFDSkEsSUFBSUEsQ0FBQ0EsaUJBQWlCQSxHQUFHQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQTtvQkFDMUNBLENBQUNBO2dCQUNIQSxDQUFDQTtnQkFFREosMkNBQWNBLEdBQWRBLFVBQWVBLEVBQVVBO2dCQUV6QkssQ0FBQ0E7Z0JBRURMLGlDQUFJQSxHQUFKQSxVQUFLQSxJQUFZQTtvQkFDYk0sNkNBQTZDQTtvQkFDN0NBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLElBQUlBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO29CQUVoQ0EsQ0FBQ0E7b0JBQ0RBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLGlCQUFpQkEsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7Z0JBQ25EQSxDQUFDQTtnQkFuRUhOO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1RBLFFBQVFBLEVBQUVBLFdBQVdBO3dCQUNyQkEsU0FBU0EsRUFBRUEsQ0FBQ0EsMEJBQVdBLENBQUNBO3dCQUN4QkEsV0FBV0EsRUFBRUEsd0NBQXdDQTt3QkFDckRBLFVBQVVBLEVBQUVBLENBQUNBLHdCQUFlQSxFQUFFQSxtQkFBVUEsRUFBRUEsZ0RBQXNCQSxFQUFFQSxrQ0FBZUEsQ0FBQ0E7d0JBQ2xGQSxLQUFLQSxFQUFFQSxDQUFDQSxnQ0FBY0EsRUFBRUEsb0JBQVFBLENBQUNBO3FCQUNsQ0EsQ0FBQ0E7O3VDQStEREE7Z0JBQURBLHlCQUFDQTtZQUFEQSxDQXJFQSxBQXFFQ0EsSUFBQTtZQXJFRCxtREFxRUMsQ0FBQSIsImZpbGUiOiJhcHAvY3VzdG9tZXJzL2N1c3RvbWVycy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHsgQ09SRV9ESVJFQ1RJVkVTIH0gZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcclxuaW1wb3J0IHsgUm91dGVyTGluayB9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XHJcbi8vaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7IERhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3NlcnZpY2VzL2RhdGEuc2VydmljZSc7XHJcbmltcG9ydCB7IFNvcnRlciB9IGZyb20gJy4uL3NoYXJlZC9zb3J0ZXInO1xyXG5pbXBvcnQgeyBGaWx0ZXJUZXh0Ym94Q29tcG9uZW50IH0gZnJvbSAnLi9maWx0ZXJUZXh0Ym94LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNvcnRCeURpcmVjdGl2ZSB9IGZyb20gJy4uL3NoYXJlZC9kaXJlY3RpdmVzL3NvcnRieS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBDYXBpdGFsaXplUGlwZSB9IGZyb20gJy4uL3NoYXJlZC9waXBlcy9jYXBpdGFsaXplLnBpcGUnO1xyXG5pbXBvcnQgeyBUcmltUGlwZSB9IGZyb20gJy4uL3NoYXJlZC9waXBlcy90cmltLnBpcGUnO1xyXG5cclxuQENvbXBvbmVudCh7IFxyXG4gIHNlbGVjdG9yOiAnY3VzdG9tZXJzJywgXHJcbiAgcHJvdmlkZXJzOiBbRGF0YVNlcnZpY2VdLFxyXG4gIHRlbXBsYXRlVXJsOiAnYXBwL2N1c3RvbWVycy9jdXN0b21lcnMuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGRpcmVjdGl2ZXM6IFtDT1JFX0RJUkVDVElWRVMsIFJvdXRlckxpbmssIEZpbHRlclRleHRib3hDb21wb25lbnQsIFNvcnRCeURpcmVjdGl2ZV0sXHJcbiAgcGlwZXM6IFtDYXBpdGFsaXplUGlwZSwgVHJpbVBpcGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDdXN0b21lcnNDb21wb25lbnQge1xyXG5cclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIGZpbHRlclRleHQ6IHN0cmluZztcclxuICBsaXN0RGlzcGxheU1vZGVFbmFibGVkOiBib29sZWFuO1xyXG4gIGN1c3RvbWVyczogYW55W10gPSBbXTtcclxuICBmaWx0ZXJlZEN1c3RvbWVyczogYW55W10gPSBbXTtcclxuICBzb3J0ZXI6IFNvcnRlcjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkYXRhU2VydmljZTogRGF0YVNlcnZpY2UpIHsgfVxyXG4gIFxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy50aXRsZSA9ICdQYWNpZW50cyc7XHJcbiAgICB0aGlzLmZpbHRlclRleHQgPSAnRmlsdGVyIFBhY2llbnRzOic7XHJcbiAgICB0aGlzLmxpc3REaXNwbGF5TW9kZUVuYWJsZWQgPSBmYWxzZTtcclxuXHJcbiAgICB0aGlzLmRhdGFTZXJ2aWNlLmdldEN1c3RvbWVycygpXHJcbiAgICAgICAgLnN1YnNjcmliZSgoY3VzdG9tZXJzOmFueVtdKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmN1c3RvbWVycyA9IHRoaXMuZmlsdGVyZWRDdXN0b21lcnMgPSBjdXN0b21lcnM7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgdGhpcy5zb3J0ZXIgPSBuZXcgU29ydGVyKCk7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VEaXNwbGF5TW9kZShtb2RlOiBzdHJpbmcpIHtcclxuICAgICAgdGhpcy5saXN0RGlzcGxheU1vZGVFbmFibGVkID0gKG1vZGUgPT09ICdMaXN0Jyk7XHJcbiAgfVxyXG5cclxuICBmaWx0ZXJDaGFuZ2VkKGRhdGE6IHN0cmluZykge1xyXG4gICAgaWYgKGRhdGEgJiYgdGhpcy5jdXN0b21lcnMpIHtcclxuICAgICAgICBkYXRhID0gZGF0YS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgIGxldCBwcm9wcyA9IFsnZmlyc3ROYW1lJywgJ2xhc3ROYW1lJywgJ2FkZHJlc3MnLCAnY2l0eScsICdvcmRlclRvdGFsJ107XHJcbiAgICAgICAgbGV0IGZpbHRlcmVkID0gdGhpcy5jdXN0b21lcnMuZmlsdGVyKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBsZXQgbWF0Y2ggPSBmYWxzZTtcclxuICAgICAgICAgICAgZm9yIChsZXQgcHJvcCBvZiBwcm9wcykge1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhpdGVtW3Byb3BdICsgJyAnICsgaXRlbVtwcm9wXS50b1VwcGVyQ2FzZSgpLmluZGV4T2YoZGF0YSkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW1bcHJvcF0udG9TdHJpbmcoKS50b1VwcGVyQ2FzZSgpLmluZGV4T2YoZGF0YSkgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgICBtYXRjaCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZXR1cm4gbWF0Y2g7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5maWx0ZXJlZEN1c3RvbWVycyA9IGZpbHRlcmVkO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMuZmlsdGVyZWRDdXN0b21lcnMgPSB0aGlzLmN1c3RvbWVycztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRlbGV0ZUN1c3RvbWVyKGlkOiBudW1iZXIpIHtcclxuXHJcbiAgfVxyXG5cclxuICBzb3J0KHByb3A6IHN0cmluZykge1xyXG4gICAgICAvL0NoZWNrIGZvciBjb21wbGV4IHR5cGUgc3VjaCBhcyAnc3RhdGUubmFtZSdcclxuICAgICAgaWYgKHByb3AgJiYgcHJvcC5pbmRleE9mKCcuJykpIHtcclxuICAgICAgICBcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNvcnRlci5zb3J0KHRoaXMuZmlsdGVyZWRDdXN0b21lcnMsIHByb3ApO1xyXG4gIH1cclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
