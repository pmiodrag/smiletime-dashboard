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
    var FilterTextboxComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            FilterTextboxComponent = (function () {
                function FilterTextboxComponent() {
                    this.model = { filter: null };
                    this.changed = new core_1.EventEmitter();
                }
                FilterTextboxComponent.prototype.filterChanged = function (event) {
                    event.preventDefault();
                    this.changed.emit(this.model.filter); //Raise changed event
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], FilterTextboxComponent.prototype, "changed", void 0);
                FilterTextboxComponent = __decorate([
                    core_1.Component({
                        selector: 'filter-textbox',
                        template: "\n    <form>\n         Filter:\n         <input type=\"text\" \n                [(ngModel)]=\"model.filter\" \n                (keyup)=\"filterChanged($event)\"  />\n    </form>\n  ",
                        directives: [common_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], FilterTextboxComponent);
                return FilterTextboxComponent;
            })();
            exports_1("FilterTextboxComponent", FilterTextboxComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jdXN0b21lcnMvZmlsdGVydGV4dGJveC5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiRmlsdGVyVGV4dGJveENvbXBvbmVudCIsIkZpbHRlclRleHRib3hDb21wb25lbnQuY29uc3RydWN0b3IiLCJGaWx0ZXJUZXh0Ym94Q29tcG9uZW50LmZpbHRlckNoYW5nZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUdBO2dCQUFBQTtvQkFlSUMsVUFBS0EsR0FBdUJBLEVBQUVBLE1BQU1BLEVBQUVBLElBQUlBLEVBQUVBLENBQUNBO29CQUc3Q0EsWUFBT0EsR0FBeUJBLElBQUlBLG1CQUFZQSxFQUFFQSxDQUFDQTtnQkFNdkRBLENBQUNBO2dCQUpHRCw4Q0FBYUEsR0FBYkEsVUFBY0EsS0FBVUE7b0JBQ3BCRSxLQUFLQSxDQUFDQSxjQUFjQSxFQUFFQSxDQUFDQTtvQkFDdkJBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBLHFCQUFxQkE7Z0JBQy9EQSxDQUFDQTtnQkFOREY7b0JBQUNBLGFBQU1BLEVBQUVBOzttQkFDVEEsMkNBQU9BLFVBQTRDQTtnQkFsQnZEQTtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNUQSxRQUFRQSxFQUFFQSxnQkFBZ0JBO3dCQUMxQkEsUUFBUUEsRUFBRUEsdUxBT1RBO3dCQUNEQSxVQUFVQSxFQUFFQSxDQUFDQSx3QkFBZUEsQ0FBQ0E7cUJBQzlCQSxDQUFDQTs7MkNBYURBO2dCQUFEQSw2QkFBQ0E7WUFBREEsQ0F4QkEsQUF3QkNBLElBQUE7WUF4QkQsMkRBd0JDLENBQUEiLCJmaWxlIjoiYXBwL2N1c3RvbWVycy9maWx0ZXJUZXh0Ym94LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHsgRk9STV9ESVJFQ1RJVkVTIH0gZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZmlsdGVyLXRleHRib3gnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8Zm9ybT5cclxuICAgICAgICAgRmlsdGVyOlxyXG4gICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBcclxuICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwibW9kZWwuZmlsdGVyXCIgXHJcbiAgICAgICAgICAgICAgICAoa2V5dXApPVwiZmlsdGVyQ2hhbmdlZCgkZXZlbnQpXCIgIC8+XHJcbiAgICA8L2Zvcm0+XHJcbiAgYCxcclxuICBkaXJlY3RpdmVzOiBbRk9STV9ESVJFQ1RJVkVTXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmlsdGVyVGV4dGJveENvbXBvbmVudCB7XHJcblxyXG4gIFxyXG4gICAgbW9kZWw6IHsgZmlsdGVyOiBzdHJpbmcgfSA9IHsgZmlsdGVyOiBudWxsIH07XHJcbiAgICBcclxuICAgIEBPdXRwdXQoKVxyXG4gICAgY2hhbmdlZDogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gICAgZmlsdGVyQ2hhbmdlZChldmVudDogYW55KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0aGlzLmNoYW5nZWQuZW1pdCh0aGlzLm1vZGVsLmZpbHRlcik7IC8vUmFpc2UgY2hhbmdlZCBldmVudFxyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
