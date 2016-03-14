System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var SortByDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            SortByDirective = (function () {
                function SortByDirective(el) {
                    var _this = this;
                    this.sorted = new core_1.EventEmitter();
                    this.sortProperty = el.nativeElement.getAttribute('sort-by');
                    el.nativeElement.addEventListener('click', function (event) { return _this.elementClicked(event); });
                    this.sorted = new core_1.EventEmitter();
                }
                SortByDirective.prototype.elementClicked = function (event) {
                    event.preventDefault();
                    this.sorted.next(this.sortProperty); //Raise clicked event
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], SortByDirective.prototype, "sorted", void 0);
                SortByDirective = __decorate([
                    core_1.Directive({
                        selector: '[sort-by]'
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], SortByDirective);
                return SortByDirective;
            })();
            exports_1("SortByDirective", SortByDirective);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvZGlyZWN0aXZlcy9zb3J0YnkuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbIlNvcnRCeURpcmVjdGl2ZSIsIlNvcnRCeURpcmVjdGl2ZS5jb25zdHJ1Y3RvciIsIlNvcnRCeURpcmVjdGl2ZS5lbGVtZW50Q2xpY2tlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBRUE7Z0JBVUlBLHlCQUFZQSxFQUFjQTtvQkFWOUJDLGlCQXFCQ0E7b0JBYkFBLFdBQU1BLEdBQXlCQSxJQUFJQSxtQkFBWUEsRUFBRUEsQ0FBQ0E7b0JBRzdDQSxJQUFJQSxDQUFDQSxZQUFZQSxHQUFHQSxFQUFFQSxDQUFDQSxhQUFhQSxDQUFDQSxZQUFZQSxDQUFDQSxTQUFTQSxDQUFDQSxDQUFDQTtvQkFDN0RBLEVBQUVBLENBQUNBLGFBQWFBLENBQUNBLGdCQUFnQkEsQ0FBQ0EsT0FBT0EsRUFBRUEsVUFBQ0EsS0FBVUEsSUFBS0EsT0FBQUEsS0FBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsRUFBMUJBLENBQTBCQSxDQUFDQSxDQUFDQTtvQkFDdkZBLElBQUlBLENBQUNBLE1BQU1BLEdBQUdBLElBQUlBLG1CQUFZQSxFQUFFQSxDQUFDQTtnQkFDbkNBLENBQUNBO2dCQUVERCx3Q0FBY0EsR0FBZEEsVUFBZUEsS0FBVUE7b0JBQ3JCRSxLQUFLQSxDQUFDQSxjQUFjQSxFQUFFQSxDQUFDQTtvQkFDdkJBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLENBQUNBLENBQUNBLHFCQUFxQkE7Z0JBQzlEQSxDQUFDQTtnQkFaSEY7b0JBQUNBLGFBQU1BLEVBQUVBOzttQkFDVkEsbUNBQU1BLFVBQTRDQTtnQkFSbkRBO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1RBLFFBQVFBLEVBQUVBLFdBQVdBO3FCQUN0QkEsQ0FBQ0E7O29DQW1CREE7Z0JBQURBLHNCQUFDQTtZQUFEQSxDQXJCQSxBQXFCQ0EsSUFBQTtZQXJCRCw2Q0FxQkMsQ0FBQSIsImZpbGUiOiJhcHAvc2hhcmVkL2RpcmVjdGl2ZXMvc29ydGJ5LmRpcmVjdGl2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgT3V0cHV0LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW3NvcnQtYnldJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgU29ydEJ5RGlyZWN0aXZlIHtcclxuXHRcclxuXHRzb3J0UHJvcGVydHk6IHN0cmluZztcclxuICBcclxuICBAT3V0cHV0KClcclxuXHRzb3J0ZWQ6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdFxyXG4gICAgY29uc3RydWN0b3IoZWw6IEVsZW1lbnRSZWYpIHtcclxuICAgICAgdGhpcy5zb3J0UHJvcGVydHkgPSBlbC5uYXRpdmVFbGVtZW50LmdldEF0dHJpYnV0ZSgnc29ydC1ieScpO1xyXG4gICAgICBlbC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50OiBhbnkpID0+IHRoaXMuZWxlbWVudENsaWNrZWQoZXZlbnQpKTtcclxuICAgICAgdGhpcy5zb3J0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZWxlbWVudENsaWNrZWQoZXZlbnQ6IGFueSkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy5zb3J0ZWQubmV4dCh0aGlzLnNvcnRQcm9wZXJ0eSk7IC8vUmFpc2UgY2xpY2tlZCBldmVudFxyXG4gICAgfVxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
