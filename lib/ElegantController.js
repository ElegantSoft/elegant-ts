"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = require("./helpers");
var ElegantController = /** @class */ (function () {
    function ElegantController(model, label) {
        this.model = model;
        this.label = label;
    }
    /**
     * Make Pagination for Model
     * @param {req} Request
     * @param {res} Response
     */
    ElegantController.prototype.paginate = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var limit, page, data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        limit = parseInt(req.query.limit) || 10;
                        page = parseInt(req.query.page) || 1;
                        return [4 /*yield*/, helpers_1.elegantPaginate(this.model, {}, page, limit, { createdAt: -1 }, [], this.paginationSelectedItems || {})];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, res.status(200).json(data)];
                    case 2:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [2 /*return*/, res.json({ error: error_1 })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Create new Model
     * @param {req} Request
     * @param {res} Response
     */
    ElegantController.prototype.create = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var newModel, createdModel, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        newModel = req.body.newModel;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.model.create(newModel)];
                    case 2:
                        createdModel = _a.sent();
                        return [2 /*return*/, res.status(200).json({ message: "created2", model: createdModel })];
                    case 3:
                        error_2 = _a.sent();
                        console.log(error_2);
                        return [2 /*return*/, res.json({ error: error_2 })];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Edit Model
     * @param {req} Request
     * @param {res} Response
     */
    ElegantController.prototype.edit = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var newModel, updatedModel, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        newModel = req.body.newModel;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.model.findByIdAndUpdate(newModel._id, newModel)];
                    case 2:
                        updatedModel = _a.sent();
                        return [2 /*return*/, res
                                .status(200)
                                .json({ message: "updated", newModel: updatedModel })];
                    case 3:
                        err_1 = _a.sent();
                        console.log(err_1);
                        return [2 /*return*/, res.status(500).json({ err: err_1 })];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * show Model by Id
     * @param {req} Request
     * @param {res} Response
     */
    ElegantController.prototype.show = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, model, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.model.findById(id)];
                    case 2:
                        model = _a.sent();
                        return [2 /*return*/, res.json({ model: model })];
                    case 3:
                        error_3 = _a.sent();
                        return [2 /*return*/, res.status(404).json({ message: "not found" })];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * remove Model by Id
     * @param {req} Request
     * @param {res} Response
     */
    ElegantController.prototype.remove = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.model.findOneAndDelete(id)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, res.status(200).json({ message: "deleted" })];
                    case 3:
                        error_4 = _a.sent();
                        return [2 /*return*/, res.status(404).json({ message: "not found" })];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ElegantController.prototype.renderCreatePage = function (req, res) {
        var title = "انشاء ";
        res.render("admin/" + this.label + "/create", { title: title });
    };
    ElegantController.prototype.renderAdminIndex = function (req, res) {
        var title = "الكل";
        return res.render("admin/" + this.label + "/index", { title: title });
    };
    ElegantController.prototype.renderAdminEdit = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, oldModel, title;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        return [4 /*yield*/, this.model.findById(id)];
                    case 1:
                        oldModel = _a.sent();
                        title = "تعديل";
                        res.render("admin/" + this.label + "/edit", {
                            title: title,
                            oldModel: JSON.stringify(oldModel)
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    return ElegantController;
}());
exports.ElegantController = ElegantController;
exports.default = ElegantController;
//# sourceMappingURL=ElegantController.js.map