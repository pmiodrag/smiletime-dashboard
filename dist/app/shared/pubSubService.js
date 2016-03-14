System.register(['angular2/core'], function(exports_1) {
    var core_1;
    var PubSubService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PubSubService = (function () {
                function PubSubService() {
                }
                PubSubService.emit = function (eventData) {
                    this.eventEmitter.emit({ event: eventData.eventName, data: eventData.data });
                };
                PubSubService.on = function (eventName, callback) {
                    var found;
                    this.eventsList.forEach(function (eventEntry) {
                        if (eventEntry.eventName === eventName) {
                            eventEntry.callbacks.push(callback);
                            found = true;
                        }
                    });
                    if (!found) {
                        this.eventsList.push({ eventName: eventName, callbacks: [callback] });
                    }
                };
                PubSubService.initialize = function () {
                    this.eventEmitter.subscribe(function (eventData) {
                    });
                };
                PubSubService.eventEmitter = new core_1.EventEmitter();
                PubSubService.eventsList = [];
                return PubSubService;
            })();
            exports_1("PubSubService", PubSubService);
            PubSubService.initialize();
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvcHVic3Vic2VydmljZS50cyJdLCJuYW1lcyI6WyJQdWJTdWJTZXJ2aWNlIiwiUHViU3ViU2VydmljZS5jb25zdHJ1Y3RvciIsIlB1YlN1YlNlcnZpY2UuZW1pdCIsIlB1YlN1YlNlcnZpY2Uub24iLCJQdWJTdWJTZXJ2aWNlLmluaXRpYWxpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztZQUVBO2dCQUFBQTtnQkErQkFDLENBQUNBO2dCQTFCUUQsa0JBQUlBLEdBQVhBLFVBQVlBLFNBQThCQTtvQkFDeENFLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLElBQUlBLENBQUNBLEVBQUVBLEtBQUtBLEVBQUVBLFNBQVNBLENBQUNBLFNBQVNBLEVBQUVBLElBQUlBLEVBQUVBLFNBQVNBLENBQUNBLElBQUlBLEVBQUVBLENBQUNBLENBQUNBO2dCQUMvRUEsQ0FBQ0E7Z0JBRU1GLGdCQUFFQSxHQUFUQSxVQUFVQSxTQUFpQkEsRUFBRUEsUUFBa0RBO29CQUN6RUcsSUFBSUEsS0FBY0EsQ0FBQ0E7b0JBQ25CQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxPQUFPQSxDQUFDQSxVQUFDQSxVQUEwQkE7d0JBQ2pEQSxFQUFFQSxDQUFDQSxDQUFDQSxVQUFVQSxDQUFDQSxTQUFTQSxLQUFLQSxTQUFTQSxDQUFDQSxDQUFDQSxDQUFDQTs0QkFDdkNBLFVBQVVBLENBQUNBLFNBQVNBLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLENBQUNBOzRCQUNwQ0EsS0FBS0EsR0FBR0EsSUFBSUEsQ0FBQ0E7d0JBQ2ZBLENBQUNBO29CQUNIQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFFSEEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7d0JBQ1hBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLElBQUlBLENBQUVBLEVBQUVBLFNBQVNBLEVBQUVBLFNBQVNBLEVBQUVBLFNBQVNBLEVBQUVBLENBQUVBLFFBQVFBLENBQUVBLEVBQUVBLENBQUNBLENBQUNBO29CQUMzRUEsQ0FBQ0E7Z0JBR1BBLENBQUNBO2dCQUVNSCx3QkFBVUEsR0FBakJBO29CQUNJSSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxTQUFTQSxDQUFDQSxVQUFDQSxTQUE4QkE7b0JBRTNEQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDUEEsQ0FBQ0E7Z0JBM0JNSiwwQkFBWUEsR0FBc0JBLElBQUlBLG1CQUFZQSxFQUFFQSxDQUFDQTtnQkFDckRBLHdCQUFVQSxHQUEwQkEsRUFBRUEsQ0FBQ0E7Z0JBNEJoREEsb0JBQUNBO1lBQURBLENBL0JBLEFBK0JDQSxJQUFBO1lBL0JELHlDQStCQyxDQUFBO1lBRUQsYUFBYSxDQUFDLFVBQVUsRUFBRSxDQUFDIiwiZmlsZSI6ImFwcC9zaGFyZWQvcHViU3ViU2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFB1YlN1YlNlcnZpY2Uge1xyXG4gIFxyXG4gIHN0YXRpYyBldmVudEVtaXR0ZXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIHN0YXRpYyBldmVudHNMaXN0OiBBcnJheTxJRXZlbnRMaXN0SXRlbT4gPSBbXTtcclxuICBcclxuICBzdGF0aWMgZW1pdChldmVudERhdGE6IElQdWJTdWJTZXJ2aWNlRXZlbnQpIHtcclxuICAgIHRoaXMuZXZlbnRFbWl0dGVyLmVtaXQoeyBldmVudDogZXZlbnREYXRhLmV2ZW50TmFtZSwgZGF0YTogZXZlbnREYXRhLmRhdGEgfSk7XHJcbiAgfVxyXG4gIFxyXG4gIHN0YXRpYyBvbihldmVudE5hbWU6IHN0cmluZywgY2FsbGJhY2s6IChldmVudEluZm86IElQdWJTdWJTZXJ2aWNlRXZlbnQpID0+IHZvaWQpIHsgIFxyXG4gICAgICAgIGxldCBmb3VuZDogYm9vbGVhbjtcclxuICAgICAgICB0aGlzLmV2ZW50c0xpc3QuZm9yRWFjaCgoZXZlbnRFbnRyeTogSUV2ZW50TGlzdEl0ZW0pID0+IHtcclxuICAgICAgICAgIGlmIChldmVudEVudHJ5LmV2ZW50TmFtZSA9PT0gZXZlbnROYW1lKSB7XHJcbiAgICAgICAgICAgIGV2ZW50RW50cnkuY2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xyXG4gICAgICAgICAgICBmb3VuZCA9IHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKCFmb3VuZCkge1xyXG4gICAgICAgICAgdGhpcy5ldmVudHNMaXN0LnB1c2goIHsgZXZlbnROYW1lOiBldmVudE5hbWUsIGNhbGxiYWNrczogWyBjYWxsYmFjayBdIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuXHJcbiAgfVxyXG4gIFxyXG4gIHN0YXRpYyBpbml0aWFsaXplKCkge1xyXG4gICAgICB0aGlzLmV2ZW50RW1pdHRlci5zdWJzY3JpYmUoKGV2ZW50RGF0YTogSVB1YlN1YlNlcnZpY2VFdmVudCkgPT4ge1xyXG5cclxuICAgICAgfSk7XHJcbiAgfVxyXG4gIFxyXG59XHJcblxyXG5QdWJTdWJTZXJ2aWNlLmluaXRpYWxpemUoKTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVB1YlN1YlNlcnZpY2VFdmVudCB7XHJcbiAgZXZlbnROYW1lOiBzdHJpbmc7XHJcbiAgZGF0YTogYW55O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElFdmVudExpc3RJdGVtIHtcclxuICBldmVudE5hbWU6IHN0cmluZztcclxuICBjYWxsYmFja3M6IEFycmF5PCAoZXZlbnRJbmZvOiBJUHViU3ViU2VydmljZUV2ZW50KSA9PiB2b2lkID47XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
