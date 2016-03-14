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
    var UserListView;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            UserListView = (function () {
                function UserListView() {
                    this.model = [];
                }
                UserListView = __decorate([
                    core_1.Component({
                        selector: 'user-list-view',
                        properties: ['model']
                    }),
                    core_1.View({
                        templateUrl: 'app/components/user-list-view/user-list-view.html',
                        directives: [common_1.CORE_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], UserListView);
                return UserListView;
            })();
            exports_1("UserListView", UserListView);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3VzZXItbGlzdC12aWV3L3VzZXItbGlzdC12aWV3LnRzIl0sIm5hbWVzIjpbIlVzZXJMaXN0VmlldyIsIlVzZXJMaXN0Vmlldy5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBRUE7Z0JBWUVBO29CQUNFQyxJQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxFQUFFQSxDQUFDQTtnQkFDbEJBLENBQUNBO2dCQWRIRDtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNUQSxRQUFRQSxFQUFFQSxnQkFBZ0JBO3dCQUMxQkEsVUFBVUEsRUFBRUEsQ0FBQ0EsT0FBT0EsQ0FBQ0E7cUJBQ3RCQSxDQUFDQTtvQkFDREEsV0FBSUEsQ0FBQ0E7d0JBQ0pBLFdBQVdBLEVBQUVBLG1EQUFtREE7d0JBQ2hFQSxVQUFVQSxFQUFFQSxDQUFDQSx3QkFBZUEsQ0FBQ0E7cUJBQzlCQSxDQUFDQTs7aUNBUURBO2dCQUFEQSxtQkFBQ0E7WUFBREEsQ0FmQSxBQWVDQSxJQUFBO1lBZkQsdUNBZUMsQ0FBQSIsImZpbGUiOiJhcHAvY29tcG9uZW50cy91c2VyLWxpc3Qtdmlldy91c2VyLWxpc3Qtdmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBWaWV3fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtDT1JFX0RJUkVDVElWRVN9IGZyb20gJ2FuZ3VsYXIyL2NvbW1vbic7XHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndXNlci1saXN0LXZpZXcnLFxyXG4gIHByb3BlcnRpZXM6IFsnbW9kZWwnXVxyXG59KVxyXG5AVmlldyh7XHJcbiAgdGVtcGxhdGVVcmw6ICdhcHAvY29tcG9uZW50cy91c2VyLWxpc3Qtdmlldy91c2VyLWxpc3Qtdmlldy5odG1sJyxcclxuICBkaXJlY3RpdmVzOiBbQ09SRV9ESVJFQ1RJVkVTXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVXNlckxpc3RWaWV3IHtcclxuXHJcbiAgbW9kZWw6YW55W107XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5tb2RlbCA9IFtdO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
