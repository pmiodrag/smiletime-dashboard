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
    var TrimPipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TrimPipe = (function () {
                function TrimPipe() {
                }
                TrimPipe.prototype.transform = function (value) {
                    if (!value) {
                        return '';
                    }
                    return value.trim();
                };
                TrimPipe = __decorate([
                    core_1.Pipe({ name: 'trim' }), 
                    __metadata('design:paramtypes', [])
                ], TrimPipe);
                return TrimPipe;
            })();
            exports_1("TrimPipe", TrimPipe);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvcGlwZXMvdHJpbS5waXBlLnRzIl0sIm5hbWVzIjpbIlRyaW1QaXBlIiwiVHJpbVBpcGUuY29uc3RydWN0b3IiLCJUcmltUGlwZS50cmFuc2Zvcm0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUVBO2dCQUFBQTtnQkFRQUMsQ0FBQ0E7Z0JBTkNELDRCQUFTQSxHQUFUQSxVQUFVQSxLQUFVQTtvQkFDbEJFLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBO3dCQUNYQSxNQUFNQSxDQUFDQSxFQUFFQSxDQUFDQTtvQkFDWkEsQ0FBQ0E7b0JBQ0RBLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBLElBQUlBLEVBQUVBLENBQUNBO2dCQUN0QkEsQ0FBQ0E7Z0JBUEhGO29CQUFDQSxXQUFJQSxDQUFDQSxFQUFDQSxJQUFJQSxFQUFFQSxNQUFNQSxFQUFDQSxDQUFDQTs7NkJBUXBCQTtnQkFBREEsZUFBQ0E7WUFBREEsQ0FSQSxBQVFDQSxJQUFBO1lBUkQsK0JBUUMsQ0FBQSIsImZpbGUiOiJhcHAvc2hhcmVkL3BpcGVzL3RyaW0ucGlwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGlwZSwgUGlwZVRyYW5zZm9ybX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcblxyXG5AUGlwZSh7bmFtZTogJ3RyaW0nfSlcclxuZXhwb3J0IGNsYXNzIFRyaW1QaXBlIHtcclxuICB0cmFuc2Zvcm0odmFsdWU6IGFueSkge1xyXG4gICAgaWYgKCF2YWx1ZSkge1xyXG4gICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdmFsdWUudHJpbSgpO1xyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
