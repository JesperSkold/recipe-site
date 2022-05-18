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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const category_1 = require("../db/category");
const router = express_1.default.Router();
router.get("/", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categories = yield (0, category_1.getCategories)();
        res.status(200).json(categories);
    }
    catch (err) {
        next(err);
    }
}));
router.get("/:categoryName/recipes", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categoryName = req.params.categoryName;
        if (req.query.search) {
            const searchQuery = req.query.search;
            const recipes = yield (0, category_1.getRecipeByCategoryQuery)(searchQuery, categoryName);
            res.status(200).json(recipes);
        }
        else {
            const recipes = yield (0, category_1.getRecipeByCategoryName)(categoryName);
            res.status(200).json(recipes);
        }
    }
    catch (err) {
        next(err);
    }
}));
exports.default = router;
