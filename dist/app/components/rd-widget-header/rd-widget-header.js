System.register(['angular2/core', 'angular2/common'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1;
    var RdWidgetHeader;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            RdWidgetHeader = (function () {
                function RdWidgetHeader() {
                    this.title = '';
                    this.icon = '';
                }
                RdWidgetHeader = __decorate([
                    core_1.Component({
                        selector: 'rd-widget-header',
                        properties: ['title', 'icon']
                    }),
                    core_1.View({
                        templateUrl: 'app/components/rd-widget-header/rd-widget-header.html',
                        directives: [common_1.CORE_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], RdWidgetHeader);
                return RdWidgetHeader;
            })();
            exports_1("RdWidgetHeader", RdWidgetHeader);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3JkLXdpZGdldC1oZWFkZXIvcmQtd2lkZ2V0LWhlYWRlci50cyJdLCJuYW1lcyI6WyJSZFdpZGdldEhlYWRlciIsIlJkV2lkZ2V0SGVhZGVyLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFHQTtnQkFZRUE7b0JBQ0VDLElBQUlBLENBQUNBLEtBQUtBLEdBQUdBLEVBQUVBLENBQUNBO29CQUNoQkEsSUFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsRUFBRUEsQ0FBQ0E7Z0JBQ2pCQSxDQUFDQTtnQkFmSEQ7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDVEEsUUFBUUEsRUFBRUEsa0JBQWtCQTt3QkFDNUJBLFVBQVVBLEVBQUVBLENBQUNBLE9BQU9BLEVBQUVBLE1BQU1BLENBQUNBO3FCQUM5QkEsQ0FBQ0E7b0JBQ0RBLFdBQUlBLENBQUNBO3dCQUNKQSxXQUFXQSxFQUFFQSx1REFBdURBO3dCQUNwRUEsVUFBVUEsRUFBRUEsQ0FBQ0Esd0JBQWVBLENBQUNBO3FCQUM5QkEsQ0FBQ0E7O21DQVNEQTtnQkFBREEscUJBQUNBO1lBQURBLENBaEJBLEFBZ0JDQSxJQUFBO1lBaEJELDJDQWdCQyxDQUFBIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL3JkLXdpZGdldC1oZWFkZXIvcmQtd2lkZ2V0LWhlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBWaWV3fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtDT1JFX0RJUkVDVElWRVN9IGZyb20gJ2FuZ3VsYXIyL2NvbW1vbic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3JkLXdpZGdldC1oZWFkZXInLFxyXG4gIHByb3BlcnRpZXM6IFsndGl0bGUnLCAnaWNvbiddXHJcbn0pXHJcbkBWaWV3KHtcclxuICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL3JkLXdpZGdldC1oZWFkZXIvcmQtd2lkZ2V0LWhlYWRlci5odG1sJyxcclxuICBkaXJlY3RpdmVzOiBbQ09SRV9ESVJFQ1RJVkVTXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmRXaWRnZXRIZWFkZXIge1xyXG4gIHRpdGxlOnN0cmluZztcclxuICBpY29uOnN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnRpdGxlID0gJyc7XHJcbiAgICB0aGlzLmljb24gPSAnJztcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
