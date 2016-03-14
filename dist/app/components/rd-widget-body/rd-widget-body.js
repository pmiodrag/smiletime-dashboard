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
    var RdWidgetBody;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            RdWidgetBody = (function () {
                function RdWidgetBody() {
                    this.loading = false;
                    this.classes = '';
                }
                RdWidgetBody = __decorate([
                    core_1.Component({
                        selector: 'rd-widget-body',
                        properties: ['loading', 'classes']
                    }),
                    core_1.View({
                        templateUrl: 'app/components/rd-widget-body/rd-widget-body.html',
                        directives: [common_1.CORE_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], RdWidgetBody);
                return RdWidgetBody;
            })();
            exports_1("RdWidgetBody", RdWidgetBody);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3JkLXdpZGdldC1ib2R5L3JkLXdpZGdldC1ib2R5LnRzIl0sIm5hbWVzIjpbIlJkV2lkZ2V0Qm9keSIsIlJkV2lkZ2V0Qm9keS5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBR0E7Z0JBWUVBO29CQUNFQyxJQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxLQUFLQSxDQUFDQTtvQkFDckJBLElBQUlBLENBQUNBLE9BQU9BLEdBQUdBLEVBQUVBLENBQUNBO2dCQUNwQkEsQ0FBQ0E7Z0JBZkhEO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1RBLFFBQVFBLEVBQUVBLGdCQUFnQkE7d0JBQzFCQSxVQUFVQSxFQUFFQSxDQUFDQSxTQUFTQSxFQUFFQSxTQUFTQSxDQUFDQTtxQkFDbkNBLENBQUNBO29CQUNEQSxXQUFJQSxDQUFDQTt3QkFDSkEsV0FBV0EsRUFBRUEsbURBQW1EQTt3QkFDaEVBLFVBQVVBLEVBQUVBLENBQUNBLHdCQUFlQSxDQUFDQTtxQkFDOUJBLENBQUNBOztpQ0FTREE7Z0JBQURBLG1CQUFDQTtZQUFEQSxDQWhCQSxBQWdCQ0EsSUFBQTtZQWhCRCx1Q0FnQkMsQ0FBQSIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9yZC13aWRnZXQtYm9keS9yZC13aWRnZXQtYm9keS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBWaWV3fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtDT1JFX0RJUkVDVElWRVN9IGZyb20gJ2FuZ3VsYXIyL2NvbW1vbic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3JkLXdpZGdldC1ib2R5JyxcclxuICBwcm9wZXJ0aWVzOiBbJ2xvYWRpbmcnLCAnY2xhc3NlcyddXHJcbn0pXHJcbkBWaWV3KHtcclxuICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL3JkLXdpZGdldC1ib2R5L3JkLXdpZGdldC1ib2R5Lmh0bWwnLFxyXG4gIGRpcmVjdGl2ZXM6IFtDT1JFX0RJUkVDVElWRVNdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSZFdpZGdldEJvZHkge1xyXG4gIGxvYWRpbmc6Ym9vbGVhbjtcclxuICBjbGFzc2VzOnN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgIHRoaXMuY2xhc3NlcyA9ICcnO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
