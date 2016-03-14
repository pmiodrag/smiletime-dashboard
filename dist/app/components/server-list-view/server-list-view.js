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
    var ServerListView;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            ServerListView = (function () {
                function ServerListView() {
                    this.model = [];
                }
                ServerListView = __decorate([
                    core_1.Component({
                        selector: 'server-list-view',
                        properties: ['model']
                    }),
                    core_1.View({
                        templateUrl: 'app/components/server-list-view/server-list-view.html',
                        directives: [common_1.CORE_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ServerListView);
                return ServerListView;
            })();
            exports_1("ServerListView", ServerListView);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3NlcnZlci1saXN0LXZpZXcvc2VydmVyLWxpc3Qtdmlldy50cyJdLCJuYW1lcyI6WyJTZXJ2ZXJMaXN0VmlldyIsIlNlcnZlckxpc3RWaWV3LmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFHQTtnQkFZRUE7b0JBQ0VDLElBQUlBLENBQUNBLEtBQUtBLEdBQUdBLEVBQUVBLENBQUNBO2dCQUNsQkEsQ0FBQ0E7Z0JBZEhEO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1RBLFFBQVFBLEVBQUVBLGtCQUFrQkE7d0JBQzVCQSxVQUFVQSxFQUFFQSxDQUFDQSxPQUFPQSxDQUFDQTtxQkFDdEJBLENBQUNBO29CQUNEQSxXQUFJQSxDQUFDQTt3QkFDSkEsV0FBV0EsRUFBRUEsdURBQXVEQTt3QkFDcEVBLFVBQVVBLEVBQUVBLENBQUNBLHdCQUFlQSxDQUFDQTtxQkFDOUJBLENBQUNBOzttQ0FRREE7Z0JBQURBLHFCQUFDQTtZQUFEQSxDQWZBLEFBZUNBLElBQUE7WUFmRCwyQ0FlQyxDQUFBIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL3NlcnZlci1saXN0LXZpZXcvc2VydmVyLWxpc3Qtdmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBWaWV3fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtDT1JFX0RJUkVDVElWRVN9IGZyb20gJ2FuZ3VsYXIyL2NvbW1vbic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3NlcnZlci1saXN0LXZpZXcnLFxyXG4gIHByb3BlcnRpZXM6IFsnbW9kZWwnXVxyXG59KVxyXG5AVmlldyh7XHJcbiAgdGVtcGxhdGVVcmw6ICdhcHAvY29tcG9uZW50cy9zZXJ2ZXItbGlzdC12aWV3L3NlcnZlci1saXN0LXZpZXcuaHRtbCcsXHJcbiAgZGlyZWN0aXZlczogW0NPUkVfRElSRUNUSVZFU11cclxufSlcclxuZXhwb3J0IGNsYXNzIFNlcnZlckxpc3RWaWV3IHtcclxuXHJcbiAgbW9kZWw6YW55W107XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5tb2RlbCA9IFtdO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
