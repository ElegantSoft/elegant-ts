"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var methods;
(function (methods) {
    methods["get"] = "get";
    methods["post"] = "post";
    methods["put"] = "put";
    methods["delete"] = "delete";
})(methods || (methods = {}));
var ElegantRouter = /** @class */ (function () {
    function ElegantRouter(Controller, registeredRoutes) {
        var _this = this;
        this.routes = function () {
            return _this.router;
        };
        this.registerGet = function (path) {
            var _a;
            var handlers = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                handlers[_i - 1] = arguments[_i];
            }
            (_a = _this.router).get.apply(_a, __spreadArrays([path], handlers));
        };
        this.registerPost = function (path) {
            var _a;
            var handlers = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                handlers[_i - 1] = arguments[_i];
            }
            (_a = _this.router).post.apply(_a, __spreadArrays([path], handlers));
        };
        this.registerPut = function (path) {
            var _a;
            var handlers = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                handlers[_i - 1] = arguments[_i];
            }
            (_a = _this.router).put.apply(_a, __spreadArrays([path], handlers));
        };
        this.registerDelete = function (path) {
            var _a;
            var handlers = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                handlers[_i - 1] = arguments[_i];
            }
            (_a = _this.router).delete.apply(_a, __spreadArrays([path], handlers));
        };
        this.router = express_1.Router();
        console.log(registeredRoutes);
        if (registeredRoutes) {
            registeredRoutes.forEach(function (rr) {
                switch (rr.method) {
                    case methods.get:
                        _this.registerGet.apply(_this, __spreadArrays([rr.path], rr.handlers));
                        break;
                    case methods.put:
                        _this.registerPut.apply(_this, __spreadArrays([rr.path], rr.handlers));
                        break;
                    case methods.post:
                        _this.registerPost.apply(_this, __spreadArrays([rr.path], rr.handlers));
                        break;
                    case methods.delete:
                        _this.registerDelete.apply(_this, __spreadArrays([rr.path], rr.handlers));
                        break;
                    default:
                        break;
                }
            });
        }
        this.router.get("/", Controller.renderAdminIndex);
        this.router.get("/create", Controller.renderCreatePage);
        this.router.get("/edit/:id", Controller.renderAdminEdit);
        this.router.get("/paginate", Controller.paginate);
        this.router.get("/:id", Controller.show);
        this.router.post("/", Controller.create);
        this.router.put("/:id", Controller.edit);
        this.router.delete("/:id", Controller.remove);
    }
    return ElegantRouter;
}());
exports.default = ElegantRouter;
//# sourceMappingURL=ElegantRouter.js.map