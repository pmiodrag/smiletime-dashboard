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
    var CapitalizePipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            CapitalizePipe = (function () {
                function CapitalizePipe() {
                }
                CapitalizePipe.prototype.transform = function (value) {
                    if (value) {
                        return value.charAt(0).toUpperCase() + value.slice(1);
                    }
                    return value;
                };
                CapitalizePipe = __decorate([
                    core_1.Pipe({ name: 'capitalize' }), 
                    __metadata('design:paramtypes', [])
                ], CapitalizePipe);
                return CapitalizePipe;
            })();
            exports_1("CapitalizePipe", CapitalizePipe);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvcGlwZXMvY2FwaXRhbGl6ZS5waXBlLnRzIl0sIm5hbWVzIjpbIkNhcGl0YWxpemVQaXBlIiwiQ2FwaXRhbGl6ZVBpcGUuY29uc3RydWN0b3IiLCJDYXBpdGFsaXplUGlwZS50cmFuc2Zvcm0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUVBO2dCQUFBQTtnQkFVQUMsQ0FBQ0E7Z0JBUENELGtDQUFTQSxHQUFUQSxVQUFVQSxLQUFVQTtvQkFDbkJFLEVBQUVBLENBQUNBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBO3dCQUNSQSxNQUFNQSxDQUFDQSxLQUFLQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxXQUFXQSxFQUFFQSxHQUFHQSxLQUFLQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFDMURBLENBQUNBO29CQUNEQSxNQUFNQSxDQUFDQSxLQUFLQSxDQUFDQTtnQkFDZEEsQ0FBQ0E7Z0JBUkhGO29CQUFDQSxXQUFJQSxDQUFDQSxFQUFFQSxJQUFJQSxFQUFFQSxZQUFZQSxFQUFFQSxDQUFDQTs7bUNBVTVCQTtnQkFBREEscUJBQUNBO1lBQURBLENBVkEsQUFVQ0EsSUFBQTtZQVZELDJDQVVDLENBQUEiLCJmaWxlIjoiYXBwL3NoYXJlZC9waXBlcy9jYXBpdGFsaXplLnBpcGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlIH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICdjYXBpdGFsaXplJyB9KVxyXG5leHBvcnQgY2xhc3MgQ2FwaXRhbGl6ZVBpcGUge1xyXG5cclxuICB0cmFuc2Zvcm0odmFsdWU6IGFueSkge1xyXG5cdCAgaWYgKHZhbHVlKSB7XHJcbiAgICAgIFx0cmV0dXJuIHZhbHVlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdmFsdWUuc2xpY2UoMSk7XHJcblx0ICB9XHJcblx0ICByZXR1cm4gdmFsdWU7XHJcbiAgfVxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
