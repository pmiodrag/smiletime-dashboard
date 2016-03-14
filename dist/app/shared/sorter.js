System.register([], function(exports_1) {
    var Sorter;
    return {
        setters:[],
        execute: function() {
            Sorter = (function () {
                function Sorter() {
                    this.property = null;
                    this.direction = 1;
                }
                Sorter.prototype.sort = function (collection, prop) {
                    var _this = this;
                    this.property = prop;
                    this.direction = (this.property === prop) ? this.direction * -1 : 1;
                    collection.sort(function (a, b) {
                        var aVal;
                        var bVal;
                        //Handle resolving complex properties such as 'state.name' for prop value
                        if (prop && prop.indexOf('.')) {
                            aVal = _this.resolveProperty(prop, a);
                            bVal = _this.resolveProperty(prop, b);
                        }
                        else {
                            aVal = a[prop];
                            bVal = b[prop];
                        }
                        //Fix issues that spaces before/after string value can cause such as ' San Francisco'
                        if (_this.isString(aVal))
                            aVal = aVal.trim();
                        if (_this.isString(bVal))
                            bVal = bVal.trim();
                        if (aVal === bVal) {
                            return 0;
                        }
                        else if (aVal > bVal) {
                            return _this.direction * -1;
                        }
                        else {
                            return _this.direction * 1;
                        }
                    });
                };
                Sorter.prototype.isString = function (val) {
                    return (val && (typeof val === 'string' || val instanceof String));
                };
                Sorter.prototype.resolveProperty = function (path, obj) {
                    return path.split('.').reduce(function (prev, curr) {
                        return (prev ? prev[curr] : undefined);
                    }, obj || self);
                };
                return Sorter;
            })();
            exports_1("Sorter", Sorter);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc29ydGVyLnRzIl0sIm5hbWVzIjpbIlNvcnRlciIsIlNvcnRlci5jb25zdHJ1Y3RvciIsIlNvcnRlci5zb3J0IiwiU29ydGVyLmlzU3RyaW5nIiwiU29ydGVyLnJlc29sdmVQcm9wZXJ0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7WUFBQTtnQkFBQUE7b0JBRUNDLGFBQVFBLEdBQVdBLElBQUlBLENBQUNBO29CQUN4QkEsY0FBU0EsR0FBV0EsQ0FBQ0EsQ0FBQ0E7Z0JBOEN2QkEsQ0FBQ0E7Z0JBNUNHRCxxQkFBSUEsR0FBSkEsVUFBS0EsVUFBaUJBLEVBQUVBLElBQVNBO29CQUFqQ0UsaUJBZ0NDQTtvQkEvQkdBLElBQUlBLENBQUNBLFFBQVFBLEdBQUdBLElBQUlBLENBQUNBO29CQUNyQkEsSUFBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsS0FBS0EsSUFBSUEsQ0FBQ0EsR0FBR0EsSUFBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7b0JBRXBFQSxVQUFVQSxDQUFDQSxJQUFJQSxDQUFDQSxVQUFDQSxDQUFNQSxFQUFDQSxDQUFNQTt3QkFDMUJBLElBQUlBLElBQVNBLENBQUNBO3dCQUNkQSxJQUFJQSxJQUFTQSxDQUFDQTt3QkFFZEEseUVBQXlFQTt3QkFDekVBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLElBQUlBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBLENBQUNBOzRCQUM5QkEsSUFBSUEsR0FBR0EsS0FBSUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsSUFBSUEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7NEJBQ3JDQSxJQUFJQSxHQUFHQSxLQUFJQSxDQUFDQSxlQUFlQSxDQUFDQSxJQUFJQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQTt3QkFDdkNBLENBQUNBO3dCQUNEQSxJQUFJQSxDQUFDQSxDQUFDQTs0QkFDSkEsSUFBSUEsR0FBR0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7NEJBQ2ZBLElBQUlBLEdBQUdBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO3dCQUNqQkEsQ0FBQ0E7d0JBRURBLHFGQUFxRkE7d0JBQ3JGQSxFQUFFQSxDQUFDQSxDQUFDQSxLQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTs0QkFBQ0EsSUFBSUEsR0FBR0EsSUFBSUEsQ0FBQ0EsSUFBSUEsRUFBRUEsQ0FBQ0E7d0JBQzVDQSxFQUFFQSxDQUFDQSxDQUFDQSxLQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTs0QkFBQ0EsSUFBSUEsR0FBR0EsSUFBSUEsQ0FBQ0EsSUFBSUEsRUFBRUEsQ0FBQ0E7d0JBRTVDQSxFQUFFQSxDQUFBQSxDQUFDQSxJQUFJQSxLQUFLQSxJQUFJQSxDQUFDQSxDQUFBQSxDQUFDQTs0QkFDZEEsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7d0JBQ2JBLENBQUNBO3dCQUNEQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxHQUFHQSxJQUFJQSxDQUFDQSxDQUFBQSxDQUFDQTs0QkFDbEJBLE1BQU1BLENBQUNBLEtBQUlBLENBQUNBLFNBQVNBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBO3dCQUMvQkEsQ0FBQ0E7d0JBQ0RBLElBQUlBLENBQUNBLENBQUNBOzRCQUNGQSxNQUFNQSxDQUFDQSxLQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxDQUFDQSxDQUFDQTt3QkFDOUJBLENBQUNBO29CQUNMQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDUEEsQ0FBQ0E7Z0JBRURGLHlCQUFRQSxHQUFSQSxVQUFTQSxHQUFRQTtvQkFDZkcsTUFBTUEsQ0FBQ0EsQ0FBQ0EsR0FBR0EsSUFBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsS0FBS0EsUUFBUUEsSUFBSUEsR0FBR0EsWUFBWUEsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3JFQSxDQUFDQTtnQkFFREgsZ0NBQWVBLEdBQWZBLFVBQWdCQSxJQUFZQSxFQUFFQSxHQUFRQTtvQkFDcENJLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLE1BQU1BLENBQUNBLFVBQVNBLElBQUlBLEVBQUVBLElBQUlBO3dCQUM3QyxNQUFNLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFBO29CQUMxQyxDQUFDLEVBQUVBLEdBQUdBLElBQUlBLElBQUlBLENBQUNBLENBQUFBO2dCQUNqQkEsQ0FBQ0E7Z0JBRUxKLGFBQUNBO1lBQURBLENBakRBLEFBaURDQSxJQUFBO1lBakRELDJCQWlEQyxDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvc29ydGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFNvcnRlciB7XHJcblxyXG5cdHByb3BlcnR5OiBzdHJpbmcgPSBudWxsO1xyXG5cdGRpcmVjdGlvbjogbnVtYmVyID0gMTtcclxuXHJcbiAgICBzb3J0KGNvbGxlY3Rpb246IGFueVtdLCBwcm9wOiBhbnkpIHtcclxuICAgICAgICB0aGlzLnByb3BlcnR5ID0gcHJvcDtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9ICh0aGlzLnByb3BlcnR5ID09PSBwcm9wKSA/IHRoaXMuZGlyZWN0aW9uICogLTEgOiAxO1xyXG5cclxuICAgICAgICBjb2xsZWN0aW9uLnNvcnQoKGE6IGFueSxiOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgbGV0IGFWYWw6IGFueTtcclxuICAgICAgICAgICAgbGV0IGJWYWw6IGFueTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vSGFuZGxlIHJlc29sdmluZyBjb21wbGV4IHByb3BlcnRpZXMgc3VjaCBhcyAnc3RhdGUubmFtZScgZm9yIHByb3AgdmFsdWVcclxuICAgICAgICAgICAgaWYgKHByb3AgJiYgcHJvcC5pbmRleE9mKCcuJykpIHtcclxuICAgICAgICAgICAgICBhVmFsID0gdGhpcy5yZXNvbHZlUHJvcGVydHkocHJvcCwgYSk7XHJcbiAgICAgICAgICAgICAgYlZhbCA9IHRoaXMucmVzb2x2ZVByb3BlcnR5KHByb3AsIGIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgeyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIGFWYWwgPSBhW3Byb3BdO1xyXG4gICAgICAgICAgICAgIGJWYWwgPSBiW3Byb3BdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvL0ZpeCBpc3N1ZXMgdGhhdCBzcGFjZXMgYmVmb3JlL2FmdGVyIHN0cmluZyB2YWx1ZSBjYW4gY2F1c2Ugc3VjaCBhcyAnIFNhbiBGcmFuY2lzY28nXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzU3RyaW5nKGFWYWwpKSBhVmFsID0gYVZhbC50cmltKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzU3RyaW5nKGJWYWwpKSBiVmFsID0gYlZhbC50cmltKCk7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgaWYoYVZhbCA9PT0gYlZhbCl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChhVmFsID4gYlZhbCl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5kaXJlY3Rpb24gKiAtMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmRpcmVjdGlvbiAqIDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaXNTdHJpbmcodmFsOiBhbnkpIDogYm9vbGVhbiB7XHJcbiAgICAgIHJldHVybiAodmFsICYmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJyB8fCB2YWwgaW5zdGFuY2VvZiBTdHJpbmcpKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmVzb2x2ZVByb3BlcnR5KHBhdGg6IHN0cmluZywgb2JqOiBhbnkpIHtcclxuICAgICAgcmV0dXJuIHBhdGguc3BsaXQoJy4nKS5yZWR1Y2UoZnVuY3Rpb24ocHJldiwgY3Vycikge1xyXG4gICAgICAgICAgcmV0dXJuIChwcmV2ID8gcHJldltjdXJyXSA6IHVuZGVmaW5lZClcclxuICAgICAgfSwgb2JqIHx8IHNlbGYpXHJcbiAgICB9XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
