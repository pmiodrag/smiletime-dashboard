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
    var Alerts;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            Alerts = (function () {
                function Alerts() {
                    this.alerts = [{
                            type: 'success',
                            msg: 'Thanks for visiting! Feel free to create pull requests to improve the dashboard!'
                        }, {
                            type: 'danger',
                            msg: 'Found a bug? Create an issue with as many details as you can.'
                        }];
                }
                Alerts.prototype.addAlert = function () {
                    this.alerts.push({
                        msg: 'Another alert!'
                    });
                };
                Alerts.prototype.closeAlert = function (index) {
                    this.alerts.splice(index, 1);
                };
                Alerts = __decorate([
                    core_1.Component({
                        selector: 'alerts'
                    }),
                    core_1.View({
                        templateUrl: 'app/components/alerts/alerts.html',
                        directives: [common_1.CORE_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], Alerts);
                return Alerts;
            })();
            exports_1("Alerts", Alerts);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FsZXJ0cy9hbGVydHMudHMiXSwibmFtZXMiOlsiQWxlcnRzIiwiQWxlcnRzLmNvbnN0cnVjdG9yIiwiQWxlcnRzLmFkZEFsZXJ0IiwiQWxlcnRzLmNsb3NlQWxlcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUVBO2dCQUFBQTtvQkFTRUMsV0FBTUEsR0FBU0EsQ0FBQ0E7NEJBQ2RBLElBQUlBLEVBQUVBLFNBQVNBOzRCQUNmQSxHQUFHQSxFQUFFQSxrRkFBa0ZBO3lCQUN4RkEsRUFBRUE7NEJBQ0RBLElBQUlBLEVBQUVBLFFBQVFBOzRCQUNkQSxHQUFHQSxFQUFFQSwrREFBK0RBO3lCQUNyRUEsQ0FBQ0EsQ0FBQ0E7Z0JBV0xBLENBQUNBO2dCQVRDRCx5QkFBUUEsR0FBUkE7b0JBQ0VFLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBO3dCQUNmQSxHQUFHQSxFQUFFQSxnQkFBZ0JBO3FCQUN0QkEsQ0FBQ0EsQ0FBQ0E7Z0JBQ0xBLENBQUNBO2dCQUVERiwyQkFBVUEsR0FBVkEsVUFBV0EsS0FBS0E7b0JBQ2RHLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLE1BQU1BLENBQUNBLEtBQUtBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBO2dCQUMvQkEsQ0FBQ0E7Z0JBekJISDtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNUQSxRQUFRQSxFQUFFQSxRQUFRQTtxQkFDbkJBLENBQUNBO29CQUNEQSxXQUFJQSxDQUFDQTt3QkFDSkEsV0FBV0EsRUFBRUEsbUNBQW1DQTt3QkFDaERBLFVBQVVBLEVBQUVBLENBQUNBLHdCQUFlQSxDQUFDQTtxQkFDOUJBLENBQUNBOzsyQkFvQkRBO2dCQUFEQSxhQUFDQTtZQUFEQSxDQTFCQSxBQTBCQ0EsSUFBQTtZQTFCRCwyQkEwQkMsQ0FBQSIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9hbGVydHMvYWxlcnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIFZpZXd9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge0NPUkVfRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhbGVydHMnXHJcbn0pXHJcbkBWaWV3KHtcclxuICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL2FsZXJ0cy9hbGVydHMuaHRtbCcsXHJcbiAgZGlyZWN0aXZlczogW0NPUkVfRElSRUNUSVZFU11cclxufSlcclxuZXhwb3J0IGNsYXNzIEFsZXJ0cyB7XHJcblxyXG4gIGFsZXJ0czphbnlbXSA9IFt7XHJcbiAgICB0eXBlOiAnc3VjY2VzcycsXHJcbiAgICBtc2c6ICdUaGFua3MgZm9yIHZpc2l0aW5nISBGZWVsIGZyZWUgdG8gY3JlYXRlIHB1bGwgcmVxdWVzdHMgdG8gaW1wcm92ZSB0aGUgZGFzaGJvYXJkISdcclxuICB9LCB7XHJcbiAgICB0eXBlOiAnZGFuZ2VyJyxcclxuICAgIG1zZzogJ0ZvdW5kIGEgYnVnPyBDcmVhdGUgYW4gaXNzdWUgd2l0aCBhcyBtYW55IGRldGFpbHMgYXMgeW91IGNhbi4nXHJcbiAgfV07XHJcblxyXG4gIGFkZEFsZXJ0KCkge1xyXG4gICAgdGhpcy5hbGVydHMucHVzaCh7XHJcbiAgICAgIG1zZzogJ0Fub3RoZXIgYWxlcnQhJ1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjbG9zZUFsZXJ0KGluZGV4KSB7XHJcbiAgICB0aGlzLmFsZXJ0cy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
